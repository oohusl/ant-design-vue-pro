<template>
  <div>
    <a-form v-if="edit" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" :labelAlign="'right'">
      <a-row :gutter="24">
        <a-col :span="20">
          <a-textarea
            v-model="ticketHistory.content"
            placeholder="请输入跟进信息"
            :auto-size="{ minRows: 3, maxRows: 5 }"
          />
        </a-col>
        <a-col :span="4">
          <a-button type="primary" @click="onSubmit">确定</a-button>
        </a-col>
      </a-row>
    </a-form>
    <a-divider v-if="edit">跟进信息({{ list.length }})</a-divider>
    <div class="list">
      <a-list item-layout="horizontal" :data-source="list">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-list-item-meta>
            <a slot="title">{{ item.content }}</a>
            <div slot="description">{{ item.createdDate | momentTime }} {{ item.createdBy }}</div>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>
<script>
import { queryTicketHistory, createTicketHistory } from '@/api/manage'

export default {
  props: {
    ticket: {
      type: Object,
      default: function () {
        return {}
      }
    },
    edit: { type: Boolean, default: false }
  },
  data () {
    return {
      list: [],
      ticketHistory: {}
    }
  },
  created () {
    this.queryTicketHistory()
  },
  watch: {
    ticket: function (newVal, oldVal) {
      this.queryTicketHistory()
    }
  },
  methods: {
    queryTicketHistory: function () {
      if (this.ticket) {
        this.list = []
        queryTicketHistory(this.ticket.id).then(e => {
          this.list = e
        })
      }
    },
    onSubmit: function () {
      this.ticketHistory.ticketId = this.ticket.id
      createTicketHistory(this.ticketHistory).then(e => {
        this.$message.success('发布成功')
        this.ticketHistory.content = ''
        this.queryTicketHistory()
      })
    }
  }
}
</script>
<style scoped>
.list {
  height: 200px;
  overflow: scroll;
}
</style>
