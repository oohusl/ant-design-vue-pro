<template>
  <div>
    <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" :labelAlign="'right'">
      <a-form-item label="房屋结构">
        <a-input style="width:100px" addon-after="室" v-model="houseTypeEdit.room"></a-input
        ><a-input style="width:100px" addon-after="厅" v-model="houseTypeEdit.hall"></a-input
        ><a-input style="width:100px" addon-after="厨" v-model="houseTypeEdit.kitchen"></a-input
        ><a-input style="width:100px" addon-after="卫" v-model="houseTypeEdit.toilet"></a-input>
      </a-form-item>
      <a-form-item label="房屋朝向">
        <a-input v-model="houseTypeEdit.towards"></a-input>
      </a-form-item>
      <a-form-item label="建筑面积">
        <a-input addon-after="m²" v-model="houseTypeEdit.acreage"></a-input>
      </a-form-item>
      <a-form-item label="房屋层高">
        <a-input addon-after="米" v-model="houseTypeEdit.floorHeight"></a-input>
      </a-form-item>
      <a-form-item label="房屋类型">
        <a-input v-model="houseTypeEdit.typesOfHouse"></a-input>
      </a-form-item>
      <a-form-item label="参考单价">
        <a-input addon-after="元" v-model="houseTypeEdit.referenceUnitPrice"></a-input>
      </a-form-item>
      <a-form-item label="参考总价">
        <a-input addon-after="万元" v-model="houseTypeEdit.referenceTotalPrice"></a-input>
      </a-form-item>
      <a-form-item label="户型存量">
        <a-input addon-after="套" v-model="houseTypeEdit.unitInventory"></a-input>
      </a-form-item>
      <a-form-item label="户型分析">
        <a-input v-model="houseTypeEdit.analysis"></a-input>
      </a-form-item>
      <a-form-item label=" " :colon="false">
        <a-upload
          :file-list="houseTypeFiles"
          accept="image/*"
          list-type="picture-card"
          :before-upload="beforeHouseTypeUpload"
          :remove="handleHouseTypeRemove"
          @preview="handlePreview"
        >
          <div>
            <a-icon type="plus" />
            <div class="ant-upload-text">
              上传图片
            </div>
          </div>
        </a-upload>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { houseTypePhotoUpload, saveAnalysis } from '@/api/manage'
import { getBase64 } from '@/api/util'

export default {
  name: 'HouseTypeEdit',
  components: {},
  props: {
    houseAnalysis: {
      type: Object,
      default: function () {
        return {}
      }
    },
    toCreate: { type: Boolean, default: false }
  },
  computed () {
    this.houseTypeEdit = this.houseAnalysis
  },
  data () {
    return {
      imageEditVisible: false,
      edit: this.toCreate,
      loading: false,
      fileList: [],
      uploading: false,
      toDelete: [],
      previewVisible: false,
      previewImage: '',
      houseTypeFiles: [],
      houseTypes: [],
      houseTypeEdit: this.houseAnalysis,
      houseTypeOptions: [
        { label: '平层', value: '平层' },
        { label: '叠墅', value: '叠墅' },
        { label: '别墅', value: '别墅' },
        { label: 'loft', value: 'loft' }
      ],
      towardOptions: [
        { label: '南北', value: '南北' },
        { label: '朝南', value: '朝南' },
        { label: '朝东', value: '朝东' },
        { label: '朝北', value: '朝北' },
        { label: '朝西', value: '朝西' }
      ]
    }
  },
  beforeMount () {
    if (this.edit) {
      this.newHouse()
    }
  },
  methods: {
    saveHouseType () {
      this.houseTypeEdit.unitTypeName = `${this.houseTypeEdit.room}室${this.houseTypeEdit.hall || 0}厅${!this
        .houseTypeEdit.kitchen || 0}厨${this.houseTypeEdit.toilet || 0}卫`
      saveAnalysis(this.houseTypeEdit)
        .then(e => {
          if (this.houseTypeFiles.length > 0 && this.houseTypeFiles[0].file) {
            const formData = new FormData()
            formData.append('file', this.houseTypeFiles[0].file)
            formData.append('houseId', e.id)
            formData.append('type', '1')
            houseTypePhotoUpload(formData)
          }

          this.$notification.success({
            message: '通知',
            description: this.houseTypeEdit.id ? '修改成功' : '保存成功'
          })
        })
        .catch(e => {
          this.$notification.error({
            message: '通知',
            description: this.houseTypeEdit.id ? '修改失败' : '保存失败'
          })
        })
    },
    refresh () {
      this.houseTypeEdit = this.houseAnalysis
    },
    beforeHouseTypeUpload (file) {
      getBase64(file).then(url => {
        this.houseTypeFiles = [{ uid: new Date().getMilliseconds, name: file.name, file: file, url: url }]
      })
      return false
    },
    handleHouseTypeRemove (file) {
      const index = this.houseTypeFiles.indexOf(file)
      const newFileList = this.houseTypeFiles.slice()
      newFileList.splice(index, 1)
      this.houseTypeFiles = newFileList
    },
    handleCancel () {
      this.previewVisible = false
    },
    handlePreview (file) {
      this.previewImage = file.url || file.preview
      this.previewVisible = true
    },
    handleOk (type) {
      switch (type) {
        case 'housediary':
          this.$refs.housediaryref && this.$refs.housediaryref.save()
          this.houseDiaryVisible = false
          break
        default:
          break
      }
    }
  }
}
</script>
<style scoped>
.col1 {
  width: 120px;
}
.col2 {
  width: 364px;
}
.compactInput {
  width: 53px;
  text-align: center;
  padding: 2px;
}
.compactCenter {
  width: 14px;
  border-left: 0;
  border-right: 0;
  pointer-events: none;
  padding: 2px;
}
</style>
