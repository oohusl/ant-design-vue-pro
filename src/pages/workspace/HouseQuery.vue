<template>
  <page-header-wrapper>
    <div>
      <BackTop></BackTop>
    </div>
    <a-layout class="house-query">
      <a-layout-header :style="{ padding: 0 }">
        <div class="house-query-search-holder">
          <AutoComplete
            class="house-query-search"
            dropdown-class-name="house-query-search-dropdown"
            :dropdown-match-select-width="false"
            :dropdown-style="{ width: '552px' }"
            size="large"
            style="width: 100%"
            placeholder="请输入楼盘名开始找房"
            option-label-prop="value"
            v-model="queryParam.communityName"
          >
            <a-input>
              <a-button
                slot="suffix"
                style="margin-right: -12px"
                class="search-btn"
                size="large"
                type="primary"
                @click="search"
              >
                <a-icon type="search" />
              </a-button>
            </a-input>
          </AutoComplete>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ background: '#ffffff', padding: '0 128px' }">
        <a-form :label-col="{ span: 2 }" :wrapper-col="{ span: 22 }" style="margin-top: 10px">
          <a-form-item label="区域板块">
            <a-checkbox-group v-model="queryParam.area" size="small" @change="areaChange">
              <a-popover v-for="options in areaOptions" :key="options.value" trigger="hover" placement="topLeft">
                <template slot="content">
                  <a-checkbox-group v-model="plates[options.value]" @change="plateChange(options)" >
                    <a-row :span="32">
                      <a-col v-for="plateOption in getPlate(options.value)" :span="4" :key="plateOption.value">
                        <a-checkbox :value="plateOption.value" :indeterminate="queryParam.area && queryParam.area.indexOf(options.value) >= 0">{{
                          plateOption.label
                        }}</a-checkbox>
                      </a-col>
                    </a-row>
                  </a-checkbox-group>
                </template>
                <a-checkbox :value="options.value" :indeterminate="plates[options.value] && plates[options.value].length > 0" :checked="true">{{ options.label }}</a-checkbox>
              </a-popover>
            </a-checkbox-group>
            <a-tag v-for="p in queryParam.area" :key="p" color="pink">{{ p }}</a-tag>
            <template v-for="(value, key) in plates">
              <a-tag v-for="p in value" :key="p">{{ key + '-' + p }}</a-tag>
            </template>
          </a-form-item>
          <a-form-item label="地铁线路">
            <a-checkbox-group v-model="queryParam.metroLine" style="width: 100%">
              <template v-for="i in Math.ceil(metroLineOptions.length / 8)">
                <a-row :key="i" style="width: 100%">
                  <a-col :span="3" v-for="j in 8" :key="j">
                    <a-popover
                      trigger="hover"
                      placement="topLeft"
                      v-if="(i - 1) * 8 + j - 1 < metroLineOptions.length - 1"
                    >
                      <template slot="content">
                        <a-checkbox-group
                          v-model="subwayStations[metroLineOptions[(i - 1) * 8 + j - 1].value]"
                          @change="subwayStationChange(metroLineOptions[(i - 1) * 8 + j - 1].value)"
                        >
                          <a-row :span="30">
                            <template
                              v-for="(subwayStation) in getSubwayStation(metroLineOptions[(i - 1) * 8 + j - 1].value)"
                            >
                              <a-col :span="3" :key="subwayStation">
                                <a-checkbox :value="subwayStation" :key="subwayStation" :indeterminate="queryParam.metroLine.indexOf(metroLineOptions[(i - 1) * 8 + j - 1].value) >= 0">{{ subwayStation }}</a-checkbox>
                              </a-col>
                            </template>
                          </a-row>
                        </a-checkbox-group>
                      </template>
                      <a-checkbox :value="metroLineOptions[(i - 1) * 8 + j - 1].value" @change="metroLineChange" :indeterminate="subwayStations[metroLineOptions[(i - 1) * 8 + j - 1].value] != null && subwayStations[metroLineOptions[(i - 1) * 8 + j - 1].value].length > 0">{{
                        metroLineOptions[(i - 1) * 8 + j - 1].label
                      }}</a-checkbox>
                    </a-popover>
                  </a-col>
                </a-row>
              </template>
            </a-checkbox-group>
            <a-tag v-for="ss in queryParam.metroLine" :key="ss" color="pink">{{ ss }}号线</a-tag>
            <a-tag v-for="ss in queryParam.subwayStation" :key="ss">{{ ss }}</a-tag>
          </a-form-item>
          <a-form-item label="环线">
            <a-checkbox-group v-model="queryParam.loopSummary" :options="loopSummaryOptions"> </a-checkbox-group>
          </a-form-item>
          <a-form-item label="学校" v-if="advanced">
            <a-form-item :style="{ display: 'inline-block', width: '160px', 'margin-right': '20px' }">
              <a-select
                v-model="queryParam.schoolName"
                size="small"
                placeholder="请选中配套学校"
                :options="schools"
                :showSearch="true"
                :allowClear="true"
                :maxTagCount="0"
                mode="multiple"
                :showArrow="true"
              />
            </a-form-item>
            <a-checkbox-group v-model="queryParam.schoolType" @change="schoolTypeChange">
              <template v-for="options in shoolType">
                <a-popover :key="options.type" trigger="hover" placement="topLeft" v-if="options.echelon">
                  <template slot="content">
                    <a-checkbox-group v-model="echelons[options.type]" @change="echelonChange(options.type)">
                      <a-row>
                        <a-col v-for="e in options.echelon" :key="e.value">
                          <a-checkbox :value="e.value" :indeterminate="queryParam.schoolType && queryParam.schoolType.indexOf(options.type) >= 0">{{
                            e.label
                          }}</a-checkbox>
                        </a-col>
                      </a-row>
                    </a-checkbox-group>
                  </template>
                  <a-checkbox :value="options.type" :indeterminate="echelons[options.type] && echelons[options.type].length > 0">{{ options.type }}</a-checkbox>
                </a-popover>
                <a-checkbox :key="options.type" v-else :value="options.type">{{ options.type }}</a-checkbox>
              </template>
            </a-checkbox-group>
            <div>
              <a-tag v-for="p in queryParam.schoolName" :key="p">{{ p }}</a-tag>
              <a-tag v-for="p in queryParam.schoolType" :key="p">{{ p }}</a-tag>
              <template v-for="echelon in echelons">
                <a-tag v-for="p in echelon" :key="p">{{ p }}</a-tag>
              </template>
            </div>
          </a-form-item>
          <a-form-item label="户型" v-if="advanced">
            <a-checkbox-group v-model="queryParam.roomType">
              <a-checkbox value="1"> 一房 </a-checkbox>
              <a-checkbox value="2"> 二房 </a-checkbox>
              <a-checkbox value="3"> 三房 </a-checkbox>
              <a-checkbox value="4"> 其他 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="单价" v-if="advanced">
            <a-select
              style="width: 120px"
              v-model="queryParam.averageLlistedPrice"
              size="small"
              placeholder="选择单价区间"
              :options="averageLlistedPriceOptions"
              :showSearch="true"
              :allowClear="true"
              :maxTagCount="0"
              mode="multiple"
              :showArrow="true"
            />
            <a-form-item :style="{ display: 'inline-block', width: '60px', 'margin-left': '20px' }">
              <a-input style="width: 100%" v-model="queryParam.averageLlistedPriceMin" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '10px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '114px', 'margin-right': '20px'}">
              <a-input style="width: 100%" v-model="queryParam.averageLlistedPriceMax" size="small" suffix="万">
                <a-icon slot="addonAfter" type="plus" aria-disabled="true" @click="addAveragePrice(queryParam.ranges.price, queryParam.averageLlistedPriceMin, queryParam.averageLlistedPriceMax)"/>
              </a-input>
            </a-form-item>
            <a-tag v-for="avePrice in gatherSelect(queryParam.averageLlistedPrice, queryParam.ranges.price)" :key="avePrice" :closable="true" @close="handleTagClose(queryParam.averageLlistedPrice, queryParam.ranges.price, avePrice)" color="pink">{{ translateRang(avePrice, '万') }}</a-tag>
          </a-form-item>

          <a-form-item label="总价" v-if="advanced">
            <a-select
              style="width: 120px"
              v-model="queryParam.totalPrice"
              size="small"
              placeholder="选择总价区间"
              :options="totalPriceOptions"
              :showSearch="true"
              :allowClear="true"
              :maxTagCount="0"
              mode="multiple"
              :showArrow="true"
            />
            <a-form-item :style="{ display: 'inline-block', width: '60px', 'margin-left': '20px' }">
              <a-input style="width: 100%" v-model="queryParam.totalPriceMin" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '10px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '114px', 'margin-right': '20px'}">
              <a-input style="width: 100%" v-model="queryParam.totalPriceMax" size="small" suffix="万">
                <a-icon slot="addonAfter" type="plus" aria-disabled="true" @click="addAveragePrice(queryParam.ranges.total, queryParam.totalPriceMin, queryParam.totalPriceMax)"/>
              </a-input>
            </a-form-item>
            <a-tag v-for="avePrice in gatherSelect(queryParam.totalPrice, queryParam.ranges.total)" :key="avePrice" :closable="true" @close="handleTagClose(queryParam.totalPrice, queryParam.ranges.total, avePrice)" color="pink">{{ translateRang(avePrice, '万') }}</a-tag>
          </a-form-item>
          <a-form-item label="面积" v-if="advanced">
            <a-select
              style="width: 120px"
              v-model="queryParam.roomArea"
              size="small"
              placeholder="选择面积区间"
              :options="roomAreaOptions"
              :showSearch="true"
              :allowClear="true"
              :maxTagCount="0"
              mode="multiple"
              :showArrow="true"
            />
            <a-form-item :style="{ display: 'inline-block', width: '60px', 'margin-left': '20px' }">
              <a-input style="width: 100%" v-model="queryParam.roomAreaMin" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '10px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '114px', 'margin-right': '20px'}">
              <a-input style="width: 100%" v-model="queryParam.roomAreaMax" size="small" suffix="m²">
                <a-icon slot="addonAfter" type="plus" aria-disabled="true" @click="addAveragePrice(queryParam.ranges.roomArea, queryParam.roomAreaMin, queryParam.roomAreaMax)"/>
              </a-input>
            </a-form-item>
            <a-tag v-for="avePrice in gatherSelect(queryParam.roomArea, queryParam.ranges.roomArea)" :key="avePrice" :closable="true" @close="handleTagClose(queryParam.roomArea, queryParam.ranges.roomArea, avePrice)" color="pink">{{ translateRang(avePrice, '万') }}</a-tag>
          </a-form-item>
          <a-form-item label="建筑年代" v-if="advanced">
            <a-select
              style="width: 120px"
              v-model="queryParam.constructionAge"
              size="small"
              placeholder="选择建筑年代"
              :options="constructionAgeOptions"
              :showSearch="true"
              :allowClear="true"
              :maxTagCount="0"
              mode="multiple"
              :showArrow="true"
            />
            <a-form-item :style="{ display: 'inline-block', width: '60px', 'margin-left': '20px' }">
              <a-input style="width: 100%" v-model="queryParam.constructionAgeMin" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '10px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '114px', 'margin-right': '20px'}">
              <a-input style="width: 100%" v-model="queryParam.constructionAgeMax" size="small" suffix="年">
                <a-icon slot="addonAfter" type="plus" aria-disabled="true" @click="addAveragePrice(queryParam.ranges.constructionAge, queryParam.constructionAgeMin, queryParam.constructionAgeMax)"/>
              </a-input>
            </a-form-item>
            <a-tag v-for="avePrice in gatherSelect(queryParam.constructionAge, queryParam.ranges.constructionAge)" :key="avePrice" :closable="true" @close="handleTagClose(queryParam.constructionAge, queryParam.ranges.constructionAge, avePrice)" color="pink">{{ translateYearRang(avePrice, '年') }}</a-tag>
          </a-form-item>
          <a-form-item v-if="advanced" label="小区属性">
            <a-checkbox-group v-model="queryParam.cellAttributes">
              <a-checkbox value="住宅"> 住宅 </a-checkbox>
              <a-checkbox value="别墅"> 别墅 </a-checkbox>
              <a-checkbox value="其他"> 其他 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item v-if="advanced" label="建筑类型">
            <a-checkbox-group v-model="queryParam.buildingType">
              <a-checkbox value="塔楼"> 塔楼 </a-checkbox>
              <a-checkbox value="板楼"> 板楼 </a-checkbox>
              <a-checkbox value="塔板结合"> 塔板结合 </a-checkbox>
              <a-checkbox value="其他"> 其他 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item v-if="advanced" label="是否电梯">
            <a-checkbox-group v-model="queryParam.isLift">
              <a-checkbox :value="1">
                有电梯
              </a-checkbox>
              <a-checkbox :value="0">
                无电梯
              </a-checkbox>
              <a-checkbox :value="2">
                其他
              </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="" :style="{ fontSize: '12px', textAlign: 'center' }" :wrapper-col="{ span: 22 }">
            <a-button @click="search()" type="primary">
              查询
            </a-button>
            <a-button @click="resetSearchForm()" :style="{ marginLeft: '8px' }">
              重置
            </a-button>
            <a-dropdown :style="{ marginLeft: '8px' }">
              <a-menu slot="overlay">
                <a-menu-item key="1" @click="newHouse()">
                  新建
                </a-menu-item>
                <a-menu-item key="2">
                  导入
                </a-menu-item>
                <a-menu-item key="3">
                  导出
                </a-menu-item>
              </a-menu>
              <a-button> 操作 <a-icon type="down" /> </a-button>
            </a-dropdown>

            <a :style="{ marginLeft: '8px', fontSize: '12px' }" @click="advanced = !advanced">
              {{ advanced ? '收起' : '展开' }} <a-icon :type="advanced ? 'up' : 'down'" />
            </a>
          </a-form-item>
        </a-form>
        <!-- 列表 -->
        <a-card :bordered="false">
          <a-layout>
            <a-layout-header :style="{ background: '#ffffff', padding: '0', height: '50px', display: 'flex' }">
              <div class="result">
                共找到<span>{{ results['x-total-count'] ? results['x-total-count'] : 0 }}</span
                >套 符合条件房源
              </div>
              <a-button-group>
                <a-button>
                  排序
                </a-button>
                <a-button @click="sortChange('averageLlistedPrice')">
                  房屋单价
                  <a-icon :type="sortType == 'asc' ? 'down' : 'up'" />
                </a-button>
              </a-button-group>
            </a-layout-header>
            <a-layout-content>
              <a-card
                :bordered="false"
                :style="{ background: '#ffffff', padding: '25px 17px' }"
                class="house-list"
                v-for="community of results"
                :key="community.id"
              >
                <a-layout :style="{ background: '#ffffff' }">
                  <a-layout-sider :style="{ background: '#ffffff', padding: 0 }" width="300">
                    <img src="@/assets/house.png" />
                  </a-layout-sider>
                  <a-layout-content :style="{ background: '#ffffff', 'padding-left': '20px' }">
                    <a-layout :style="{ background: '#ffffff', height: '100%', 'text-align': 'left' }">
                      <a-layout-header
                        :style="{
                          background: '#ffffff',
                          padding: 0,
                          color: '#000000',
                          'font-size': '20px',
                          height: '24px',
                          'line-height': '24px'
                        }"
                      >
                        {{ community.communityName }}
                      </a-layout-header>
                      <a-layout-content
                        :style="{
                          background: '#ffffff',
                          padding: 0,
                          display: 'flex',
                          'justify-content': 'center',
                          'algin-item': 'flex-end'
                        }"
                      >
                        <a-form
                          :label-col="{ span: 3 }"
                          :wrapper-col="{ span: 21 }"
                          label-align="left"
                          style="width:100%"
                        >
                          <a-form-item label="地址" :style="{ height: '30px' }">
                            <span>{{ community.address }}</span>
                          </a-form-item>
                          <a-form-item label="环线" :style="{ height: '30px' }">
                            <span>{{ community.loopSummary }}</span>
                          </a-form-item>
                          <a-form-item label="地铁" :style="{ height: '30px' }">
                            <span
                            >{{ community.metroLine ? community.metroLine + '号线' : '' }}
                              {{ community.subwayStation }}</span
                            >
                          </a-form-item>
                        </a-form>
                      </a-layout-content>
                      <a-layout-footer :style="{ background: '#ffffff', display: 'flex', padding: 0 }">
                        <a-tag color="pink">
                          {{ community.area }}
                        </a-tag>
                        <a-tag color="red">
                          {{ community.plate }}
                        </a-tag>
                        <a-tag color="orange">
                          {{ community.cellAttributes }}
                        </a-tag>
                        <a-tag color="green">
                          {{ community.constructionAge }}
                        </a-tag>
                        <a-tag color="cyan" v-if="community.isLift">电梯</a-tag>
                        <a-tag color="blue">
                          {{ community.buildingType }}
                        </a-tag>
                      </a-layout-footer>
                    </a-layout>
                  </a-layout-content>
                  <a-layout-sider :style="{ background: '#ffffff', padding: 0 }" width="200">
                    <a-layout :style="{ background: '#ffffff', height: '100%', 'text-align': 'center' }">
                      <a-layout-header
                        :style="{ background: '#ffffff', padding: 0, color: '#B71C2B', 'font-size': '16px' }"
                        width="200"
                      >
                        均价<span style="font-size:24px;font-weight:bold">{{
                          community.averageLlistedPrice == null ? '--' : community.averageLlistedPrice
                        }}</span
                        >元/m²
                      </a-layout-header>
                      <a-layout-content
                        :style="{
                          background: '#ffffff',
                          padding: 0,
                          display: 'flex',
                          'justify-content': 'center',
                          'align-items': 'flex-end'
                        }"
                      >
                        <a-button @click="showDetail(community)">查看详情</a-button>
                      </a-layout-content>
                    </a-layout>
                  </a-layout-sider>
                </a-layout>
              </a-card>
            </a-layout-content>
          </a-layout>
        </a-card>
      </a-layout-content>
    </a-layout>
    <a-drawer :visible="detailFlag > 0" width="80vw" @close="closeDetail">
      <house-edit :houseSelect="house" :toCreate="detailFlag === 2" @change="search" ref="houseeditref"></house-edit>
    </a-drawer>
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import { STable, Ellipsis } from '@/components'
import { getHouse } from '@/api/manage'
import HouseEdit from './HouseEdit.vue'
import {
  areaOptions,
  metroLineOptions,
  averageLlistedPriceOptions,
  totalPriceOptions,
  roomAreaOptions,
  constructionAgeOptions,
  loopSummaryOptions,
  booleanOptions,
  subwaystation,
  areaPlate,
  schools,
  shoolType
} from '@/api/data'
import { AutoComplete, BackTop } from 'ant-design-vue'

