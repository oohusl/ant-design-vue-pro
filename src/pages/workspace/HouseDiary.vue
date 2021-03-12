<template>
  <div>
    <a-form
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }"
      :labelAlign="right"
    >
      <a-form-item
        label="楼盘名称">
        <a-input :value="houseSelect.communityName" :disabled="true"/>
      </a-form-item>
      <a-form-item label="看房日记">
        <a-input addon-after="室" v-model="houseTypeEdit.severalBedrooms"></a-input><a-input addon-after="厅" v-model="houseTypeEdit.hallNumber"></a-input><a-input addon-after="厨" v-model="houseTypeEdit.kitchenNumber"></a-input><a-input addon-after="卫" v-model="houseTypeEdit.restRoomNumber"></a-input>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { AutoComplete } from 'ant-design-vue'

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
      houseTypeEdit: {}
    }
  },
  created () {
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
