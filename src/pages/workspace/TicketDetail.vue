<template>
  <a-layout>
    <a-layout-header class="detail-header">
      <div>
        <img src="~@/assets/icons/man.svg" v-if="ticket.customerGender == '1'" />
        <img src="~@/assets/icons/woman.svg" v-if="ticket.customerGender == '0'" />
        <span class="detail-info">{{ ticket.clientName }} {{ ticket.clientPhone }}</span>
        <span
          class="remark"
        ><ellipsis :length="50" :tooltip="true">{{ ticket.customerNotes }}</ellipsis></span
        >
        <span class="detail-action">
          <a-button type="primary" @click="edit">
            编辑
          </a-button>
          <a-button @click="back">
            返回
          </a-button>
        </span>
      </div>
    </a-layout-header>
    <a-layout>
      <a-layout-content class="ticket-main">
        <a-card>
          <a-descriptions title="买房需求" :column="2">
            <a-descriptions-item label="买房意向">
              {{ getTicketSummary(ticket) }}
            </a-descriptions-item>
            <a-descriptions-item label="楼盘">
              {{ ticket.intentionCommunity }}
            </a-descriptions-item>
            <a-descriptions-item label="朝向">
              {{ ticket.orientation }}
            </a-descriptions-item>
            <a-descriptions-item label="楼层">
              {{ ticket.floor }}
            </a-descriptions-item>
            <a-descriptions-item label="电梯">
              {{ ticket.lift }}
            </a-descriptions-item>
            <a-descriptions-item label="房屋结构">
              {{ ticket.housingStructure }}
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="基本信息" :column="2">
            <a-descriptions-item label="购房目的">
              {{ ticket.purchasePurpose }}
            </a-descriptions-item>
            <a-descriptions-item label="名下房产">
              {{ ticket.realEstate }}
            </a-descriptions-item>
            <a-descriptions-item label="户口情况">
              {{ ticket.registeredResidence }}
            </a-descriptions-item>
            <a-descriptions-item label="婚姻情况">
              {{ ticket.maritalStatus }}
            </a-descriptions-item>
            <a-descriptions-item label="付款方式">
              {{ ticket.paymentMethod }}
            </a-descriptions-item>
          </a-descriptions>
        </a-card>
      </a-layout-content>
      <a-layout-sider width="400">
        <a-card>
          <a-tabs default-active-key="1">
            <a-tab-pane key="1" tab="跟进">
              <ticket-history v-if="ticket" :ticket="ticket" :edit="false"></ticket-history>
            </a-tab-pane>
          </a-tabs>
        </a-card>
      </a-layout-sider>
    </a-layout>
  </a-layout>
</template>
<script>
import { liftOptions, roomTypeOptions, transLabels, getLabel } from '@/api/data'
import { getTicketSummary } from '@/api/ticket'
import { getTicketInfo } from '@/api/manage'
import { Affix } from 'ant-design-vue'
import TicketHistory from './TicketHistory.vue'
import { Ellipsis } from '@/components'

export default {
  components: { 'a-affix': Affix, TicketHistory, Ellipsis },
  props: {
    id: {
      type: String,
      default: function () {
        return '0'
      }
    }
  },
  data () {
    return {
      ticket: {},
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      },
      formItemLayout2: {
        labelCol: {
          sm: { span: 4 }
        },
        wrapperCol: {
          sm: { span: 12 }
        }
      }
    }
  },
  created () {
    getTicketInfo(this.id).then(e => {
      this.ticket = e
      this.ticket['intentionHouseType'] = transLabels(
        this.ticket['intentionHouseType'].split('/') || '',
        roomTypeOptions
      )
      this.ticket['lift'] = transLabels((this.ticket['lift'] || '').split('/'), liftOptions)
    })
  },
  methods: {
    back () {
      this.$router.back(-1)
    },
    edit () {
      this.$router.push({ path: '/ticket-form/' + this.ticket.id })
    },
    getTicketSummary
  }
}
</script>
<style lang="less" scoped>
.ticket-input {
  width: 250px;
}
.ticket-form {
  width: 1000px;
}
.ant-layout-sider {
  background: white;
}
.detail-header {
  padding-left: 24px;

  .detail-info {
    font-size: 20px;
    font-weight: bold;
  }
  .detail-action {
    position: absolute;
    right: 200px;
  }
  .remark {
    margin-left: 20px;
  }
  img {
    margin-top: -6px;
    margin-right: 5px;
  }
}
</style>
