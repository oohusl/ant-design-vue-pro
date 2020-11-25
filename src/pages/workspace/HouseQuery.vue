<template>
  <a-card :bordered="false">
    <a-card-grid style="width: 300px; padding: 25px 12px 12px 12px">
      <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
        <a-form-item v-bind="tailFormItemLayout">
          <a-button type="primary" style="width: 100%" @click="$refs.table.refresh(true)"> 筛选 </a-button>
        </a-form-item>
        <a-form-item label="最近筛选">
          <a-tag color="pink">李二</a-tag><a-tag color="red">李一</a-tag> <a-tag color="orange">张三</a-tag
          ><a-tag color="green">李四</a-tag>
          <a-tag color="cyan">热门</a-tag>
          <br />
          <a-tag style="background: #fff; borderstyle: dashed"> <a-icon type="plus" /> 新建筛选 </a-tag>
          <a-tag style="background: #fff; borderstyle: dashed"> <a-icon type="minus" /> 删除筛选 </a-tag>
        </a-form-item>
        <a-form-item label="区域">
          <a-select default-value="浦东" mode="multiple" v-model="queryParam.area">
            <a-select-option value="浦东"> 浦东 </a-select-option>
            <a-select-option value="徐汇"> 徐汇 </a-select-option>
            <a-select-option value="静安"> 静安 </a-select-option>
            <a-select-option value="长宁"> 长宁 </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="售价(万)">
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-input style="width: 100%" />
          </a-form-item>
          <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }"> - </span>
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-input style="width: 100%" />
          </a-form-item>
        </a-form-item>
        <a-form-item label="面积">
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-input-number style="width: 100%" />
          </a-form-item>
          <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }"> - </span>
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-input-number style="width: 100%" />
          </a-form-item>
        </a-form-item>
        <a-form-item label="房型">
          <a-select mode="multiple">
            <a-select-option value="lucy">一室</a-select-option>
            <a-select-option value="disabled">二室</a-select-option>
            <a-select-option value="Yiminghe">三室</a-select-option>
            <a-select-option value="Yiminghe">四室</a-select-option>
            <a-select-option value="Yiminghe">五室以上</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="建筑年代">
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-input-number style="width: 100%" />
          </a-form-item>
          <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }"> - </span>
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-input-number style="width: 100%" />
          </a-form-item>
        </a-form-item>
        <a-form-item label="房屋类型">
          <a-select mode="multiple">
            <a-select-option value="lucy">公寓</a-select-option>
            <a-select-option value="disabled">普通住宅</a-select-option>
            <a-select-option value="Yiminghe">联排</a-select-option>
            <a-select-option value="dudog">独栋</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="楼层">
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-input-number style="width: 100%" />
          </a-form-item>
          <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }"> - </span>
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-input-number style="width: 100%" />
          </a-form-item>
        </a-form-item>
        <a-form-item label="其他">
          <a-checkbox-group v-model="checkedList" :options="otherOptions"/>
        </a-form-item>
      </a-form>
    </a-card-grid>
    <a-card-grid style="width: calc(100% - 300px)">
      <s-table
        ref="table"
        size="small"
        rowKey="id"
        :columns="columns"
        :data="loadData"
        :alert="true"
        :scroll="{ x: 1300 }"
        bordered
        showPagination="auto"
      >
      </s-table>
    </a-card-grid>
  </a-card>
</template>

<script>
import moment from 'moment'
import { STable, Ellipsis } from '@/components'
import { getHouse } from '@/api/manage'

