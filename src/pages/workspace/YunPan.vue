<template>
  <div class="yun-pan">
    <a-layout>
      <a-layout-header>
        <a-menu v-model="current" mode="horizontal" @select="panChanged">
          <a-menu-item key="1"> 区域规划 </a-menu-item>
          <a-menu-item key="2"> 学区政策</a-menu-item>
          <a-menu-item key="3"> 公司介绍</a-menu-item>
          <a-menu-item key="4"> 客户方案</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content>
        <a-empty v-if="!fileList.length" />
        <div class="ant-upload-list" v-if="fileList.length">
          <div class="ant-upload-list-item">
            <div class="ant-upload-list-item-info">
              <span>
                <span class="file-name">文件名</span>
                <span class="file-size">大小</span>
                <span class="file-time">上传日期</span>
                <span class="uploader">上传人</span>
              </span>
            </div>
          </div>
          <div class="files">
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
                  <span class="ant-upload-list-item-name ant-upload-list-item-name-icon-count-1 file-name">
                    {{ f.fileName }}
                  </span>
                  <span class="file-size">{{
                    f.fileSize > 1024 * 1024
                      ? (f.fileSize / 1024 / 1024).toFixed(2) + 'Mb'
                      : (f.fileSize / 1024).toFixed(2) + 'Kb'
                  }}</span>
                  <span class="file-time">{{ f.createdDate | momentTime }}</span>
                  <span class="uploader">{{ f.createdBy }}</span>
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
        </div>
      </a-layout-content>
      <a-layout-footer>
        <div>
          <a-upload
            :action="'/api/community-folder/upload/' + panId"
            :multiple="true"
            :show-upload-list="false"
            :headers="headers()"
            @change="handleChange"
          >
            <a-button v-if="!uploading"> <a-icon type="upload" />选择文件</a-button>
            <a-spin v-if="uploading">
              <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
            </a-spin>
          </a-upload>
        </div>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import { Empty } from 'ant-design-vue'
import { communityFolderQuery, communityFolderDelete } from '@/api/manage'
import { headers } from '@/utils/request'
export default {
  name: 'YunPan',
  components: { 'a-empty': Empty },
  data () {
    return {
      current: ['1'],
      panId: 1,
      fileList: [],
      uploading: false
    }
  },
  created () {
    this.communityFolderQuery()
  },
  methods: {
    headers,
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
    handleShare (f) {
      // navigator.clipboard.writeText(location.origin + f.filePath)
      this.$clipboard(location.origin + f.filePath)
      this.$message.success('分享链接已拷贝的剪贴板')
    },
    handleRemove (file) {
      this.$confirm({
        content: '确认删除文件？',
        onOk: () => {
          const index = this.fileList.findIndex(f => {
            return f.filePath === file.filePath
          })
          communityFolderDelete(this.fileList[index].id).then(e => {
            this.fileList.splice(index, 1)
            this.$message.success('删除成功')
          })
          this.$forceUpdate()
        },
        onCancel () {
          console.log('Cancel')
        }
      })
    },
    handleChange (f) {
      if (f.file.status === 'done') {
        this.fileList.push(f.file.response)
        this.$message.success('文件上传成功')
        this.uploading = false
      } else if (f.file.status === 'error') {
        this.$message.error('文件上传失败')
        this.uploading = false
      } else {
        this.uploading = true
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
  span {
    display: inline-block;
  }
  .list-none {
    text-align: center;
  }
  .ant-layout-content {
    background-color: rgb(255, 255, 255);
    min-height: 400px;
    overflow: scroll;
  }
  .files {
    height: 400px;
    width: 920px;
    overflow: scroll;
    padding-right: 20px;
  }
  .ant-layout-footer {
    display: block;
    background-color: #f6f6f6;
    border-top: 1px solid #dcdcdc;
    text-align: center;
  }
  .ant-upload-list {
    margin-left: 50px;
  }
  .file-name {
    width: 500px;
  }
  .file-size {
    width: 100px;
  }
  .file-time {
    width: 150px;
  }
  .uploader {
    width: 100px;
  }
}
</style>
