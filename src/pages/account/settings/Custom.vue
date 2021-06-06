<template>
  <a-spin :spinning="spinning">
    <a-row :gutter="16" type="flex" justify="center">
      <a-col :order="isMobile ? 2 : 1" :md="24" :lg="16">
        <a-form layout="vertical">
          <a-form-item label="手机">
            <a-input v-model="currentUser.login" :disabled="true" />
          </a-form-item>
          <a-form-item label="头像" :required="false">
            <a-upload
              list-type="picture-card"
              class="avatar-uploader"
              :show-upload-list="false"
              accept="image/*"
              action="/api/community-infos/uploadPhoto"
              :before-upload="beforeUpload"
              @change="handleChange"
            >
              <div v-if="currentUser.imageUrl" style="width:120px; height:120px; border-radius:50%; overflow:hidden;">
                <img :src="currentUser.imageUrl" style="width:120px; height:120px;" alt="avatar" />
              </div>
              <div v-else>
                <a-icon :type="loading ? 'loading' : 'plus'" />
                <div class="ant-upload-text">
                  Upload
                </div>
              </div>
            </a-upload>
          </a-form-item>
          <a-form-item label="姓名">
            <a-input placeholder="请输入姓名" v-model="currentUser.firstName" />
          </a-form-item>
          <a-form-item label="邮箱" :required="false">
            <a-input placeholder="example@985home.com" v-model="currentUser.email" />
          </a-form-item>
          <a-form-item>
            <a-button type="primary" @click="saveInfo">确认</a-button>
            <a-button @click="resetInfo" style="margin-left: 10px">取消</a-button>
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :order="1" :md="24" :lg="8" :style="{ minHeight: '180px' }"> </a-col>
    </a-row>

    <avatar-modal ref="modal" @ok="setavatar" />
  </a-spin>
</template>

<script>
import { saveInfo } from '@/api/login'

export default {
  components: {},
  data () {
    return {
      loading: false,
      spinning: false,
      currentUser: {}
    }
  },
  created: function () {
    this.currentUser = Object.assign({}, this.$store.getters.userInfo)
  },
  methods: {
    setavatar (url) {
      console.log(url)
      this.currentUser.imageUrl = url
    },
    saveInfo () {
      this.spinning = true
      saveInfo(this.currentUser).then(e => {
        this.$message.success('个人信息修改成功')
        this.spinning = false
      })
    },
    resetInfo () {
      Object.assign(this.currentUser, this.$store.getters.userInfo)
    },
    handleChange (info) {
      if (info.file.status === 'uploading') {
        this.loading = true
        return
      }
      if (info.file.status === 'done') {
        this.loading = false
        this.currentUser.imageUrl = info.file.response
      }
    },
    beforeUpload (file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
      if (!isJpgOrPng) {
        this.$message.error('You can only upload JPG file!')
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!')
      }
      return isJpgOrPng && isLt2M
    }
  }
}
</script>

<style lang="less" scoped>
.avatar-upload-wrapper {
  height: 200px;
  width: 100%;
}

.ant-upload-preview {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 180px;
  border-radius: 50%;
  box-shadow: 0 0 4px #ccc;

  .upload-icon {
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 1.4rem;
    padding: 0.5rem;
    background: rgba(222, 221, 221, 0.7);
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  .mask {
    opacity: 0;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition: opacity 0.4s;

    &:hover {
      opacity: 1;
    }

    i {
      font-size: 2rem;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -1rem;
      margin-top: -1rem;
      color: #d6d6d6;
    }
  }

  img,
  .mask {
    width: 100%;
    max-width: 180px;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>
