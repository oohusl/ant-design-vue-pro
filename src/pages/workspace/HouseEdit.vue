<template>
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
              <a-tag :key="tag" :color="isCustomTag(tag)">
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
          {{ houseSelect.communityDesc }}
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
            {{ houseSelect.communityName
            }}<span
              style="font-size:16px;color: #B71C2B; margin-left: 12px"
            >均价
              <a-input-number v-model="houseSelect.averageLlistedPrice" size="small" style="width: 100px" />
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
          <a-input v-model="houseSelect.communityName" size="small" style="width: 150px" />
        </a-descriptions-item>
        <a-descriptions-item label="楼盘地址" :span="3">
          <a-input v-model="houseSelect.address" size="small" style="width: 334px" />
        </a-descriptions-item>
        <a-descriptions-item label="所属区域">
          <a-select
            :options="areaOptions"
            v-model="houseSelect.area"
            size="small"
            style="width: 150px"
            @change="editAreaChange()"
          ></a-select>
        </a-descriptions-item>
        <a-descriptions-item label="所属板块">
          <a-select :options="editPlateOptions" v-model="houseSelect.plate" size="small" style="width: 150px"></a-select>
        </a-descriptions-item>
        <a-descriptions-item label="环线">
          <a-select
            :options="loopSummaryOptions"
            v-model="houseSelect.loopSummary"
            size="small"
            style="width: 150px"
          ></a-select>
        </a-descriptions-item>
        <a-descriptions-item label="区域规划">
          <a-select v-model="houseSelect.districtPlanning" size="small" style="width: 150px">
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
            <a-input v-model="houseSelect.distance" placeholder="距离" size="small" style="width: 120px" suffix="米">
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
                  @change="getstation('houseSelect',line.metroLine)"
                ></a-select>
              </a-descriptions-item>
              <a-descriptions-item label="地铁站名" :key="line">
                <a-select
                  :options="stationOptions"
                  v-model="line.subwayStation"
                  size="small"
                  style="width: 150px"
                  @change="getstation('houseSelect',line.metroLine)"
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
          <a-input v-model="houseSelect.developer" size="small" style="width: 150px" />
        </a-descriptions-item>
        <a-descriptions-item label="物业公司" :span="2">
          <a-input v-model="houseSelect.propertyCompany" size="small" />
        </a-descriptions-item>
        <a-descriptions-item label="类型">
          <a-select v-model="houseSelect.cellAttributes" size="small" style="width: 100px">
            <a-select-option value="住宅"> 住宅 </a-select-option>
            <a-select-option value="别墅"> 别墅 </a-select-option>
          </a-select>
        </a-descriptions-item>
        <a-descriptions-item label="权属">
          <a-select v-model="houseSelect.transactionOwnership" size="small" style="width: 100px">
            <a-select-option value="商品房"> 商品房 </a-select-option>
            <a-select-option value="毛坯房"> 毛坯房 </a-select-option>
            <a-select-option value="售后工房"> 售后工房 </a-select-option>
            <a-select-option value="其他"> 其他 </a-select-option>
          </a-select>
        </a-descriptions-item>
        <a-descriptions-item label="年限">
          <a-input v-model="houseSelect.propertyRights" style="width: 100px" size="small" addon-after="年" />
        </a-descriptions-item>
        <a-descriptions-item label="建筑时间">
          <a-input v-model="houseSelect.constructionAge" style="width: 100px" size="small" addon-after="年" />
        </a-descriptions-item>
        <a-descriptions-item label="小区栋数">
          <a-input v-model="houseSelect.buildingNumber" style="width: 100px" size="small" addon-after="栋" />
        </a-descriptions-item>
        <a-descriptions-item label="小区户数">
          <a-input v-model="houseSelect.householdsNumber" style="width: 100px" size="small" addon-after="户" />
        </a-descriptions-item>
        <a-descriptions-item label="停车位数">
          <a-input v-model="houseSelect.parkingSpacesNumber" style="width: 100px" size="small" />
        </a-descriptions-item>
        <a-descriptions-item label="人车分流">
          <a-select
            :options="booleanOptions"
            v-model="houseSelect.peopleAndVehicles"
            style="width: 100px"
            size="small"
          >
          </a-select>
        </a-descriptions-item>
        <a-descriptions-item label="容积率">
          <a-input v-model="houseSelect.volumeRate" style="width: 100px" size="small" addon-after="%" />
        </a-descriptions-item>
        <a-descriptions-item label="绿化率">
          <a-input v-model="houseSelect.greeningRate" style="width: 100px" size="small" addon-after="%" />
        </a-descriptions-item>
        <a-descriptions-item label="建筑类型">
          <a-select v-model="houseSelect.buildingType" size="small" style="width: 100px">
            <a-select-option value="塔楼"> 塔楼 </a-select-option>
            <a-select-option value="板楼"> 板楼 </a-select-option>
            <a-select-option value="塔板结合"> 塔板结合 </a-select-option>
            <a-select-option value="其他"> 其他 </a-select-option>
          </a-select>
        </a-descriptions-item>
        <a-descriptions-item label="是否电梯">
          <a-select :options="booleanOptions" v-model="houseSelect.isLift" style="width: 100px" size="small">
          </a-select>
        </a-descriptions-item>
        <a-descriptions-item label="最大层数">
          <a-input v-model="houseSelect.maxFloor" style="width: 100px" size="small" addon-after="层" />
        </a-descriptions-item>
        <a-descriptions-item label="最小层数">
          <a-input v-model="houseSelect.minFloor" style="width: 100px" size="small" addon-after="层" />
        </a-descriptions-item>
        <a-descriptions-item label="物业类型" style="width: 100px">
          <a-select v-model="houseSelect.propertyAttributes" size="small">
            <a-select-option value="办公"> 办公 </a-select-option>
            <a-select-option value="别墅"> 别墅 </a-select-option>
            <a-select-option value="公寓住宅"> 公寓住宅 </a-select-option>
            <a-select-option value="商业"> 商业 </a-select-option>
            <a-select-option value="商住楼"> 商住楼 </a-select-option>
            <a-select-option value="酒店"> 酒店 </a-select-option>
          </a-select>
        </a-descriptions-item>
        <a-descriptions-item label="物业费">
          <a-input v-model="houseSelect.propertyCosts" style="width: 100px" size="small" addon-after="元/m²" />
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
          <a-input v-model="houseSelect.roomArea1Min" style="width: 56px" size="small" />-
          <a-input
            v-model="houseSelect.roomArea1Max"
            style="width: 90px; margin-right:5px"
            size="small"
            addon-after="m²"
          />
        </a-descriptions-item>
        <a-descriptions-item label="1居价格" :span="1">
          <a-input v-model="houseSelect.roomPriceRange1Min" style="width: 65px" size="small" />-
          <a-input v-model="houseSelect.roomPriceRange1Max" style="width: 100px" size="small" addon-after="万" />
        </a-descriptions-item>
        <a-descriptions-item label="2居面积" :span="1">
          <a-input v-model="houseSelect.roomArea2Min" style="width: 56px" size="small" />-
          <a-input
            v-model="houseSelect.roomArea2Max"
            style="width: 90px; margin-right:5px"
            size="small"
            addon-after="m²"
          />
        </a-descriptions-item>
        <a-descriptions-item label="2居价格" :span="1">
          <a-input v-model="houseSelect.roomPriceRange2Min" style="width: 65px" size="small" />-
          <a-input v-model="houseSelect.roomPriceRange2Max" style="width: 100px" size="small" addon-after="万" />
        </a-descriptions-item>
        <a-descriptions-item label="3居面积" :span="1">
          <a-input v-model="houseSelect.roomArea3Min" style="width: 56px" size="small" />-
          <a-input
            v-model="houseSelect.roomArea3Max"
            style="width: 90px; margin-right:5px"
            size="small"
            addon-after="m²"
          />
        </a-descriptions-item>
        <a-descriptions-item label="3居价格" :span="1">
          <a-input v-model="houseSelect.roomPriceRange3Min" style="width: 65px" size="small" />-
          <a-input v-model="houseSelect.roomPriceRange3Max" style="width: 100px" size="small" addon-after="万" />
        </a-descriptions-item>
        <a-descriptions-item label="多居面积" :span="1">
          <a-input v-model="houseSelect.roomArea4Min" style="width: 56px" size="small" />-
          <a-input
            v-model="houseSelect.roomArea4Max"
            style="width: 90px; margin-right:5px"
            size="small"
            addon-after="m²"
          />
        </a-descriptions-item>
        <a-descriptions-item label="多居价格" :span="1">
          <a-input v-model="houseSelect.roomPriceRange4Min" style="width: 65px" size="small" />-
          <a-input v-model="houseSelect.roomPriceRange4Max" style="width: 100px" size="small" addon-after="万" />
        </a-descriptions-item>
        <a-descriptions-item label="在售">
          <a-input v-model="houseSelect.inStock" style="width: 90px" size="small" addon-after="套" />
        </a-descriptions-item>
        <a-descriptions-item label="在租">
          <a-input v-model="houseSelect.positiveRent" style="width: 90px" size="small" addon-after="套" />
        </a-descriptions-item>
        <a-descriptions-item label="年成交">
          <a-input v-model="houseSelect.volume2019" style="width: 90px" size="small" addon-after="套" />
        </a-descriptions-item>
      </a-descriptions>
      <a-descriptions title="综合" :column="4">
        <a-descriptions-item label="概括介绍" :span="4">
          <a-textarea
            v-model="houseSelect.communityDesc"
            style="width: 800px"
            size="small"
            :auto-size="{ minRows: 2, maxRows: 6 }"
          />
        </a-descriptions-item>
      </a-descriptions>
    </a-layout-content>
  </a-layout>
