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
      <a-form-item label="看房日记">
        <a-input addon-after="室" v-model="houseTypeEdit.severalBedrooms"></a-input><a-input addon-after="厅" v-model="houseTypeEdit.hallNumber"></a-input><a-input addon-after="厨" v-model="houseTypeEdit.kitchenNumber"></a-input><a-input addon-after="卫" v-model="houseTypeEdit.restRoomNumber"></a-input>
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
      houseTypeEdit: {}
    }
  },
  created () {
  },
  methods: {
    addHouseDiary () {
      newHouseDiary({ communityId: 485,
    userName: '房专家',
    userIcon: 'http://djjd.com/001img',
    viewingTime: '2021-03-09',
    reviewContent: null,
    customerInfo: null,
    classificationLabel: '户型好1'
})
    }
  }
}
</script>
<style scoped>
</style>
