<template>
  <a-layout-sider :style="{ padding: '0', background: '#ffffff' }" width="560">
    <a-layout>
      <a-layout-header :style="{ height: '336px', padding: '0' }">
        <a-carousel effect="fade" class="house-picture" :dots="false" v-if="albumList.length > 0" ref="carouselRef">
          <div class="picture-list" v-for="(p, i) of albumList" :key="i">
            <img :src="p.url" />
            <span>{{ p.title }}</span>
          </div>
        </a-carousel>
        <div class="picture-slide">
          <div @click="showImage" class="viewer-button"></div>
          <div @click="flip(-1)" class="viewer-button-slide viewer-button-left"></div>
          <div @click="flip(1)" class="viewer-button-slide viewer-button-right"></div>
        </div>
        <img
          src="~@/assets/first.png"
          style="width: 550px; margin-top:20px"
          v-if="!albumList || albumList.length === 0"
        />
      </a-layout-header>
      <a-layout-content v-if="albumList && albumList.length > 0" :style="{ padding: '8px 0', background: '#ffffff' }">
        <div class="house-album-view" v-if="albumList.length">
          <div class="album-view-left" @click="flip(-1)"></div>
          <div class="album-view-content">
            <a-list :data-source="albumList" class="house-album-list" itemLayout="vertical">
              <a-list-item slot="renderItem" slot-scope="item, index" @click="selectAlbum(item, index)">
                <div class="album-list-item" :class="index === activeIndex ? 'active' : null">
                  <img :src="item.url" />
                </div>
              </a-list-item>
            </a-list>
          </div>
          <div class="album-view-right" @click="flip(1)"></div>
        </div>
      </a-layout-content>
    </a-layout>
    <div
      v-if="activeUrl"
      class="viewer-wraper"
      contenteditable="true"
      v-focus
      @keyup.esc="imgViewerExit"
      @keyup.enter="imgViewerExit"
      @keydown.left.stop="imgViewerFlip(-1)"
      @keydown.right.stop="imgViewerFlip(1)"
      readonly
    >
      <div></div>
      <div class="viewer-fullscreen-exit" role="button" @click="activeUrl = null"></div>
      <div>
        <img
          style="position:absolute;top: 50%; left: 60px; z-index: 10001; cursor: pointer;"
          src="../../assets/left.svg"
          @click="imgViewerFlip(-1)"
        />
        <img
          :src="activeUrl"
          style="position:absolute; max-width:85%; max-height:90%; position: absolute; top: 50%;left: 50%;transform: translate(-50%, -50%);"
        />
        <img
          style="position:absolute;top: 50%; right: 60px; z-index: 10001; cursor: pointer;"
          src="../../assets/right.svg"
          @click="imgViewerFlip(1)"
        />
      </div>
    </div>
  </a-layout-sider>
</template>

