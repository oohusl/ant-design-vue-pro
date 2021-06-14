<template>
  <div>
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
              style="float:left;position: relative;"
              @mouseenter="handleHover(element,'in')"
              @mouseleave="handleHover({},'out')">
            <img :src="element.url" style="width:100px; height:100px"/>
            <div class="list-item-actions" v-if="element.imageId === actionElement.imageId ">
              <a-icon type="eye" @click="handlePreview(element.url)" :style="{ 'pointer-events': element.status === 'done'?'auto':'none', opacity: element.status === 'done'?1:0.5 }"/>
              <a-icon type="delete" @click="handleRemove(element, type)" style="margin-left:5px"/>
            </div>
          </li>
        </transition-group>
      </draggable>
    </a-row>
  </div>
</template>

<script>
import { photoQuery, housePhotoUpload } from '@/api/manage'
import { EventBus } from '@/event-bus'
import draggable from 'vuedraggable'
const initFileList = { '0': [], '1': [], '2': [], '3': [], '4': [] }
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
      types: {
        '0': '封面图',
        '1': '楼盘平面图',
        '2': '周边规划图',
        '3': '楼盘实景图',
        '4': '周边实景图'
      },
      fileList: initFileList,
      previewVisible: false,
      previewImage: null,
      dragOptions: {
        animation: 0,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      },
      actionElement: {}
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
      this.fileList = initFileList
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
    refresh () {
      this.queryPhotos()
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
    handleRemove (file, type) {
      const index = this.fileList[type].findIndex(f => {
        return f.url === file.url
      })
      this.fileList[type].splice(index, 1)
      // photoDelete(file.imageId || file.response.id)
      this.$forceUpdate()
    },
    handlePreview (url) {
      EventBus.$emit('preview', url)
    },
    handleChange (f, type) {
      if (f.file.status === 'done') {
        this.fileList[type].push({ url: f.file.response, uid: f.file.uid })
      }
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
      this.$forceUpdate()
    },
    handleHover (element, action) {
      // console.log(event)
      // console.log(action)
      this.actionElement = element
    }
  }
}
</script>
<style>
.ant-upload-picture-card-wrapper {
  float: left;
  width: fit-content;
}
.list-item-actions{
  position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    line-height: 100px;
    color: #fff;
    text-align: center;
}
</style>
