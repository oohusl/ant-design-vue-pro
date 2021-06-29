<template>
  <a-card>
    <a-table :columns="columns" :data-source="data">
      <span slot="action" slot-scope="record">
        <a-button type="link" @click="viewTicketHistory(record)"> 写跟进 </a-button>
        <a-button type="link" @click="viewDetail(record)"> 查看详情 </a-button>
      </span>
      <span slot="createdDate" slot-scope="text">
        {{ text | momentTime }}
      </span>
    </a-table>
    <a-modal title="跟进信息" :visible="historyVisible" :footer="null" @cancel="historyVisible = false" width="800px">
      <ticket-history :ticket="ticketSelected" :edit="true"></ticket-history>
    </a-modal>
  </a-card>
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
    title: '客户姓名',
    dataIndex: 'ticketInfo.clientName',
    key: 'clientName'
  },
  {
    title: '客户电话',
    dataIndex: 'ticketInfo.clientPhone',
    key: 'clientPhone'
  },
  {
    title: '分配时间',
    dataIndex: 'createdDate',
    scopedSlots: { customRender: 'createdDate' }
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
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
    },
    viewDetail (record) {
      this.$router.push({ path: 'ticket-detail/' + record.ticketId })
    }
  }
}
</script>
