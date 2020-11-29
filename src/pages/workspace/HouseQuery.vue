<template>
  <a-card title="房源查询" v-model="visible">
    <a-card-grid style="width: 300px; padding: 25px 12px 12px 12px; height: 540px; overflow: scroll">
      <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
        <a-form-item v-bind="tailFormItemLayout">
          <a-button type="primary" style="width: 100%" @click="$refs.table.refresh(true)"> 筛选 </a-button>
        </a-form-item>
        <a-form-item label="最近筛选">
          <template v-for="(tag, index) in tags">
            <a-tag :key="tag.label" :color="colors[index%7]" closable @click="tagQuery(tag)" @close="() => handleClose(tag.label)">
              {{ `${tag.label}` }}
            </a-tag>
          </template>
          <br />
          <a-input
            v-if="inputVisible"
            ref="tagInput"
            type="text"
            size="small"
            :style="{ width: '78px' }"
            :value="tagName"
            @change="tagNameChange"
            @blur="tagNameConfirm"
            @keyup.enter="tagNameConfirm"
          />
          <a-tag v-else style="background: #fff; borderstyle: dashed" @click="showInput"> <a-icon type="plus" /> 保存筛选 </a-tag>
        </a-form-item>
        <a-form-item label="区域">
          <a-select default-value="浦东" v-model="queryParam.areas" mode="multiple" @change="refresh" placeholder="请选择">
            <a-select-option value="静安"> 静安 </a-select-option>
            <a-select-option value="浦东"> 浦东 </a-select-option>
            <a-select-option value="徐汇"> 徐汇 </a-select-option>
            <a-select-option value="杨浦"> 杨浦 </a-select-option>
            <a-select-option value="黄浦"> 黄浦 </a-select-option>
            <a-select-option value="长宁"> 长宁 </a-select-option>
            <a-select-option value="普陀"> 普陀 </a-select-option>
            <a-select-option value="虹口"> 虹口 </a-select-option>
            <a-select-option value="松江"> 松江 </a-select-option>
            <a-select-option value="闵行"> 闵行 </a-select-option>
            <a-select-option value="宝山"> 宝山 </a-select-option>
            <a-select-option value="奉贤"> 奉贤 </a-select-option>
            <a-select-option value="青浦"> 青浦 </a-select-option>
            <a-select-option value="嘉定"> 嘉定 </a-select-option>
            <a-select-option value="金山"> 金山 </a-select-option>
            <a-select-option value="崇明"> 崇明 </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="总价(万)">
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-input style="width: 100%" v-model="queryParam.roomPriceRange3Min" @pressEnter="refresh" placeholder="请输入"/>
          </a-form-item>
          <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }"> - </span>
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-input style="width: 100%" v-model="queryParam.roomPriceRange3Max" @pressEnter="refresh" placeholder="请输入"/>
          </a-form-item>
        </a-form-item>
        <a-form-item label="单价(万)">
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-input style="width: 100%" v-model="queryParam.averageLlistedPriceMin" placeholder="请输入"/>
          </a-form-item>
          <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }"> - </span>
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-input style="width: 100%" v-model="queryParam.averageLlistedPriceMax" placeholder="请输入"/>
          </a-form-item>
        </a-form-item>
        <a-form-item label="年售(套)">
          <a-input style="width: 100%" v-model="queryParam.volume2019Min" @pressEnter="refresh" placeholder="请输入"/>
        </a-form-item>
        <a-form-item label="面积">
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-input-number style="width: 100%" v-model="queryParam.roomArea3Min" @pressEnter="refresh" placeholder="请输入"/>
          </a-form-item>
          <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }"> - </span>
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-input-number style="width: 100%" v-model="queryParam.roomArea3Max" @pressEnter="refresh" placeholder="请输入"/>
          </a-form-item>
        </a-form-item>
        <a-form-item label="地铁">
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 10px)' }">
            <a-select mode="multiple" v-model="queryParam.metroLines" @pressEnter="refresh" placeholder="请选择">
              <a-select-option value="1">1号线</a-select-option>
              <a-select-option value="2">2号线</a-select-option>
              <a-select-option value="3">3号线</a-select-option>
              <a-select-option value="4">4号线</a-select-option>
              <a-select-option value="5">5号线</a-select-option>
              <a-select-option value="6">6号线</a-select-option>
              <a-select-option value="7">7号线</a-select-option>
              <a-select-option value="8">8号线</a-select-option>
              <a-select-option value="9">9号线</a-select-option>
              <a-select-option value="10">10号线</a-select-option>
              <a-select-option value="11">11号线</a-select-option>
              <a-select-option value="12">12号线</a-select-option>
              <a-select-option value="13">13号线</a-select-option>
              <a-select-option value="14">14号线</a-select-option>
              <a-select-option value="15">15号线</a-select-option>
              <a-select-option value="16">16号线</a-select-option>
              <a-select-option value="17">17号线</a-select-option>
              <a-select-option value="18">18号线</a-select-option>
            </a-select>
          </a-form-item>
          <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> - </span>
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-input style="width: 100%" v-model="queryParam.distance" @pressEnter="refresh" placeholder="地铁距离"/>
          </a-form-item>
        </a-form-item>
        <a-form-item label="小学学区">
          <a-select mode="multiple" v-model="queryParam.echelonPerformances" @pressEnter="refresh" placeholder="请选择">
            <a-select-option value="一梯队">一梯队</a-select-option>
            <a-select-option value="二梯队">二梯队</a-select-option>
            <a-select-option value="三梯队">三梯队</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="建筑年代">
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-input-number style="width: 100%" v-model="queryParam.constructionAgeMin" @pressEnter="refresh" placeholder="请输入"/>
          </a-form-item>
          <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }"> - </span>
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-input-number style="width: 100%" v-model="queryParam.constructionAgeMax" @pressEnter="refresh" placeholder="请输入"/>
          </a-form-item>
        </a-form-item>
        <a-form-item label="其他">
          <a-checkbox-group v-model="queryParam.checkedList">
            <a-checkbox value="isLift">有电梯</a-checkbox>
            <a-checkbox value="peopleAndVehicles">人车分流</a-checkbox>
          </a-checkbox-group>
        </a-form-item>
      </a-form>
    </a-card-grid>
    <a-card-grid style="width: calc(100% - 300px); height: 540px; overflow: scroll">
      <s-table
        ref="table"
        size="small"
        rowKey="id"
        :columns="columns"
        :data="loadData"
        :alert="false"
        :scroll="{ y: 400, x: 2000 }"
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
import storage from 'store'

