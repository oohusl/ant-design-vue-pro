<template>
  <a-card :bordered="false">
    <a-card-grid style="width:300px; padding: 25px 12px 12px 12px">
      <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
        <a-form-item v-bind="tailFormItemLayout">
          <a-button type="primary" style="width: 100%">
            筛选
          </a-button>
        </a-form-item>
        <a-form-item
          label="最近筛选"
        >
          <a-tag color="pink">李二</a-tag><a-tag color="red">李一</a-tag>
          <a-tag color="orange">张三</a-tag><a-tag color="green">李四</a-tag>
          <a-tag color="cyan">热门</a-tag>
          <br>
          <a-tag style="background: #fff; borderStyle: dashed;">
            <a-icon type="plus" /> 新建筛选
          </a-tag>
          <a-tag style="background: #fff; borderStyle: dashed;">
            <a-icon type="minus" /> 删除筛选
          </a-tag>

        </a-form-item>
        <a-form-item
          label="区域"
        >
          <a-select default-value="浦东" >
            <a-select-option value="jack">
              浦东
            </a-select-option>
            <a-select-option value="lucy">
              徐汇
            </a-select-option>
            <a-select-option value="disabled" disabled>
              静安
            </a-select-option>
            <a-select-option value="Yiminghe">
              长宁
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="售价(万)">
          <a-form-item
            :style="{ display: 'inline-block', width: 'calc(50% - 12px)'}"
          >
            <a-input style="width: 100%" />
          </a-form-item>
          <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center'}">
            -
          </span>
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-input style="width: 100%" />
          </a-form-item>
        </a-form-item>
        <a-form-item
          label="面积"
        >
          <a-form-item
            :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }"
          >
            <a-input-number style="width: 100%" />
          </a-form-item>
          <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }">
            -
          </span>
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-input-number style="width: 100%" />
          </a-form-item>
        </a-form-item>
        <a-form-item
          label="房型"
        >
          <a-select default-value="浦东" >
            <a-select-option value="jack">
              全部
            </a-select-option>
            <a-select-option value="lucy">
              一室
            </a-select-option>
            <a-select-option value="disabled">
              二室
            </a-select-option>
            <a-select-option value="Yiminghe">
              三室
            </a-select-option>
            <a-select-option value="Yiminghe">
              四室
            </a-select-option>
            <a-select-option value="Yiminghe">
              五室以上
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          label="Field B"
        >
          <a-input placeholder="input placeholder" />
        </a-form-item>
        <a-form-item
          label="Field B"
        >
          <a-input placeholder="input placeholder" />
        </a-form-item>
        <a-form-item
          label="Field B"
        >
          <a-input placeholder="input placeholder" />
        </a-form-item>
        <a-form-item
          label="Field B"
        >
          <a-input placeholder="input placeholder" />
        </a-form-item>
        <a-form-item
          label="Field B"
        >
          <a-input placeholder="input placeholder" />
        </a-form-item>
        <a-form-item
          label="Field B"
        >
          <a-input placeholder="input placeholder" />
        </a-form-item>
        <a-form-item
          label="Field B"
        >
          <a-input placeholder="input placeholder" />
        </a-form-item>
        <a-form-item
          label="Field B"
        >
          <a-input placeholder="input placeholder" />
        </a-form-item>
      </a-form>
    </a-card-grid>
    <a-card-grid style="width: calc(100% - 300px)">
      <s-table
        ref="table"
        size="default"
        rowKey="key"
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
import { getRoleList, getUserList, saveUser } from '@/api/manage'

