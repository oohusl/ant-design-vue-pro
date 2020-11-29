<template>
  <a-modal title="房源编辑">
    <a-spin :spinning="loading">
      <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
        <a-form-item label="小区名称">
          <a-input v-model="house.communityName"/>
        </a-form-item>
        <a-form-item label="区域">
          <a-select default-value="浦东" v-model="house.area" placeholder="请选择">
            <a-select-option value="静安"> 静安 </a-select-option>
            <a-select-option value="浦东"> 浦东 </a-select-option>
            <a-select-option value="徐汇"> 徐汇 </a-select-option>
            <a-select-option value="杨浦"> 杨浦 </a-select-option>
            <a-select-option value="黄浦"> 黄浦 </a-select-option>
            <a-select-option value="长宁"> 长宁 </a-select-option>
            <a-select-option value="普陀"> 普陀 </a-select-option>
            <a-select-option value="虹口"> 虹口 </a-select-option>
            <a-select-option value="松江"> 松江 </a-select-option>
            <a-select-option value="闵行"> 闵行 </a-select-option>
            <a-select-option value="宝山"> 宝山 </a-select-option>
            <a-select-option value="奉贤"> 奉贤 </a-select-option>
            <a-select-option value="青浦"> 青浦 </a-select-option>
            <a-select-option value="嘉定"> 嘉定 </a-select-option>
            <a-select-option value="金山"> 金山 </a-select-option>
            <a-select-option value="崇明"> 崇明 </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="单价(万)">
          <a-input style="width: 100%" v-model="house.averageLlistedPrice" placeholder="请输入"/>
        </a-form-item>
        <a-form-item label="年售(套)">
          <a-input style="width: 100%" v-model="house.volume2019" placeholder="请输入"/>
        </a-form-item>
        <a-form-item label="地铁">
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 10px)' }">
            <a-select mode="multiple" v-model="house.metroLine" placeholder="请选择">
              <a-select-option value="1">1号线</a-select-option>
              <a-select-option value="2">2号线</a-select-option>
              <a-select-option value="3">3号线</a-select-option>
              <a-select-option value="4">4号线</a-select-option>
              <a-select-option value="5">5号线</a-select-option>
              <a-select-option value="6">6号线</a-select-option>
              <a-select-option value="7">7号线</a-select-option>
              <a-select-option value="8">8号线</a-select-option>
              <a-select-option value="9">9号线</a-select-option>
              <a-select-option value="10">10号线</a-select-option>
              <a-select-option value="11">11号线</a-select-option>
              <a-select-option value="12">12号线</a-select-option>
              <a-select-option value="13">13号线</a-select-option>
              <a-select-option value="14">14号线</a-select-option>
              <a-select-option value="15">15号线</a-select-option>
              <a-select-option value="16">16号线</a-select-option>
              <a-select-option value="17">17号线</a-select-option>
              <a-select-option value="18">18号线</a-select-option>
            </a-select>
          </a-form-item>
          <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> - </span>
          <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
            <a-input style="width: 100%" v-model="house.distance" placeholder="地铁距离"/>
          </a-form-item>
        </a-form-item>
        <a-form-item label="小学学区">
          <a-select v-model="house.echelonPerformance" placeholder="请选择">
            <a-select-option value="一梯队">一梯队</a-select-option>
            <a-select-option value="二梯队">二梯队</a-select-option>
            <a-select-option value="三梯队">三梯队</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="建筑年代">
          <a-input-number style="width: 100%" v-model="house.constructionAge" placeholder="请输入"/>
        </a-form-item>
        <a-form-item label="其他">
          <a-checkbox-group v-model="house.checkedList">
            <a-checkbox value="isLift">有电梯</a-checkbox>
            <a-checkbox value="peopleAndVehicles">人车分流</a-checkbox>
          </a-checkbox-group>
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import pick from 'lodash.pick'

// 表单字段
const fields = ['description', 'id']

export default {
  props: {
    record: {
      type: Object,
      default: () => { return {} }
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
      loading: false,
      house: {}
    }
  },
  created () {
    console.log('custom modal created')

    // 防止表单未注册
    // 当 model 发生改变时，为表单设置值
    this.$watch('model', () => {
      this.model && this.form.setFieldsValue(pick(this.model, fields))
    })
  },

  mounted () {
    this.house = Object.assign({}, this.record)
  }
}
</script>
