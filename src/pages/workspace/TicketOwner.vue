<template>
  <div>
    <a-form-model
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }"
      :labelAlign="'right'"
      :rules="rules"
      ref="ticketOwnerForm"
      :model="ticketOwner"
    >
      <a-form-model-item label="业务员" prop="owner">
        <a-select v-model="ticketOwner.owner">
          <a-select-option v-for="u in users" :value="u.login" :key="u.login" :disabled="hasChoosed(u.login)">
            {{ u.login }}
          </a-select-option>
        </a-select>
        <a-button type="primary" @click="onSubmit">添加</a-button>
      </a-form-model-item>
      <a-form-model-item label="已分配">
        <a-tag v-for="o in owners" :key="o.id" closable @close="onDelete(o.id)">{{ o.owner }}</a-tag>
      </a-form-model-item>
    </a-form-model>
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
      ticketOwner: { owner: '' },
      rules: {
        owner: [{ required: true, message: '请选择业务员', trigger: 'blur' }]
      }
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
      if (!this.ticketOwner.owner) {
        console.log('')
      }
      this.$refs.ticketOwnerForm.validate(err => {
        if (err) {
          addTiketOwner(this.ticketOwner).then(e => {
            this.$message.success('分配成功')
            this.ticketOwner.owner = ''
            this.queryTicketOwner()
          })
        }
      })
    },
    onDelete: function (id) {
      removeTiketOwner(id).then(e => {
        this.$message.success('取消分配成功')
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
