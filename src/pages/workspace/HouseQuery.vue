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
        <a-form :label-col="{ span: 2 }" :wrapper-col="{ span: 20 }" :label-align="left" style="margin-top: 10px">
          <a-form-item label="区域板块">
            <a-checkbox-group v-model="queryParam.area" size="small" @change="areaChange">
              <a-popover v-for="options in areaOptions" :key="options.value" trigger="hover" placement="topLeft">
                <template slot="content">
                  <a-checkbox-group v-model="plates[options.value]" @change="plateChange(options)" >
                    <template v-for="(plateOption) in getPlate(options.value)">
                      <a-checkbox :value="plateOption.value" :key="plateOption.value" :indeterminate="queryParam.area && queryParam.area.indexOf(options.value) >= 0">{{
                        plateOption.label
                      }}</a-checkbox>
                    </template>
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
          <a-row :gutter="24">
            <a-col :span="12">
              <a-form-item label="学校" :label-col="{ span: 4 }">
                <a-checkbox-group v-model="queryParam.schoolType">
                  <a-checkbox value="小学">小学</a-checkbox>
                  <a-checkbox value="中学">中学</a-checkbox>
                  <a-checkbox value="一贯制学校">一贯制学校</a-checkbox>
                </a-checkbox-group>
                <a-form-item :style="{ display: 'inline-block', width: '100px', 'margin-right': '10px' }">
                  <a-input style="width: 100%" v-model="queryParam.schoolName" size="small" />
                </a-form-item>
              </a-form-item>
            </a-col>
          </a-row>
          <a-form-item label="户型">
            <a-checkbox-group v-model="queryParam.roomType">
              <a-checkbox value="1"> 一房 </a-checkbox>
              <a-checkbox value="2"> 二房 </a-checkbox>
              <a-checkbox value="3"> 三房 </a-checkbox>
              <a-checkbox value="4"> 其他 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="单价">
            <!-- <a-checkbox-group
              v-model="queryParam.averageLlistedPrice"
              :options="averageLlistedPriceOptions"

            >
            </a-checkbox-group> -->
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
            <!-- <a-checkbox-group v-model="queryParam.roomArea" :options="roomAreaOptions" >
            </a-checkbox-group> -->
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
          </a-form-item>
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
            <a-button @click="refresh()" type="primary">
              查询
            </a-button>
            <a-button @click="resetSearchForm()" :style="{ marginLeft: '8px' }">
              重置
            </a-button>
            <a-button @click="newHouse()" :style="{ marginLeft: '8px' }">
              新建
            </a-button>

            <a :style="{ marginLeft: '8px', fontSize: '12px' }" @click="toggleAdvanced">
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
                          :label-align="left"
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
    <a-drawer :visible="detailVisible" width="80vw" @close="closeDetail">
      <a-layout :style="{ background: '#ffffff', padding: '0', height: '50px' }" v-if="!edit">
        <a-layout-header :style="{ padding: '0', height: '80px' }">
          <a-layout :style="{ background: '#ffffff', padding: '0', height: '80px' }">
            <a-layout-content
              :style="{
                background: '#ffffff',
                padding: '0',
                'line-height': '32px',
                'font-size': '24px',
                color: '#000000'
              }"
            >
              <div>
                {{ houseSelect.communityName
                }}<span
                  style="font-size:16px;color: #B71C2B; margin-left: 12px"
                >均价 {{ houseSelect.averageLlistedPrice == null ? '--' : houseSelect.averageLlistedPrice }}元/m²</span
                >
              </div>
              <div>
                <template v-for="tag in tags">
                  <a-tag :key="tag">
                    {{ tag }}
                  </a-tag>
                </template>
              </div>
            </a-layout-content>
            <a-layout-sider :style="{ background: '#ffffff', padding: '0' }">
              <a-button @click="editHouse()">
                编辑
              </a-button>
            </a-layout-sider>
          </a-layout>
        </a-layout-header>
        <a-layout-content class="show-house">
          <a-descriptions title="基本信息" :column="4">
            <a-descriptions-item label="楼盘名称">
              {{ houseSelect.communityName }}
            </a-descriptions-item>
            <a-descriptions-item label="楼盘地址" :span="3">
              {{ houseSelect.address }}
            </a-descriptions-item>
            <a-descriptions-item label="所属区域">
              {{ houseSelect.area }}
            </a-descriptions-item>
            <a-descriptions-item label="所属板块">
              {{ houseSelect.plate }}
            </a-descriptions-item>
            <a-descriptions-item label="环线">
              {{ houseSelect.loopSummary }}
            </a-descriptions-item>
            <a-descriptions-item label="区域规划">
              {{ houseSelect.districtPlanning }}
            </a-descriptions-item>
            <a-descriptions-item label="地铁线路">
              {{ houseSelect.metroLine ? houseSelect.metroLine + '号线' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="地铁站名">
              {{ houseSelect.subwayStation }}
            </a-descriptions-item>
            <a-descriptions-item label="地铁距离">
              {{ houseSelect.distance }}
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="楼盘概况" :column="4">
            <a-descriptions-item label="开发商" :span="2">
              {{ houseSelect.developer }}
            </a-descriptions-item>
            <a-descriptions-item label="物业公司" :span="2">
              {{ houseSelect.propertyCompany }}
            </a-descriptions-item>
            <a-descriptions-item label="类型">
              {{ houseSelect.cellAttributes }}
            </a-descriptions-item>
            <a-descriptions-item label="权属">
              {{ houseSelect.transactionOwnership }}
            </a-descriptions-item>
            <a-descriptions-item label="年限">
              {{ houseSelect.propertyRights ? houseSelect.propertyRights + '年' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="建筑时间">
              {{ houseSelect.constructionAge ? houseSelect.constructionAge + '年' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="小区栋数">
              {{ houseSelect.buildingNumber ? houseSelect.buildingNumber + '栋' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="小区户数">
              {{ houseSelect.householdsNumber ? houseSelect.householdsNumber + '户' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="停车位数">
              {{ houseSelect.parkingSpacesNumber }}
            </a-descriptions-item>
            <a-descriptions-item label="人车分流">
              {{ houseSelect.peopleAndVehicles ? '是' : '否' }}
            </a-descriptions-item>
            <a-descriptions-item label="容积率">
              {{ houseSelect.volumeRate ? houseSelect.volumeRate + '%' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="绿化率">
              {{ houseSelect.greeningRate ? houseSelect.greeningRate + '%' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="建筑类型">
              {{ houseSelect.buildingType }}
            </a-descriptions-item>
            <a-descriptions-item label="是否电梯">
              {{ houseSelect.isLift ? '是' : '否' }}
            </a-descriptions-item>
            <a-descriptions-item label="最大层数">
              {{ houseSelect.maxFloor ? houseSelect.maxFloor + '层' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="最小层数">
              {{ houseSelect.minFloor ? houseSelect.minFloor + '层' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="物业类型">
              {{ houseSelect.propertyAttributes }}
            </a-descriptions-item>
            <a-descriptions-item label="物业费">
              {{ houseSelect.propertyCosts ? houseSelect.propertyCosts + '元/m²' : '' }}
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="学区情况" :column="4">
            <a-descriptions-item label="一贯制" :span="4">
              {{ houseSelect.isConsistentSystem ? '是' : '否' }}
            </a-descriptions-item>
            <a-descriptions-item label="小学">
              {{ houseSelect.primarySchool }}
            </a-descriptions-item>
            <a-descriptions-item label="梯队">
              {{ houseSelect.echelonPerformance }}
            </a-descriptions-item>
            <a-descriptions-item label="中学">
              {{ houseSelect.middleSchool }}
            </a-descriptions-item>
            <a-descriptions-item label="梯队">
              {{ houseSelect.cityEchelon }}
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="价格及交易" :column="4">
            <a-descriptions-item label="1居面积" :span="1">
              {{ houseSelect.roomArea1Min ? houseSelect.roomArea1Min + '-' : ''
              }}{{ houseSelect.roomArea1Max ? houseSelect.roomArea1Max + 'm²' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="1居价格" :span="1">
              {{ houseSelect.roomPriceRange1Min ? houseSelect.roomPriceRange1Min + '-' : ''
              }}{{ houseSelect.roomPriceRange1Max ? houseSelect.roomPriceRange1Max + '万' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="2居面积" :span="1">
              {{ houseSelect.roomArea2Min ? houseSelect.roomArea2Min + '-' : ''
              }}{{ houseSelect.roomArea2Max ? houseSelect.roomArea2Max + 'm²' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="2居价格" :span="1">
              {{ houseSelect.roomPriceRange2Min ? houseSelect.roomPriceRange2Min + '-' : ''
              }}{{ houseSelect.roomPriceRange2Max ? houseSelect.roomPriceRange2Max + '万' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="3居面积" :span="1">
              {{ houseSelect.roomArea3Min ? houseSelect.roomArea3Min + '-' : ''
              }}{{ houseSelect.roomArea3Max ? houseSelect.roomArea3Max + 'm²' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="3居价格" :span="1">
              {{ houseSelect.roomPriceRange3Min ? houseSelect.roomPriceRange3Min + '-' : ''
              }}{{ houseSelect.roomPriceRange3Max ? houseSelect.roomPriceRange3Max + '万' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="多居面积" :span="1">
              {{ houseSelect.roomArea4Min ? houseSelect.roomArea4Min + '-' : ''
              }}{{ houseSelect.roomArea4Max ? houseSelect.roomArea4Max + 'm²' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="多居价格" :span="1">
              {{ houseSelect.roomPriceRange4Min ? houseSelect.roomPriceRange4Min + '-' : ''
              }}{{ houseSelect.roomPriceRange4Max ? houseSelect.roomPriceRange4Max + '万' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="在售">
              {{ houseSelect.inStock ? houseSelect.inStock + '套' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="在租">
              {{ houseSelect.positiveRent ? houseSelect.positiveRent + '套' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="成交量">
              {{ houseSelect.volume2019 ? houseSelect.volume2019 + '套' : '' }}
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="综合" :column="4">
            <a-descriptions-item label="概括介绍" :span="4">
              {{ houseEdit.communityDesc }}
            </a-descriptions-item>
          </a-descriptions>
        </a-layout-content>
      </a-layout>
      <a-layout :style="{ background: '#ffffff', padding: '0', height: '50px' }" v-else>
        <a-layout-header :style="{ padding: '0', height: '80px' }">
          <a-layout :style="{ background: '#ffffff', padding: '0', height: '80px' }">
            <a-layout-content
              :style="{
                background: '#ffffff',
                padding: '0',
                'line-height': '32px',
                'font-size': '24px',
                color: '#000000'
              }"
            >
              <div>
                {{ houseEdit.communityName
                }}<span
                  style="font-size:16px;color: #B71C2B; margin-left: 12px"
                >均价
                  <a-input-number v-model="houseEdit.averageLlistedPrice" size="small" style="width: 100px" />
                  元/m²</span
                >
              </div>
              <div>
                <template v-for="tag in tags">
                  <a-tag :key="tag" closable @close="() => handleClose(tag)" :color="isCustomTag(tag)">
                    {{ tag }}
                  </a-tag>
                </template>
                <AutoComplete
                  :value="inputValue"
                  v-if="tagInputVisible"
                  style="width: 100px"
                  :data-source="labels"
                  :filter-option="tagOptionFilter"
                  size="small"
                  @select="handleInputConfirm"
                  @change="handleInputChange"
                  @blur="handleInputConfirm"
                  @keyup.enter="handleInputConfirm"
                />
                <a-tag v-else style="background: #fff; borderStyle: dashed;" @click="showInput">
                  <a-icon type="plus" /> New Tag
                </a-tag>
              </div>
            </a-layout-content>
            <a-layout-sider :style="{ background: '#ffffff', padding: '0' }">
              <a-button @click="saveHouse()">
                保存
              </a-button>
            </a-layout-sider>
          </a-layout>
        </a-layout-header>
        <a-layout-content class="edit-house">
          <a-descriptions title="基本信息" :column="4">
            <a-descriptions-item label="楼盘名称">
              <a-input v-model="houseEdit.communityName" size="small" style="width: 150px" />
            </a-descriptions-item>
            <a-descriptions-item label="楼盘地址" :span="3">
              <a-input v-model="houseEdit.address" size="small" style="width: 334px" />
            </a-descriptions-item>
            <a-descriptions-item label="所属区域">
              <a-select
                :options="areaOptions"
                v-model="houseEdit.area"
                size="small"
                style="width: 150px"
                @change="editAreaChange()"
              ></a-select>
            </a-descriptions-item>
            <a-descriptions-item label="所属板块">
              <a-select :options="editPlateOptions" v-model="houseEdit.plate" size="small" style="width: 150px"></a-select>
            </a-descriptions-item>
            <a-descriptions-item label="环线">
              <a-select
                :options="loopSummaryOptions"
                v-model="houseEdit.loopSummary"
                size="small"
                style="width: 150px"
              ></a-select>
            </a-descriptions-item>
            <a-descriptions-item label="区域规划">
              <a-select v-model="houseEdit.districtPlanning" size="small" style="width: 150px">
                <a-select-option value="城市副中心">城市副中心</a-select-option>
                <a-select-option value="城市中心">城市中心</a-select-option>
              </a-select>
            </a-descriptions-item>
            <a-descriptions-item label="地铁线路" :span="4">
              <a-input-group compact>
                <a-cascader
                  :options="options3"
                  :display-render="displayRender"
                  expand-trigger="hover"
                  size="small"
                  placeholder="地铁">
                </a-cascader>
                <a-input v-model="houseEdit.distance" placeholder="距离" size="small" style="width: 120px" suffix="米">
                </a-input>
                <span style="color: red; line-height: 24px; padding-left: 6px"><a-icon type="minus-circle" /></span>
              </a-input-group>
            </a-descriptions-item>
            <a-descriptions-item label="" :span="4">
              <a-button type="dashed" style="width: 100px" size="small" @click="addMetroLine()">
                <a-icon type="plus" /> 添加
              </a-button>
            </a-descriptions-item>
            <!-- <template v-for="(line,i) in metroLineInfo">
              <a-descriptions-item label="地铁线路" :key="line">
                <a-select
                  :options="metroLineOptions"
                  v-model="line.metroLine"
                  size="small"
                  style="width: 150px"
                  @change="getstation('houseEdit',line.metroLine)"
                ></a-select>
              </a-descriptions-item>
              <a-descriptions-item label="地铁站名" :key="line">
                <a-select
                  :options="stationOptions"
                  v-model="line.subwayStation"
                  size="small"
                  style="width: 150px"
                  @change="getstation('houseEdit',line.metroLine)"
                ></a-select>
              </a-descriptions-item>
              <a-descriptions-item label="地铁距离" :key="line">
                <a-input v-model="line.distance" size="small" style="width: 90px" addon-after="米" />
              </a-descriptions-item>
              <a-descriptions-item label="" :key="line">
                <a-button @click="addMetroLine()" v-if="i==0">
                  添加地铁信息
                </a-button>
              </a-descriptions-item>
            </template>-->
          </a-descriptions>
          <a-descriptions title="楼盘概况" :column="4">
            <a-descriptions-item label="开发商" :span="2">
              <a-input v-model="houseEdit.developer" size="small" style="width: 150px" />
            </a-descriptions-item>
            <a-descriptions-item label="物业公司" :span="2">
              <a-input v-model="houseEdit.propertyCompany" size="small" />
            </a-descriptions-item>
            <a-descriptions-item label="类型">
              <a-select v-model="houseEdit.cellAttributes" size="small" style="width: 100px">
                <a-select-option value="住宅"> 住宅 </a-select-option>
                <a-select-option value="别墅"> 别墅 </a-select-option>
              </a-select>
            </a-descriptions-item>
            <a-descriptions-item label="权属">
              <a-select v-model="houseEdit.transactionOwnership" size="small" style="width: 100px">
                <a-select-option value="商品房"> 商品房 </a-select-option>
                <a-select-option value="毛坯房"> 毛坯房 </a-select-option>
                <a-select-option value="售后工房"> 售后工房 </a-select-option>
                <a-select-option value="其他"> 其他 </a-select-option>
              </a-select>
            </a-descriptions-item>
            <a-descriptions-item label="年限">
              <a-input v-model="houseEdit.propertyRights" style="width: 100px" size="small" addon-after="年" />
            </a-descriptions-item>
            <a-descriptions-item label="建筑时间">
              <a-input v-model="houseEdit.constructionAge" style="width: 100px" size="small" addon-after="年" />
            </a-descriptions-item>
            <a-descriptions-item label="小区栋数">
              <a-input v-model="houseEdit.buildingNumber" style="width: 100px" size="small" addon-after="栋" />
            </a-descriptions-item>
            <a-descriptions-item label="小区户数">
              <a-input v-model="houseEdit.householdsNumber" style="width: 100px" size="small" addon-after="户" />
            </a-descriptions-item>
            <a-descriptions-item label="停车位数">
              <a-input v-model="houseEdit.parkingSpacesNumber" style="width: 100px" size="small" />
            </a-descriptions-item>
            <a-descriptions-item label="人车分流">
              <a-select
                :options="booleanOptions"
                v-model="houseEdit.peopleAndVehicles"
                style="width: 100px"
                size="small"
              >
              </a-select>
            </a-descriptions-item>
            <a-descriptions-item label="容积率">
              <a-input v-model="houseEdit.volumeRate" style="width: 100px" size="small" addon-after="%" />
            </a-descriptions-item>
            <a-descriptions-item label="绿化率">
              <a-input v-model="houseEdit.greeningRate" style="width: 100px" size="small" addon-after="%" />
            </a-descriptions-item>
            <a-descriptions-item label="建筑类型">
              <a-select v-model="houseEdit.buildingType" size="small" style="width: 100px">
                <a-select-option value="塔楼"> 塔楼 </a-select-option>
                <a-select-option value="板楼"> 板楼 </a-select-option>
                <a-select-option value="塔板结合"> 塔板结合 </a-select-option>
                <a-select-option value="其他"> 其他 </a-select-option>
              </a-select>
            </a-descriptions-item>
            <a-descriptions-item label="是否电梯">
              <a-select :options="booleanOptions" v-model="houseEdit.isLift" style="width: 100px" size="small">
              </a-select>
            </a-descriptions-item>
            <a-descriptions-item label="最大层数">
              <a-input v-model="houseEdit.maxFloor" style="width: 100px" size="small" addon-after="层" />
            </a-descriptions-item>
            <a-descriptions-item label="最小层数">
              <a-input v-model="houseEdit.minFloor" style="width: 100px" size="small" addon-after="层" />
            </a-descriptions-item>
            <a-descriptions-item label="物业类型" style="width: 100px">
              <a-select v-model="houseEdit.propertyAttributes" size="small">
                <a-select-option value="办公"> 办公 </a-select-option>
                <a-select-option value="别墅"> 别墅 </a-select-option>
                <a-select-option value="公寓住宅"> 公寓住宅 </a-select-option>
                <a-select-option value="商业"> 商业 </a-select-option>
                <a-select-option value="商住楼"> 商住楼 </a-select-option>
                <a-select-option value="酒店"> 酒店 </a-select-option>
              </a-select>
            </a-descriptions-item>
            <a-descriptions-item label="物业费">
              <a-input v-model="houseEdit.propertyCosts" style="width: 100px" size="small" addon-after="元/m²" />
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="学区情况" :column="4">
            <template v-for="(school,i) in schoolsInfo">
              <a-descriptions-item label="一贯制" :span="3" :key="school">
                <a-select
                  :options="booleanOptions"
                  v-model="school.isConsistentSystem"
                  style="width: 100px"
                  size="small"
                >
                </a-select>
              </a-descriptions-item>
              <a-descriptions-item label="" :key="school">
                <a-button @click="addSchoolsInfo()" v-if="i==0">
                  添加学区信息
                </a-button>
              </a-descriptions-item>
              <a-descriptions-item label="小学" :key="school">
                <a-input v-model="school.primarySchool" size="small" style="width: 100px"/>
              </a-descriptions-item>
              <a-descriptions-item label="梯队" :key="school">
                <a-select
                  :options="echelonPerformanceOptions"
                  v-model="school.echelonPerformance"
                  style="width: 100px"
                  size="small"
                />
              </a-descriptions-item>
              <a-descriptions-item label="中学" :key="school">
                <a-input v-model="school.middleSchool" size="small" style="width: 100px"/>
              </a-descriptions-item>
              <a-descriptions-item label="梯队" :key="school">
                <a-select :options="cityEchelonOptions" v-model="school.cityEchelon" style="width: 100px" size="small">
                </a-select>
              </a-descriptions-item>
            </template>
          </a-descriptions>
          <a-descriptions title="价格及交易" :column="4">
            <a-descriptions-item label="1居面积" :span="1">
              <a-input v-model="houseEdit.roomArea1Min" style="width: 56px" size="small" />-
              <a-input
                v-model="houseEdit.roomArea1Max"
                style="width: 90px; margin-right:5px"
                size="small"
                addon-after="m²"
              />
            </a-descriptions-item>
            <a-descriptions-item label="1居价格" :span="1">
              <a-input v-model="houseEdit.roomPriceRange1Min" style="width: 65px" size="small" />-
              <a-input v-model="houseEdit.roomPriceRange1Max" style="width: 100px" size="small" addon-after="万" />
            </a-descriptions-item>
            <a-descriptions-item label="2居面积" :span="1">
              <a-input v-model="houseEdit.roomArea2Min" style="width: 56px" size="small" />-
              <a-input
                v-model="houseEdit.roomArea2Max"
                style="width: 90px; margin-right:5px"
                size="small"
                addon-after="m²"
              />
            </a-descriptions-item>
            <a-descriptions-item label="2居价格" :span="1">
              <a-input v-model="houseEdit.roomPriceRange2Min" style="width: 65px" size="small" />-
              <a-input v-model="houseEdit.roomPriceRange2Max" style="width: 100px" size="small" addon-after="万" />
            </a-descriptions-item>
            <a-descriptions-item label="3居面积" :span="1">
              <a-input v-model="houseEdit.roomArea3Min" style="width: 56px" size="small" />-
              <a-input
                v-model="houseEdit.roomArea3Max"
                style="width: 90px; margin-right:5px"
                size="small"
                addon-after="m²"
              />
            </a-descriptions-item>
            <a-descriptions-item label="3居价格" :span="1">
              <a-input v-model="houseEdit.roomPriceRange3Min" style="width: 65px" size="small" />-
              <a-input v-model="houseEdit.roomPriceRange3Max" style="width: 100px" size="small" addon-after="万" />
            </a-descriptions-item>
            <a-descriptions-item label="多居面积" :span="1">
              <a-input v-model="houseEdit.roomArea4Min" style="width: 56px" size="small" />-
              <a-input
                v-model="houseEdit.roomArea4Max"
                style="width: 90px; margin-right:5px"
                size="small"
                addon-after="m²"
              />
            </a-descriptions-item>
            <a-descriptions-item label="多居价格" :span="1">
              <a-input v-model="houseEdit.roomPriceRange4Min" style="width: 65px" size="small" />-
              <a-input v-model="houseEdit.roomPriceRange4Max" style="width: 100px" size="small" addon-after="万" />
            </a-descriptions-item>
            <a-descriptions-item label="在售">
              <a-input v-model="houseEdit.inStock" style="width: 90px" size="small" addon-after="套" />
            </a-descriptions-item>
            <a-descriptions-item label="在租">
              <a-input v-model="houseEdit.positiveRent" style="width: 90px" size="small" addon-after="套" />
            </a-descriptions-item>
            <a-descriptions-item label="年成交">
              <a-input v-model="houseEdit.volume2019" style="width: 90px" size="small" addon-after="套" />
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="综合" :column="4">
            <a-descriptions-item label="概括介绍" :span="4">
              <a-textarea
                v-model="houseEdit.communityDesc"
                style="width: 800px"
                size="small"
                :auto-size="{ minRows: 2, maxRows: 6 }"
              />
            </a-descriptions-item>
          </a-descriptions>
        </a-layout-content>
      </a-layout>
    </a-drawer>
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import { STable, Ellipsis } from '@/components'
import { getHouse, saveHouse, getLabels } from '@/api/manage'
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
  areaPlate,
  statusMap
} from '@/api/data'
import { AutoComplete } from 'ant-design-vue'

export default {
  name: 'HouseQuery',
  components: {
    STable,
    Ellipsis,
    AutoComplete
  },
  data () {
    // this.columns = columns
    return {
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: { area: [] },
      detailVisible: false,
      tagInputVisible: false,
      tags: [],
      colors: ['pink', 'orange', 'red', 'green', 'cyan', 'blue', 'purple'],
      results: [],
      houseSelect: {},
      houseEdit: {},
      sort: 'averageLlistedPrice,asc',
      sortType: 'asc',
      size: 20,
      edit: false,
      stationOptions: [],
      labels: [],
      areaPlate,
      plateOptions: [],
      editPlateOptions: [],
      areaOptions,
      metroLineOptions,
      averageLlistedPriceOptions,
      totalPriceOptions,
      totalPriceEdit: false,
      roomAreaOptions,
      constructionAgeOptions,
      loopSummaryOptions,
      booleanOptions,
      cityEchelonOptions,
      echelonPerformanceOptions,
      subwaystation,
      statusMap,
      loading: false,
      plates: {},
      subwayStations: {},
      metroLineInfo: [],
      schoolsInfo: []
    }
  },
  filters: {
    statusFilter (type) {
      return statusMap[type].text
    },
    statusTypeFilter (type) {
      return statusMap[type].status
    }
  },
  created () {
    this.search({})
    getLabels().then(data => {
      this.labels = data
    })
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
      this.detailVisible = false
      this.edit = false
      this.refresh()
    },

    toggleAdvanced () {
      this.advanced = !this.advanced
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

    editAreaChange () {
      if (this.houseEdit.area) {
        this.editPlateOptions.splice(0)
        areaPlate[this.houseEdit.area].forEach(v => {
          this.editPlateOptions.push({ label: v, value: v })
        })
      }
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
        if (index >= 0) this.queryParam.area.splice(index + 1, 1)
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
      this.detailVisible = true
      this.houseSelect = community
      if (community.labels) {
        this.tags = community.labels.split(',')
      } else {
        this.tags = []
      }
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

    editHouse () {
        // edit
        this.houseEdit = this.houseSelect
        this.houseEdit.peopleAndVehicles = Number(this.houseEdit.peopleAndVehicles)
        this.houseEdit.isLift = Number(this.houseEdit.isLift)
        this.houseEdit.isConsistentSystem = Number(this.houseEdit.isConsistentSystem)
        this.editAreaChange()
        this.getstation('houseData')
        this.metroLineInfo = [{
          metroLine: this.houseEdit.metroLine,
          subwayStation: this.houseEdit.subwayStation,
          distance: this.houseEdit.distance
        }]
        this.schoolsInfo = [{
          isConsistentSystem: this.houseEdit.isConsistentSystem,
          primarySchool: this.houseEdit.primarySchool,
          echelonPerformance: this.houseEdit.echelonPerformance,
          middleSchool: this.houseEdit.middleSchool,
          cityEchelon: this.houseEdit.cityEchelon
        }]
        this.edit = !this.edit
    },

    saveHouse () {
      // save
      console.log('save:', this.houseEdit)
      this.houseEdit.labels = this.tags.join(',')
      saveHouse(this.houseEdit)
        .then(e => {
          this.edit = !this.edit
          this.$notification.success({
            message: '通知',
            description: this.house.id ? '修改成功' : '保存成功'
          })
          this.refresh()
        })
        .catch(() => {
          this.$notification.error({
            message: '通知',
            description: this.house.id ? '修改失败' : '保存失败'
          })
        })
    },

    newHouse () {
      this.detailVisible = true
      this.houseEdit = {}
      this.houseSelect = this.houseEdit
      this.tags = []
      this.houseEdit.peopleAndVehicles = 0
      this.houseEdit.isLift = 1
      this.houseEdit.isConsistentSystem = 0
      console.log(this.houseEdit)
      this.editAreaChange()
      this.metroLineInfo = [{
        metroLine: '1号线',
        subwayStation: '人民广场',
        distance: 0
      }]
      this.schoolsInfo = [{
          isConsistentSystem: undefined,
          primarySchool: undefined,
          echelonPerformance: undefined,
          middleSchool: undefined,
          cityEchelon: undefined
        }]
      this.edit = true
    },

    getstation (type, metroLine) {
          const _this = this
          if (type || metroLine) {
            this.stationOptions.splice(0)
            this.subwaystation.forEach(v => {
              metroLine = metroLine || _this[type]?.metroLine
              if (v.line === metroLine) {
                v.station.forEach(val => {
                  _this.stationOptions.push({ label: val, value: val })
                })
              }
            })
          }
        },

    getLineStation (lines) {
      const stationOptions = []
      lines.forEach(line => {
        this.subwaystation.forEach(v => {
          if (v.line === line) {
            v.station.forEach(val => {
              stationOptions.push({ label: val, value: val })
            })
          }
        })
      })
      return stationOptions
    },

    addMetroLine () {
      this.metroLineInfo.push({
        metroLine: '1号线',
        subwayStation: '人民广场',
        distance: 0
      })
    },

    addSchoolsInfo () {
      this.schoolsInfo.push({
          isConsistentSystem: undefined,
          primarySchool: undefined,
          echelonPerformance: undefined,
          middleSchool: undefined,
          cityEchelon: undefined
        })
    },

    /* tag start */
    handleClose (removedTag) {
      const tags = this.tags.filter(tag => tag !== removedTag)
      console.log(tags)
      this.tags = tags
    },

    showInput () {
      this.tagInputVisible = true
      this.$nextTick(function () {})
    },

    handleInputChange (e) {
      this.inputValue = e
    },

    handleInputConfirm () {
      const inputValue = this.inputValue
      let tags = this.tags
      if (inputValue && !tags.find(e => e === inputValue)) {
        tags = [...tags, inputValue]
      }
      Object.assign(this, {
        tags,
        tagInputVisible: false,
        inputValue: ''
      })
    },

    tagOptionFilter (input, option) {
      return option.componentOptions.children[0].text.toUpperCase().indexOf(input.toUpperCase()) >= 0
    },

    isCustomTag (tag) {
      console.log(tag)
      if (this.labels.includes(tag)) {
        return ''
      }
      return 'red'
    },
     /* tag end */

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
</style>
