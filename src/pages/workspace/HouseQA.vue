<template>
  <div>
    <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" :labelAlign="'right'">
      <a-form-item label="问题">
        <a-input v-model="houseQuestion.diaryQuestion" type="textarea"></a-input>
      </a-form-item>
      <a-form-item label="答案">
        <a-input v-model="houseQuestion.diaryAnswer" type="textarea"></a-input>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { AutoComplete } from 'ant-design-vue'

import { saveHouseQuestion } from '@/api/manage'
export default {
  name: 'HouseQA',
  components: {
    AutoComplete
  },
  props: {
    question: {
      type: Object,
      default: () => {
        return {}
      }
    },
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
      houseQuestion: Object.assign({}, this.question)
    }
  },
  watch: {
    question (newQuestion) {
      this.houseQuestion = Object.assign({}, newQuestion)
    }
  },
  created () {},
  methods: {
    save () {
      this.addHouseQuestion()
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
