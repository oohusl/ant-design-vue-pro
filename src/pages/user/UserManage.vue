<template>
  <a-card :bordered="false">
    <div class="table-operator">
      <a-button type="primary" icon="plus" @click="handleAdd">新建</a-button>
      <a-button @click="$refs.table.refresh(true)">查询</a-button>
    </div>
    <s-table
      ref="table"
      size="middle"
      :columns="columns"
      rowKey="login"
      :data="loadData"
      :alert="false"
      :pageSize="10000"
      :showPagination="false"
      @change="handleChange"
    >
      <span slot="activated" slot-scope="text">
        {{ text ? '' : '冻结' }}
      </span>
      <span slot="role" slot-scope="text">
        {{ getLabel(text[0], roleOptions) }}
      </span>
      <span slot="lastModifiedDate" slot-scope="text">
        {{ text | momentTime }}
      </span>
      <span slot="description" slot-scope="text">
        <ellipsis :length="4" tooltip>{{ text }}</ellipsis>
      </span>
      <span slot="imageUrl" slot-scope="text">
        <a-avatar v-if="text" :src="text"></a-avatar>
      </span>
      <span slot="action" slot-scope="text, record">
        <template>
          <a @click="handleEdit(record)">编辑</a>
          <a-divider type="vertical" />
          <a @click="resetPassword(record)">重置密码</a>
        </template>
      </span>
    </s-table>
    <create-form
      ref="createModal"
      :visible="visible === 1"
      :loading="confirmLoading"
      :model="mdl"
      @cancel="handleCancel"
      @ok="handleOk"
    />
    <edit-form
      ref="editModal"
      :visible="visible === 2"
      :loading="confirmLoading"
      :model="mdl"
      @cancel="handleCancel"
      @ok="handleEditOk"
    />
  </a-card>
</template>

<script>
import { STable, Ellipsis } from '@/components'
import { getUserList, saveUser, updateUser, resetPassword } from '@/api/manage'
import { roleOptions, getLabel } from '@/api/data'

import CreateForm from './modules/CreateForm'
import EditForm from './modules/EditForm'

export default {
  name: 'UserManage',
  components: {
    STable,
    Ellipsis,
    CreateForm,
    EditForm
  },
  data () {
    return {
      // create model
      visible: 0,
      confirmLoading: false,
      mdl: null,
      // 查询参数
      queryParam: {},
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        const requestParameters = Object.assign({}, this.queryParam)
        console.log('loadData request parameters:', requestParameters)
        return getUserList(requestParameters).then(res => {
          return res
        })
      },
      sortedInfo: {},
      selectedRowKeys: [],
      selectedRows: [],
      roleOptions
    }
  },
  computed: {
    rowSelection () {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange
      }
    },
    columns () {
      const columns = [
        {
          title: '账号',
          dataIndex: 'login',
          sorter: (a, b) => a.login.localeCompare(b.login)
        },
        {
          title: '姓名',
          dataIndex: 'firstName',
          sorter: (a, b) => (a.firstName || '').localeCompare(b.firstName || '')
        },
        {
          title: '邮箱',
          dataIndex: 'email',
          sorter: (a, b) => a.email.localeCompare(b.email)
        },
        {
          title: '头像',
          dataIndex: 'imageUrl',
          scopedSlots: { customRender: 'imageUrl' }
        },
        {
          title: '状态',
          dataIndex: 'activated',
          scopedSlots: { customRender: 'activated' },
          sorter: (a, b) => Number(a.activated) - Number(b.activated)
        },
        {
          title: '角色',
          dataIndex: 'authorities',
          scopedSlots: { customRender: 'role' },
          sorter: (a, b) => a.authorities[0].localeCompare(b.authorities[0])
        },
        {
          title: '更新时间',
          dataIndex: 'lastModifiedDate',
          scopedSlots: { customRender: 'lastModifiedDate' },
          sorter: (a, b) => a.lastModifiedDate.localeCompare(b.lastModifiedDate)
        },
        {
          title: '操作',
          dataIndex: 'action',
          width: '150px',
          scopedSlots: { customRender: 'action' }
        }
      ]
      return columns
    }
  },
  methods: {
    handleAdd () {
      this.mdl = null
      this.visible = 1
    },
    handleEdit (record) {
      this.visible = 2
      this.mdl = { ...record }
    },
    handleEditOk () {
      const form = this.$refs.editModal.form
      this.confirmLoading = true
      form.validateFields((errors, values) => {
        if (!errors) {
          console.log('values', values)
          // 修改 e.g.
          updateUser(Object.assign(this.mdl, values)).then(res => {
            this.visible = 0
            this.confirmLoading = false
            // 重置表单数据
            form.resetFields()
            // 刷新表格
            this.$refs.table.refresh()
            this.$message.success('修改成功')
          })
        } else {
          this.confirmLoading = false
        }
      })
    },
    handleOk () {
      const form = this.$refs.createModal.form
      this.confirmLoading = true
      form.validateFields((errors, values) => {
        if (!errors) {
          console.log('values', values)

          const user = {}
          user.iphone = values.iphone
          saveUser(user)
            .then()
            .then(res => {
              this.visible = 0
              this.confirmLoading = false
              // 重置表单数据
              form.resetFields()
              // 刷新表格
              this.$refs.table.refresh()
              this.$message.success('新增成功')
            })
            .catch(e => {
              this.$message.error('新增失败')
              this.confirmLoading = false
            })
        } else {
          this.confirmLoading = false
        }
      })
    },
    handleCancel () {
      this.visible = 0
      this.confirmLoading = false
      const form = this.$refs.createModal.form
      form.resetFields() // 清理表单数据（可不做）
    },
    resetPassword (record) {
      const that = this
      this.$confirm({
        content: '确认重置用户密码？',
        onOk () {
          resetPassword(record).then(e => {
            that.$info({
              title: '密码重置成功',
              content: e
            })
          })
        },
        onCancel () {
          console.log('Cancel')
        }
      })
    },
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    handleChange (pagination, filters, sorter) {
      this.sortedInfo = sorter
    },
    getLabel
  }
}
</script>
