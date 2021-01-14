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
        <div class="house-query-search-button">
          <a-button @click="resetSearchForm()">
            重置
          </a-button>
          <a-button @click="newHouse()" :style="{ marginLeft: '10px' }">
            新建
          </a-button>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ background: '#ffffff', padding: '0 128px' }">
        <a-form :label-col="{ span: 2 }" :wrapper-col="{ span: 20 }" :label-align="left" style="margin-top: 10px">
          <a-form-item label="区域">
            <a-checkbox-group v-model="queryParam.area" :options="areaOptions" size="small" @change="areaRefresh">
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="板块" v-if="plateOptions.length">
            <a-checkbox-group v-model="queryParam.plate" :options="plateOptions" size="small" @change="refresh">
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="环线">
            <a-checkbox-group v-model="queryParam.loopSummary" :options="loopSummaryOptions" @change="refresh">
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="地铁线">
            <a-checkbox-group v-model="queryParam.metroLine" :options="metroLineOptions" @change="refresh">
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="地铁站" v-if="queryParam.metroLine && queryParam.metroLine.length">
            <a-checkbox-group v-model="queryParam.subwayStation" :options="getLineStation(queryParam.metroLine)">
            </a-checkbox-group>
          </a-form-item>
          <a-row :gutter="24">
            <a-col :span="12">
              <a-form-item label="学校" :label-col="{ span: 4 }">
                <a-checkbox-group v-model="queryParam.schoolType" @change="refresh">
                  <a-checkbox value="小学">小学</a-checkbox>
                  <a-checkbox value="中学">中学</a-checkbox>
                  <a-checkbox value="一贯制学校">一贯制学校</a-checkbox>
                </a-checkbox-group>
                <a-form-item :style="{ display: 'inline-block', width: '100px', 'margin-right': '10px' }">
                  <a-input style="width: 100%" v-model="queryParam.schoolName" size="small" />
                </a-form-item>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="户型" :label-col="{ span: 4 }">
                <a-checkbox-group v-model="queryParam.roomType" @change="refresh">
                  <a-checkbox value="1"> 一房 </a-checkbox>
                  <a-checkbox value="2"> 二房 </a-checkbox>
                  <a-checkbox value="3"> 三房 </a-checkbox>
                  <a-checkbox value="4"> 其他 </a-checkbox>
                </a-checkbox-group>
              </a-form-item>
            </a-col>
          </a-row>
          <a-form-item label="单价">
            <a-checkbox-group
              v-model="queryParam.averageLlistedPrice"
              :options="averageLlistedPriceOptions"
              @change="refresh"
            >
            </a-checkbox-group>
            <a-form-item :style="{ display: 'inline-block', width: '63px' }">
              <a-input style="width: 100%" v-model="queryParam.averageLlistedPriceMin" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '63px' }">
              <a-input style="width: 100%" v-model="queryParam.averageLlistedPriceMax" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> 万 </span>
          </a-form-item>
          <a-form-item label="总价">
            <a-select
              v-model="queryParam.totalPrice"
              mode="multiple"
              size="small"
              placeholder="请选择总价"
              style="width: 340px"
            >
              <a-select-option v-for="i in totalPriceOptions" :key="i.value" :value="i.value" :label="i.label">
                {{ i.label }}
              </a-select-option>
            </a-select>
            <a-form-item :style="{ display: 'inline-block', width: '63px', 'margin-left': '100px' }">
              <a-input style="width: 100%" v-model="queryParam.totalPriceMin" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '63px' }">
              <a-input style="width: 100%" v-model="queryParam.totalPriceMax" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> 万 </span>
          </a-form-item>
          <a-form-item label="面积">
            <!-- <a-checkbox-group v-model="queryParam.roomArea" :options="roomAreaOptions" @change="refresh">
            </a-checkbox-group> -->
            <a-select
              v-model="queryParam.roomArea"
              mode="multiple"
              size="small"
              placeholder="请选择面积段"
              style="width: 340px"
            >
              <a-select-option v-for="i in roomAreaOptions" :key="i.value" :value="i.value" :label="i.label">
                {{ i.label }}
              </a-select-option>
            </a-select>
            <a-form-item :style="{ display: 'inline-block', width: '63px', 'margin-left': '100px' }">
              <a-input style="width: 100%" v-model="queryParam.roomAreaMin" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '63px' }">
              <a-input style="width: 100%" v-model="queryParam.roomAreaMax" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '44px', textAlign: 'center' }"> 平方 </span>
          </a-form-item>
          <a-form-item label="建筑年代" v-if="advanced">
            <a-checkbox-group v-model="queryParam.constructionAge" :options="constructionAgeOptions" @change="refresh">
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="建筑类型" v-if="advanced">
            <a-checkbox-group v-model="queryParam.buildingType" @change="refresh">
              <a-checkbox value="塔楼"> 塔楼 </a-checkbox>
              <a-checkbox value="板楼"> 板楼 </a-checkbox>
              <a-checkbox value="塔板结合"> 塔板结合 </a-checkbox>
              <a-checkbox value="其他"> 其他 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="类型" v-if="advanced">
            <a-checkbox-group v-model="queryParam.cellAttributes">
              <a-checkbox value="住宅"> 住宅 </a-checkbox>
              <a-checkbox value="别墅"> 别墅 </a-checkbox>
              <a-checkbox value="其他"> 其他 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="电梯" v-if="advanced">
            <a-checkbox-group v-model="queryParam.isLift">
              <a-checkbox :value="true">
                有电梯
              </a-checkbox>
              <a-checkbox :value="false">
                无电梯
              </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