const columns = [
  { title: '小区名称', dataIndex: 'community_name', width: '150px', fixed: true },
  { title: '区域', dataIndex: 'area', width: '150px' },
  { title: '板块', dataIndex: 'plate', width: '150px' },
  { title: '地区规划', dataIndex: 'district_planning', width: '150px' },
  { title: '到江湾镇时间', dataIndex: 'time_to_jiangwang', width: '150px' },
  { title: '环线汇总', dataIndex: 'loop_summary', width: '150px' },
  { title: '小区属性', dataIndex: 'cell_attributes', width: '150px' },
  { title: '地铁线', dataIndex: 'metro_line', width: '150px' },
  { title: '地铁站', dataIndex: 'subway_station', width: '150px' },
  { title: '距离', dataIndex: 'distance', width: '150px' },
  { title: '交易权属', dataIndex: 'transaction_ownership', width: '150px' },
  { title: '最大楼层', dataIndex: 'max_floor', width: '150px' },
  { title: '最小楼层', dataIndex: 'min_floor', width: '150px' },
  { title: '2019成交量', dataIndex: 'volume_2019', width: '150px' },
  { title: '1房面积段', dataIndex: 'room_area_1', width: '150px' },
  { title: '2房面积段', dataIndex: 'room_area_2', width: '150px' },
  { title: '3房面积段', dataIndex: 'room_area_3', width: '150px' },
  { title: '1房价格段', dataIndex: 'room_price_range_1', width: '150px' },
  { title: '2房价格段', dataIndex: 'room_price_range_2', width: '150px' },
  { title: '3房价格段', dataIndex: 'room_price_range_3', width: '150px' },
  { title: '是否电梯', dataIndex: 'is_lift', width: '150px' },
  { title: '室外游泳池', dataIndex: 'is_outdoor_swimming_room', width: '150px' },
  { title: '室内游泳池', dataIndex: 'is_indoor_swimming_pool', width: '150px' },
  { title: '会所', dataIndex: 'clubhouse', width: '150px' },
  { title: '洋房', dataIndex: 'bungalow', width: '150px' },
  { title: '双阳台', dataIndex: 'double_balcony', width: '150px' },
  { title: '大阳台', dataIndex: 'large_balcony', width: '150px' },
  { title: '带花园', dataIndex: 'with_garden', width: '150px' },
  { title: '大露台', dataIndex: 'large_terrace', width: '150px' },
  { title: '人车分流', dataIndex: 'people_and_vehicles', width: '150px' },
  { title: '建筑类型', dataIndex: 'building_type', width: '150px' },
  { title: '物业属性', dataIndex: 'property_attributes', width: '150px' },
  { title: '物业费', dataIndex: 'property_costs', width: '150px' },
  { title: '栋数', dataIndex: 'building_number', width: '150px' },
  { title: '户数', dataIndex: 'households_number', width: '150px' },
  { title: '车位数', dataIndex: 'parking_spaces_number', width: '150px' },
  { title: '容积率', dataIndex: 'volume_rate', width: '150px' },
  { title: '绿化率', dataIndex: 'greening_rate', width: '150px' },
  { title: '挂牌均价', dataIndex: 'average_llisted_price', width: '150px' },
  { title: '在售-3.20', dataIndex: 'in_stock', width: '150px' },
  { title: '正租-3.20', dataIndex: 'positive_rent', width: '150px' },
  { title: '建筑代', dataIndex: 'construction_age', width: '150px' },
  { title: '开发商', dataIndex: 'developer', width: '150px' },
  { title: '物业公司', dataIndex: 'property_company', width: '150px' },
  { title: '小学', dataIndex: 'primary_school', width: '150px' },
  { title: '梯队表现', dataIndex: 'echelon_performance', width: '150px' },
  { title: '是否一贯制', dataIndex: 'is_consistent_system', width: '150px' },
  { title: '中学', dataIndex: 'middle_school', width: '150px' },
  { title: '市梯队', dataIndex: 'city_echelon', width: '150px' },
  { title: '区梯队', dataIndex: 'district_echelon', width: '150px' },
  { title: '叠拼别墅', dataIndex: 'stacked_villa', width: '150px' },
  { title: '独栋别墅', dataIndex: 'single_family_villa', width: '150px' },
  { title: '联排别墅', dataIndex: 'townhouse', width: '150px' },
  { title: '双拼别墅', dataIndex: 'semi_detached_house', width: '150px' },
  { title: '内部配套', dataIndex: 'internal_supporting', width: '150px' },
  { title: '地址', dataIndex: 'address', width: '150px' },
  { title: '产权年限', dataIndex: 'property_rights', width: '150px' },
  { title: '小区介绍', dataIndex: 'community_desc', width: '150px' }
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
  name: 'HouseManage',
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
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        console.log('loadData request parameters:', requestParameters)
        return getUserList(requestParameters).then((res) => {
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
      }
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
    getRoleList({ t: new Date() })
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
    handleAdd () {
      this.mdl = null
      this.visible = true
    },
    handleEdit (record) {
      this.visible = true
      this.mdl = { ...record }
    },
    handleOk () {
      const form = this.$refs.createModal.form
      this.confirmLoading = true
      form.validateFields((errors, values) => {
        if (!errors) {
          console.log('values', values)
          if (values.id > 0) {
            // 修改 e.g.
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve()
              }, 1000)
            }).then((res) => {
              this.visible = false
              this.confirmLoading = false
              // 重置表单数据
              form.resetFields()
              // 刷新表格
              this.$refs.table.refresh()

              this.$message.info('修改成功')
            })
          } else {
            // 新增
            const user = {}
            user.iphone = values.iphone
            saveUser(user)
              .then()
              .then((res) => {
                this.visible = false
                this.confirmLoading = false
                // 重置表单数据
                form.resetFields()
                // 刷新表格
                this.$refs.table.refresh()
                this.$message.info('新增成功')
              })
              .catch((e) => {
                this.$message.error('新增失败')
                this.confirmLoading = false
              })
          }
        } else {
          this.confirmLoading = false
        }
      })
    },
    handleCancel () {
      this.visible = false
      this.confirmLoading = false
      const form = this.$refs.createModal.form
      form.resetFields() // 清理表单数据（可不做）
    },
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

.ant-form-item{
  margin-bottom: 12px;
}
.ant-form-item .ant-form-item{
  margin-bottom: 0px;
}
</style>
