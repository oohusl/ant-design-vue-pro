<template>
  <a-modal
    title="小区网盘"
    :visible="visible"
    :destroyOnClose="true"
    width="500px"
    @ok="ok"
    @cancel="cancel">
    <div>
      <a-upload
        accept="image/*"
        action="/api/community-infos/uploadPhoto"
        :multiple="true"
        :show-upload-list="false"
        @change="handleChange"
      >
        <a-button> <a-icon type="upload" />选择文件</a-button>
      </a-upload>
    </div>
    <div class="ant-upload-list ant-upload-list-text">
      <div
        class="ant-upload-list-item ant-upload-list-item-done ant-upload-list-item-list-type-text"
        v-for="f in fileList"
        :key="f.url"
      >
        <div class="ant-upload-list-item-info">
          <span>
            <i class="anticon anticon-paper-clip">
              <img src="../../assets/attach.svg" />
            </i>
            <a class="ant-upload-list-item-name ant-upload-list-item-name-icon-count-1">
              {{ f.url }}
            </a>
            <i class="anticon ant-upload-list-item-card-actions anticon-download">
              <a :href="f.url" download="abc">
                <img src="../../assets/download.svg" />
              </a>
            </i>
            <i class="anticon ant-upload-list-item-card-actions anticon-share" @click="handleShare(f)">
              <img src="../../assets/share.svg" />
            </i>
            <i class="anticon ant-upload-list-item-card-actions anticon-delete" @click="handleRemove(f)">
              <img src="../../assets/delete.svg" />
            </i>
          </span>
        </div>
      </div>
    </div>
  </a-modal>
</template>

<script>
import { photoQuery, housePhotoUpload } from '@/api/manage'
export default {
  name: 'HouseFileEdit',
  props: {
    houseId: {
      type: Number,
      default: () => {
        return 0
      }
    }
  },
  components: {},
  data () {
    return {
      visible: false,
      fileList: [],
      modified: false
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
    open () {
      this.visible = true
      this.queryPhotos()
    },
    queryPhotos () {
      const that = this
      this.fileList = []
      return photoQuery(that.houseId).then(e => {
        e.forEach(image => {
          if (image.type === '0') {
            that.fileList.push(image)
          }
          that.$forceUpdate()
        })
        this.modified = false
      })
    },
    ok () {
      if (!this.modified) {
        this.visible = false
        return
      }
      this.$confirm({
        content: '确认提交小区网盘？',
        onOk: () => {
          const files = []
          files[0] = (this.fileList || []).map(f => {
            return f.url || f.response
          })
          return housePhotoUpload({ id: this.houseId, files: files }).then(e => {
            this.visible = false
            this.$message.success('小区网盘修改成功')
          })
        }
      })
    },
    cancel () {
      if (!this.modified) {
        this.visible = false
        return
      }
      const that = this
      this.$confirm({
        content: '取消对小区网盘的修改？',
        onOk () {
          that.visible = false
        }
      })
    },
    handleShare (f) {
      navigator.clipboard.writeText(f.url)
      this.$message.success('分享链接已拷贝的剪贴板')
    },
    handleRemove (file) {
      const index = this.fileList.findIndex(f => {
        return f.url === file.url
      })
      this.fileList.splice(index, 1)
      this.modified = true
      this.$forceUpdate()
    },
    handleChange (f, type) {
      if (f.file.status === 'done') {
        this.fileList.push({ url: f.file.response })
        this.modified = true
      }
      this.$forceUpdate()
    }
  }
}
</script>
<style>
.ant-upload-picture-card-wrapper {
  float: left;
  width: fit-content;
}
.list-item-actions {
  position: absolute;
  top: 8px;
  left: 8px;
  background: rgba(0, 0, 0, 0.5);
  width: 100px;
  height: 100px;
  line-height: 100px;
  color: #fff;
  text-align: center;
}
</style>
<style lang="less" scope>
.ant-upload.ant-upload-select-picture-card {
  margin-top: 8px;
}
.anticon {
  top: 4px;
  cursor: pointer;
}
.anticon-share {
  right: 30px;
}
.anticon-download {
  right: 60px;
}
</style>
