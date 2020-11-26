<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="小区名称">
                <a-input v-model="queryParam.communityName" placeholder=""/>
              </a-form-item>
            </a-col>
            <a-col :md="!advanced && 8 || 24" :sm="24">
              <span class="table-page-search-submitButtons" :style="advanced && { float: 'right', overflow: 'hidden' } || {} ">
                <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                <a-button style="margin-left: 8px" @click="() => this.queryParam = {}">重置</a-button>
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
        :alert="true"
        :scroll="{ x: 1300 }"
        bordered
        showPagination="auto"
      >
        <span slot="communityName" slot-scope="text, record">
          <template>
            <a @click="handleEdit(record)">{{text}}</a>
          </template>
        </span>
      </s-table>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import storage from 'store'
import { STable, Ellipsis } from '@/components'
import { getHouse } from '@/api/manage'
import { CreateForm } from '@/pages/workspace/CreateForm'

const columns = [
  { title: '小区名称', dataIndex: 'communityName', width: '150px', fixed: true, scopedSlots: { customRender: 'communityName' } },
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
  // { title: '2019成交量', dataIndex: 'volume2019', width: '150px' },
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
    Ellipsis,
    CreateForm
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
      inputVisible: false,
      tags: [],
      colors: ['pink', 'orange', 'red', 'green', 'cyan', 'blue', 'purple'],
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
      otherOptions: ['isLift', '近地铁', 'doubleBalcony']
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
    this.tags = [].concat(JSON.parse(storage.get('tags')))
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
        tags = [ ...tags, { label: inputValue, values: Object.assign({}, this.queryParam) } ]
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

    handleEdit (record) {
      this.$dialog(CreateForm,
        // component props
        {
          record: {},
          on: {
            ok () {
              console.log('ok 回调')
            },
            cancel () {
              console.log('cancel 回调')
            },
            close () {
              console.log('modal close 回调')
            }
          }
        },
        // modal props
        {
          title: '新增',
          width: 700,
          centered: true,
          maskClosable: false
        })
    },

    refresh () {
      this.$refs.table.refresh(true)
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

.ant-form-item{
  margin-bottom: 12px;
}
.ant-form-item .ant-form-item{
  margin-bottom: 0px;
}
</style>
