<template>
  <div
    class="viewer-wraper"
    contenteditable="true"
    v-focus
    @keyup.esc="$emit('exit')"
    @keyup.left="$emit('flip', -1)"
    @keyup.right="$emit('flip', 1)"
  >
    <div class="viewer-fullscreen-exit" role="button" @click="$emit('exit')"></div>
    <div>
      <img
        style="position:absolute;top: 50%; left: 60px; z-index: 10001; cursor: pointer;"
        src="../../assets/left.svg"
        @click="$emit('flip', -1)"
      />
      <img
        :src="src"
        style="position:absolute; max-width:85%; max-height:90%; position: absolute; top: 50%;left: 50%;transform: translate(-50%, -50%);"
      />
      <img
        style="position:absolute;top: 50%; right: 60px; z-index: 10001; cursor: pointer;"
        src="../../assets/right.svg"
        @click="$emit('flip', 1)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImgViewer',
  props: {
    src: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data () {
    return {
      show: true
    }
  }
}
</script>
<style scoped>
.viewer-wraper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.viewer-fullscreen-exit {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
  height: 100px;
  overflow: hidden;
  position: absolute;
  right: -50px;
  top: -50px;
  -webkit-transition: background-color 0.15s;
  transition: background-color 0.15s;
  width: 100px;
}

.viewer-fullscreen-exit:focus,
.viewer-fullscreen-exit:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.viewer-fullscreen-exit:before {
  bottom: 21px;
  left: 21px;
  position: absolute;
  background-image: url(../../assets/full-screen-zoom.svg);
  background-size: contain;
  background-repeat: no-repeat;
  color: transparent;
  display: block;
  font-size: 0;
  height: 20px;
  width: 20px;
  line-height: 0;
  content: 'Exit Full Screen';
}
</style>
