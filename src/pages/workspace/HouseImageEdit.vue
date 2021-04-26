<template>
  <div>
    <!-- <a-form-item label="相册类目">
        <a-select v-model="photoType" @change="queryPhotos">
          <a-select-option value="0">封面图</a-select-option>
          <a-select-option value="1">效果图</a-select-option>
          <a-select-option value="2">环境规划图</a-select-option>
          <a-select-option value="3">楼盘实景图</a-select-option>
          <a-select-option value="4">周边实景图</a-select-option>
        </a-select>
       -->
    <a-upload
      v-for="type in Object.keys(types)"
      :key="type"
      :file-list="fileList[type]"
      accept="image/*"
      action="/api/community-infos/fileUpload"
      :data="{communityId: houseId, type: type}"
      list-type="picture-card"
      :remove="handleRemove"
      @preview="handlePreview"
      @change="handleChange"
    >
      <div>
        <a-icon type="plus" />
        <div class="ant-upload-text">
          {{ types[type] }}
        </div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>

<script>
import { photoQuery, photoDelete } from '@/api/manage'
import { getBase64 } from '@/api/util'
export default {
  name: 'HouseImageEdit',
  props: {
    houseId: Number
  },
  data () {
    return {
      types: {
        '1': '效果图',
        '2': '环境规划图',
        '3': '楼盘实景图',
        '4': '周边实景图'
      },
      fileList: { '1': [] },
      previewVisible: false,
      previewImage: ''
    }
  },
  created () {
    this.queryPhotos()
  },
  methods: {
    queryPhotos () {
      const that = this
      return photoQuery(36).then(e => {
        e.forEach(image => {
          that.fileList[image.type] = this.fileList[image.type] || []
          that.fileList[image.type].push({ uid: image.id, imageId: image.id, imageType: image.type, status: 'done', name: image.url, url: '/media/' + image.url })
        })
      })
    },
    handleRemove (file) {
      const t = file.imageType || file.response.type
      const index = this.fileList[t].indexOf(file)
      this.fileList[t] = this.fileList[t].slice().splice(index, 1)
      photoDelete(file.imageId || file.response.id)
    },
    handleCancel () {
      this.previewVisible = false
    },
    async handlePreview (file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj)
      }
      this.previewImage = file.url || file.preview
      this.previewVisible = true
    },
    handleChange (f) {
      console.log(f)
      this.fileList['1'] = f.fileList
    }
  }
}
</script>
<style scoped></style>
