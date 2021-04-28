<template>
  <div>
    <house-image-uploader
      v-for="type in Object.keys(types)"
      :key="type"
      :file-list="fileList[type]"
      accept="image/*"
      action="/api/community-infos/fileUpload"
      :houseId="communityId"
      :type="type"
      :name="types[type]"
    ></house-image-uploader>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>

<script>
import { photoQuery } from '@/api/manage'
import HouseImageUploader from './HouseImageUploader'

export default {
  name: 'HouseImageEdit',
  props: {
    houseId: Number
  },
  components: {
    HouseImageUploader
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
          that.fileList[image.type].push({
            uid: image.id,
            imageId: image.id,
            imageType: image.type,
            status: 'done',
            name: image.url,
            url: '/media/' + image.url
          })
        })
      })
    }
  }
}
</script>
<style scoped></style>
