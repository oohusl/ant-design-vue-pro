<template>
  <page-header-wrapper>
    <a-layout>
      <a-layout-header :style="{ background: '#f5f5f5', padding: 0 }" >
        <div class="house-query-search-holder">
          <AutoComplete
            class="house-query-search"
            dropdown-class-name="house-query-search-dropdown"
            :dropdown-match-select-width="false"
            :dropdown-style="{ width: '552px' }"
            size="large"
            style="width: 100%"
            placeholder="请输入区域或楼盘名开始找房"
            option-label-prop="value">
            <template slot="dataSource">
              <a-select-option v-for="item in dataSource" :key="item.category" :title="item.category">
                Found {{ item.query }} on
                <a
                  :href="`https://s.taobao.com/search?q=${item.query}`"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ item.category }}
                </a>
                <span className="global-search-item-count">{{ item.count }} results</span>
              </a-select-option>
            </template>
            <a-input>
              <a-icon slot="suffix" type="search" class="certain-category-icon" />
            </a-input>
          </AutoComplete>
        </div>
      </a-layout-header>
      <a-layout-content :style="{background: '#ffffff', margin: '24px 16px 0' }">
        <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
          <a-form-item label="位置">
            <template>
              <a-tabs default-active-key="1" type="card">
                <a-tab-pane key="1" tab="区域">
                  <a-checkbox-group v-model="queryParam.areas">
                    <a-checkbox name="青浦" value="青浦" > 青浦 </a-checkbox>
                    <a-checkbox name="松江" value="松江" > 松江 </a-checkbox>
                    <a-checkbox name="嘉定" value="嘉定" > 嘉定 </a-checkbox>
                    <a-checkbox name="奉贤" value="奉贤" > 奉贤 </a-checkbox>
                    <a-checkbox name="浦东" value="浦东" > 浦东 </a-checkbox>
                    <a-checkbox name="宝山" value="宝山" > 宝山 </a-checkbox>
                    <a-checkbox name="闵行" value="闵行" > 闵行 </a-checkbox>
                    <a-checkbox name="徐汇" value="徐汇" > 徐汇 </a-checkbox>
                    <a-checkbox name="长宁" value="长宁" > 长宁 </a-checkbox>
                    <a-checkbox name="静安" value="静安" > 静安 </a-checkbox>
                    <a-checkbox name="普陀" value="普陀" > 普陀 </a-checkbox>
                    <a-checkbox name="杨浦" value="杨浦" > 杨浦 </a-checkbox>
                    <a-checkbox name="黄浦" value="黄浦" > 黄浦 </a-checkbox>
                    <a-checkbox name="虹口" value="虹口" > 虹口 </a-checkbox>
                    <a-checkbox name="金山" value="金山" > 金山 </a-checkbox>
                    <a-checkbox name="崇明" value="崇明" > 崇明 </a-checkbox>
                  </a-checkbox-group>
                </a-tab-pane>
                <a-tab-pane key="2" tab="板块">
                  <a-input v-model="queryParam.plate" placeholder="请选择" />
                </a-tab-pane>
                <a-tab-pane key="3" tab="环线">
                  <a-checkbox-group v-model="queryParam.loopSummary">
                    <a-checkbox value="内环内"> 内环内 </a-checkbox>
                    <a-checkbox value="内环至中环"> 内环至中环 </a-checkbox>
                    <a-checkbox value="中环至外环"> 中环至外环 </a-checkbox>
                    <a-checkbox value="外环外"> 外环外 </a-checkbox>
                  </a-checkbox-group>
                </a-tab-pane>
                <a-tab-pane key="4" tab="地铁线">
                  <a-checkbox-group v-model="queryParam.metroLine" >
                    <a-checkbox value="1" name="1">1号线</a-checkbox>
                    <a-checkbox value="2" name="2">2号线</a-checkbox>
                    <a-checkbox value="3" name="3">3号线</a-checkbox>
                    <a-checkbox value="4" name="4">4号线</a-checkbox>
                    <a-checkbox value="5" name="5">5号线</a-checkbox>
                    <a-checkbox value="6" name="6">6号线</a-checkbox>
                    <a-checkbox value="7" name="7">7号线</a-checkbox>
                    <a-checkbox value="8" name="8">8号线</a-checkbox>
                    <a-checkbox value="9" name="9">9号线</a-checkbox>
                    <a-checkbox value="10" name="10">10号线</a-checkbox>
                    <a-checkbox value="11" name="11">11号线</a-checkbox>
                    <a-checkbox value="12" name="12">12号线</a-checkbox>
                    <a-checkbox value="13" name="13">13号线</a-checkbox>
                    <a-checkbox value="14" name="14">14号线</a-checkbox>
                    <a-checkbox value="15" name="15">15号线</a-checkbox>
                    <a-checkbox value="16" name="16">16号线</a-checkbox>
                    <a-checkbox value="17" name="17">17号线</a-checkbox>
                    <a-checkbox value="18" name="18">18号线</a-checkbox>
                    <a-checkbox value="19" name="19">磁悬浮</a-checkbox>
                  </a-checkbox-group>
                  <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 10px)' }">
                    <a-input style="width: 100%" v-model="queryParam.subwayStation" placeholder="请选择" />
                  </a-form-item>
                  <!-- <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> - </span>
                  <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
                    <a-input style="width: 100%" v-model="queryParam.distance" placeholder="地铁距离" />
                  </a-form-item> -->
                </a-tab-pane>
                <a-tab-pane key="5" tab="学校">
                  <a-checkbox-group v-model="queryParam.echelonPerformances" @pressEnter="refresh">
                    <a-checkbox value="小学">小学</a-checkbox>
                    <a-checkbox value="中学">中学</a-checkbox>
                    <a-checkbox value="一贯制学校">一贯制学校</a-checkbox>
                  </a-checkbox-group>
                </a-tab-pane>
              </a-tabs>
            </template>
          </a-form-item>
          <a-form-item label="类型">
            <a-checkbox-group v-model="queryParam.housetypes">
              <a-checkbox value="1" name="stackedVilla"> 住宅 </a-checkbox>
              <a-checkbox value="2" name="singleFamilyVilla"> 别墅 </a-checkbox>
              <a-checkbox value="3" name="townhouse"> 商办 </a-checkbox>
              <a-checkbox value="4" name="semiDetachedHouse"> 商铺 </a-checkbox>
              <a-checkbox value="5" name="semiDetachedHouse"> 写字楼 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="户型">
            <a-checkbox-group v-model="queryParam.housetypes1">
              <a-checkbox value="1" name="stackedVilla"> 一房 </a-checkbox>
              <a-checkbox value="2" name="singleFamilyVilla"> 二房 </a-checkbox>
              <a-checkbox value="3" name="townhouse"> 三房 </a-checkbox>
              <a-checkbox value="4" name="semiDetachedHouse"> 其他 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="单价">
            <a-checkbox-group v-model="queryParam.prices2">
              <a-checkbox value="1" name="stackedVilla"> 2万以下 </a-checkbox>
              <a-checkbox value="2" name="singleFamilyVilla"> 2-2.5万 </a-checkbox>
              <a-checkbox value="3" name="townhouse"> 2.5-3万 </a-checkbox>
              <a-checkbox value="4" name="semiDetachedHouse"> 3-3.5万 </a-checkbox>
              <a-checkbox value="5" name="semiDetachedHouse"> 3.5-4万 </a-checkbox>
              <a-checkbox value="1" name="stackedVilla"> 4-5万 </a-checkbox>
              <a-checkbox value="2" name="singleFamilyVilla"> 5-6万 </a-checkbox>
              <a-checkbox value="3" name="townhouse"> 6万以上 </a-checkbox>
            </a-checkbox-group>
            <a-form-item :style="{ display: 'inline-block', width: '63px' }">
              <a-input style="width: 100%" v-model="queryParam.roomPriceRange2Min" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '63px' }">
              <a-input style="width: 100%" v-model="queryParam.roomPriceRange2Max" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> 万 </span>
          </a-form-item>
          <a-form-item label="总价">
            <a-checkbox-group v-model="queryParam.prices">
              <a-checkbox value="1" name="stackedVilla"> 200万以下 </a-checkbox>
              <a-checkbox value="2" name="singleFamilyVilla"> 200-300万 </a-checkbox>
              <a-checkbox value="3" name="townhouse"> 300-400万 </a-checkbox>
              <a-checkbox value="4" name="semiDetachedHouse"> 400-500 </a-checkbox>
              <a-checkbox value="5" name="semiDetachedHouse"> 500-800万 </a-checkbox>
              <a-checkbox value="6" name="stackedVilla"> 800-1000万 </a-checkbox>
              <a-checkbox value="7" name="singleFamilyVilla"> 1000-2000万 </a-checkbox>
              <a-checkbox value="8" name="semiDetachedHouse"> 2000万以上 </a-checkbox>
            </a-checkbox-group>
            <a-form-item :style="{ display: 'inline-block', width: '63px' }">
              <a-input style="width: 100%" v-model="queryParam.roomPriceRange1Min" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '63px' }">
              <a-input style="width: 100%" v-model="queryParam.roomPriceRange1Max" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> 万 </span>
          </a-form-item>
          <a-form-item label="面积">
            <a-checkbox-group v-model="queryParam.prices">
              <a-checkbox value="1" name="stackedVilla"> 50平方以下 </a-checkbox>
              <a-checkbox value="2" name="singleFamilyVilla"> 50-70平方 </a-checkbox>
              <a-checkbox value="3" name="townhouse"> 70-90平方 </a-checkbox>
              <a-checkbox value="4" name="semiDetachedHouse"> 90-110平方 </a-checkbox>
              <a-checkbox value="5" name="semiDetachedHouse"> 110-130平方 </a-checkbox>
              <a-checkbox value="6" name="stackedVilla"> 130-150平方 </a-checkbox>
              <a-checkbox value="7" name="townhouse"> 150平方以上 </a-checkbox>
            </a-checkbox-group>
            <a-form-item :style="{ display: 'inline-block', width: '63px' }">
              <a-input style="width: 100%" v-model="queryParam.roomPriceRange2Min" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '63px' }">
              <a-input style="width: 100%" v-model="queryParam.roomPriceRange2Max" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '44px', textAlign: 'center' }"> 平方 </span>
          </a-form-item>
          <a-form-item label="成交量">
            <a-checkbox-group v-model="queryParam.prices">
              <a-checkbox value="1" name="stackedVilla"> 5套以下 </a-checkbox>
              <a-checkbox value="2" name="singleFamilyVilla"> 5-10套 </a-checkbox>
              <a-checkbox value="3" name="townhouse"> 10-15套 </a-checkbox>
              <a-checkbox value="4" name="semiDetachedHouse"> 15-20套 </a-checkbox>
              <a-checkbox value="5" name="semiDetachedHouse"> 20-25套 </a-checkbox>
              <a-checkbox value="1" name="stackedVilla"> 25-30套 </a-checkbox>
              <a-checkbox value="2" name="singleFamilyVilla"> 30套以上 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="建筑年代">
            <a-checkbox-group v-model="queryParam.housetypes1">
              <a-checkbox value="1" name="stackedVilla"> 1900年以前 </a-checkbox>
              <a-checkbox value="2" name="singleFamilyVilla"> 1990-1995 </a-checkbox>
              <a-checkbox value="3" name="townhouse"> 1995-2000 </a-checkbox>
              <a-checkbox value="4" name="semiDetachedHouse"> 2000-2005 </a-checkbox>
              <a-checkbox value="5" name="semiDetachedHouse"> 2005-2010 </a-checkbox>
              <a-checkbox value="6" name="semiDetachedHouse"> 2010以后 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="建筑类型">
            <a-checkbox-group v-model="queryParam.housetypes1">
              <a-checkbox value="1" name="stackedVilla"> 塔楼 </a-checkbox>
              <a-checkbox value="2" name="singleFamilyVilla"> 板楼 </a-checkbox>
              <a-checkbox value="3" name="townhouse"> 塔板结合 </a-checkbox>
              <a-checkbox value="4" name="townhouse"> 其他 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="小区属性">
            <a-checkbox-group v-model="queryParam.housetypes1">
              <a-checkbox value="1" name="stackedVilla"> 住宅 </a-checkbox>
              <a-checkbox value="2" name="singleFamilyVilla"> 别墅 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="电梯">
            <a-checkbox-group v-model="queryParam.housetypes1">
              <a-checkbox value="1" name="stackedVilla"> 有电梯 </a-checkbox>
              <a-checkbox value="2" name="singleFamilyVilla"> 无电梯 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
        </a-form>
        <a-card :bordered="false">
          <a-layout >
            <a-layout-header :style="{ background: '#ffffff', padding: '0 128px',height:'50px',display:'flex' }">
              <div class="result">
                共找到<span>500</span>套 符合条件房源
              </div>
              <a-button-group>
                <a-button>综合排序</a-button>
                <a-button>
                  房屋总价
                </a-button>
                <a-button>
                  房屋单价
                </a-button>
                <a-button>
                  成交量
                </a-button>
              </a-button-group>
            </a-layout-header>
            <a-layout-content>
            </a-layout-content>
          </a-layout>
        </a-card>
      </a-layout-content>
    </a-layout>
    <!-- <a-card :bordered="false">
        <div class="table-page-search-wrapper">
          <a-form layout="inline">
            <a-row :gutter="48">
              <a-col :md="8" :sm="24">
                <span class="table-page-search-submitButtons">
                  <a-button style="margin-left: 8px" @click="() => (this.moreQuery = true)">查询</a-button>
                </span>
              </a-col>
            </a-row>
          </a-form>
        </div>
        <s-table
          ref="table"
          size="small"
          rowKey="id"
          :columns="columns"
          :data="loadData"
          :alert="false"
          :scroll="{ x: 2000 }"
          bordered
          showPagination="auto"
        >
          <span slot="isXXX" slot-scope="text">
            <template>
              {{ text ? '是' : '' }}
            </template>
          </span>
        </s-table>
    </a-card> -->
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import { STable, Ellipsis } from '@/components'
import { getHouse } from '@/api/manage'
import storage from 'store'
import { AutoComplete } from 'ant-design-vue'
const columns = [
  {
    title: '小区名称',
    dataIndex: 'communityName',
    width: '150px',
    fixed: true,
    scopedSlots: { customRender: 'communityName' }
  },
  { title: '区域', dataIndex: 'area', width: '50px' },
  { title: '板块', dataIndex: 'plate', width: '80px' },
  { title: '地区规划', dataIndex: 'districtPlanning', width: '100px' },
  { title: '环线汇总', dataIndex: 'loopSummary', width: '90px' },
  { title: '小区属性', dataIndex: 'cellAttributes', width: '80px' },
  { title: '地铁线', dataIndex: 'metroLine', width: '60px' },
  { title: '地铁站', dataIndex: 'subwayStation', width: '120px' },
  { title: '距离', dataIndex: 'distance', width: '60px' },
  { title: '交易权属', dataIndex: 'transactionOwnership', width: '80px' },
  { title: '最大楼层', dataIndex: 'maxFloor', width: '80px' },
  { title: '最小楼层', dataIndex: 'minFloor', width: '80px' },
  { title: '近一年成交量', dataIndex: 'volume2019', width: '100px' },
  { title: '1房面积段', dataIndex: 'roomArea1Max', width: '90px' },
  { title: '2房面积段', dataIndex: 'roomArea2Max', width: '90px' },
  { title: '3房面积段', dataIndex: 'roomArea3Max', width: '90px' },
  { title: '1房价格段', dataIndex: 'roomPriceRange1Max', width: '90px' },
  { title: '2房价格段', dataIndex: 'roomPriceRange2Max', width: '90px' },
  { title: '3房价格段', dataIndex: 'roomPriceRange3Max', width: '90px' },
  { title: '电梯', dataIndex: 'isLift', width: '60px', scopedSlots: { customRender: 'isXXX' } },
  { title: '室外游泳池', dataIndex: 'isOutdoorSwimmingRoom', width: '100px', scopedSlots: { customRender: 'isXXX' } },
  { title: '室内游泳池', dataIndex: 'isIndoorSwimmingPool', width: '100px', scopedSlots: { customRender: 'isXXX' } },
  { title: '会所', dataIndex: 'clubhouse', width: '60px', scopedSlots: { customRender: 'isXXX' } },
  { title: '洋房', dataIndex: 'bungalow', width: '60px', scopedSlots: { customRender: 'isXXX' } },
  { title: '双阳台', dataIndex: 'doubleBalcony', width: '60px', scopedSlots: { customRender: 'isXXX' } },
  { title: '大阳台', dataIndex: 'largeBalcony', width: '60px', scopedSlots: { customRender: 'isXXX' } },
  { title: '带花园', dataIndex: 'withGarden', width: '60px', scopedSlots: { customRender: 'isXXX' } },
  { title: '大露台', dataIndex: 'largeTerrace', width: '60px', scopedSlots: { customRender: 'isXXX' } },
  { title: '人车分流', dataIndex: 'peopleAndVehicles', width: '70px', scopedSlots: { customRender: 'isXXX' } },
  { title: '建筑类型', dataIndex: 'buildingType', width: '90px' },
  { title: '物业属性', dataIndex: 'propertyAttributes', width: '90px' },
  { title: '物业费', dataIndex: 'propertyCosts', width: '90px' },
  { title: '栋数', dataIndex: 'buildingNumber', width: '60px' },
  { title: '户数', dataIndex: 'householdsNumber', width: '60px' },
  { title: '车位数', dataIndex: 'parkingSpacesNumber', width: '300px' },
  { title: '容积率', dataIndex: 'volumeRate', width: '60px' },
  { title: '绿化率', dataIndex: 'greeningRate', width: '90px' },
  { title: '挂牌均价', dataIndex: 'averageLlistedPrice', width: '90px' },
  { title: '在售', dataIndex: 'inStock', width: '60px' },
  { title: '正租', dataIndex: 'positiveRent', width: '60px' },
  { title: '建筑年代', dataIndex: 'constructionAge', width: '80px' },
  { title: '开发商', dataIndex: 'developer', width: '250px' },
  { title: '物业公司', dataIndex: 'propertyCompany', width: '280px' },
  { title: '小学', dataIndex: 'primarySchool', width: '100px' },
  { title: '梯队表现', dataIndex: 'echelonPerformance', width: '90px' },
  { title: '一贯制', dataIndex: 'isConsistentSystem', width: '90px', scopedSlots: { customRender: 'isXXX' } },
  { title: '中学', dataIndex: 'middleSchool', width: '120px' },
  { title: '市梯队', dataIndex: 'cityEchelon', width: '90px', scopedSlots: { customRender: 'isXXX' } },
  { title: '区梯队', dataIndex: 'districtEchelon', width: '90px', scopedSlots: { customRender: 'isXXX' } },
  { title: '叠拼别墅', dataIndex: 'stackedVilla', width: '90px', scopedSlots: { customRender: 'isXXX' } },
  { title: '独栋别墅', dataIndex: 'singleFamilyVilla', width: '90px', scopedSlots: { customRender: 'isXXX' } },
  { title: '联排别墅', dataIndex: 'townhouse', width: '90px', scopedSlots: { customRender: 'isXXX' } },
  { title: '双拼别墅', dataIndex: 'semiDetachedHouse', width: '90px', scopedSlots: { customRender: 'isXXX' } },
  { title: '内部配套', dataIndex: 'internalSupporting', width: '150px' },
  { title: '地址', dataIndex: 'address', width: '150px' },
  { title: '产权年限', dataIndex: 'propertyRights', width: '350px' },
  { title: '小区介绍', dataIndex: 'communityDesc', width: '500px' }
]

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

