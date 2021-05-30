<template>
  <div>
    <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" :labelAlign="'right'">
      <a-row :gutter="24">
        <a-col :span="20">
          <a-textarea
            v-model="ticketOwner.owner"
            placeholder="请输入跟单信息"
            :auto-size="{ minRows: 3, maxRows: 5 }"
          />
        </a-col>
        <a-col :span="4">
          <a-button type="primary" @click="onSubmit">发布</a-button>
        </a-col>
      </a-row>
    </a-form>
    <a-divider>历史跟单信息</a-divider>
    <div class="list">
      <a-tag v-for="o in owners" :key="o.id" closable @close="onDelete(o.id)">{{ o.owner }}</a-tag>
    </div>
  </div>
</template>
<script>
import { removeTiketOwner, addTiketOwner, queryTicketOwner } from '@/api/manage'

export default {
  props: {
    ticket: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      owners: [],
      ticketOwner: {}
    }
  },
  created () {
    this.ticketOwner.ticketId = this.ticket.id
    this.queryTicketOwner()
  },
  watch: {
    ticket: function (newVal, oldVal) {
      this.ticketOwner.ticketId = this.ticket.id
      this.queryTicketOwner()
    }
  },
  methods: {
    queryTicketOwner: function () {
      queryTicketOwner(this.ticket.id).then(e => {
        this.owners = e
      })
    },
    onSubmit: function () {
      addTiketOwner(this.ticketOwner).then(e => {
        this.$notification.info({
          title: '通知',
          description: '发布成功'
        })
        this.ticketOwner.content = ''
        this.queryTicketOwner()
      })
    }
  },
  onDelete: function (id) {
    removeTiketOwner(id).then(e => {
      this.$notification.info({
        title: '通知',
        description: '删除成功'
      })
      this.queryTicketOwner()
    })
  }
}
</script>
<style scoped>
.list {
  height: 200px;
  overflow: scroll;
}
</style>
