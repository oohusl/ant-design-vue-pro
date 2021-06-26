<template>
  <div class="yun-pan">
    <a-layout>
      <a-layout-header>
        <a-menu v-model="current" mode="horizontal" @select="panChanged">
          <a-menu-item key="1"> 区域规划 </a-menu-item>
          <a-menu-item key="2"> 学区政策</a-menu-item>
          <a-menu-item key="3"> 公司介绍</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content>
        <div class="list-none" v-if="!fileList.length">暂无文件</div>
        <div class="ant-upload-list ant-upload-list-text">
          <div
            class="ant-upload-list-item ant-upload-list-item-done ant-upload-list-item-list-type-text"
            v-for="f in fileList"
            :key="f.filePath"
          >
            <div class="ant-upload-list-item-info">
              <span>
                <i class="anticon anticon-paper-clip">
                  <img src="../../assets/attach.svg" />
                </i>
                <a class="ant-upload-list-item-name ant-upload-list-item-name-icon-count-1">
                  {{ f.fileName }}
                </a>
                <i class="anticon ant-upload-list-item-card-actions anticon-download">
                  <a :href="f.filePath" :download="f.fileName">
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
      </a-layout-content>
      <a-layout-footer>
        <div>
          <a-upload
            action="/api/community-folder/uploadFile"
            :multiple="true"
            :show-upload-list="false"
            :headers="headers()"
            @change="handleChange"
          >
            <a-button> <a-icon type="upload" />选择文件</a-button>
          </a-upload>
        </div>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import { communityFolderQuery, communityFolderSave } from '@/api/manage'
import { headers } from '@/utils/request'
export default {
  name: 'YunPan',
  components: {},
  data () {
    return {
      current: ['1'],
      panId: 1,
      visible: false,
      fileList: [],
      modified: false
    }
  },
  created () {
    this.communityFolderQuery()
  },
  methods: {
    headers,
    open () {
      this.visible = true
      this.communityFolderQuery()
    },
    panChanged (event) {
      this.panId = event.key
      this.communityFolderQuery()
    },
    communityFolderQuery () {
      this.fileList = []
      return communityFolderQuery(this.panId).then(e => {
        this.fileList = e
        this.modified = false
        this.$forceUpdate()
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
          communityFolderSave({
            communityId: this.panId,
            communityFolders: this.fileList.map(e => {
              return { filePath: e.filePath, fileName: e.fileName, fileSize: e.fileSize }
            })
          }).then(e => {
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
      // navigator.clipboard.writeText(location.origin + f.filePath)
      this.$clipboard(location.origin + f.filePath)
      this.$message.success('分享链接已拷贝的剪贴板')
    },
    handleRemove (file) {
      const index = this.fileList.findIndex(f => {
        return f.filePath === file.filePath
      })
      this.fileList.splice(index, 1)
      this.modified = true
      this.$forceUpdate()
    },
    handleChange (f) {
      if (f.file.status === 'done') {
        this.fileList.push(f.file.response)
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
.yun-pan {
  .list-none {
    text-align: center;
  }
  .ant-layout-content {
    background-color: rgb(255, 255, 255);
    min-height: 400px;
    max-height: 600px;
  }
  .ant-layout-footer {
    display: block;
    background-color: #f6f6f6;
    border-top: 1px solid #dcdcdc;
    text-align: center;
  }
  .ant-upload-list {
    width: 300px;
    margin-left: 50px;
  }
}
</style>
