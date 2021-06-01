<template>
  <div>
    <a-table :columns="columns" :data-source="data">
      <span slot="action" slot-scope="record">
        <a-button type="primary" @click="viewTicketHistory(record)"> 跟单信息 </a-button>
      </span>
    </a-table>
    <a-modal title="跟单信息" :visible="historyVisible" :footer="null" @cancel="historyVisible = false" width="800px">
      <ticket-history :ticket="ticketSelected" :edit="true"></ticket-history>
    </a-modal>
  </div>
</template>
<script>
import { queryMyTicketList } from '@/api/manage'
import TicketHistory from './TicketHistory.vue'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '客户电话',
    dataIndex: 'clientPhone',
    key: 'clientPhone'
  },
  {
    title: '客户姓名',
    dataIndex: 'clientName',
    key: 'clientName'
  },
  {
    title: '提交时间',
    dataIndex: 'createTime',
    key: 'createTime'
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]

const data = []

export default {
  data () {
    return {
      data,
      columns,
      ticketSelected: {},
      historyVisible: false
    }
  },
  components: {
    TicketHistory
  },
  created () {
    queryMyTicketList().then(r => {
      this.data = r
    })
  },
  methods: {
    viewTicketHistory (record) {
      this.historyVisible = true
      this.ticketSelected = record
    }
  }
}
</script>