<<<<<<< HEAD
          <a-form-item label="" :style="{fontSize: '12px',textAlign: 'center' }" :wrapper-col="{ span: 22 }">
            <a @click="toggleAdvanced">
              显示更多搜索 <a-icon :type="advanced ? 'up' : 'down'" />
            </a>
=======
          <a-form-item label="" :style="{ fontSize: '12px', textAlign: 'right' }" :wrapper-col="{ span: 22 }">
            <a @click="toggleAdvanced"> 显示更多搜索 <a-icon :type="advanced ? 'up' : 'down'" /> </a>
>>>>>>> 241d3ffa02fcc65a0c0a568ff6f48a90402185c1
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
                <a-button @click="sortfilter('averageLlistedPrice')">
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
                          :label-col="{ span: 2 }"
                          :wrapper-col="{ span: 8 }"
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
                        <a-button @click="showdetail(community)">查看详情</a-button>
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
    <a-drawer :visible="moreQuery" width="80vw" @close="onClose">
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
                {{ resultdata.communityName
                }}<span
                  style="font-size:16px;color: #B71C2B; margin-left: 12px"
                >均价 {{ resultdata.averageLlistedPrice }}元/m²</span
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
              <a-button @click="edithouse()">
                编辑
              </a-button>
            </a-layout-sider>
          </a-layout>
        </a-layout-header>
        <a-layout-content class="show-house">
          <a-descriptions title="基本信息" :column="4">
            <a-descriptions-item label="楼盘名称">
              {{ resultdata.communityName }}
            </a-descriptions-item>
            <a-descriptions-item label="楼盘地址" :span="3">
              {{ resultdata.address }}
            </a-descriptions-item>
            <a-descriptions-item label="所属区域">
              {{ resultdata.area }}
            </a-descriptions-item>
            <a-descriptions-item label="所属板块">
              {{ resultdata.plate }}
            </a-descriptions-item>
            <a-descriptions-item label="环线">
              {{ resultdata.loopSummary }}
            </a-descriptions-item>
            <a-descriptions-item label="区域规划">
              {{ resultdata.districtPlanning }}
            </a-descriptions-item>
            <a-descriptions-item label="地铁线路">
              {{ resultdata.metroLine ? resultdata.metroLine + '号线' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="地铁站名">
              {{ resultdata.subwayStation }}
            </a-descriptions-item>
            <a-descriptions-item label="地铁距离">
              {{ resultdata.distance }}
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="楼盘概况" :column="4">
            <a-descriptions-item label="开发商" :span="2">
              {{ resultdata.developer }}
            </a-descriptions-item>
            <a-descriptions-item label="物业公司" :span="2">
              {{ resultdata.propertyCompany }}
            </a-descriptions-item>
            <a-descriptions-item label="类型">
              {{ resultdata.cellAttributes }}
            </a-descriptions-item>
            <a-descriptions-item label="权属">
              {{ resultdata.transactionOwnership }}
            </a-descriptions-item>
            <a-descriptions-item label="年限">
              {{ resultdata.propertyRights ? resultdata.propertyRights + '年' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="建筑时间">
              {{ resultdata.constructionAge ? resultdata.constructionAge + '年' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="小区栋数">
              {{ resultdata.buildingNumber ? resultdata.buildingNumber + '栋' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="小区户数">
              {{ resultdata.householdsNumber ? resultdata.householdsNumber + '户' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="停车位数">
              {{ resultdata.parkingSpacesNumber }}
            </a-descriptions-item>
            <a-descriptions-item label="人车分流">
              {{ resultdata.peopleAndVehicles ? '是' : '否' }}
            </a-descriptions-item>
            <a-descriptions-item label="容积率">
              {{ resultdata.volumeRate ? resultdata.volumeRate + '%' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="绿化率">
              {{ resultdata.greeningRate ? resultdata.greeningRate + '%' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="建筑类型">
              {{ resultdata.buildingType }}
            </a-descriptions-item>
            <a-descriptions-item label="是否电梯">
              {{ resultdata.isLift ? '是' : '否' }}
            </a-descriptions-item>
            <a-descriptions-item label="最大层数">
              {{ resultdata.maxFloor ? resultdata.maxFloor + '层' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="最小层数">
              {{ resultdata.minFloor ? resultdata.minFloor + '层' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="物业类型">
              {{ resultdata.propertyAttributes }}
            </a-descriptions-item>
            <a-descriptions-item label="物业费">
              {{ resultdata.propertyCosts ? resultdata.propertyCosts + '元/m²' : '' }}
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="学区情况" :column="4">
            <a-descriptions-item label="一贯制" :span="4">
              {{ resultdata.isConsistentSystem ? '是' : '否' }}
            </a-descriptions-item>
            <a-descriptions-item label="小学">
              {{ resultdata.primarySchool }}
            </a-descriptions-item>
            <a-descriptions-item label="梯队">
              {{ resultdata.echelonPerformance }}
            </a-descriptions-item>
            <a-descriptions-item label="中学">
              {{ resultdata.middleSchool }}
            </a-descriptions-item>
            <a-descriptions-item label="梯队">
              {{ resultdata.cityEchelon }}
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="价格及交易" :column="4">
            <a-descriptions-item label="1居面积" :span="1">
              {{ resultdata.roomArea1Min ? resultdata.roomArea1Min + '-' : ''
              }}{{ resultdata.roomArea1Max ? resultdata.roomArea1Max + 'm²' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="1居价格" :span="1">
              {{ resultdata.roomPriceRange1Min ? resultdata.roomPriceRange1Min + '-' : ''
              }}{{ resultdata.roomPriceRange1Max ? resultdata.roomPriceRange1Max + '万' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="2居面积" :span="1">
              {{ resultdata.roomArea2Min ? resultdata.roomArea2Min + '-' : ''
              }}{{ resultdata.roomArea2Max ? resultdata.roomArea2Max + 'm²' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="2居价格" :span="1">
              {{ resultdata.roomPriceRange2Min ? resultdata.roomPriceRange2Min + '-' : ''
              }}{{ resultdata.roomPriceRange2Max ? resultdata.roomPriceRange2Max + '万' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="3居面积" :span="1">
              {{ resultdata.roomArea3Min ? resultdata.roomArea3Min + '-' : ''
              }}{{ resultdata.roomArea3Max ? resultdata.roomArea3Max + 'm²' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="3居价格" :span="1">
              {{ resultdata.roomPriceRange3Min ? resultdata.roomPriceRange3Min + '-' : ''
              }}{{ resultdata.roomPriceRange3Max ? resultdata.roomPriceRange3Max + '万' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="多居面积" :span="1">
              {{ resultdata.roomArea4Min ? resultdata.roomArea4Min + '-' : ''
              }}{{ resultdata.roomArea4Max ? resultdata.roomArea4Max + 'm²' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="多居价格" :span="1">
              {{ resultdata.roomPriceRange4Min ? resultdata.roomPriceRange4Min + '-' : ''
              }}{{ resultdata.roomPriceRange4Max ? resultdata.roomPriceRange4Max + '万' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="在售">
              {{ resultdata.inStock ? resultdata.inStock + '套' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="在租">
              {{ resultdata.positiveRent ? resultdata.positiveRent + '套' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="成交量">
              {{ resultdata.volume2019 ? resultdata.volume2019 + '套' : '' }}
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="综合" :column="4">
            <a-descriptions-item label="概括介绍" :span="4">
              {{ houseData.communityDesc }}
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
                {{ houseData.communityName
                }}<span
                  style="font-size:16px;color: #B71C2B; margin-left: 12px"
                >均价
                  <a-input-number v-model="houseData.averageLlistedPrice" size="small" style="width: 100px" />
                  元/m²</span
                >
              </div>
              <div>
                <template v-for="tag in tags">
                  <a-tag :key="tag" closable @close="() => handleClose(tag)" :color="isCustomTag(tag)">
                    {{ tag }}
                  </a-tag>
                </template>
                <!-- <a-input
                  v-if="inputVisible"
                  ref="input"
                  type="text"
                  size="small"
                  :style="{ width: '78px' }"
                  :value="inputValue"
                  @change="handleInputChange"
                  @blur="handleInputConfirm"
                  @keyup.enter="handleInputConfirm"
                /> -->
                <AutoComplete
                  :value="inputValue"
                  v-if="inputVisible"
                  style="width: 100px"
                  :data-source="labels"
                  :filter-option="filterOption"
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
              <a-button @click="edithouse()">
                保存
              </a-button>
            </a-layout-sider>
          </a-layout>
        </a-layout-header>
        <a-layout-content class="edit-house">
          <a-descriptions title="基本信息" :column="4">
            <a-descriptions-item label="楼盘名称">
              <a-input v-model="houseData.communityName" size="small" style="width: 150px" />
            </a-descriptions-item>
            <a-descriptions-item label="楼盘地址" :span="3">
              <a-input v-model="houseData.address" size="small" style="width: 426px" />
            </a-descriptions-item>
            <a-descriptions-item label="所属区域">
              <a-select
                :options="areaOptions"
                v-model="houseData.area"
                size="small"
                style="width: 150px"
                @change="areaRefresh2()"
              ></a-select>
            </a-descriptions-item>
            <a-descriptions-item label="所属板块">
              <a-select :options="plateOptions2" v-model="houseData.plate" size="small" style="width: 150px"></a-select>
            </a-descriptions-item>
            <a-descriptions-item label="环线">
              <a-select
                :options="loopSummaryOptions"
                v-model="houseData.loopSummary"
                size="small"
                style="width: 150px"
              ></a-select>
            </a-descriptions-item>
            <a-descriptions-item label="区域规划">
              <a-select v-model="houseData.districtPlanning" size="small" style="width: 150px">
                <a-select-option value="城市副中心">城市副中心</a-select-option>
                <a-select-option value="城市中心">城市中心</a-select-option>
              </a-select>
            </a-descriptions-item>
            <a-descriptions-item label="地铁线路">
              <a-select
                :options="metroLineOptions"
                v-model="houseData.metroLine"
                size="small"
                style="width: 150px"
                @change="getstation('houseData')"
              ></a-select>
            </a-descriptions-item>
            <a-descriptions-item label="地铁站名">
              <a-select
                :options="stationOptions"
                v-model="houseData.subwayStation"
                size="small"
                style="width: 150px"
                @change="getstation('houseData')"
              ></a-select>
            </a-descriptions-item>
            <a-descriptions-item label="地铁距离">
              <a-input v-model="houseData.distance" size="small" style="width: 90px" addon-after="米" />
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="楼盘概况" :column="4">
            <a-descriptions-item label="开发商">
              <a-input v-model="houseData.developer" size="small" style="width: 150px" />
            </a-descriptions-item>
            <a-descriptions-item label="物业公司" :span="3">
              <a-input v-model="houseData.propertyCompany" size="small" />
            </a-descriptions-item>
            <a-descriptions-item label="类型">
              <a-select v-model="houseData.cellAttributes" size="small" style="width: 100px">
                <a-select-option value="住宅"> 住宅 </a-select-option>
                <a-select-option value="别墅"> 别墅 </a-select-option>
              </a-select>
            </a-descriptions-item>
            <a-descriptions-item label="权属">
              <a-select v-model="houseData.transactionOwnership" size="small" style="width: 100px">
                <a-select-option value="商品房"> 商品房 </a-select-option>
                <a-select-option value="毛坯房"> 毛坯房 </a-select-option>
                <a-select-option value="售后工房"> 售后工房 </a-select-option>
                <a-select-option value="其他"> 其他 </a-select-option>
              </a-select>
            </a-descriptions-item>
            <a-descriptions-item label="年限">
              <a-input v-model="houseData.propertyRights" style="width: 100px" size="small" addon-after="年" />
            </a-descriptions-item>
            <a-descriptions-item label="建筑时间">
              <a-input v-model="houseData.constructionAge" style="width: 100px" size="small" addon-after="年" />
            </a-descriptions-item>
            <a-descriptions-item label="小区栋数">
              <a-input v-model="houseData.buildingNumber" style="width: 100px" size="small" addon-after="栋" />
            </a-descriptions-item>
            <a-descriptions-item label="小区户数">
              <a-input v-model="houseData.householdsNumber" style="width: 100px" size="small" addon-after="户" />
            </a-descriptions-item>
            <a-descriptions-item label="停车位数">
              <a-input v-model="houseData.parkingSpacesNumber" style="width: 100px" size="small" />
            </a-descriptions-item>
            <a-descriptions-item label="人车分流">
              <a-select
                :options="booleanOptions"
                v-model="houseData.peopleAndVehicles"
                style="width: 100px"
                size="small"
              >
              </a-select>
            </a-descriptions-item>
            <a-descriptions-item label="容积率">
              <a-input v-model="houseData.volumeRate" style="width: 100px" size="small" addon-after="%" />
            </a-descriptions-item>
            <a-descriptions-item label="绿化率">
              <a-input v-model="houseData.greeningRate" style="width: 100px" size="small" addon-after="%" />
            </a-descriptions-item>
            <a-descriptions-item label="建筑类型">
              <a-select v-model="houseData.buildingType" size="small" style="width: 100px">
                <a-select-option value="塔楼"> 塔楼 </a-select-option>
                <a-select-option value="板楼"> 板楼 </a-select-option>
                <a-select-option value="塔板结合"> 塔板结合 </a-select-option>
                <a-select-option value="其他"> 其他 </a-select-option>
              </a-select>
            </a-descriptions-item>
            <a-descriptions-item label="是否电梯">
              <a-select :options="booleanOptions" v-model="houseData.isLift" style="width: 100px" size="small">
              </a-select>
            </a-descriptions-item>
            <a-descriptions-item label="最大层数">
              <a-input v-model="houseData.maxFloor" style="width: 100px" size="small" addon-after="层" />
            </a-descriptions-item>
            <a-descriptions-item label="最小层数">
              <a-input v-model="houseData.minFloor" style="width: 100px" size="small" addon-after="层" />
            </a-descriptions-item>
            <a-descriptions-item label="物业类型" style="width: 100px">
              <a-select v-model="houseData.propertyAttributes" size="small">
                <a-select-option value="办公"> 办公 </a-select-option>
                <a-select-option value="别墅"> 别墅 </a-select-option>
                <a-select-option value="公寓住宅"> 公寓住宅 </a-select-option>
                <a-select-option value="商业"> 商业 </a-select-option>
                <a-select-option value="商住楼"> 商住楼 </a-select-option>
                <a-select-option value="酒店"> 酒店 </a-select-option>
              </a-select>
            </a-descriptions-item>
            <a-descriptions-item label="物业费">
              <a-input v-model="houseData.propertyCosts" style="width: 100px" size="small" addon-after="元/m²" />
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="学区情况" :column="4">
            <a-descriptions-item label="一贯制" :span="4">
              <a-select
                :options="booleanOptions"
                v-model="houseData.isConsistentSystem"
                style="width: 100px"
                size="small"
              >
              </a-select>
            </a-descriptions-item>
            <a-descriptions-item label="小学">
              <a-input v-model="houseData.primarySchool" size="small" style="width: 100px" />
            </a-descriptions-item>
            <a-descriptions-item label="梯队">
              <a-select
                :options="echelonPerformanceOptions"
                v-model="houseData.echelonPerformance"
                style="width: 100px"
                size="small"
              />
            </a-descriptions-item>
            <a-descriptions-item label="中学">
              <a-input v-model="houseData.middleSchool" size="small" style="width: 100px" />
            </a-descriptions-item>
            <a-descriptions-item label="梯队">
              <a-select :options="cityEchelonOptions" v-model="houseData.cityEchelon" style="width: 100px" size="small">
              </a-select>
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="价格及交易" :column="4">
            <a-descriptions-item label="1居面积" :span="1">
              <a-input v-model="houseData.roomArea1Min" style="width: 56px" size="small" />-
              <a-input
                v-model="houseData.roomArea1Max"
                style="width: 90px; margin-right:5px"
                size="small"
                addon-after="m²"
              />
            </a-descriptions-item>
            <a-descriptions-item label="1居价格" :span="1">
              <a-input v-model="houseData.roomPriceRange1Min" style="width: 65px" size="small" />-
              <a-input v-model="houseData.roomPriceRange1Max" style="width: 100px" size="small" addon-after="万" />
            </a-descriptions-item>
            <a-descriptions-item label="2居面积" :span="1">
              <a-input v-model="houseData.roomArea2Min" style="width: 56px" size="small" />-
              <a-input
                v-model="houseData.roomArea2Max"
                style="width: 90px; margin-right:5px"
                size="small"
                addon-after="m²"
              />
            </a-descriptions-item>
            <a-descriptions-item label="2居价格" :span="1">
              <a-input v-model="houseData.roomPriceRange2Min" style="width: 65px" size="small" />-
              <a-input v-model="houseData.roomPriceRange2Max" style="width: 100px" size="small" addon-after="万" />
            </a-descriptions-item>
            <a-descriptions-item label="3居面积" :span="1">
              <a-input v-model="houseData.roomArea3Min" style="width: 56px" size="small" />-
              <a-input
                v-model="houseData.roomArea3Max"
                style="width: 90px; margin-right:5px"
                size="small"
                addon-after="m²"
              />
            </a-descriptions-item>
            <a-descriptions-item label="3居价格" :span="1">
              <a-input v-model="houseData.roomPriceRange3Min" style="width: 65px" size="small" />-
              <a-input v-model="houseData.roomPriceRange3Max" style="width: 100px" size="small" addon-after="万" />
            </a-descriptions-item>
            <a-descriptions-item label="多居面积" :span="1">
              <a-input v-model="houseData.roomArea4Min" style="width: 56px" size="small" />-
              <a-input
                v-model="houseData.roomArea4Max"
                style="width: 90px; margin-right:5px"
                size="small"
                addon-after="m²"
              />
            </a-descriptions-item>
            <a-descriptions-item label="多居价格" :span="1">
              <a-input v-model="houseData.roomPriceRange4Min" style="width: 65px" size="small" />-
              <a-input v-model="houseData.roomPriceRange4Max" style="width: 100px" size="small" addon-after="万" />
            </a-descriptions-item>
            <a-descriptions-item label="在售">
              <a-input v-model="houseData.inStock" style="width: 90px" size="small" addon-after="套" />
            </a-descriptions-item>
            <a-descriptions-item label="在租">
              <a-input v-model="houseData.positiveRent" style="width: 90px" size="small" addon-after="套" />
            </a-descriptions-item>
            <a-descriptions-item label="年成交">
              <a-input v-model="houseData.volume2019" style="width: 90px" size="small" addon-after="套" />
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="综合" :column="4">
            <a-descriptions-item label="概括介绍" :span="4">
              <a-textarea
                v-model="houseData.communityDesc"
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
  plateOptions,
  plateOptions2,
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
      // create model
      visible: false,
      confirmLoading: false,
      mdl: null,
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      moreQuery: false,
      inputVisible: false,
      tags: [],
      colors: ['pink', 'orange', 'red', 'green', 'cyan', 'blue', 'purple'],
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        const requestParameters = Object.assign({ sort: 'id,asc' }, parameter, this.queryParam)
        if (this.queryParam.checkedList) {
          this.queryParam.checkedList.forEach(e => {
            requestParameters[e] = true
          })
          delete requestParameters.checkedList
        }
        console.log('loadData request parameters:', requestParameters)
        return getHouse(requestParameters).then(res => {
          console.log(res)
          return res
        })
      },
      selectedRowKeys: [],
      selectedRows: [],
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 21,
            offset: 1
          },
          sm: {
            span: 16,
            offset: 6
          }
        }
      },
      otherOptions: ['isLift', '近地铁', 'doubleBalcony'],
      dataSource: [],
      housetypes: [],
      housetypes1: [],
      prices: [],
      prices2: [],
      left: 'left',
      results: [],
      resultdata: {},
      sort: 'averageLlistedPrice,asc',
      edit: false,
      houseData: {},
      stationOptions: [],
      labels: [],
      areaPlate,
      plateOptions,
      plateOptions2,
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
      statusMap,
      sortType: 'asc'
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
    document.getElementById('app').addEventListener('scroll', this.Scroll)
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
    handleSub (record) {
      if (record.status !== 0) {
        this.$message.info(`${record.no} 订阅成功`)
      } else {
        this.$message.error(`${record.no} 订阅失败，规则已关闭`)
      }
    },
    onClose () {
      this.moreQuery = false
      this.edit = false
      this.refresh()
    },
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    toggleAdvanced () {
      this.advanced = !this.advanced
    },
    resetSearchForm () {
      this.queryParam = {
        date: moment(new Date()),
        area: []
      }
      this.areaRefresh()
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

    refresh (a) {
      // this.$refs.table.refresh(true)
      // console.log(Array.from(a))
      this.search()
    },

    areaRefresh (a) {
      plateOptions.splice(0)
      this.queryParam.area.forEach(e => {
        plateOptions.push(...areaPlate[e])
      })
      this.search()
    },

    areaRefresh2 () {
      if (this.houseData.area) {
        this.plateOptions2.splice(0)
        areaPlate[this.houseData.area].forEach(v => {
          plateOptions2.push({ label: v, value: v })
        })
      }
    },

    showdetail (community) {
      this.moreQuery = true
      this.resultdata = community
      if (community.labels) {
        this.tags = community.labels.split(',')
      } else {
        this.tags = []
      }
    },
    sortfilter (type) {
      console.log(type)
      if (type) {
        this.sort = type + ',' + this.sortType
        this.search()
      }
      if (this.sortType === 'asc') {
        this.sortType = 'desc'
      } else {
        this.sortType = 'asc'
      }
    },

    edithouse () {
      if (this.edit) {
        // save
        console.log('save:', this.houseData)
        this.houseData.labels = this.tags.join(',')
        saveHouse(this.houseData)
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
      } else {
        // edit
        this.houseData = this.resultdata
        this.houseData.peopleAndVehicles = Number(this.houseData.peopleAndVehicles)
        this.houseData.isLift = Number(this.houseData.isLift)
        this.houseData.isConsistentSystem = Number(this.houseData.isConsistentSystem)
        this.areaRefresh2()
        this.getstation('houseData')
        this.edit = !this.edit
      }
    },

    newHouse () {
      this.moreQuery = true
      this.houseData = {}
      this.resultdata = this.houseData
      this.tags = []
      this.houseData.peopleAndVehicles = 0
      this.houseData.isLift = 1
      this.houseData.isConsistentSystem = 0
      console.log(this.houseData)
      this.areaRefresh2()
      this.edit = true
    },

    handleClose (removedTag) {
      const tags = this.tags.filter(tag => tag !== removedTag)
      console.log(tags)
      this.tags = tags
    },

    showInput () {
      this.inputVisible = true
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
        inputVisible: false,
        inputValue: ''
      })
    },

    getstation (type) {
      const _this = this
      if (type) {
        this.stationOptions.splice(0)
        this.subwaystation.forEach(v => {
          if (v.line === _this[type].metroLine) {
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

    filterOption (input, option) {
      return option.componentOptions.children[0].text.toUpperCase().indexOf(input.toUpperCase()) >= 0
    },
    isCustomTag (tag) {
      console.log(tag)
      if (this.labels.includes(tag)) {
        return ''
      }
      return 'red'
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
