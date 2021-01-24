<template>
  <page-header-wrapper>
    <a-layout>
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
                      <a-col v-for="plateOption in getPlate(options.value)" :span="4" :key="plateOption">
                        <a-checkbox :value="plateOption.value" :indeterminate="queryParam.area && queryParam.area.indexOf(options.value) >= 0">{{
                          plateOption.label
                        }}</a-checkbox>
                      </a-col>
                    </a-row>
                  </a-checkbox-group>
                </template>
                <a-checkbox :value="options.value" :indeterminate="(queryParam.area && queryParam.area.indexOf(options.value) < 0) && options.halfSelected" :checked="true">{{ options.label }}</a-checkbox>
              </a-popover>
            </a-checkbox-group>
            <a-tag v-for="p in queryParam.area" :key="p" color="pink">{{ p }}</a-tag>
            <template v-for="a in plates">
              <a-tag v-for="p in a" :key="p">{{ p }}</a-tag>
            </template>
          </a-form-item>
          <a-form-item label="环线">
            <a-checkbox-group v-model="queryParam.loopSummary" :options="loopSummaryOptions"> </a-checkbox-group>
          </a-form-item>
          <a-form-item label="地铁线">
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
                          @change="subwayStationChange"
                        >
                          <a-row :span="30">
                            <template
                              v-for="(subwayStation) in getSubwayStation(metroLineOptions[(i - 1) * 8 + j - 1].value)"
                            >
                              <a-col :span="3" :key="subwayStation">
                                <a-checkbox :value="subwayStation" :key="subwayStation">{{ subwayStation }}</a-checkbox>
                              </a-col>
                            </template>
                          </a-row>
                        </a-checkbox-group>
                      </template>
                      <a-checkbox :value="metroLineOptions[(i - 1) * 8 + j - 1].value">{{
                        metroLineOptions[(i - 1) * 8 + j - 1].label
                      }}</a-checkbox>
                    </a-popover>
                  </a-col>
                </a-row>
              </template>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="地铁站" v-if="queryParam.subwayStation && queryParam.subwayStation.length">
            <a-tag v-for="ss in queryParam.subwayStation" :key="ss">{{ ss }}</a-tag>
          </a-form-item>
          <a-form-item label="学校">
            <a-checkbox-group v-model="queryParam.schoolType">
              <a-checkbox value="小学">小学</a-checkbox>
              <a-checkbox value="中学">中学</a-checkbox>
              <a-checkbox value="一贯制学校">一贯制学校</a-checkbox>
            </a-checkbox-group>
            <a-form-item :style="{ display: 'inline-block', width: '100px', 'margin-right': '10px' }">
              <a-input style="width: 100%" v-model="queryParam.schoolName" size="small" />
            </a-form-item>
          </a-form-item>
          <a-form-item label="户型">
            <a-checkbox-group v-model="queryParam.roomType">
              <a-checkbox value="1"> 一房 </a-checkbox>
              <a-checkbox value="2"> 二房 </a-checkbox>
              <a-checkbox value="3"> 三房 </a-checkbox>
              <a-checkbox value="4"> 其他 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <!-- <a-form-item label="单价">
            <a-select
              v-model="queryParam.averageLlistedPrice"
              mode="multiple"
              showArrow="true"
              size="small"
              placeholder="请选择单价"
              style="width: 280px"
            >
              <a-select-option v-for="i in averageLlistedPriceOptions" :key="i.value" :value="i.value" :label="i.label">
                {{ i.label }}
              </a-select-option>
            </a-select>
            <a-form-item :style="{ display: 'inline-block', width: '63px', 'margin-left': '50px' }">
              <a-input style="width: 100%" v-model="queryParam.averageLlistedPriceMin" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '100px' }">
              <a-input style="width: 100%" v-model="queryParam.averageLlistedPriceMax" size="small" addon-after="万" />
            </a-form-item>
          </a-form-item>
          <a-form-item label="总价">
            <a-select
              v-model="queryParam.totalPrice"
              mode="multiple"
              showArrow="true"
              size="small"
              placeholder="请选择总价"
              style="width: 280px"
            >
              <a-select-option v-for="i in totalPriceOptions" :key="i.value" :value="i.value" :label="i.label">
                {{ i.label }}
              </a-select-option>
            </a-select>
            <a-form-item
              :style="{ display: 'inline-block', width: '63px', 'margin-left': '50px' }"
            >
              <a-input style="width: 100%" v-model="queryParam.totalPriceMin" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }" v-if="queryParam.totalPrice && queryParam.totalPrice.indexOf('edit') >= 0">
              -
            </span>
            <a-form-item :style="{ display: 'inline-block', width: '100px' }" v-if="queryParam.totalPrice && queryParam.totalPrice.indexOf('edit') >= 0">
              <a-input style="width: 100%" v-model="queryParam.totalPriceMax" size="small" addon-after="万" />
            </a-form-item>
          </a-form-item>
          <a-form-item label="面积">
            <a-select
              v-model="queryParam.roomArea"
              mode="multiple"
              showArrow="true"
              size="small"
              placeholder="请选择面积段"
              style="width: 280px"
            >
              <a-select-option v-for="i in roomAreaOptions" :key="i.value" :value="i.value" :label="i.label">
                {{ i.label }}
              </a-select-option>
            </a-select>
            <a-form-item :style="{ display: 'inline-block', width: '63px', 'margin-left': '50px' }">
              <a-input style="width: 100%" v-model="queryParam.roomAreaMin" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '114px' }">
              <a-input style="width: 100%" v-model="queryParam.roomAreaMax" size="small" addon-after="平方" />
            </a-form-item>
          </a-form-item> -->
          <a-row :gutter="24" v-if="advanced">
            <a-col :span="12">
              <a-form-item label="小区属性" :label-col="{ span: 4 }">
                <a-checkbox-group v-model="queryParam.cellAttributes">
                  <a-checkbox value="住宅"> 住宅 </a-checkbox>
                  <a-checkbox value="别墅"> 别墅 </a-checkbox>
                  <a-checkbox value="其他"> 其他 </a-checkbox>
                </a-checkbox-group>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="建筑类型" :label-col="{ span: 4 }">
                <a-checkbox-group v-model="queryParam.buildingType">
                  <a-checkbox value="塔楼"> 塔楼 </a-checkbox>
                  <a-checkbox value="板楼"> 板楼 </a-checkbox>
                  <a-checkbox value="塔板结合"> 塔板结合 </a-checkbox>
                  <a-checkbox value="其他"> 其他 </a-checkbox>
                </a-checkbox-group>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="24" v-if="advanced">
            <a-col :span="12">
              <a-form-item label="是否电梯" :label-col="{ span: 4 }">
                <a-checkbox-group v-model="queryParam.isLift">
                  <a-checkbox :value="true">
                    有电梯
                  </a-checkbox>
                  <a-checkbox :value="false">
                    无电梯
                  </a-checkbox>
                  <a-checkbox :value="1">
                    其他
                  </a-checkbox>
                </a-checkbox-group>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="建筑年代" :label-col="{ span: 4 }">
                <!-- <a-checkbox-group
                  v-model="queryParam.constructionAge"
                  :options="constructionAgeOptions"

                >
                </a-checkbox-group> -->

                <a-select
                  v-model="queryParam.constructionAge"
                  mode="multiple"
                  showArrow="true"
                  size="small"
                  placeholder="请选择建筑年代"
                  style="width: 280px"
                >
                  <a-select-option v-for="i in constructionAgeOptions" :key="i.value" :value="i.value" :label="i.label">
                    {{ i.label }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-form-item label="" :style="{ fontSize: '12px', textAlign: 'center' }" :wrapper-col="{ span: 22 }">
            <a-button @click="search()" type="primary">
              查询
            </a-button>
            <a-button @click="resetSearchForm()" :style="{ marginLeft: '8px' }">
              重置
            </a-button>
            <a-button @click="newHouse()" :style="{ marginLeft: '8px' }">
              新建
            </a-button>

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
      <house-edit :houseSelect="house" :toCreate="detailFlag === 2" @change="search"></house-edit>
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
  cityEchelonOptions,
  echelonPerformanceOptions,
  subwaystation,
  areaPlate
} from '@/api/data'
import { AutoComplete } from 'ant-design-vue'

