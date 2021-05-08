<template>
  <div>
    <a-upload
      v-for="type in Object.keys(types)"
      :key="type"
      :file-list="fileList[type]"
      accept="image/*"
      action="/api/community-infos/uploadPhoto"
      list-type="picture-card"
      :remove="
        f => {
          handleRemove(f, type)
        }
      "
      :beforeUpload="
        f => {
          beforeUpload(f, type)
        }
      "
      @preview="handlePreview"
      @change="
        f => {
          handleChange(f, type)
        }
      "
    >
      <div>
        <a-icon type="plus" />
        <div class="ant-upload-text">
          {{ types[type] }}
        </div>
      </div>
    </a-upload>
  </div>
</template>

<script>
import { photoQuery, photoDelete, housePhotoUpload } from '@/api/manage'
import { getBase64 } from '@/api/util'
import { EventBus } from '@/event-bus'

export default {
  name: 'HouseImageEdit',
  props: {
    houseId: Number
  },
  components: {},
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
            url: image.url
          })
          that.$forceUpdate()
        })
      })
    },
    save () {
      return housePhotoUpload(this.fileList)
    },
    handleRemove (file, type) {
      const index = this.fileList[type].indexOf(file)
      this.fileList[type] = this.fileList[type].slice().splice(index, 1)
      photoDelete(file.imageId || file.response.id)
      this.$forceUpdate()
    },
    handlePreview (file) {
      EventBus.$emit('preview', file.url || file.response.url)
    },
    beforeUpload (file, type) {
      getBase64(file).then(url => {
        if (type === '0') {
          this.fileList[type] = [{ uid: new Date().getMilliseconds, name: file.name, file: file, url: url }]
        }
      })
      this.$forceUpdate()
      return true
    },
    handleChange (f, type) {
      this.fileList[type] = f.fileList
      if (type === '0' && f.file && f.file.status !== 'removed') {
        this.fileList[type] = [f.file]
      }
      this.$forceUpdate()
    }
  }
}
</script>
<style scoped></style>
