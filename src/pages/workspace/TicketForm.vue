<template>
  <a-card>
    <a-affix :offset-top="100" :style="{ position: 'absolute', right: '100px' }">
      <a-button type="primary" @click="save">
        提交
      </a-button>
      <a-button @click="back">
        取消
      </a-button>
    </a-affix>
    <a-form-model
      :model="ticket"
      :labelAlign="'right'"
      :colon="false"
      :rules="rules"
      v-bind="formItemLayout"
      ref="ticketForm"
      class="ticket-form"
      @submit="save"
    >
      <div class="ant-descriptions-title">核心信息</div>
      <a-row>
        <a-col :md="12">
          <a-form-model-item label="客户姓名" prop="clientName">
            <a-input v-model="ticket.clientName" class="ticket-input" :maxlength="255" placeholder="" />
          </a-form-model-item>
        </a-col>
        <a-col :md="12">
          <a-form-model-item label="客户电话" prop="clientPhone">
            <a-input v-model="ticket.clientPhone" class="ticket-input" :maxlength="255" placeholder="" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :md="12">
          <a-form-model-item label="客户称呼" name="customerGender">
            <a-radio-group v-model="ticket.customerGender" :options="genderOptions"> </a-radio-group>
          </a-form-model-item>
        </a-col>
        <a-col :md="12">
          <a-form-model-item label="客户备注" name="customerNotes">
            <a-input v-model="ticket.customerNotes" class="ticket-input" :maxlength="255" placeholder="" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <div class="ant-descriptions-title">买房需求</div>
      <a-row>
        <a-col :md="12">
          <a-form-model-item label="区域" prop="region">
            <a-input v-model="ticket.region" class="ticket-input" placeholder="" />
          </a-form-model-item>
        </a-col>
        <a-col :md="12">
          <a-form-model-item label="板块" prop="plate">
            <a-input v-model.number="ticket.plate" class="ticket-input" placeholder="" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :md="12">
          <a-form-model-item label="楼盘" prop="intentionCommunity">
            <a-input v-model="ticket.intentionCommunity" class="ticket-input" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :md="24">
          <a-form-model-item label="户型" prop="intentionHouseType" v-bind="formItemLayout2">
            <a-checkbox-group v-model="ticket.intentionHouseType" :options="roomTypeOptions"> </a-checkbox-group>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :md="12">
          <a-form-model-item label="预算" prop="housePurchaseBudget">
            <a-input
              style="width: 100px; text-align: center"
              v-model="ticket.housePurchaseBudgetMin"
              placeholder="最低价格"
            />
            <a-input
              style=" width: 30px; border-left: 0; pointer-events: none; backgroundColor: #fff"
              placeholder="~"
              disabled
            />
            <a-input
              v-model="ticket.housePurchaseBudgetMax"
              style="width: 100px; text-align: center; border-left: 0"
              placeholder="最高价格"
            />
            <a-input
              style=" width: 40px; border-left: 0; pointer-events: none; backgroundColor: #fff"
              placeholder="万"
              disabled
            />
          </a-form-model-item>
        </a-col>
        <a-col :md="12">
          <a-form-model-item label="面积" prop="purchaseArea">
            <a-input
              style=" width: 100px; text-align: center"
              v-model="ticket.purchaseAreaMin"
              placeholder="最小面积"
            />
            <a-input
              style=" width: 30px; border-left: 0; pointer-events: none; backgroundColor: #fff"
              placeholder="~"
              disabled
            />
            <a-input
              v-model="ticket.purchaseAreaMax"
              style="width: 100px; text-align: center; border-left: 0"
              placeholder="最大面积"
            />
            <a-input
              style=" width: 42px; border-left: 0; pointer-events: none; backgroundColor: #fff"
              placeholder="m²"
              disabled
            />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :md="12">
          <a-form-model-item label="朝向" prop="orientation">
            <a-input v-model="ticket.orientation" class="ticket-input" placeholder="" />
          </a-form-model-item>
        </a-col>
        <a-col :md="12">
          <a-form-model-item label="楼层" prop="floor">
            <a-input v-model.number="ticket.floor" class="ticket-input" placeholder="" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :md="12">
          <a-form-model-item label="电梯" prop="lift">
            <a-checkbox-group v-model="ticket.lift" :options="liftOptions"> </a-checkbox-group>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :md="24">
          <a-form-model-item label="房屋结构" prop="housingStructure" v-bind="formItemLayout2">
            <a-checkbox-group v-model="ticket.housingStructure" :options="typesOfHouseOptions"> </a-checkbox-group>
          </a-form-model-item>
        </a-col>
      </a-row>
      <div class="ant-descriptions-title">基本信息</div>
      <a-row>
        <a-col :md="12">
          <a-form-model-item label="购房目的" prop="purchasePurpose">
            <a-select :options="purchasePurposeOptions" class="ticket-input" v-model="ticket.purchasePurpose">
            </a-select>
          </a-form-model-item>
        </a-col>
        <a-col :md="12">
          <a-form-model-item label="名下房产" prop="realEstate">
            <a-input v-model.number="ticket.realEstate" class="ticket-input" placeholder="" />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :md="12">
          <a-form-model-item label="户口情况" prop="registeredResidence">
            <a-select :options="registeredResidenceOptions" class="ticket-input" v-model="ticket.registeredResidence">
            </a-select>
          </a-form-model-item>
        </a-col>
        <a-col :md="12">
          <a-form-model-item label="婚姻情况" prop="maritalStatus">
            <a-select :options="maritalStatusOptions" class="ticket-input" v-model="ticket.maritalStatus"> </a-select>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :md="12">
          <a-form-model-item label="付款方式" prop="paymentMethod">
            <a-select :options="paymentMethodOptions" class="ticket-input" v-model="ticket.paymentMethod"> </a-select>
          </a-form-model-item>
        </a-col>
      </a-row>
    </a-form-model>
  </a-card>
