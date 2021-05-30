<template>
  <div>
    <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" :labelAlign="'right'">
      <a-form-item label="业务员">
        <a-select v-model="ticketOwner.owner">
          <a-select-option v-for="u in users" :value="u.login" :key="u.login" :disabled="hasChoosed(u.login)">
            {{ u.login }}
          </a-select-option>
        </a-select>
        <a-button type="primary" @click="onSubmit">添加</a-button>
      </a-form-item>
      <a-form-item label="已分配">
        <a-tag v-for="o in owners" :key="o.id" closable @close="onDelete(o.id)">{{ o.owner }}</a-tag>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import { removeTiketOwner, addTiketOwner, queryTicketOwner, queryNormalUsers } from '@/api/manage'

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
      users: [],
      owners: [],
      ticketOwner: {}
    }
  },
  created () {
    this.ticketOwner.ticketId = this.ticket.id
    this.queryTicketOwner()
    this.queryUsers()
  },
  watch: {
    ticket: function (newVal, oldVal) {
      this.ticketOwner.ticketId = this.ticket.id
      this.queryTicketOwner()
    }
  },
  methods: {
    queryUsers: function () {
      queryNormalUsers().then(e => {
        this.users = e
      })
    },
    queryTicketOwner: function () {
      queryTicketOwner(this.ticket.id).then(e => {
        this.owners = e
      })
    },
    onSubmit: function () {
      addTiketOwner(this.ticketOwner).then(e => {
        this.$notification.info({
          message: '通知',
          description: '发布成功'
        })
        this.ticketOwner.owner = ''
        this.queryTicketOwner()
      })
    },
    onDelete: function (id) {
      removeTiketOwner(id).then(e => {
        this.$notification.info({
          message: '通知',
          description: '删除成功'
        })
        this.queryTicketOwner()
      })
    },
    hasChoosed: function (login) {
      return this.owners.some(e => {
        return e.owner === login
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
