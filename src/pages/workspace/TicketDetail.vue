<template>
  <a-card>
    <a-affix :offset-top="100" :style="{ position: 'absolute', right: '100px' }">
      <a-button type="primary" @click="edit">
        编辑
      </a-button>
      <a-button @click="back">
        返回
      </a-button>
    </a-affix>
    <a-descriptions title="核心信息">
      <a-descriptions-item label="客户姓名">
        {{ ticket.clientName }}
      </a-descriptions-item>
      <a-descriptions-item label="客户电话">
        {{ ticket.clientPhone }}
      </a-descriptions-item>
      <a-descriptions-item label="客户称呼">
        {{ ticket.customerGender }}
      </a-descriptions-item>
      <a-descriptions-item label="客户备注">
        {{ ticket.customerNotes }}
      </a-descriptions-item>
    </a-descriptions>
    <a-descriptions title="买房需求">
      <a-descriptions-item label="区域">
        {{ ticket.region }}
      </a-descriptions-item>
      <a-descriptions-item label="板块">
        {{ ticket.plate }}
      </a-descriptions-item>
      <a-descriptions-item label="楼盘">
        {{ ticket.intentionCommunity }}
      </a-descriptions-item>
      <a-descriptions-item label="户型">
        {{ ticket.intentionHouseType }}
      </a-descriptions-item>
      <a-descriptions-item label="预算">
        {{ ticket.housePurchaseBudgetMin }} ~ {{ ticket.housePurchaseBudgetMax }} 万
      </a-descriptions-item>
      <a-descriptions-item label="面积">
        {{ ticket.purchaseAreaMin }} ~ {{ ticket.purchaseAreaMax }} m²
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

    <a-descriptions title="基本信息">
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
</template>
<script>
import { liftOptions, roomTypeOptions, transLabels, genderOptions, getLabel } from '@/api/data'
import { getTicketInfo } from '@/api/manage'
import { Affix } from 'ant-design-vue'

export default {
  components: { 'a-affix': Affix },
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
      this.ticket['customerGender'] = getLabel(this.ticket['customerGender'], genderOptions)
      this.ticket['lift'] = transLabels((this.ticket['lift'] || '').split('/'), liftOptions)
    })
  },
  methods: {
    back () {
      this.$router.back(-1)
    },
    edit () {
      this.$router.push({ path: '/ticket-form/' + this.ticket.id })
    }
  }
}
</script>
<style scoped>
.ticket-input {
  width: 250px;
}
.ticket-form {
  width: 1000px;
}
</style>
