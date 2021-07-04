<template>
  <a-card>
    <div class="table-operator">
      <a-select style="width: 120px" v-model="query.hasBelongUser">
        <a-select-option :value="false">
          未分配
        </a-select-option>
        <a-select-option :value="true">
          已分配
        </a-select-option>
        <a-select-option value="">
          全部
        </a-select-option>
      </a-select>
      <a-button type="primary" icon="search" @click="doQuery">查询</a-button>
    </div>
    <a-table :columns="columns" :data-source="data" rowKey="id">
      <span slot="date" slot-scope="text">
        {{ text | momentTime }}
      </span>
      <span slot="keyIntention" slot-scope="record">
        {{ getTicketSummary(record) }}
      </span>
      <span slot="action" slot-scope="record">
        <a-button type="link" @click="viewTicketOwner(record)">分单</a-button>
        <a-button type="link" @click="viewDetail(record)"> 查看详情 </a-button>
      </span>
    </a-table>
    <a-modal title="跟单信息" :visible="historyVisible" :footer="null" @cancel="historyVisible = false" width="800px">
      <ticket-history :ticket="ticketSelected"></ticket-history>
    </a-modal>
    <a-modal title="分单" :visible="ownerVisible" :footer="null" @cancel="ownerVisible = false" width="500px">
      <ticket-owner :ticket="ticketSelected"></ticket-owner>
    </a-modal>
  </a-card>
</template>
<script>
import { getTicketSummary } from '@/api/ticket'
import { queryTicketList } from '@/api/manage'
import TicketHistory from './TicketHistory.vue'
import TicketOwner from './TicketOwner.vue'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '客户姓名',
    dataIndex: 'clientName',
    key: 'clientName'
  },
  {
    title: '客户电话',
    dataIndex: 'clientPhone',
    key: 'clientPhone'
  },
  {
    title: '核心需求',
    key: 'keyIntention',
    scopedSlots: { customRender: 'keyIntention' }
  },
  {
    title: '添加时间',
    dataIndex: 'createdDate',
    key: 'createdDate',
    scopedSlots: { customRender: 'date' }
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
    scopedSlots: { customRender: 'action' }
  }
]

export default {
  data () {
    return {
      data: [],
      query: { hasBelongUser: false },
      columns,
      ticketSelected: {},
      historyVisible: false,
      ownerVisible: false
    }
  },
  components: {
    TicketHistory,
    TicketOwner
  },
  created () {
    this.doQuery()
  },
  methods: {
    getTicketSummary,
    handleChange (pagination, filters, sorter) {
      Object.assign(this.query, pagination)
      this.doQuery()
    },
    doQuery () {
      queryTicketList(this.query).then(r => {
        this.data = r
      })
    },
    viewTicketHistory (record) {
      this.historyVisible = true
      this.ticketSelected = record
    },
    viewTicketOwner (record) {
      this.ownerVisible = true
    },
    viewDetail (record) {
      this.$router.push({ path: `ticket-detail/2/${record.id}` })
    }
  }
}
</script>
