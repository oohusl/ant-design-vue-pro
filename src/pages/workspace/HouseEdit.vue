<template>
  <div>
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
                style="font-size: 16px; color: #b71c2b; margin-left: 12px"
              >均价
                {{
                  houseSelect.averageLlistedPrice == null ? '--' : houseSelect.averageLlistedPrice.toLocaleString()
                }}元/m²</span
              >
              <span style="font-size: 16px; margin-left: 12px">
                {{ getLabel(houseSelect.communityLev, communityLevOptions) }}
              </span>
              <span style="font-size: 16px; margin-left: 12px">
                {{ getLabel(houseSelect.popularComLev, popularComLevOptions) }}
              </span>
              <span style="font-size: 16px; margin-left: 12px">
                {{ getLabel(houseSelect.qualityComLev, qualityComLevOptions) }}
              </span>
            </div>
            <div>
              <InputTag v-model="houseSelect.labels" :readonly="true" :labels="labels"></InputTag>
            </div>
          </a-layout-content>
          <a-layout-sider :style="{ background: '#ffffff', padding: '0', width: '100px', 'min-width': '100px' }">
            <a-button @click="editHouse()"> 编辑 </a-button>
          </a-layout-sider>
        </a-layout>
      </a-layout-header>
      <a-layout-content class="show-house">
        <a-descriptions title="基本信息" :column="4">
          <a-descriptions-item label="楼盘名称" :span="2">
            {{ houseSelect.communityName }}
          </a-descriptions-item>
          <a-descriptions-item label="楼盘地址" :span="2">
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
          <template v-for="(line, i) in houseSelect.metroInfo">
            <a-descriptions-item :label="i > 0 ? '' : '地铁线路'" :key="i" :span="4">
              {{ `${line.metroLine} / ${line.subwayStation}   ${line.distance != null ? line.distance + 'm' : ''}` }}
            </a-descriptions-item>
          </template>
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
          <a-descriptions-item label="年限">
            {{ houseSelect.propertyRights ? houseSelect.propertyRights : '' }}
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
            {{ getLabel(houseSelect.peopleAndVehicles, peopleAndVehiclesOptions) }}
          </a-descriptions-item>
          <a-descriptions-item label="容积率">
            {{ houseSelect.volumeRate ? houseSelect.volumeRate : '' }}
          </a-descriptions-item>
          <a-descriptions-item label="绿化率">
            {{ houseSelect.greeningRate ? houseSelect.greeningRate + '%' : '' }}
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
          <a-descriptions-item label="在售">
            {{ houseSelect.inStock ? houseSelect.inStock + '套' : '' }}
          </a-descriptions-item>
          <a-descriptions-item label="在租">
            {{ houseSelect.positiveRent ? houseSelect.positiveRent + '套' : '' }}
          </a-descriptions-item>
          <a-descriptions-item label="成交量">
            {{ houseSelect.volume2019 ? houseSelect.volume2019 + '套' : '' }}
          </a-descriptions-item>
          <a-descriptions-item label="概况介绍" :span="4">
            {{ houseSelect.communityDesc }}
          </a-descriptions-item>
        </a-descriptions>
        <a-descriptions title="学区情况" :column="11">
          <template v-for="school in houseSelect.schoolDistrictInfo">
            <a-descriptions-item label="类型" :span="2" :key="school.name">
              {{ school.schoolType }}
            </a-descriptions-item>
            <a-descriptions-item label="学校" :span="4" :key="school.name">
              {{ school.schoolName }}
            </a-descriptions-item>
            <a-descriptions-item label="梯队" :span="3" :key="school.name">
              {{ getSchoolInfo(school.schoolType, school.schoolName) }}
            </a-descriptions-item>
            <a-descriptions-item :span="2" :key="school.name"></a-descriptions-item>
          </template>
        </a-descriptions>
        <a-descriptions title="户型" :column="4">
          <a-descriptions-item label="权属">
            {{ transLabels(commView.transactionOwnership, transactionOwnershipOptions) }}
          </a-descriptions-item>
          <a-descriptions-item label="建筑类型">
            {{ transLabels(commView.buildingType, buildingTypeOptions) }}
          </a-descriptions-item>
          <a-descriptions-item label="是否电梯">
            {{ transLabels(commView.isLift, liftOptions) }}
          </a-descriptions-item>
          <a-descriptions-item label="卫生间">
            {{
              ([...commView.toilet] || [])
                .sort((a, b) => a - b)
                .map(e => e + '卫')
                .join('/')
            }}
          </a-descriptions-item>
          <template v-for="roomType in commView.roomTypes">
            <a-descriptions-item :label="roomType.room + '居面积'" :span="1" :key="roomType.room">
              {{ roomType.roomAreaMin ? roomType.roomAreaMin + '-' : ''
              }}{{ roomType.roomAreaMax ? roomType.roomAreaMax + 'm²' : '' }}
            </a-descriptions-item>
            <a-descriptions-item :label="roomType.room + '居价格'" :span="1" :key="roomType.room">
              {{ roomType.roomPriceMin ? roomType.roomPriceMin + '-' : ''
              }}{{ roomType.roomPriceMax ? roomType.roomPriceMax + '万' : '' }}
            </a-descriptions-item>
          </template>
        </a-descriptions>
      </a-layout-content>
    </a-layout>
    <a-layout :style="{ background: '#ffffff', padding: '0', height: '50px' }" v-else>
      <a-layout-header :style="{ padding: '0', height: '80px' }">
        <a-layout :style="{ background: '#ffffff', padding: '0', height: '100px' }">
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
                style="font-size: 16px; color: #b71c2b; margin-left: 12px"
              >均价
                <a-input-number v-model="houseSelect.averageLlistedPrice" size="small" style="width: 100px" />
                元/m²</span
              >
              <span style="margin-left: 12px">
                <a-select
                  v-model="houseSelect.communityLev"
                  size="small"
                  class="col1"
                  :options="communityLevOptions"
                  placeholder="楼盘等级"
                ></a-select>
              </span>
              <span style="margin-left: 12px">
                <a-select
                  v-model="houseSelect.qualityComLev"
                  size="small"
                  class="col1"
                  :options="qualityComLevOptions"
                  placeholder="品质楼盘"
                ></a-select>
              </span>
              <span style="margin-left: 12px">
                <a-select
                  v-model="houseSelect.popularComLev"
                  size="small"
                  class="col1"
                  :options="popularComLevOptions"
                  placeholder="热门楼盘"
                ></a-select>
              </span>
            </div>
            <div>
              <InputTag v-model="houseSelect.labels" :labels="labels"></InputTag>
            </div>
          </a-layout-content>
          <a-layout-sider :style="{ background: '#ffffff', padding: '0' }">
            <a-button @click="saveHouse()"> 保存 </a-button>
          </a-layout-sider>
        </a-layout>
      </a-layout-header>
      <a-layout-content class="edit-house">
        <a-descriptions title="基本信息" :column="4">
          <a-descriptions-item label="楼盘名称" :span="2">
            <a-input v-model="houseSelect.communityName" size="small" class="col2" />
          </a-descriptions-item>
          <a-descriptions-item label="楼盘地址" :span="2">
            <a-input v-model="houseSelect.address" size="small" class="col2" />
          </a-descriptions-item>
          <a-descriptions-item label="所属区域">
            <a-select
              :options="areaOptions"
              v-model="houseSelect.area"
              size="small"
              class="col1"
              @change="editAreaChange()"
            ></a-select>
          </a-descriptions-item>
          <a-descriptions-item label="所属板块">
            <a-select :options="editPlateOptions" v-model="houseSelect.plate" size="small" class="col1"></a-select>
          </a-descriptions-item>
          <a-descriptions-item label="环线">
            <a-select
              :options="loopSummaryOptions"
              v-model="houseSelect.loopSummary"
              size="small"
              class="col1"
            ></a-select>
          </a-descriptions-item>
          <a-descriptions-item label="区域规划">
            <a-select
              v-model="houseSelect.districtPlanning"
              size="small"
              class="col1"
              :options="districtPlanningOptions"
            >
            </a-select>
          </a-descriptions-item>
          <template v-for="(metro, i) in houseSelect.metroInfo">
            <a-descriptions-item :label="i === 0 ? '地铁线路' : ''" :span="4" :key="i">
              <a-input-group compact>
                <a-cascader
                  :options="metrolineDistrictInfo"
                  expand-trigger="hover"
                  size="small"
                  style="width: 220px"
                  placeholder="地铁"
                  :value="[metro.metroLine, metro.subwayStation]"
                  @change="selectMetroLine($event, i)"
                >
                </a-cascader>
                <a-input v-model="metro.distance" placeholder="距离" size="small" style="width: 145px" suffix="m">
                </a-input>
                <span
                  style="color: red; line-height: 24px; padding-left: 6px; cursor: pointer"
                  @click="removeMetro(i)"
                ><a-icon
                  type="minus-circle"
                /></span>
              </a-input-group>
            </a-descriptions-item>
          </template>
          <a-descriptions-item :label="houseSelect.metroInfo.length === 0 ? '地铁线路' : ''" :span="4">
            <a-button type="dashed" style="width: 100px" size="small" @click="addMetroLine()">
              <a-icon type="plus" /> 添加
            </a-button>
          </a-descriptions-item>
        </a-descriptions>
        <a-descriptions title="楼盘概况" :column="4">
          <a-descriptions-item label="开发商" :span="2">
            <a-input v-model="houseSelect.developer" size="small" class="col2" />
          </a-descriptions-item>
          <a-descriptions-item label="物业公司" :span="2">
            <a-input v-model="houseSelect.propertyCompany" size="small" class="col2" />
          </a-descriptions-item>
          <a-descriptions-item label="类型">
            <a-select v-model="houseSelect.cellAttributes" size="small" class="col1" :options="cellAttributesOptions">
            </a-select>
          </a-descriptions-item>
          <a-descriptions-item label="年限">
            <a-input v-model="houseSelect.propertyRights" class="col1" size="small" addon-after="年" />
          </a-descriptions-item>
          <a-descriptions-item label="建筑时间">
            <a-input v-model="houseSelect.constructionAge" class="col1" size="small" addon-after="年" />
          </a-descriptions-item>
          <a-descriptions-item label="小区栋数">
            <a-input v-model="houseSelect.buildingNumber" class="col1" size="small" addon-after="栋" />
          </a-descriptions-item>
          <a-descriptions-item label="小区户数">
            <a-input v-model="houseSelect.householdsNumber" class="col1" size="small" addon-after="户" />
          </a-descriptions-item>
          <a-descriptions-item label="停车位数">
            <a-input v-model="houseSelect.parkingSpacesNumber" class="col1" size="small" />
          </a-descriptions-item>
          <a-descriptions-item label="人车分流">
            <a-select
              :options="peopleAndVehiclesOptions"
              v-model="houseSelect.peopleAndVehicles"
              class="col1"
              size="small"
            >
            </a-select>
          </a-descriptions-item>
          <a-descriptions-item label="容积率">
            <a-input v-model="houseSelect.volumeRate" class="col1" size="small" />
          </a-descriptions-item>
          <a-descriptions-item label="绿化率">
            <a-input v-model="houseSelect.greeningRate" class="col1" size="small" addon-after="%" />
          </a-descriptions-item>
          <a-descriptions-item label="最大层数">
            <a-input v-model="houseSelect.maxFloor" class="col1" size="small" addon-after="层" />
          </a-descriptions-item>
          <a-descriptions-item label="最小层数">
            <a-input v-model="houseSelect.minFloor" class="col1" size="small" addon-after="层" />
          </a-descriptions-item>
          <a-descriptions-item label="物业类型">
            <a-select v-model="houseSelect.propertyAttributes" size="small" class="col1" :options="propertyOptions">
            </a-select>
          </a-descriptions-item>
          <a-descriptions-item label="物业费">
            <a-input v-model="houseSelect.propertyCosts" class="col1" size="small" addon-after="元/m²" />
          </a-descriptions-item>
          <a-descriptions-item label="在售">
            <a-input v-model="houseSelect.inStock" class="col1" size="small" addon-after="套" />
          </a-descriptions-item>
          <a-descriptions-item label="在租">
            <a-input v-model="houseSelect.positiveRent" class="col1" size="small" addon-after="套" />
          </a-descriptions-item>
          <a-descriptions-item label="年成交">
            <a-input v-model="houseSelect.volume2019" class="col1" size="small" addon-after="套" />
          </a-descriptions-item>
          <a-descriptions-item label="概况介绍" :span="4">
            <a-textarea
              v-model="houseSelect.communityDesc"
              style="width: 878px"
              size="small"
              :auto-size="{ minRows: 2, maxRows: 6 }"
            />
          </a-descriptions-item>
        </a-descriptions>
        <a-descriptions title="学区情况" :column="12">
          <template v-for="school in houseSelect.schoolDistrictInfo">
            <a-descriptions-item label="类型" :span="3" :key="school.name">
              {{ school.schoolType }}
            </a-descriptions-item>
            <a-descriptions-item label="学校" :span="5" :key="school.name">
              {{ school.schoolName }}
            </a-descriptions-item>
            <a-descriptions-item label="梯队" :span="2" :key="school.name">
              {{ getSchoolInfo(school.schoolType, school.schoolName) }}
            </a-descriptions-item>
            <a-descriptions-item label="" :span="2" :key="school.name">
              <span
                style="color: red; line-height: 24px; padding-left: 6px; cursor: pointer"
                @click="removeSchool(school)"
              ><a-icon
                type="minus-circle"
              /></span>
            </a-descriptions-item>
          </template>
        </a-descriptions>
        <a-descriptions :column="12">
          <a-descriptions-item label="类型" :span="3">
            <a-select
              size="small"
              style="width: 100px"
              v-model="schoolEdit.schoolType"
              @change="schoolTypeChange"
              placeholder="请选择学校类型"
            >
              <a-select-option value="幼儿园"> 幼儿园 </a-select-option>
              <a-select-option value="小学"> 小学 </a-select-option>
              <a-select-option value="中学"> 中学 </a-select-option>
            </a-select>
          </a-descriptions-item>
          <a-descriptions-item v-if="schoolEdit.schoolType" label="学校" :span="9">
            <a-select
              style="width: 280px; margin-right: 10px"
              size="small"
              placeholder="请选择学校"
              :showSearch="true"
              v-model="schoolEdit.schoolName"
              :not-found-content="null"
              @search="handleOnSearch"
            >
              <a-select-option
                v-for="(ss, i) in schoolGroup[schoolEdit.schoolType]"
                :key="i"
                :value="ss.schoolName"
                :disabled="isSchoolSelected(ss)"
              >
                {{ ss.schoolName }}
              </a-select-option>
            </a-select>
            <a-button type="dashed" style="width: 100px" size="small" @click="addSchoolsInfo()">
              <a-icon type="plus" /> 添加
            </a-button>
          </a-descriptions-item>
        </a-descriptions>
        <a-descriptions title="户型" :column="4">
          <a-descriptions-item label="权属">
            {{ transLabels(commView.transactionOwnership, transactionOwnershipOptions) }}
          </a-descriptions-item>
          <a-descriptions-item label="建筑类型">
            {{ transLabels(commView.buildingType, buildingTypeOptions) }}
          </a-descriptions-item>
          <a-descriptions-item label="是否电梯">
            {{ transLabels(commView.isLift, liftOptions) }}
          </a-descriptions-item>
          <a-descriptions-item label="卫生间">
            {{
              ([...commView.toilet] || [])
                .filter(e => e)
                .sort((a, b) => a - b)
                .map(e => e + '卫')
                .join('/')
            }}
          </a-descriptions-item>
          <template v-for="roomType in commView.roomTypes">
            <a-descriptions-item :label="roomType.room + '居面积'" :span="1" :key="roomType.room">
              {{ roomType.roomAreaMin ? roomType.roomAreaMin + '-' : ''
              }}{{ roomType.roomAreaMax ? roomType.roomAreaMax + 'm²' : '' }}
            </a-descriptions-item>
            <a-descriptions-item :label="roomType.room + '居价格'" :span="1" :key="roomType.room">
              {{ roomType.roomPriceMin ? roomType.roomPriceMin + '-' : ''
              }}{{ roomType.roomPriceMax ? roomType.roomPriceMax + '万' : '' }}
            </a-descriptions-item>
          </template>
        </a-descriptions>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import { AutoComplete } from 'ant-design-vue'
