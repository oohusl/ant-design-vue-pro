<template>
  <div>
    <house-image-uploader
      v-for="type in Object.keys(types)"
      :key="type"
      :file-list="fileList[type]"
      accept="image/*"
      action="/api/community-infos/fileUpload"
      :houseId="houseId"
      :type="type"
      :name="types[type]"
    ></house-image-uploader>
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
        '0': '封面图',
        '1': '效果图',
        '2': '环境规划图',
        '3': '楼盘实景图',
        '4': '周边实景图'
      },
      fileList: {},
      previewVisible: false,
      previewImage: null
    }
  },
  watch: {
    houseId (houseId) {
      this.queryPhotos()
    }
  },
  created () {
    this.queryPhotos()
  },
  methods: {
    queryPhotos () {
      const that = this
      return photoQuery(that.houseId).then(e => {
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
          that.$forceUpdate()
        })
      })
    }
  }
}
</script>
<style scoped></style>