</template>
<script>
import {
  typesOfHouseOptions,
  purchasePurposeOptions,
  paymentMethodOptions,
  maritalStatusOptions,
  registeredResidenceOptions,
  roomTypeOptions,
  liftOptions,
  genderOptions
} from '@/api/data'
import { createTicketInfo, getTicketInfo } from '@/api/manage'
import { Affix } from 'ant-design-vue'

const fields = ['intentionHouseType', 'lift', 'housingStructure']

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
  created () {
    if (this.id) {
      getTicketInfo(this.id).then(e => {
        this.ticket = e
        for (const f of fields) {
          this.ticket[f] = (this.ticket[f] || '').split('/')
        }
      })
    }
  },
  data () {
    return {
      typesOfHouseOptions,
      liftOptions,
      genderOptions,
      roomTypeOptions,
      purchasePurposeOptions,
      paymentMethodOptions,
      maritalStatusOptions,
      registeredResidenceOptions,
      ticket: {
        clientName: '',
        clientPhone: ''
      },
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
      },
      rules: {
        clientName: [{ required: true, message: '客户姓名不能为空', trigger: 'blur' }],
        clientPhone: [{ required: true, message: '客户端电话不能为空', trigger: 'blur' }]
      }
    }
  },
  methods: {
    save (e) {
      this.$refs.ticketForm.validate(err => {
        if (err) {
          this.$confirm({
            content: '确认提交？',
            onOk: () => {
              const data = Object.assign({}, this.ticket)
              for (const key in data) {
                if (Array.isArray(data[key])) {
                  data[key] = data[key].join('/')
                }
              }
              createTicketInfo(data).then(e => {
                console.log(e)
              })
              this.$router.push({ path: '/ticket-detail/' + this.ticket.id })
              this.$message.success('提交成功')
            },
            onCancel () {
              console.log('Cancel')
            }
          })
        }
      })
    },
    back () {
      this.$router.back(-1)
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