export default {
  name: 'HouseQuery',
  components: {
    STable,
    Ellipsis,
    AutoComplete,
    HouseEdit
  },
  data () {
    return {
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: { area: [] },
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
      cityEchelonOptions,
      totalPriceOptions,
      echelonPerformanceOptions,
      subwaystation,
      loading: false,
      plates: {},
      subwayStations: {}
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
  computed: {
    rowSelection () {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange
      }
    }
  },
  methods: {
    closeDetail () {
      this.detailFlag = 0
      this.search()
    },

    resetSearchForm () {
      this.queryParam = {
        date: moment(new Date()),
        area: []
      }
      this.plates = {}
      this.areaReset()
    },

    search (parameter) {
      const requestParameters = Object.assign({ sort: this.sort }, parameter, this.queryParam)
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

    plateChange (areaOption) {
      const area = areaOption.value
      if (this.plates[area].length > 0) {
        areaOption.halfSelected = true
        const index = this.queryParam.area.indexOf(area)
        if (index >= 0) this.queryParam.area.splice(index, 1)
      } else {
        // 未选中板块
        areaOption.halfSelected = false
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

    subwayStationChange () {
      this.queryParam.subwayStation = []
      const that = this
      Object.keys(this.subwayStations).forEach(e => {
        that.queryParam.subwayStation.push(...that.subwayStations[e])
      })
    },

    showDetail (community) {
      this.detailFlag = 1
      this.house = community
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

    newHouse () {
      this.detailFlag = 2
      this.house = {}
      this.house.peopleAndVehicles = 0
      this.house.isLift = 1
      this.house.isConsistentSystem = 0
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
