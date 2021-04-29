<template>
  <div>
    <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" :labelAlign="'right'">
      <a-form-item label="看房时间">
        <a-date-picker
          valueFormat="YYYY-MM-DD"
          :default-value="moment(houseDiary.viewingTime)"
          @change="onChange"
          v-decorator="['startAt', { rules: [{ required: true, message: '请选择时间' }] }]"
        />
      </a-form-item>
      <a-form-item label="点评内容">
        <a-input v-model="houseDiary.reviewContent" type="textarea"></a-input>
      </a-form-item>
      <a-form-item label="客户信息">
        <a-input v-model="houseDiary.customerInfo"></a-input>
      </a-form-item>
      <a-form-item label="分类标签">
        <a-input v-model="houseDiary.classificationLabel"></a-input>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { AutoComplete } from 'ant-design-vue'
import { newHouseDiary } from '@/api/manage'
import moment from 'moment'
export default {
  name: 'HouseDiary',
  components: {
    AutoComplete
  },
  props: {
    diary: { type: Object, default: () => { return {} } },
    houseSelect: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      houseDiary: Object.assign({}, this.diary)
    }
  },
  watch: {
    diary (newDiary) {
      this.houseDiary = Object.assign({}, newDiary)
      this.$forceUpdate()
    }
  },
  methods: {
    moment,
    save () {
      this.houseDiary.communityId = this.houseSelect.id
      return newHouseDiary(this.houseDiary)
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
      this.houseDiary.viewingTime = date
    }
  }
}
</script>
<style scoped></style>