export default {
  name: 'HouseQuery',
  components: {
    STable,
    Ellipsis,
    AutoComplete,
    HouseEdit,
    BackTop
  },
  data () {
    return {
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: { area: [], schoolType: [], metroLine: [], averageLlistedPrice: [], totalPrice: [], roomArea: [], constructionAge: [], ranges: { price: [], total: [], roomArea: [], constructionAge: [] } },
      detailFlag: 0, // 0 close 1 view 2 edit
      colors: ['pink', 'orange', 'red', 'green', 'cyan', 'blue', 'purple'],
      results: [],
      house: {},
      sort: 'averageLlistedPrice,asc',
      sortType: 'asc',
      size: 20,
      stationOptions: [],
      areaPlate,
      plateOptions: [],
      editPlateOptions: [],
      areaOptions,
      metroLineOptions,
      averageLlistedPriceOptions,
      roomAreaOptions,
      constructionAgeOptions,
      loopSummaryOptions,
      booleanOptions,
      totalPriceOptions,
      subwaystation,
      loading: false,
      plates: {},
      subwayStations: {},
      schools,
      shoolType,
      echelons: {}
    }
  },
  created () {
    this.search({})
  },
  mounted () {
    window.addEventListener('scroll', this.windowScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.windowScroll)
  },
  methods: {
    closeDetail () {
      this.detailFlag = 0
      this.search()
    },

    resetSearchForm () {
      this.queryParam = { date: moment(new Date()), area: [], schoolType: [], metroLine: [], averageLlistedPrice: [], ranges: { price: [], total: [], area: [], year: [] } }
      this.plates = {}
      this.areaReset()
    },

    search () {
      const requestParameters = Object.assign({ sort: this.sort }, this.queryParam)

      requestParameters.averageLlistedPrice = Array.from(this.gatherSelect(requestParameters.averageLlistedPrice, requestParameters.ranges.price)).map(x => {
        const two = x.split('-')
        return [two[0] * 1, two[1] * 1]
      })
      requestParameters.totalPrice = Array.from(this.gatherSelect(requestParameters.totalPrice, requestParameters.ranges.total)).map(x => {
        const two = x.split('-')
        return [two[0] * 1, two[1] * 1]
      })
      requestParameters.roomArea = Array.from(this.gatherSelect(requestParameters.roomArea, requestParameters.ranges.roomArea)).map(x => {
        const two = x.split('-')
        return [two[0] * 1, two[1] * 1]
      })
      requestParameters.constructionAge = Array.from(this.gatherSelect(requestParameters.constructionAge, requestParameters.ranges.constructionAge)).map(x => {
        const two = x.split('-')
        return [two[0] * 1, two[1] * 1]
      })

      requestParameters.plate = Object.values(this.plates).flat()

      delete requestParameters.ranges
      delete requestParameters.averageLlistedPriceMin
      delete requestParameters.averageLlistedPriceMax
      delete requestParameters.totalPriceMin
      delete requestParameters.totalPriceMax
      delete requestParameters.roomAreaMin
      delete requestParameters.roomAreaMax
      delete requestParameters.constructionAgeMin
      delete requestParameters.constructionAgeMax

      // this.queryParam.echelonPerformance = this.echelons.flat()
      this.queryParam.echelonPerformance = ((echelons) => {
        const s = []
        for (const key of Object.keys(echelons)) {
          if (echelons[key] instanceof Array) {
            s.push(...echelons[key])
          }
        }
        return s
      })(this.echelons)
      if (this.queryParam?.isLift?.length !== 1) {
        delete requestParameters.isLift
      } else {
        requestParameters.isLift = requestParameters.isLift[0]
      }

      if (this.queryParam.checkedList) {
        this.queryParam.checkedList.forEach(e => {
          requestParameters[e] = true
        })
        delete requestParameters.checkedList
      }
      console.log('loadData request parameters:', requestParameters)
      getHouse(requestParameters).then(res => {
        console.log(res)
        this.results = res
      })
    },

    areaReset () {
      this.plateOptions.splice(0)
      this.queryParam.area.forEach(e => {
        this.plateOptions.push(...areaPlate[e])
      })
      this.search()
    },

    getPlate (area) {
      const plates = []
      areaPlate[area].forEach(v => {
        plates.push({ label: v, value: v })
      })
      return plates
    },

    areaChange () {
      this.queryParam.area.forEach((e) => {
         const areaPlates = []
         this.getPlate(e).forEach((p) => areaPlates.push(p.value))
         console.log(this.plates)
         if (this.plates[e]) {
         this.plates[e] = this.plates[e].filter(selectedP => {
           console.log(selectedP)
           return areaPlates.indexOf(selectedP) < 0
         })
         }
      })
    },

    schoolTypeChange () {
      this.queryParam.schoolType.forEach((e) => {
        this.echelons[e] = []
      })
    },

    echelonChange (type) {
      const index = this.queryParam.schoolType.indexOf(type)
      if (this.echelons[type].length > 0 && index >= 0) {
        this.queryParam.schoolType.splice(index, 1)
      }
    },

    plateChange (areaOption) {
      const area = areaOption.value
      if (this.plates[area].length > 0) {
        const index = this.queryParam.area.indexOf(area)
        if (index >= 0) this.queryParam.area.splice(index, 1)
      }
    },

    getSubwayStation (i) {
      let s = []
      subwaystation.forEach(v => {
        if (v.line === i) {
          s = v.station
        }
      })
      return s
    },

    metroLineChange (e) {
      console.log(e)
      this.subwayStations[e['target'].value] = []
    },

    subwayStationChange (line) {
      this.queryParam.subwayStation = []
      const that = this
      Object.keys(this.subwayStations).forEach(e => {
        that.queryParam.subwayStation.push(...that.subwayStations[e])
      })
      const index = this.queryParam.metroLine.indexOf(line)
      if (index >= 0 && this.subwayStations[line].length > 0) {
        this.queryParam.metroLine.splice(index, 1)
      }
    },

    showDetail (community) {
      this.detailFlag = 1
      this.house = community
      this.$refs.houseeditref && this.$refs.houseeditref.showDetail()
    },

    sortChange (type) {
      console.log(type)
      if (this.sortType === 'asc') {
        this.sortType = 'desc'
      } else {
        this.sortType = 'asc'
      }
      if (type) {
        this.sort = type + ',' + this.sortType
        this.search()
      }
    },

    addAveragePrice (arr, min, max) {
      if (min && max) { arr.push(`${min}-${max}`) }
    },

    gatherSelect (arr, set) {
      return new Set(arr.concat(set))
    },

    translateRang (rang, unit) {
      const arr = rang.split('-')
      if (arr[0] === '0') {
        return `${arr[1]}${unit}以下`
      } else if (arr[1] === '100000000') {
        return `${arr[0]}${unit}以上`
      }
      return `${rang}${unit}`
    },

    translateYearRang (rang, unit) {
      const arr = rang.split('-')
      if (arr[0] === '0') {
        return `${arr[1]}${unit}以前`
      } else if (arr[1] === '100000000') {
        return `${arr[0]}${unit}以后`
      }
      return `${rang}${unit}`
    },

    handleTagClose (arr1, arr2, tag) {
      this.removeEle(arr1, tag)
      this.removeEle(arr2, tag)
    },

    removeEle (arr1, tag) {
      const i = arr1.indexOf(tag)
      if (i >= 0) {
        arr1.splice(i, 1)
      }
    },

    averagePriceAll (arr1, arr2) {
      const rangsMap = new Map()
      if (!arr1) {
        arr1 = []
      }
      if (!arr2) {
        arr2 = []
      }
      arr1.concat(arr2).forEach(e => {
        rangsMap.set(e.label, e)
      })
      return rangsMap.values()
    },

    newHouse () {
      this.detailFlag = 2
      this.house = {}
      this.house.peopleAndVehicles = 0
      this.house.isLift = 1
      this.house.metroInfo = []
      this.house.schoolDistrictInfo = []
      this.$refs.houseeditref && this.$refs.houseeditref.newHouse()
    },

    windowScroll () {
      if (
        document.getElementById('app').children[0].offsetHeight - document.body.offsetHeight - 1 <
        document.documentElement.scrollTop
      ) {
        if (!this.loading) {
          this.loading = true
          setTimeout(() => {
            this.loading = false
            this.size = this.results.length
            this.size += 20
            this.search({ size: this.size })
          }, 100)
        }
      }
    }
  }
}
</script>

<style scoped>
.ant-table th {
  white-space: nowrap;
}
.ant-table td {
  white-space: nowrap;
}

.ant-form-item {
  margin-bottom: 12px;
}
.ant-form-item .ant-form-item {
  margin-bottom: 0px;
}
.ant-card-grid {
  padding: 0px;
}
.house-query-search-holder {
  width: 552px;
  margin: 0 auto;
}
.house-query-search-button {
  position: absolute;
  top: 26px;
  left: calc(50% + 300px);
}
.ant-checkbox-wrapper + .ant-checkbox-wrapper {
  margin-left: 0;
}
.result {
  flex: 1;
  font-size: 20px;
  color: #262626;
}
.result span {
  color: #b71c2b;
}
.ant-checkbox + span {
  padding-right: 0px;
}
img {
  width: 100%;
}
.house-list .ant-form-item {
  margin-bottom: 0;
}
.house-list .ant-card-body {
  padding: 0;
}
.ant-checkbox + span{
  padding-left: 6px;
}
</style>

<style>
.ant-checkbox + span{
  padding-left: 6px;
}
</style>
