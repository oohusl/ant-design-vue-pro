<template>
  <div>
    <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" :labelAlign="'right'">
      <!-- <a-form-item label="楼盘名称">
        <a-input :value="houseSelect.communityName" :disabled="true" />
      </a-form-item> -->
      <a-form-item label="类型">
        <a-select v-model="diaryType">
          <a-select-option :value="1">
            日记
          </a-select-option>
          <a-select-option :value="0">
            问答
          </a-select-option>
        </a-select>
      </a-form-item>
      <template v-if="diaryType">
        <a-form-item label="看房时间">
          <a-date-picker
            valueFormat="YYYY-MM-DD"
            @change="onChange"
            v-decorator="['startAt', { rules: [{ required: true, message: '请选择开始时间' }] }]"
          />
        </a-form-item>
        <a-form-item label="点评内容">
          <a-input v-model="houseDiaryEdit.reviewContent" type="textarea"></a-input>
        </a-form-item>
        <a-form-item label="客户信息">
          <a-input v-model="houseDiaryEdit.customerInfo"></a-input>
        </a-form-item>
        <a-form-item label="分类标签">
          <a-input v-model="houseDiaryEdit.classificationLabel"></a-input>
        </a-form-item>
      </template>
      <template v-if="!diaryType">
        <a-form-item label="问题">
          <a-input v-model="houseQuestion.diaryQuestion" type="textarea"></a-input>
        </a-form-item>
        <a-form-item label="答案">
          <a-input v-model="houseQuestion.diaryAnswer" type="textarea"></a-input>
        </a-form-item>
      </template>
    </a-form>
  </div>
</template>

<script>
import { AutoComplete } from 'ant-design-vue'

import { newHouseDiary, saveHouseQuestion } from '@/api/manage'
export default {
  name: 'HouseDiary',
  components: {
    AutoComplete
  },
  props: {
    houseDiaryVisible: { type: Boolean, default: false },
    houseSelect: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      houseTypeVisible: false,
      houseTypeFiles: [],
      houseTypes: [],
      houseDiaryEdit: { viewingTime: new Date() },
      houseQuestion: {},
      diaryType: 1
    }
  },
  created () {},
  methods: {
    save () {
      if (this.diaryType) {
        this.addHouseDiary()
      } else {
        this.addHouseQuestion()
      }
    },
    addHouseDiary () {
      this.houseDiaryEdit.communityId = this.houseSelect.id
      this.houseDiaryEdit.userIcon = ''
      newHouseDiary(this.houseDiaryEdit)
        .then(e => {
          this.$notification.success({
            message: '通知',
            description: '保存成功'
          })
        })
        .catch(e => {
          this.$notification.error({
            message: '通知',
            description: '修改失败'
          })
        })
    },
    addHouseQuestion () {
      this.houseQuestion.communityId = this.houseSelect.id
      saveHouseQuestion(this.houseQuestion)
        .then(e => {
          this.$notification.success({
            message: '通知',
            description: '保存成功'
          })
        })
        .catch(e => {
          this.$notification.error({
            message: '通知',
            description: '修改失败'
          })
        })
    },
    onChange (date) {
      this.houseDiaryEdit.viewingTime = date
      console.log(date)
    }
  }
}
</script>
<style scoped></style>
