<template>
  <a-modal
    title="楼盘相册"
    :visible="visible"
    @cancel="imageEditClose"
    @ok="saveHousePhoto"
    width="1000px"
    :destroyOnClose="true"
  >
    <a-modal
      title="图片编辑"
      :visible="editItem != null"
      :destroyOnClose="true"
      @cancel="editItem = null"
      :footer="false"
      :zIndex="10000"
    >
      <div>
        <img id="image" style="max-width: 100%; min-width: 400px" />
      </div>
      <div class="img-toolbar">
        <!-- <img src="../../assets/crop.svg" @click="cropper.setDragMode('crop')" /> -->
        <img src="../../assets/rotate-left.svg" @click="cropper.rotate(-90)" />
        <img src="../../assets/magnify-plus.svg" @click="cropper.zoom(0.1)" />
        <img src="../../assets/magnify-minus.svg" @click="cropper.zoom(-0.1)" />
        <a-divider type="vertical" />
        <img src="../../assets/reset.svg" @click="cropper.reset()" />
        <img @click="saveEditImage" src="../../assets/save.svg" />
      </div>
    </a-modal>
    <a-row v-for="type in Object.keys(types)" :key="type">
      <a-upload
        accept="image/*"
        action="/api/community-infos/uploadPhoto"
        list-type="picture-card"
        :show-upload-list="false"
        :multiple="true"
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
      <draggable
        element="span"
        :value="fileList[type]"
        @input="
          v => {
            dragChange(v, type)
          }
        "
        v-bind="dragOptions"
      >
        <transition-group name="no" class="list-group" tag="ul">
          <li
            class="list-group-item"
            v-for="element in fileList[type]"
            :key="element.uid"
            @mouseenter="handleHover(element, 'in')"
            @mouseleave="handleHover({}, 'out')"
          >
            <img :src="getImg(element.url, 'm')" style="width:100px; height:100px" />
            <div class="list-item-actions" v-if="element.imageId === actionElement.imageId">
              <a-icon type="eye" @click="handlePreview(element.url)" />
              <a-icon type="delete" @click="handleRemove(element, type)" style="margin-left:5px" />
              <a-icon type="edit" @click="handleEdit(element, type)" style="margin-left:5px" />
            </div>
          </li>
        </transition-group>
      </draggable>
    </a-row>
  </a-modal>
</template>

<script>
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
import { photoQuery, housePhotoUpload, imageUPload } from '@/api/manage'
import { getImg } from '@/utils/util'
import { EventBus } from '@/event-bus'
import draggable from 'vuedraggable'
export default {
  name: 'HouseImageEdit',
  props: {
    houseId: {
      type: Number,
      default: () => {
        return 0
      }
    }
  },
  components: { draggable },
  data () {
    return {
      visible: false,
      types: {
        '0': '封面图',
        '1': '楼盘平面图',
        '2': '周边规划图',
        '3': '楼盘实景图',
        '4': '周边实景图'
      },
      fileList: { '0': [], '1': [], '2': [], '3': [], '4': [] },
      previewVisible: false,
      previewImage: null,
      editItem: null,
      cropper: null,
      dragOptions: {
        animation: 0,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      },
      actionElement: {},
      modified: false
    }
  },
  methods: {
    getImg,
    open () {
      this.visible = true
      this.queryPhotos()
    },
    queryPhotos () {
      return photoQuery(this.houseId).then(e => {
        this.fileList = { '0': [], '1': [], '2': [], '3': [], '4': [] }
        e.forEach(image => {
          this.fileList[image.type].push({
            uid: image.id,
            imageId: image.id,
            imageType: image.type,
            status: 'done',
            name: image.url,
            url: image.url
          })
          this.$forceUpdate()
        })
        this.modified = false
      })
    },
    save () {
      const files = []
      Object.keys(this.types).forEach(e => {
        files[1 * e] = (this.fileList[e] || []).map(f => {
          return f.url || f.response
        })
      })
      return housePhotoUpload({ id: this.houseId, files: files })
    },
    saveEditImage () {
      this.cropper.getCroppedCanvas().toBlob(blob => {
        const formData = new FormData()
        // Pass the image file name as the third parameter if necessary.
        formData.append('file', blob, 'blob.png')
        // Use `jQuery.ajax` method for example
        this.modified = true
        imageUPload(formData).then(e => {
          this.editItem.url = e
          this.editItem = null
        })
      })
    },
    handleRemove (file, type) {
      this.$confirm({
        content: '确认删除图片？',
        onOk: () => {
          const index = this.fileList[type].findIndex(f => {
            return f.url === file.url
          })
          this.fileList[type].splice(index, 1)
          this.modified = true
          this.$forceUpdate()
        }
      })
    },
    handlePreview (url) {
      EventBus.$emit('preview', url)
    },
    handleEdit (item) {
      this.editItem = item
      // if (!this.cropper) {
      this.$nextTick(() => {
        const image = document.getElementById('image')
        // eslint-disable-next-line no-new
        this.cropper = new Cropper(image, {
          crop (event) {
            console.log(event.detail.x)
            console.log(event.detail.y)
            console.log(event.detail.width)
            console.log(event.detail.height)
            console.log(event.detail.rotate)
            console.log(event.detail.scaleX)
            console.log(event.detail.scaleY)
          }
        })
        this.cropper.replace(item.url)
      })
      // } else {
      //   this.cropper.replace(item.url)
      // }
    },
    handleChange (f, type) {
      if (f.file.status === 'done') {
        this.fileList[type].push({ url: f.file.response, uid: f.file.uid })
      }
      this.modified = true
      this.$forceUpdate()
    },
    onMove ({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      console.log((!relatedElement || !relatedElement.fixed) && !draggedElement.fixed)
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    },
    dragChange (value, list) {
      this.fileList[list] = [...value]
      this.modified = true
      this.$forceUpdate()
    },
    handleHover (element, action) {
      this.actionElement = element
    },
    imageEditClose () {
      if (!this.modified) {
        this.visible = false
        return
      }
      this.$confirm({
        content: '取消对楼盘相册的修改？',
        onOk: () => {
          this.visible = false
          this.queryPhotos()
        }
      })
    },
    saveHousePhoto () {
      if (!this.modified) {
        this.visible = false
        return
      }
      this.$confirm({
        content: '确认提交楼盘相册？',
        onOk: () => {
          this.save().then(e => {
            this.visible = false
            this.$message.success('相册修改成功')
          })
          this.$emit('changed')
        }
      })
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
.list-group-item {
  padding: 8px;
  float: left;
  position: relative;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 8px;
}
.list-group {
  margin: 0;
  min-height: 120px;
  min-width: 810px;
}
.ant-upload.ant-upload-select-picture-card {
  margin-top: 8px;
}
.img-toolbar {
  text-align: center;
  background-color: #f6f6f6;
  border: 1px solid #dcdcdc;
  height: 42px;
}
.img-toolbar * {
  margin-top: 8px;
  margin-left: 30px;
  cursor: pointer;
}
</style>
