<template>
  <div>
    <a-upload
      :key="type"
      :file-list="fileList"
      accept="image/*"
      action="/api/community-infos/fileUpload"
      :data="{ communityId: houseId, type: type }"
      list-type="picture-card"
      :remove="handleRemove"
      :beforeUpload="beforeUpload"
      @preview="handlePreview"
      @change="handleChange"
    >
      <div>
        <a-icon type="plus" />
        <div class="ant-upload-text">
          {{ name }}
        </div>
      </div>
    </a-upload>
  </div>
</template>

<script>
import { photoDelete } from '@/api/manage'
import { getBase64 } from '@/api/util'
export default {
  name: 'HouseImageUploader',
  props: {
    houseId: Number,
    type: String,
    name: String,
    fileList: []
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    handleRemove (file) {
      const index = this.fileList.indexOf(file)
      this.fileList = this.fileList.slice().splice(index, 1)
      photoDelete(file.imageId || file.response.id)
      if (this.type === '0') {
      }
    },
    async handlePreview (file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj)
      }
      this.previewImage = file.url || file.preview
      this.previewVisible = true
    },
    beforeUpload (file) {
      getBase64(file).then(url => {
        if (this.type === '0') {
          this.fileList = [{ uid: new Date().getMilliseconds, name: file.name, file: file, url: url }]
        }
      })
      return true
    },
    handleChange (f) {
      this.fileList = f.fileList
      if (this.type === '0') {

      }
    }
  }
}
</script>
