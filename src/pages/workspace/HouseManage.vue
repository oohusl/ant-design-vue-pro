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
            <a-col :md="8" :sm="24">
              <span class="table-page-search-submitButtons">
                <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                <a-button style="margin-left: 8px" @click="() => this.queryParam = {}">重置</a-button>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>
      <div class="table-operator">
        <a-button type="primary" icon="plus" @click="visible = true">新建</a-button>
      </div>
      <s-table
        ref="table"
        size="small"
        rowKey="id"
        :columns="columns"
        :data="loadData"
        :alert="false"
        :scroll="{ x: 1300 }"
        bordered
        showPagination="auto"
      >
        <span slot="communityName" slot-scope="text, record">
          <template>
            <a @click="handleEdit(record)">{{ text }}</a>
          </template>
        </span>
      </s-table>
    </a-card>
    <a-modal title="房源编辑" v-model="visible" @ok="save">
      <a-spin :spinning="saveLoading">
        <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
          <a-form-item label="小区名称">
            <a-input v-model="house.communityName"/>
          </a-form-item>
          <a-form-item label="区域">
            <a-select default-value="浦东" v-model="house.area" placeholder="请选择">
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
          <a-form-item label="单价(万)">
            <a-input style="width: 100%" v-model="house.averageLlistedPrice" placeholder="请输入"/>
          </a-form-item>
          <a-form-item label="年售(套)">
            <a-input style="width: 100%" v-model="house.volume2019" placeholder="请输入"/>
          </a-form-item>
          <a-form-item label="地铁">
            <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 10px)' }">
              <a-select v-model="house.metroLine" placeholder="请选择">
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
              <a-input style="width: 100%" v-model="house.distance" placeholder="地铁距离"/>
            </a-form-item>
          </a-form-item>
          <a-form-item label="小学学区">
            <a-select v-model="house.echelonPerformance" placeholder="请选择">
              <a-select-option value="一梯队">一梯队</a-select-option>
              <a-select-option value="二梯队">二梯队</a-select-option>
              <a-select-option value="三梯队">三梯队</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="建筑年代">
            <a-input-number style="width: 100%" v-model="house.constructionAge" placeholder="请输入"/>
          </a-form-item>
          <a-form-item label="其他">
            <a-checkbox-group v-model="house.checkedList">
              <a-checkbox value="isLift">有电梯</a-checkbox>
              <a-checkbox value="peopleAndVehicles">人车分流</a-checkbox>
            </a-checkbox-group>
          </a-form-item>
        </a-form>
      </a-spin>
    </a-modal>
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import { STable, Ellipsis } from '@/components'
import { getHouse, saveHouse } from '@/api/manage'
import HouseForm from '@/pages/workspace/HouseForm'

const columns = [
  { title: '小区名称', dataIndex: 'communityName', width: '150px', fixed: true, scopedSlots: { customRender: 'communityName' } },
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

export default {
  name: 'HouseQuery',
  components: {
    STable,
    Ellipsis,
    HouseForm
  },
  data () {
    this.columns = columns
    return {
      // create model
      visible: false,
      saveLoading: false,
      mdl: null,
      // 查询参数
      queryParam: {},
      house: {},
      inputVisible: false,
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
  created () {
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
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
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
    handleEdit (record) {
      this.visible = true
      this.house = Object.assign({}, record)
    },
    save () {
      if (this.house.checkedList) {
          this.house.checkedList.forEach((e) => { this.house[e] = true })
          delete this.house.checkedList
      }
      saveHouse(this.house).then(e => {
        this.refresh()
        this.$notification.success({
          message: '通知',
          description: this.house.id ? '修改成功' : '保存成功'
        })
      })
      .catch(
        () => {
          this.$notification.error({
          message: '通知',
          description: this.house.id ? '修改失败' : '保存失败'
        })
      })
      .finally(
        () => {
          this.visible = false
          this.house = {}
        }
      )
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
