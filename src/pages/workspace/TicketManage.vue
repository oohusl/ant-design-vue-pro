<template>
  <a-card>
    <div class="table-operator">
      <a-select default-value="lucy" style="width: 120px">
        <a-select-option value="jack">
          已分配
        </a-select-option>
        <a-select-option value="lucy">
          未分配
        </a-select-option>
        <a-select-option value="Yiminghe">
          全部
        </a-select-option>
      </a-select>
      <a-button type="primary" icon="search" @click="handleAdd">查询</a-button>
    </div>
    <a-table :columns="columns" :data-source="data">
      <span slot="date" slot-scope="text">
        {{ text | momentTime }}
      </span>
      <span slot="action" slot-scope="record">
        <a-button type="link" @click="viewTicketOwner(record)">分单</a-button>
        <a-button type="link" @click="viewTicketHistory(record)"> 跟单信息 </a-button>
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
    title: '提交时间',
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

const data = []

export default {
  data () {
    return {
      data,
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
    console.log(queryTicketList)
    queryTicketList().then(r => {
      this.data = r
    })
  },
  methods: {
    viewTicketHistory (record) {
      this.historyVisible = true
      this.ticketSelected = record
    },
    viewTicketOwner (record) {
      this.ownerVisible = true
      this.ticketSelected = record
    }
  }
}
</script>