</template>

<script>

import { AutoComplete } from 'ant-design-vue'
import { saveHouse, getLabels } from '@/api/manage'
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

export default {
  name: 'HouseSelect',
  components: {
    AutoComplete
  },
  props: {
    houseSelect: { type: Object, default: function () { return {} } },
    toCreate: { type: Boolean, default: false }
  },
  computed: {
    tags: {
      get: function () { return this.houseSelect.labels ? this.houseSelect.labels.split(',') : [] },
      set: function (newValue) {
        this.houseSelect.labels = newValue.join(',')
      }
    }
  },
  data () {
    return {
      tagInputVisible: false,
      edit: this.toCreate,
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
  created () {
    getLabels().then(data => {
      this.labels = data
    })
  },
  methods: {
    editAreaChange () {
      if (this.houseSelect.area) {
        this.editPlateOptions.splice(0)
        areaPlate[this.houseSelect.area].forEach(v => {
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

    editHouse () {
        // edit
        this.houseSelect.peopleAndVehicles = Number(this.houseSelect.peopleAndVehicles)
        this.houseSelect.isLift = Number(this.houseSelect.isLift)
        this.houseSelect.isConsistentSystem = Number(this.houseSelect.isConsistentSystem)
        this.editAreaChange()
        this.getstation('houseData')
        this.metroLineInfo = [{
          metroLine: this.houseSelect.metroLine,
          subwayStation: this.houseSelect.subwayStation,
          distance: this.houseSelect.distance
        }]
        this.schoolsInfo = [{
          isConsistentSystem: this.houseSelect.isConsistentSystem,
          primarySchool: this.houseSelect.primarySchool,
          echelonPerformance: this.houseSelect.echelonPerformance,
          middleSchool: this.houseSelect.middleSchool,
          cityEchelon: this.houseSelect.cityEchelon
        }]
        this.edit = !this.edit
    },

    saveHouse () {
      // save
      console.log('save:', this.houseSelect)
      this.houseSelect.labels = this.tags.join(',')
      saveHouse(this.houseSelect)
        .then(e => {
          this.edit = !this.edit
          this.$emit('change')
          this.$notification.success({
            message: '通知',
            description: this.house.id ? '修改成功' : '保存成功'
          })
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
      this.houseSelect = {}
      this.houseSelect = this.houseSelect
      this.tags = []
      this.houseSelect.peopleAndVehicles = 0
      this.houseSelect.isLift = 1
      this.houseSelect.isConsistentSystem = 0
      console.log(this.houseSelect)
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
      this.tags = tags
      this.tagInputVisible = false
      this.inputValue = ''
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
    }
  }
}
</script>