const columns = [
  { title: '小区名称', dataIndex: 'communityName', width: '150px', fixed: true },
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
  { title: '电梯', dataIndex: 'isLift', width: '60px' },
  { title: '室外游泳池', dataIndex: 'isOutdoorSwimmingRoom', width: '100px' },
  { title: '室内游泳池', dataIndex: 'isIndoorSwimmingPool', width: '100px' },
  { title: '会所', dataIndex: 'clubhouse', width: '60px' },
  { title: '洋房', dataIndex: 'bungalow', width: '60px' },
  { title: '双阳台', dataIndex: 'doubleBalcony', width: '60px' },
  { title: '大阳台', dataIndex: 'largeBalcony', width: '60px' },
  { title: '带花园', dataIndex: 'withGarden', width: '60px' },
  { title: '大露台', dataIndex: 'largeTerrace', width: '60px' },
  { title: '人车分流', dataIndex: 'peopleAndVehicles', width: '70px' },
  { title: '建筑类型', dataIndex: 'buildingType', width: '90px' },
  { title: '物业属性', dataIndex: 'propertyAttributes', width: '90px' },
  { title: '物业费', dataIndex: 'propertyCosts', width: '90px' },
  { title: '栋数', dataIndex: 'buildingNumber', width: '60px' },
  { title: '户数', dataIndex: 'householdsNumber', width: '60px' },
  { title: '车位数', dataIndex: 'parkingSpacesNumber', width: '60px' },
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
  { title: '一贯制', dataIndex: 'isConsistentSystem', width: '90px' },
  { title: '中学', dataIndex: 'middleSchool', width: '120px' },
  { title: '市梯队', dataIndex: 'cityEchelon', width: '90px' },
  { title: '区梯队', dataIndex: 'districtEchelon', width: '90px' },
  { title: '叠拼别墅', dataIndex: 'stackedVilla', width: '90px' },
  { title: '独栋别墅', dataIndex: 'singleFamilyVilla', width: '90px' },
  { title: '联排别墅', dataIndex: 'townhouse', width: '90px' },
  { title: '双拼别墅', dataIndex: 'semiDetachedHouse', width: '90px' },
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
      inputVisible: false,
      tags: [],
      colors: ['pink', 'orange', 'red', 'green', 'cyan', 'blue', 'purple'],
      // 加载数据方法 必须为 Promise 对象
      loadData: (parameter) => {
        const requestParameters = Object.assign({ sort: 'id,asc' }, parameter, this.queryParam)
        if (this.queryParam.checkedList) {
          this.queryParam.checkedList.forEach((e) => { requestParameters[e] = true })
          delete requestParameters.checkedList
        }
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

.ant-form-item {
  margin-bottom: 12px;
}
.ant-form-item .ant-form-item {
  margin-bottom: 0px;
}
.ant-card-grid{
  padding: 2px;
}
</style>