<script>
import { photoQuery } from '@/api/manage'
export default {
  name: 'ImgViewer',
  props: ['houseId', 'refresh'],
  data () {
    return {
      show: true,
      albumList: [],
      interval: -1,
      activeUrl: null,
      activeIndex: 0
    }
  },
  created () {
    this.queryPhotos()
  },
  watch: {
    refresh (newValue, oldValue) {
      newValue && this.queryPhotos()
    }
  },
  methods: {
    startCarousel () {
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.activeIndex = (this.activeIndex + 1) % this.albumList.length
        this.refreshCarousel()
      }, 3000)
    },
    queryPhotos () {
      const photosOption = ['', '效果图', '环境规划图', '楼盘实景图', '周边实景图']
      photoQuery(this.houseId).then(photos => {
        this.albumList = []
        for (const photo of photos) {
          if (photo.type === '0') {
            continue
          }
          // this.pictureList.push({ uid: photo.id, title: photosOption[photo.type], url: photo.url, type: photo.type })
          this.albumList.push({
            title: photosOption[photo.type],
            url: photo.url,
            index: photo.type
          })
        }
        this.startCarousel()
      })
    },
    imgViewerExit () {
      this.activeUrl = null
      this.startCarousel()
    },
    imgViewerFlip (i) {
      const len = this.albumList.length
      let index = (this.activeIndex + i) % len
      if (index < 0) {
        index = len - 1
      }
      this.activeIndex = index
      this.activeUrl = this.albumList[this.activeIndex].url
      this.refreshCarousel()
      return false
    },
    showImage () {
      this.activeUrl = this.albumList[this.activeIndex].url
      clearInterval(this.interval)
    },
    flip (i) {
      const len = this.albumList.length
      let index = (this.activeIndex + i) % len
      if (index < 0) {
        index = len - 1
      }
      this.activeIndex = index
      this.refreshCarousel()
      this.startCarousel()
    },
    selectAlbum (item, index) {
      this.activeIndex = index
      this.refreshCarousel()
      this.startCarousel()
    },
    refreshCarousel () {
      const scroll = document.querySelector('.house-album-list  ul')
      const len = this.albumList.length
      if (len <= 5 || !scroll) {
        return
      }
      let scrollIndex = this.activeIndex - 2
      if (this.activeIndex < 3) {
        scrollIndex = 0
      } else if (this.activeIndex > len - 4) {
        scrollIndex = len - 5
      }
      scroll.style.transform = `translateX(${-1 * scrollIndex * 104}px)`
      this.$refs['carouselRef'].goTo(this.activeIndex)
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
  color: rgba(0, 0, 0, 0);
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
.house-picture >>> .slick-slide {
  text-align: center;
  height: 336px;
  line-height: 336px;
  background: #ffffff;
  overflow: hidden;
}
.house-album-list >>> .ant-spin-container {
  overflow-x: scroll;
  padding-bottom: 0px;
}
.house-album-list >>> .ant-spin-container::-webkit-scrollbar {
  width: 0 !important;
  height: 0 !important;
}
.house-album-list >>> .ant-list-items {
  height: 72px;
  width: max-content;
}
.house-album-list >>> .ant-list-item {
  padding: 0 8px 0 0;
  height: 72px;
  width: 104px;
  border-bottom: unset;
  float: left;
}
.house-album-view {
  display: flex;
  user-select: none;
}
.album-view-left,
.album-view-right {
  width: 20px;
  background-image: url(../../assets/left.png);
  background-size: contain;
  border-radius: 2px 0px 0px 2px;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
}
.album-view-right {
  background-image: url(../../assets/right.png);
}
.album-view-content {
  flex: 1;
  padding: 0 8px;
  overflow: hidden;
}
.album-list-item {
  height: 100%;
  position: relative;
  cursor: pointer;
}
.album-list-item img {
  width: 100%;
  height: 100%;
  opacity: 0.5;
}
.album-list-item.active img {
  opacity: 1;
}
.album-list-item span {
  height: 24px;
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  text-align: center;
  font-size: 12px;
  line-height: 24px;
}
.picture-list {
  position: relative;
}
.picture-list span {
  position: absolute;
  left: 10px;
  top: 304px;
  height: 24px;
  background: rgba(0, 0, 0, 0.6);
  line-height: 24px;
  font-weight: 400;
  color: #ffffff;
  font-size: 12px;
  padding-left: 3px;
  padding-right: 3px;
}
.picture-list button {
  position: absolute;
  right: 10px;
  top: 304px;
}
.picture-list img {
  width: 100%;
}
.house-album-list >>> ul {
  transform: translateX(0px);
}
.price >>> .ant-descriptions-item-content {
  color: #b71c2b;
}
.price >>> .ant-descriptions-item-content span {
  font-size: 22px;
}
.viewer-button {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  right: -40px;
  top: -40px;
  cursor: pointer;
  border-radius: 50%;
  cursor: pointer;
  width: 80px;
  height: 80px;
  overflow: hidden;
  -webkit-transition: background-color 0.15s;
  transition: background-color 0.15s;
  display: none;
}
.viewer-button:before {
  bottom: 15px;
  left: 15px;
  position: absolute;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAAUCAYAAABWOyJDAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAQPSURBVHic7Zs/iFxVFMa/0U2UaJGksUgnIVhYxVhpjDbZCBmLdAYECxsRFBTUamcXUiSNncgKQbSxsxH8gzAP3FU2jY0kKKJNiiiIghFlccnP4p3nPCdv3p9778vsLOcHB2bfveeb7955c3jvvNkBIMdxnD64a94GHMfZu3iBcRynN7zAOI7TG15gHCeeNUkr8zaxG2lbYDYsdgMbktBsP03jdQwljSXdtBhLOmtjowC9Mg9L+knSlcD8TNKpSA9lBpK2JF2VdDSR5n5J64m0qli399hNFMUlpshQii5jbXTbHGviB0nLNeNDSd9VO4A2UdB2fp+x0eCnaXxWXGA2X0au/3HgN9P4LFCjIANOJdrLr0zzZ+BEpNYDwKbpnQMeAw4m8HjQtM6Z9qa917zPQwFr3M5KgA6J5rTJCdFZJj9/lyvGhsDvwFNVuV2MhhjrK6b9bFiE+j1r87eBl4HDwCF7/U/k+ofAX5b/EXBv5JoLMuILzf3Ap6Z3EzgdqHMCuF7hcQf4HDgeoHnccncqdK/TvSDWffFXI/exICY/xZyqc6XLWF1UFZna4gJ7q8BsRvgd2/xXpo6P+D9dfT7PpECtA3cnWPM0GXGFZh/wgWltA+cDNC7X+AP4GzjZQe+k5dRxuYPeiuXU7e1qwLpDz7dFjXKRaSwuMLvAlG8zZlG+YmiK1HoFqT7wP2z+4Q45TfEGcMt01xLoNZEBTwRqD4BLpnMLeC1A41UmVxsXgXeBayV/Wx20rpTyrpnWRft7p6O/FdqzGrDukPNtkaMoMo3FBdBSQMOnYBCReyf05s126fU9ytfX98+mY54Kxnp7S9K3kj6U9KYdG0h6UdLbkh7poFXMfUnSOyVvL0h6VtIXHbS6nOP+s/Zm9mvyXW1uuC9ohZ72E9uDmXWLJOB1GxsH+DxPftsB8B6wlGDN02TAkxG6+4D3TWsbeC5CS8CDFce+AW500LhhOW2020TRjK3b21HEmgti9m0RonxbdMZeVzV+/4tF3cBpP7E9mKHNL5q8h5g0eYsCMQz0epq8gQrwMXAgcs0FGXGFRcB9wCemF9PkbYqM/Bas7fxLwNeJPdTdpo4itQti8lPMqTpXuozVRVXPpbHI3KkNTB1NfkL81j2mvhDp91HgV9MKuRIqrykj3WPq4rHyL+axj8/qGPmTqi6F9YDlHOvJU6oYcTsh/TYSzWmTE6JT19CtLTJt32D6CmHe0eQn1O8z5AXgT4sx4Vcu0/EQecMydB8z0hUWkTd2t4CrwNEePqMBcAR4mrBbwyXLPWJa8zrXmmLEhNBmfpkuY2102xxrih+pb+ieAb6vGhuA97UcJ5KR8gZ77K+99xxeYBzH6Q3/Z0fHcXrDC4zjOL3hBcZxnN74F+zlvXFWXF9PAAAAAElFTkSuQmCC);
  background-position: -220px 0;
  background-repeat: no-repeat;
  background-size: 280px;
  color: transparent;
  display: block;
  font-size: 0;
  height: 20px;
  line-height: 0;
  width: 20px;
  content: 'exit';
}
.viewer-button:focus,
.viewer-button:hover,
.viewer-button-slide:focus,
.viewer-button-slide:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.viewer-button-slide {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  cursor: pointer;
  border-radius: 5%;
  cursor: pointer;
  overflow: hidden;
  -webkit-transition: background-color 0.15s;
  transition: background-color 0.15s;
  width: 20px;
  height: 60px;
  display: none;
}

.viewer-button-left {
  top: 150px;
  left: 0;
}
.viewer-button-left:before {
  content: 'Prev';
  position: absolute;
  display: block;
  height: 60px;
  width: 20px;
  background-image: url(../../assets/prev.svg);
  background-repeat: no-repeat;
  background-position: center;
  line-height: 0;
  color: transparent;
}
.viewer-button-right {
  top: 150px;
  right: 0;
}
.viewer-button-right:before {
  content: 'Prev';
  position: absolute;
  display: block;
  height: 60px;
  width: 20px;
  background-image: url(../../assets/next.svg);
  background-repeat: no-repeat;
  background-position: center;
  line-height: 0;
  color: transparent;
}
.picture-slide {
  position: relative;
  height: 336px;
  top: -336px;
  overflow: hidden;
}
.picture-slide:hover .viewer-button,
.picture-slide:hover .viewer-button-left,
.picture-slide:hover .viewer-button-right {
  display: block;
}
</style>
