<template>
  <page-header-wrapper>
    <a-layout>
      <a-layout-header :style="{ background: '#f5f5f5', padding: 0 }">
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
            <template slot="dataSource">
              <!-- <a-select-option v-for="item in dataSource" :key="item.category" :title="item.category">
                Found {{ item.query }} on
                <a :href="`https://s.taobao.com/search?q=${item.query}`" target="_blank" rel="noopener noreferrer">
                  {{ item.category }}
                </a>
                <span className="global-search-item-count">{{ item.count }} results</span>
              </a-select-option> -->
            </template>
            <a-input>
              <!-- <a-icon slot="suffix" type="search" class="certain-category-icon" :click="search" /> -->
              <a-button
                slot="suffix"
                style="margin-right: -12px"
                class="search-btn"
                size="large"
                type="primary"
                @click="search"
              >
                查询
              </a-button>
            </a-input>
          </AutoComplete>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ background: '#ffffff', margin: '24px 16px 0', padding: '0 128px' }">
        <a-form :label-col="{ span: 2 }" :wrapper-col="{ span: 20 }" :label-align="left">
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
          <a-form-item label="学校">
            <a-checkbox-group v-model="queryParam.schoolType" @change="refresh">
              <a-checkbox value="小学">小学</a-checkbox>
              <a-checkbox value="中学">中学</a-checkbox>
              <a-checkbox value="一贯制学校">一贯制学校</a-checkbox>
            </a-checkbox-group>
            <a-form-item :style="{ display: 'inline-block', width: '100px', 'margin-right': '10px' }">
              <a-input style="width: 100%" v-model="queryParam.schoolName" size="small" />
            </a-form-item>
            <a-button size="small" @click="refresh">确定</a-button>
          </a-form-item>
          <a-form-item label="户型">
            <a-checkbox-group v-model="queryParam.roomType" @change="refresh">
              <a-checkbox value="1"> 一房 </a-checkbox>
              <a-checkbox value="2"> 二房 </a-checkbox>
              <a-checkbox value="3"> 三房 </a-checkbox>
              <a-checkbox value="4"> 其他 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
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
            <a-button size="small" @click="refresh">确定</a-button>
          </a-form-item>
          <a-form-item label="总价">
            <a-checkbox-group v-model="queryParam.totalPrice" :options="totalPriceOptions" @change="refresh">
            </a-checkbox-group>
            <a-form-item :style="{ display: 'inline-block', width: '63px' }">
              <a-input style="width: 100%" v-model="queryParam.totalPriceMin" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '63px' }">
              <a-input style="width: 100%" v-model="queryParam.totalPriceMax" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> 万 </span>
            <a-button size="small" @click="refresh">确定</a-button>
          </a-form-item>
          <a-form-item label="面积">
            <a-checkbox-group v-model="queryParam.roomArea" :options="roomAreaOptions" @change="refresh">
            </a-checkbox-group>
            <a-form-item :style="{ display: 'inline-block', width: '63px' }">
              <a-input style="width: 100%" v-model="queryParam.roomAreaMin" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '63px' }">
              <a-input style="width: 100%" v-model="queryParam.roomAreaMax" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '44px', textAlign: 'center' }"> 平方 </span>
            <a-button size="small" @click="refresh">确定</a-button>
          </a-form-item>
          <a-form-item label="建筑年代">
            <a-checkbox-group v-model="queryParam.constructionAge" :options="constructionAgeOptions" @change="refresh">
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="建筑类型">
            <a-checkbox-group v-model="queryParam.buildingType" @change="refresh">
              <a-checkbox value="塔楼"> 塔楼 </a-checkbox>
              <a-checkbox value="板楼"> 板楼 </a-checkbox>
              <a-checkbox value="塔板结合"> 塔板结合 </a-checkbox>
              <a-checkbox value="其他"> 其他 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="类型">
            <a-checkbox-group v-model="queryParam.cellAttributes" @change="refresh">
              <a-checkbox value="住宅"> 住宅 </a-checkbox>
              <a-checkbox value="别墅"> 别墅 </a-checkbox>
              <a-checkbox value="其他"> 其他 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="电梯">
            <!-- <a-checkbox-group v-model="queryParam.isLift" @change="refresh">
              <a-checkbox value="true"> 有电梯 </a-checkbox>
              <a-checkbox value="false"> 无电梯 </a-checkbox>
            </a-checkbox-group> -->
            <a-radio-group v-model="queryParam.isLift" @change="refresh">
              <a-radio :value="true">
                有电梯
              </a-radio>
              <a-radio :value="false">
                无电梯
              </a-radio>
            </a-radio-group>
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
                <a-button @click="sortfilter('id')">
                  综合排序
                </a-button>
                <a-button @click="sortfilter('totalPrice')">
                  房屋总价
                </a-button>
                <a-button @click="sortfilter('averageLlistedPrice')">
                  房屋单价
                </a-button>
                <a-button @click="sortfilter('volume2019')">
                  成交量
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
                      </a-layout-footer>
                    </a-layout>
                  </a-layout-content>
                  <a-layout-sider :style="{ background: '#ffffff', padding: 0 }" width="200">
                    <a-layout :style="{ background: '#ffffff', height: '100%', 'text-align': 'center' }">
                      <a-layout-header
                        :style="{ background: '#ffffff', padding: 0, color: '#B71C2B', 'font-size': '16px' }"
                        width="200"
                      >
                        均价<span style="font-size:24px;font-weight:bold">{{ community.averageLlistedPrice }}</span
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
                }}<span style="font-size:16px;color: #B71C2B;">均价 {{ resultdata.averageLlistedPrice }}元/m²</span>
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
              <a-button @click="newHouse()" type="danger">
                新建
              </a-button>
            </a-layout-sider>
          </a-layout>
        </a-layout-header>
        <a-layout-content class="show-house">
          <a-descriptions title="基本信息" :column="4" >
            <a-descriptions-item label="楼盘名称" :span="2">
              {{ resultdata.communityName }}
            </a-descriptions-item>
            <a-descriptions-item label="楼盘地址" :span="2">
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
            <!-- <a-descriptions-item label="板块距离">
              <!-- {{ resultdata.loopSummary }} -->
            </a-descriptions-item> -->
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
          <a-descriptions title="楼盘概况" :column="4" >
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
            <a-descriptions-item label="九年一贯制" :span="4">
              {{ resultdata.isConsistentSystem ? '是' : '否' }}
            </a-descriptions-item>
            <a-descriptions-item label="小学">
              {{ resultdata.primarySchool }}
            </a-descriptions-item>
            <a-descriptions-item label="小学梯队">
              {{ resultdata.echelonPerformance }}
            </a-descriptions-item>
            <a-descriptions-item label="中学">
              {{ resultdata.middleSchool }}
            </a-descriptions-item>
            <a-descriptions-item label="中学梯队">
              {{ resultdata.cityEchelon }}
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="价格及交易" :column="4">
            <a-descriptions-item label="1居">
              {{ resultdata.roomArea1Min ? resultdata.roomArea1Min + '-' : ''
              }}{{ resultdata.roomArea1Max ? resultdata.roomArea1Max + 'm²' : '' }} {{
                resultdata.roomPriceRange1Min ? resultdata.roomPriceRange1Min + '-' : ''
              }}{{ resultdata.roomPriceRange1Max ? resultdata.roomPriceRange1Max + '万' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="2居">
              {{ resultdata.roomArea2Min ? resultdata.roomArea2Min + '-' : ''
              }}{{ resultdata.roomArea2Max ? resultdata.roomArea2Max + 'm²' : '' }} {{
                resultdata.roomPriceRange2Min ? resultdata.roomPriceRange2Min + '-' : ''
              }}{{ resultdata.roomPriceRange2Max ? resultdata.roomPriceRange2Max + '万' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="3居">
              {{ resultdata.roomArea3Min ? resultdata.roomArea3Min + '-' : ''
              }}{{ resultdata.roomArea3Max ? resultdata.roomArea3Max + 'm²' : '' }} {{
                resultdata.roomPriceRange3Min ? resultdata.roomPriceRange3Min + '-' : ''
              }}{{ resultdata.roomPriceRange3Max ? resultdata.roomPriceRange3Max + '万' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="多居">
              {{ resultdata.roomArea4Min ? resultdata.roomArea4Min + '-' : ''
              }}{{ resultdata.roomArea4Max ? resultdata.roomArea4Max + 'm²' : '' }} {{
                resultdata.roomPriceRange4Min ? resultdata.roomPriceRange4Min + '-' : ''
              }}{{ resultdata.roomPriceRange4Max ? resultdata.roomPriceRange4Max + '万' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="在售">
              {{ resultdata.inStock ? resultdata.inStock + '套' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="在租">
              {{ resultdata.positiveRent ? resultdata.positiveRent + '套' : '' }}
            </a-descriptions-item>
            <a-descriptions-item label="2019年成交">
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
                  style="font-size:16px;color: #B71C2B;"
                >均价
                  <a-input-number v-model="houseData.averageLlistedPrice" size="small" style="width: 100px" />
                  元/m²</span
                >
              </div>
              <div>
                <template v-for="tag in tags">
                  <a-tag :key="tag" closable @close="() => handleClose(tag)">
                    {{ tag }}
                  </a-tag>
                </template>
                <a-input
                  v-if="inputVisible"
                  ref="input"
                  type="text"
                  size="small"
                  :style="{ width: '78px' }"
                  :value="inputValue"
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
            <!-- <a-descriptions-item label="板块距离">
            </a-descriptions-item> -->
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
              ></a-select>
            </a-descriptions-item>
            <a-descriptions-item label="地铁站名">
              <a-input v-model="houseData.subwayStation" size="small" />
            </a-descriptions-item>
            <a-descriptions-item label="地铁距离">
              <a-input v-model="houseData.distance" size="small" style="width: 90px" addon-after="米"/>
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="楼盘概况" :column="4" >
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
              <a-input v-model="houseData.propertyRights" style="width: 100px" size="small" addon-after="年"/>
            </a-descriptions-item>
            <a-descriptions-item label="建筑时间">
              <a-input v-model="houseData.constructionAge" style="width: 100px" size="small" addon-after="年"/>
            </a-descriptions-item>
            <a-descriptions-item label="小区栋数">
              <a-input v-model="houseData.buildingNumber" style="width: 100px" size="small" addon-after="栋"/>
            </a-descriptions-item>
            <a-descriptions-item label="小区户数">
              <a-input v-model="houseData.householdsNumber" style="width: 100px" size="small" addon-after="户"/>
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
              <a-input v-model="houseData.volumeRate" style="width: 100px" size="small" addon-after="%"/>
            </a-descriptions-item>
            <a-descriptions-item label="绿化率">
              <a-input v-model="houseData.greeningRate" style="width: 100px" size="small" addon-after="%"/>
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
            <a-descriptions-item label="九年一贯制" :span="4">
              <a-select
                :options="booleanOptions"
                v-model="houseData.isConsistentSystem"
                style="width: 100px"
                size="small"
              >
              </a-select>
            </a-descriptions-item>
            <a-descriptions-item label="小学">
              <a-input v-model="houseData.primarySchool" size="small" />
            </a-descriptions-item>
            <a-descriptions-item label="小学梯队">
              <a-select
                :options="echelonPerformanceOptions"
                v-model="houseData.echelonPerformance"
                style="width: 100px"
                size="small"
              />
            </a-descriptions-item>
            <a-descriptions-item label="中学">
              <a-input v-model="houseData.middleSchool" size="small" />
            </a-descriptions-item>
            <a-descriptions-item label="中学梯队">
              <a-select
                :options="cityEchelonOptions"
                v-model="houseData.cityEchelon"
                style="width: 100px"
                size="small"
              >
              </a-select>
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="价格及交易" :column="4">
            <a-descriptions-item label="1居" :span="2">
              <a-input v-model="houseData.roomArea1Min" style="width: 56px" size="small"/>-
              <a-input v-model="houseData.roomArea1Max" style="width: 90px; margin-right:5px" size="small" addon-after="m²"/>
              <a-input v-model="houseData.roomPriceRange1Min" style="width: 65px" size="small"/>-
              <a-input v-model="houseData.roomPriceRange1Max" style="width: 100px" size="small" addon-after="万"/>
            </a-descriptions-item>
            <a-descriptions-item label="2居" :span="2">
              <a-input v-model="houseData.roomArea2Min" style="width: 56px" size="small"/>-
              <a-input v-model="houseData.roomArea2Max" style="width: 90px; margin-right:5px" size="small" addon-after="m²"/>
              <a-input v-model="houseData.roomPriceRange2Min" style="width: 65px" size="small"/>-
              <a-input v-model="houseData.roomPriceRange2Max" style="width: 100px" size="small" addon-after="万"/>
            </a-descriptions-item>
            <a-descriptions-item label="3居" :span="2">
              <a-input v-model="houseData.roomArea3Min" style="width: 56px" size="small"/>-
              <a-input v-model="houseData.roomArea3Max" style="width: 90px; margin-right:5px" size="small" addon-after="m²"/>
              <a-input v-model="houseData.roomPriceRange3Min" style="width: 65px" size="small"/>-
              <a-input v-model="houseData.roomPriceRange3Max" style="width: 100px" size="small" addon-after="万"/>
            </a-descriptions-item>
            <a-descriptions-item label="多居" :span="2">
              <a-input v-model="houseData.roomArea4Min" style="width: 56px" size="small"/>-
              <a-input v-model="houseData.roomArea4Max" style="width: 90px; margin-right:5px" size="small" addon-after="m²"/>
              <a-input v-model="houseData.roomPriceRange4Min" style="width: 65px" size="small"/>-
              <a-input v-model="houseData.roomPriceRange4Max" style="width: 100px" size="small" addon-after="万"/>
            </a-descriptions-item>
            <a-descriptions-item label="在售">
              <a-input v-model="houseData.inStock" style="width: 90px" size="small" addon-after="套"/>
            </a-descriptions-item>
            <a-descriptions-item label="在租">
              <a-input v-model="houseData.positiveRent" style="width: 90px" size="small" addon-after="套"/>
            </a-descriptions-item>
            <a-descriptions-item label="年成交">
              <a-input v-model="houseData.volume2019" style="width: 90px" size="small" addon-after="套"/>
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="综合" :column="4">
            <a-descriptions-item label="概括介绍" :span="4">
              <a-textarea v-model="houseData.communityDesc" style="width: 800px" size="small" :auto-size="{ minRows: 2, maxRows: 6 }"/>
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
import { getHouse, saveHouse } from '@/api/manage'
import { AutoComplete } from 'ant-design-vue'

const statusMap = {
  0: {
    status: 'default',
    text: '关闭'
  },
  1: {
    status: 'processing',
    text: '运行中'
  },
  2: {
    status: 'success',
    text: '已上线'
  },
  3: {
    status: 'error',
    text: '异常'
  }
}
const plateOptions = []
const plateOptions2 = []
const cityEchelonOptions = [
  {
    'label': '市一梯队',
    'value': '市一梯队'
  },
  {
    'label': '市二梯队',
    'value': '市二梯队'
  },
  {
    'label': '市三梯队',
    'value': '市三梯队'
  },
  {
    'label': '市四梯队',
    'value': '市四梯队'
  },
  {
    'label': '区一梯队',
    'value': '区一梯队'
  },
  {
    'label': '区二梯队',
    'value': '区二梯队'
  },
  {
    'label': '区三梯队',
    'value': '区三梯队'
  },
  {
    'label': '区四梯队',
    'value': '区四梯队'
  },
  {
    'label': '其他',
    'value': '其他'
  }
]
const echelonPerformanceOptions = [
  {
    'label': '一梯队',
    'value': '一梯队'
  },
  {
    'label': '二梯队',
    'value': '二梯队'
  },
  {
    'label': '三梯队',
    'value': '三梯队'
  },
  {
    'label': '菜小',
    'value': '菜小'
  },
  {
    'label': '其他',
    'value': '其他'
  }
]
const areaPlate = {
  青浦: ['白鹤', '华新', '金泽', '练塘', '夏阳', '香花桥', '徐泾', '盈浦', '赵巷', '重固', '朱家角'],
  松江: [
    '泗泾',
    '松江老城',
    '小昆山',
    '九亭',
    '佘山',
    '车墩',
    '新桥',
    '松江大学城',
    '松江新城',
    '莘闵别墅',
    '石湖荡',
    '叶榭',
    '泖港',
    '新浜'
  ],
  嘉定: [
    '江桥',
    '菊园新区',
    '嘉定新城',
    '安亭',
    '南翔',
    '徐行',
    '丰庄',
    '外冈',
    '马陆',
    '华亭',
    '嘉定老城',
    '新成路',
    '上大'
  ],
  奉贤: ['南桥', '海湾', '奉城', '青村', '四团', '奉贤金汇', '柘林', '西渡', '庄行'],
  浦东: [
    '临港新城',
    '梅园',
    '康桥',
    '书院镇',
    '曹路',
    '万祥镇',
    '唐镇',
    '杨思前滩',
    '北蔡',
    '花木',
    '御桥',
    '外高桥',
    '合庆',
    '惠南',
    '张江',
    '洋泾',
    '高行',
    '川沙',
    '泥城镇',
    '周浦',
    '祝桥',
    '大团镇',
    '杨东',
    '金桥',
    '老港镇',
    '新场',
    '世博',
    '南码头',
    '塘桥',
    '三林',
    '航头',
    '宣桥',
    '陆家嘴',
    '源深',
    '金杨',
    '联洋',
    '碧云',
    '潍坊'
  ],
  宝山: [
    '上大',
    '罗泾',
    '罗店',
    '大场镇',
    '杨行',
    '顾村',
    '淞宝',
    '淞南',
    '大华',
    '共康',
    '高境',
    '月浦',
    '通河',
    '张庙',
    '共富'
  ],
  闵行: [
    '莘庄',
    '颛桥',
    '浦江',
    '马桥',
    '龙柏',
    '华漕',
    '老闵行',
    '金汇',
    '金虹桥',
    '吴泾',
    '春申',
    '古美',
    '梅陇',
    '静安新城',
    '七宝',
    '航华'
  ],
  徐汇: [
    '建国西路',
    '徐汇滨江',
    '田林',
    '龙华',
    '漕河泾',
    '康健',
    '衡山路',
    '徐家汇',
    '斜土路',
    '华泾',
    '华东理工',
    '植物园',
    '长桥',
    '上海南站',
    '万体馆'
  ],
  长宁: ['北新泾', '仙霞', '西郊', '天山', '新华路', '中山公园', '古北', '镇宁路', '虹桥'],
  静安: ['大宁', '不夜城', '水和', '西藏北路', '彭浦', '江宁路', '闸北公园', '阳城', '南京西路', '曹家渡', '静安寺'],
  普陀: ['长风', '光新', '长征', '真如', '武宁', '甘泉宜川', '真光', '万里', '桃浦', '中远两湾城', '曹杨', '长寿路'],
  杨浦: ['东外滩', '周家嘴路', '控江路', '中原', '新江湾城', '五角场', '黄兴公园', '鞍山', '高境'],
  黄浦: [
    '豫园',
    '蓬莱公园',
    '老西门',
    '南京东路',
    '人民广场',
    '董家渡',
    '世博滨江',
    '新天地',
    '淮海中路',
    '打浦桥',
    '黄浦滨江',
    '五里桥'
  ],
  虹口: ['江湾镇', '临平路', '北外滩', '凉城', '四川北路', '鲁迅公园', '曲阳'],
  金山: ['张堰', '枫泾', '亭林', '山阳', '朱泾', '吕巷', '金山', '石化', '廊下', '漕泾'],
  崇明: ['崇明新城', '陈家镇', '长兴岛', '堡镇', '横沙岛', '崇明其它']
}
const areaOptions = [
  {
    label: '青浦',
    value: '青浦'
  },
  {
    label: '嘉定',
    value: '嘉定'
  },
  {
    label: '松江',
    value: '松江'
  },
  {
    label: '奉贤',
    value: '奉贤'
  },
  {
    label: '浦东',
    value: '浦东'
  },
  {
    label: '闵行',
    value: '闵行'
  },
  {
    label: '徐汇',
    value: '徐汇'
  },
  {
    label: '宝山',
    value: '宝山'
  },
  {
    label: '长宁',
    value: '长宁'
  },
  {
    label: '静安',
    value: '静安'
  },
  {
    label: '普陀',
    value: '普陀'
  },
  {
    label: '杨浦',
    value: '杨浦'
  },
  {
    label: '黄浦',
    value: '黄浦'
  },
  {
    label: '虹口',
    value: '虹口'
  },
  {
    label: '金山',
    value: '金山'
  },
  {
    label: '崇明',
    value: '崇明'
  }
]
const loopSummaryOptions = [
  {
    label: '内环内',
    value: '内环内'
  },
  {
    label: '内环至中环',
    value: '内环至中环'
  },
  {
    label: '中环至外环',
    value: '中环至外环'
  },
  {
    label: '外环外',
    value: '外环外'
  }
]
const metroLineOptions = [
  {
    label: '1号线',
    value: 1
  },
  {
    label: '2号线',
    value: 2
  },
  {
    label: '3号线',
    value: 3
  },
  {
    label: '4号线',
    value: 4
  },
  {
    label: '5号线',
    value: 5
  },
  {
    label: '6号线',
    value: 6
  },
  {
    label: '7号线',
    value: 7
  },
  {
    label: '8号线',
    value: 8
  },
  {
    label: '9号线',
    value: 9
  },
  {
    label: '10号线',
    value: 10
  },
  {
    label: '11号线',
    value: 11
  },
  {
    label: '12号线',
    value: 12
  },
  {
    label: '13号线',
    value: 13
  },
  {
    label: '14号线',
    value: 14
  },
  {
    label: '15号线',
    value: 15
  },
  {
    label: '16号线',
    value: 16
  },
  {
    label: '17号线',
    value: 17
  },
  {
    label: '18号线',
    value: 18
  },
  {
    label: '磁悬浮',
    value: 20
  }
]
const averageLlistedPriceOptions = [
  {
    label: '2万以下',
    value: [0, 20000]
  },
  {
    label: '2-2.5万',
    value: [20000, 25000]
  },
  {
    label: '2.5-3万',
    value: [25000, 30000]
  },
  {
    label: '3-3.5万',
    value: [30000, 35000]
  },
  {
    label: '3.5-4万',
    value: [35000, 40000]
  },
  {
    label: '4-5万',
    value: [40000, 50000]
  },
  {
    label: '5-6万',
    value: [50000, 60000]
  },
  {
    label: '6万以上',
    value: [60000, 999999]
  }
]
const totalPriceOptions = [
  {
    label: '200万以下',
    value: [0, 200]
  },
  {
    label: '200-300万',
    value: [200, 300]
  },
  {
    label: '300-400万',
    value: [300, 400]
  },
  {
    label: '400-500万',
    value: [400, 500]
  },
  {
    label: '500-800万',
    value: [500, 800]
  },
  {
    label: '800-1000万',
    value: [800, 1000]
  },
  {
    label: '1000-2000万',
    value: [1000, 2000]
  },
  {
    label: '2000万以上',
    value: [2000, 999999]
  }
]
const roomAreaOptions = [
  {
    label: '50平方以下',
    value: [0, 50]
  },
  {
    label: '50-70平方',
    value: [50, 70]
  },
  {
    label: '70-90平方',
    value: [70, 90]
  },
  {
    label: '90-110平方',
    value: [90, 110]
  },
  {
    label: '110-130平方',
    value: [110, 130]
  },
  {
    label: '130-150平方',
    value: [130, 150]
  },
  {
    label: '150平方以上',
    value: [150, 999999]
  }
]
const constructionAgeOptions = [
  {
    label: '1990年以前',
    value: [0, 1990]
  },
  {
    label: '1990-1995',
    value: [1990, 1995]
  },
  {
    label: '1995-2000',
    value: [1995, 2000]
  },
  {
    label: '2000-2005',
    value: [2000, 2005]
  },
  {
    label: '2005-2010',
    value: [2005, 2010]
  },
  {
    label: '2010年以后',
    value: [2010, 2050]
  }
]
const booleanOptions = [
  {
    label: '是',
    value: 1
  },
  {
    label: '否',
    value: 0
  }
]
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
      sort: 'id,asc',
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
      edit: false,
      houseData: {},
      cityEchelonOptions,
      echelonPerformanceOptions
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
        date: moment(new Date())
      }
    },

    search (parameter) {
      const requestParameters = Object.assign({ sort: this.sort }, parameter, this.queryParam)
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
        this.sort = type + ',asc'
        this.search()
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
        this.houseData.peopleAndVehicles = this.houseData.peopleAndVehicles || 0
        this.houseData.isLift = this.houseData.isLift || 0
        this.houseData.isConsistentSystem = this.houseData.isConsistentSystem || 0
        console.log(this.houseData)
        this.areaRefresh2()
        this.edit = !this.edit
      }
    },

    newHouse () {
        this.houseData = {}
        this.resultdata = this.houseData
        this.tags = []
        this.houseData.peopleAndVehicles = 0
        this.houseData.isLift = 1
        this.houseData.isConsistentSystem = 0
        console.log(this.houseData)
        this.areaRefresh2()
        this.edit = !this.edit
    },

    handleClose (removedTag) {
      const tags = this.tags.filter(tag => tag !== removedTag)
      console.log(tags)
      this.tags = tags
    },

    showInput () {
      this.inputVisible = true
      this.$nextTick(function () {
        this.$refs.tagInput.focus()
      })
    },

    handleInputChange (e) {
      this.inputValue = e.target.value
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
