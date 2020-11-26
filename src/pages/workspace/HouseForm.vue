<template>
    <a-spin :spinning="loading">
      <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
        <a-form-item label="小区名称">
            <a-input style="width: 100%" v-model="model.name" readonly/>
        </a-form-item>
        <a-form-item label="区域">
          <a-select default-value="浦东" v-model="house.areas">
            <a-select-option value="浦东"> 浦东 </a-select-option>
            <a-select-option value="徐汇"> 徐汇 </a-select-option>
            <a-select-option value="静安"> 静安 </a-select-option>
            <a-select-option value="长宁"> 长宁 </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="售价(万)">
            <a-input style="width: 100%" v-model="houseroomPriceRange3"/>
        </a-form-item>
        <a-form-item label="面积">
            <a-input-number style="width: 100%" v-model="house.roomArea3"/>
        </a-form-item>
        <a-form-item label="建筑年代">
            <a-input-number style="width: 100%" v-model="house.constructionAge"/>
        </a-form-item>
        <a-form-item label="楼层">
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-input-number style="width: 100%" />
          </a-form-item>
          <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }"> - </span>
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-input-number style="width: 100%" />
          </a-form-item>
        </a-form-item>
        <a-form-item label="其他">
          <a-checkbox-group v-model="house.checkedList">
            <a-checkbox value="1" name="type">有电梯</a-checkbox>
            <a-checkbox value="2" name="type">人车分流</a-checkbox>
          </a-checkbox-group>
        </a-form-item>
      </a-form>
    </a-spin>
</template>

<script>
import pick from 'lodash.pick'

// 表单字段
const fields = ['description', 'id']

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
      default: () => {}
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
      house: {}
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