import { saveHouse, getLabels, getSchools, commAnalysisView } from '@/api/manage'
import {
  areaOptions,
  getMetroLineOptions,
  averageLlistedPriceOptions,
  totalPriceOptions,
  roomAreaOptions,
  constructionAgeOptions,
  loopSummaryOptions,
  booleanOptions,
  liftOptions,
  subwayOptions,
  areaPlate,
  getLabel,
  transLabels,
  peopleAndVehiclesOptions,
  districtPlanningOptions,
  communityLevOptions,
  transactionOwnershipOptions,
  propertyOptions,
  popularComLevOptions,
  qualityComLevOptions,
  toiletOptions,
  buildingTypeOptions,
  cellAttributesOptions
} from '@/api/data'
import HouseDiary from './HouseDiary.vue'
import InputTag from '../components/InputTag.vue'

export default {
  name: 'HouseEdit',
  components: {
    AutoComplete,
    HouseDiary,
    InputTag
  },
  props: {
    houseSelect: {
      type: Object,
      default: function () {
        return {}
      }
    },
    toCreate: { type: Boolean, default: false }
  },
  data () {
    return {
      edit: this.toCreate,
      stationOptions: [],
      toilet: this.houseSelect.toilet ? this.houseSelect.toilet.split(',') : [],
      labels: [],
      areaPlate,
      plateOptions: [],
      editPlateOptions: [],
      areaOptions,
      cellAttributesOptions,
      liftOptions,
      toiletOptions,
      metroLineOptions: getMetroLineOptions(),
      averageLlistedPriceOptions,
      totalPriceOptions,
      totalPriceEdit: false,
      roomAreaOptions,
      constructionAgeOptions,
      loopSummaryOptions,
      booleanOptions,
      subwayOptions,
      peopleAndVehiclesOptions,
      districtPlanningOptions,
      communityLevOptions,
      propertyOptions,
      transactionOwnershipOptions,
      qualityComLevOptions,
      popularComLevOptions,
      buildingTypeOptions,
      loading: false,
      plates: {},
      subwayStations: {},
      getLabel,
      transLabels,
      schoolGroup: { 幼儿园: [], 小学: [], 中学: [] },
      schoolGroup_: { 幼儿园: [], 小学: [], 中学: [] },
      metrolineDistrictInfo: [],
      houseTypeVisible: false,
      houseDiaryVisible: false,
      houseTypeFiles: [],
      houseTypes: [],
      houseTypeEdit: {},
      schoolEdit: {},
      commView: {}
    }
  },
  created () {
    getLabels().then(data => {
      this.labels = data
    })
    this.getMetrolineDistrictInfo()
    this.houseTypeEdit.communityId = this.houseSelect.id
    commAnalysisView(this.houseTypeEdit.communityId)
      .then(e => {
        this.commView = e
        // this.spinning = false
      })
      .catch(e => {
        this.$message.warning('户型信息查询失败')
      })

    const _this = this
    getSchools().then(function (e) {
      e.forEach(s => {
        _this.schoolGroup_[s.schoolType].push(s)
      })
      Object.keys(_this.schoolGroup_).forEach(e => {
        _this.schoolGroup[e] = _this.schoolGroup_[e].slice(0, 50)
      })
    })
  },
  beforeMount () {
    if (this.edit) {
      this.newHouse()
    }
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
      this.queryParam.area.forEach(e => {
        const areaPlates = []
        this.getPlate(e).forEach(p => areaPlates.push(p.value))
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
      subwayOptions.forEach(v => {
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
      console.log('editHouse')
      this.editAreaChange()
      this.houseSelect.metroInfo = this.houseSelect.metroInfo || []
      this.houseSelect.schoolDistrictInfo = this.houseSelect.schoolDistrictInfo || []
      this.houseSelect.metroInfo.forEach(station => {
        this.updateMetrolineDistrictInfo([station.metroLine, station.subwayStation], true)
      })
      this.edit = !this.edit
    },
    openHouseType () {
      this.houseTypeEdit = {}
      this.houseTypeEdit.communityId = this.houseSelect.id
      this.houseTypeFiles = []
      this.houseTypeVisible = true
    },
    openHouseDiary () {
      this.houseDiaryVisible = true
    },
    houseTypeOK () {
      this.houseTypeVisible = false
    },
    saveHouse () {
      // save
      console.log('save:', this.houseSelect)
      this.houseSelect.toilet = this.toilet.join(',')

      saveHouse(this.houseSelect)
        .then(e => {
          this.edit = !this.edit
          this.$emit('change')
          this.$notification.success({
            message: '通知',
            description: this.houseSelect.id ? '修改成功' : '保存成功'
          })
        })
        .catch(() => {
          this.$notification.error({
            message: '通知',
            description: this.houseSelect.id ? '修改失败' : '保存失败'
          })
        })
    },

    newHouse () {
      this.detailVisible = true
      this.edit = true
    },
    showDetail () {
      this.edit = false
      commAnalysisView(this.houseTypeEdit.communityId).then(e => {
        this.commView = e
      })
      console.log(this.houseSelect)
    },

    getMetrolineDistrictInfo () {
      this.metrolineDistrictInfo = []
      this.metrolineDistrictInfo = this.metroLineOptions
      const stationMap = new Map()
      subwayOptions.forEach(v => {
        stationMap.set(v.line, v.station)
      })
      this.metrolineDistrictInfo.forEach(v => {
        const station = stationMap.get(v.value)
        const stationoption = []
        if (station) {
          station.forEach(s => {
            stationoption.push({ label: s, value: s })
          })
          v.children = stationoption
        }
      })
    },
    addMetroLine () {
      this.houseSelect.metroInfo.push({
        metroLine: '',
        subwayStation: '',
        distance: 1
      })
      this.$forceUpdate()
    },
    selectMetroLine (value, o) {
      this.houseSelect.metroInfo[o].metroLine = value[0]
      this.houseSelect.metroInfo[o].subwayStation = value[1]
      this.updateMetrolineDistrictInfo(value, true)
      this.$forceUpdate()
    },
    removeMetro (index) {
      if (this.houseSelect.metroInfo.length >= index) {
        const metroinfo = this.houseSelect.metroInfo.splice(index, 1)
        if (metroinfo[0].metroLine) {
          this.updateMetrolineDistrictInfo([metroinfo[0].metroLine, metroinfo[0].subwayStation], false)
        }
      }
      this.$forceUpdate()
    },
    updateMetrolineDistrictInfo (value, disabled) {
      const [line, station] = value
      try {
        this.metrolineDistrictInfo.forEach(lineoption => {
          if (lineoption.value === line) {
            lineoption.children.forEach(option => {
              if (option.value === station) {
                option.disabled = disabled
              }
            })
          }
        })
      } catch (error) {}
    },
    removeSchool (school) {
      const index = this.houseSelect.schoolDistrictInfo.findIndex(e => {
        return school.schoolType === e.schoolType && school.schoolName === e.schoolName
      })
      if (index >= 0) {
        this.houseSelect.schoolDistrictInfo.splice(index, 1)
      }
      this.$forceUpdate()
    },
    schoolTypeChange () {
      this.schoolGroup[this.schoolEdit.schoolType] = this.schoolGroup_[this.schoolEdit.schoolType].slice(0, 50)
      delete this.schoolEdit.schoolName
      this.$forceUpdate()
    },
    addSchoolsInfo () {
      if (!this.schoolEdit.schoolName) {
        this.$message.info('请选择学校后添加')
        return
      }
      this.houseSelect.schoolDistrictInfo.push(Object.assign({}, this.schoolEdit))
      this.schoolGroup[this.schoolEdit.schoolType] = this.schoolGroup_[this.schoolEdit.schoolType].slice(0, 50)
      this.schoolEdit = {}
      this.$forceUpdate()
    },
    isSchoolSelected (school) {
      return (
        this.houseSelect.schoolDistrictInfo.findIndex(e => {
          return school.schoolName === e.schoolName && school.schoolType === e.schoolType
        }) >= 0
      )
    },
    getSchoolInfo (type, schoolName) {
      const s = this.schoolGroup_[type].find(e => {
        return schoolName === e.schoolName
      })
      if (s != null) {
        return (s.echelon || '') + ' ' + (s.isConsistentSystem || '')
      }
    },
    handleOnBlur () {
      this.schoolGroup = Object.assign({}, this.schoolGroup_)
    },
    handleOnSearch (value) {
      const datas = []
      this.schoolGroup_[this.schoolEdit.schoolType].forEach(item => {
        if (item.schoolName.indexOf(value) > -1) {
          datas.push(item)
        }
      })
      this.schoolGroup[this.schoolEdit.schoolType] = datas.slice(0, 50)
    },
    getSchool (schoolName, schoolType) {
      const school = (this.schoolGroup_[schoolType] || []).find(school => {
        return school.schoolName === schoolName
      })
      let desc = ''
      if (school) {
        if (school.echelon) {
          desc = '-' + school.echelon
        }
        if (school.isConsistentSystem) {
          desc += '-' + school.isConsistentSystem
        }
      }
      return desc
    },
    handleHouseTypeRemove (file) {
      const index = this.houseTypeFiles.indexOf(file)
      const newFileList = this.houseTypeFiles.slice()
      newFileList.splice(index, 1)
      this.houseTypeFiles = newFileList
    },
    handleOk (type) {
      switch (type) {
        case 'housediary':
          this.$refs.housediaryref && this.$refs.housediaryref.save()
          this.houseDiaryVisible = false
          break
        default:
          break
      }
    }
  }
}
</script>
<style scoped>
.col1 {
  width: 120px;
}
.col2 {
  width: 370px;
}
.compactInput {
  width: 53px;
  text-align: center;
  padding: 2px;
}
.compactCenter {
  width: 14px;
  border-left: 0;
  border-right: 0;
  pointer-events: none;
  padding: 2px;
}
</style>
