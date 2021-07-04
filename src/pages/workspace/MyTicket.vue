<template>
  <a-card>
    <a-table :columns="columns" :data-source="data" rowKey="id">
      <span slot="action" slot-scope="record">
        <a-button type="link" @click="viewTicketHistory(record)"> 写跟进 </a-button>
        <a-button type="link" @click="viewDetail(record)"> 查看详情 </a-button>
      </span>
      <span slot="createdDate" slot-scope="text">
        {{ text | momentTime }}
      </span>
      <span slot="keyIntention" slot-scope="record">
        {{ getTicketSummary(record) }}
      </span>
    </a-table>
    <a-modal title="跟进信息" :visible="historyVisible" :footer="null" @cancel="historyVisible = false" width="800px">
      <ticket-history :ticket="ticket" :edit="true"></ticket-history>
    </a-modal>
  </a-card>
</template>
<script>
import { getTicketSummary } from '@/api/ticket'
import { queryMyTicketList } from '@/api/manage'
import TicketHistory from './TicketHistory.vue'

const columns = [
  {
    title: 'ID',
    dataIndex: 'ticketInfo.id',
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
    title: '核心需求',
    key: 'keyIntention',
    dataIndex: 'ticketInfo',
    scopedSlots: { customRender: 'keyIntention' }
  },
  {
    title: '意向小区',
    dataIndex: 'ticketInfo.intentionCommunity',
    key: 'intentionCommunity'
  },
  {
    title: '拉私时间',
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
      ticket: {},
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
    getTicketSummary,
    viewTicketHistory (record) {
      this.historyVisible = true
      this.ticket = record.ticketInfo
    },
    viewDetail (record) {
      this.$router.push({ path: 'ticket-detail/' + record.ticketInfo.id })
    }
  }
}
</script>