const columns = [
  { title: '小区名称', dataIndex: 'communityName', width: '150px', fixed: true },
  { title: '区域', dataIndex: 'area', width: '100px' },
  { title: '板块', dataIndex: 'plate', width: '100px' },
  { title: '地区规划', dataIndex: 'districtPlanning', width: '150px' },
  { title: '环线汇总', dataIndex: 'loopSummary', width: '150px' },
  { title: '小区属性', dataIndex: 'cellAttributes', width: '90px' },
  { title: '地铁线', dataIndex: 'metroLine', width: '150px' },
  { title: '地铁站', dataIndex: 'subwayStation', width: '100px' },
  { title: '距离', dataIndex: 'distance', width: '150px' },
  { title: '交易权属', dataIndex: 'transactionOwnership', width: '150px' },
  { title: '最大楼层', dataIndex: 'maxFloor', width: '150px' },
  { title: '最小楼层', dataIndex: 'minFloor', width: '150px' },
  { title: '2019成交量', dataIndex: 'volume2019', width: '150px' },
  { title: '1房面积段', dataIndex: 'roomArea1Max', width: '150px' },
  { title: '2房面积段', dataIndex: 'roomArea2Max', width: '150px' },
  { title: '3房面积段', dataIndex: 'roomArea3Max', width: '150px' },
  { title: '1房价格段', dataIndex: 'roomPriceRange1Max', width: '150px' },
  { title: '2房价格段', dataIndex: 'roomPriceRange2Max', width: '150px' },
  { title: '3房价格段', dataIndex: 'roomPriceRange3Max', width: '150px' },
  { title: '是否电梯', dataIndex: 'isLift', width: '150px' },
  { title: '室外游泳池', dataIndex: 'isOutdoorSwimmingRoom', width: '150px' },
  { title: '室内游泳池', dataIndex: 'isIndoorSwimmingPool', width: '150px' },
  { title: '会所', dataIndex: 'clubhouse', width: '150px' },
  { title: '洋房', dataIndex: 'bungalow', width: '150px' },
  { title: '双阳台', dataIndex: 'doubleBalcony', width: '150px' },
  { title: '大阳台', dataIndex: 'largeBalcony', width: '150px' },
  { title: '带花园', dataIndex: 'withGarden', width: '150px' },
  { title: '大露台', dataIndex: 'largeTerrace', width: '150px' },
  { title: '人车分流', dataIndex: 'peopleAndVehicles', width: '150px' },
  { title: '建筑类型', dataIndex: 'buildingType', width: '150px' },
  { title: '物业属性', dataIndex: 'propertyAttributes', width: '150px' },
  { title: '物业费', dataIndex: 'propertyCosts', width: '150px' },
  { title: '栋数', dataIndex: 'buildingNumber', width: '150px' },
  { title: '户数', dataIndex: 'householdsNumber', width: '150px' },
  { title: '车位数', dataIndex: 'parkingSpacesNumber', width: '280px' },
  { title: '容积率', dataIndex: 'volumeRate', width: '150px' },
  { title: '绿化率', dataIndex: 'greeningRate', width: '150px' },
  { title: '挂牌均价', dataIndex: 'averageLlistedPrice', width: '150px' },
  { title: '在售', dataIndex: 'inStock', width: '150px' },
  { title: '正租', dataIndex: 'positiveRent', width: '150px' },
  { title: '建筑年代', dataIndex: 'constructionAge', width: '150px' },
  { title: '开发商', dataIndex: 'developer', width: '150px' },
  { title: '物业公司', dataIndex: 'propertyCompany', width: '280px' },
  { title: '小学', dataIndex: 'primarySchool', width: '150px' },
  { title: '梯队表现', dataIndex: 'echelonPerformance', width: '150px' },
  { title: '是否一贯制', dataIndex: 'isConsistentSystem', width: '150px' },
  { title: '中学', dataIndex: 'middleSchool', width: '150px' },
  { title: '市梯队', dataIndex: 'cityEchelon', width: '150px' },
  { title: '区梯队', dataIndex: 'districtEchelon', width: '150px' },
  { title: '叠拼别墅', dataIndex: 'stackedVilla', width: '150px' },
  { title: '独栋别墅', dataIndex: 'singleFamilyVilla', width: '150px' },
  { title: '联排别墅', dataIndex: 'townhouse', width: '150px' },
  { title: '双拼别墅', dataIndex: 'semiDetachedHouse', width: '150px' },
  { title: '内部配套', dataIndex: 'internalSupporting', width: '350px' },
  { title: '地址', dataIndex: 'address', width: '150px' },
  { title: '产权年限', dataIndex: 'propertyRights', width: '150px' },
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
    Ellipsis
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
      // 加载数据方法 必须为 Promise 对象
      loadData: (parameter) => {
        const requestParameters = Object.assign({ sort: 'id,asc' }, parameter, this.queryParam)
        console.log('loadData request parameters:', requestParameters)
        return getHouse(requestParameters).then((res) => {
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
      otherOptions: ['有电梯', '近地铁', '双阳台']
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
  created () {},
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
</style>