export default {
  name: 'HouseQuery',
  components: {
    STable,
    Ellipsis,
    AutoComplete
  },
  data () {
    this.columns = columns
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
      prices: []
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
    this.tags = storage.get('tags') ? [].concat(JSON.parse(storage.get('tags'))) : []
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
    handleClose (removedTag) {
      const tags = this.tags.filter(tag => tag.label !== removedTag)
      console.log(tags)
      this.tags = tags
    },

    showInput () {
      this.inputVisible = true
      this.$nextTick(function () {
        this.$refs.tagInput.focus()
      })
    },

    tagNameChange (e) {
      this.inputValue = e.target.value
    },

    tagNameConfirm () {
      const inputValue = this.inputValue
      let tags = this.tags
      if (inputValue && !tags.find(e => e.label === inputValue)) {
        tags = [...tags, { label: inputValue, values: Object.assign({}, this.queryParam) }]
      }
      Object.assign(this, {
        tags,
        inputVisible: false,
        inputValue: ''
      })
      storage.set('tags', JSON.stringify(this.tags))
    },

    tagQuery (tag) {
      this.queryParam = tag.values
      this.$refs.table.refresh(true)
    },

    refresh () {
      // this.$refs.table.refresh(true)
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
.house-query-search-holder{
  width: 552px;
  margin: 0 auto;
}
.ant-checkbox-wrapper + .ant-checkbox-wrapper{
  margin-left: 0;
}
.result{
  flex:1;
  font-size: 20px;
  color: #262626;
}
.result span{
  color: #B71C2B;
}
</style>
