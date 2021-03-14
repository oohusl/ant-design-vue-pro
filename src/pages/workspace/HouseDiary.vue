<template>
  <div>
    <a-form
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }"
      :labelAlign="'right'"
    >
      <a-form-item
        label="楼盘名称">
        <a-input :value="houseSelect.communityName" :disabled="true"/>
      </a-form-item>
      <a-form-item label="用户名">
        <a-input v-model="houseDiaryEdit.userName"></a-input>
      </a-form-item>
      <a-form-item label="分类标签">
        <a-input v-model="houseDiaryEdit.classificationLabel"></a-input>
      </a-form-item>
      <a-form-item label="客户信息">
        <a-input v-model="houseDiaryEdit.customerInfo"></a-input>
      </a-form-item>
      <a-form-item label="看房时间">
        <a-date-picker valueFormat="YYYY-MM-DD" @change="onChange" v-decorator="['startAt', {rules:[{required: true, message: '请选择开始时间'}]}]"/>
      </a-form-item>
      <a-form-item label="点评内容">
        <a-input v-model="houseDiaryEdit.reviewContent" type="textarea"></a-input>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { AutoComplete } from 'ant-design-vue'

import { newHouseDiary } from '@/api/manage'
export default {
  name: 'HouseDiary',
  components: {
    AutoComplete
  },
  props: {
    houseDiaryVisible: { type: Boolean, default: false },
    houseSelect: { type: Object, default: () => { return {} } }
  },
  data () {
    return {
      houseTypeVisible: false,
      houseTypeFiles: [],
      houseTypes: [],
      houseDiaryEdit: { viewingTime: new Date() }
    }
  },
  created () {
  },
  methods: {
    addHouseDiary () {
      this.houseDiaryEdit.communityId = this.houseSelect.id
      this.houseDiaryEdit.userIcon = ''
      newHouseDiary(this.houseDiaryEdit)
    },
    onChange (date) {
      this.houseDiaryEdit.viewingTime = date
      console.log(date)
    }
  }
}
</script>
<style scoped>
</style>
