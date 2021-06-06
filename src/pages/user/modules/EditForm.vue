<template>
  <a-modal
    title="编辑用户信息"
    :width="640"
    :visible="visible"
    :confirmLoading="loading"
    @ok="
      () => {
        $emit('ok')
      }
    "
    @cancel="
      () => {
        $emit('cancel')
      }
    "
  >
    <a-spin :spinning="loading">
      <a-form :form="form" v-bind="formLayout">
        <!-- 检查是否有 id 并且大于0，大于0是修改。其他是新增，新增不显示主键ID -->
        <a-form-item v-show="model && model.id > 0" label="主键">
          <a-input v-decorator="['id', { initialValue: 0 }]" disabled />
        </a-form-item>
        <a-form-item label="手机号">
          <a-input disabled v-decorator="['iphone']" />
        </a-form-item>
        <a-form-item label="姓名">
          <a-input
            v-decorator="[
              'firstName',
              {
                rules: [{ required: true, message: '请输入姓名' }]
              }
            ]"
          />
        </a-form-item>
        <a-form-item label="邮箱">
          <a-input
            v-decorator="[
              'email',
              {
                rules: [
                  { required: true, message: '请输入邮箱' },
                  {
                    type: 'email',
                    message: '请输入正确的邮箱格式'
                  }
                ]
              }
            ]"
          />
        </a-form-item>
        <a-form-item label="角色">
          <a-select v-decorator="['authorities']" :options="roleOptions"> </a-select>
        </a-form-item>
        <a-form-item label="激活">
          <a-switch default-checked v-decorator="['activated']" />
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import pick from 'lodash.pick'
import { roleOptions } from '@/api/data'

// 表单字段
const fields = ['id', 'iphone', 'firstName', 'activated', 'authorities', 'email']

export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    loading: {
      type: Boolean,
      default: () => false
    },
    model: {
      type: Object,
      default: () => null
    }
  },
  data () {
    this.formLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
      }
    }
    return {
      form: this.$form.createForm(this),
      roleOptions
    }
  },
  created () {
    console.log('custom modal created')

    // 防止表单未注册
    fields.forEach(v => this.form.getFieldDecorator(v))

    // 当 model 发生改变时，为表单设置值
    this.$watch('model', () => {
      this.model && this.form.setFieldsValue(pick(this.model, fields))
    })
  }
}
</script>
