<template>
  <page-header-wrapper class="house-overview">
    <a-layout :style="{ background: '#ffffff', padding: '0', height: '100%', padding: '0 128px' }">
      <a-layout-header :style="{ background: '#ffffff', padding: '0', height: '100%' }">
        <a-layout :style="{ background: '#ffffff', padding: '0', height: '100%' }">
          <a-layout-header :style="{ padding: '0', height: '80px', width: '100%', color: '#000000', 'font-size': '24px' }">
            {{ houseSelect.communityName }}
          </a-layout-header>
          <a-layout-content :style="{ width:'100%'}">
            <a-layout :style="{ padding: '0', background: '#ffffff' }">
              <a-layout-sider :style="{ padding: '0', background: '#ffffff' }" width="496">
                <a-layout>
                  <a-layout-header :style="{ height: '336px', padding:'0'}">
                    <a-carousel autoplay class="house-picture">
                      <div class="picture-list" v-for="(p, i) of pictureList" :key="p.title">
                        <img :src="p.imgsrc">
                        <span>{{ i+1 +'/'+ pictureList.length }}</span>
                        <a-button @click="saveHouse()" size="small">
                          <a-icon type="picture" />查看相册
                        </a-button>
                      </div>
                    </a-carousel>
                  </a-layout-header>
                  <a-layout-content :style="{ padding:'8px 0', background: '#ffffff' }">
                    <div class="house-album-view">
                      <div class="album-view-left">
                        <
                      </div>
                      <div class="album-view-content">
                        <a-list :data-source="albumList" class="house-album-list" itemLayout="vertical">
                          <a-list-item slot="renderItem" slot-scope="item">
                            <div class="album-list-item" :class="item.active ? 'active':null">
                              <img :src="item.imgsrc" >
                              <span>{{ item.title }}</span>
                            </div>
                          </a-list-item>
                        </a-list>
                      </div>
                      <div class="album-view-right">
                        >
                      </div>
                    </div>
                  </a-layout-content>
                </a-layout>
              </a-layout-sider>
              <a-layout-content :style="{ padding: '10px 32px', color: '#262626'}">
                <a-descriptions title="" :column="4">
                  <a-descriptions-item label="参考均价" :span="4">
                    {{ houseSelect.averageLlistedPrice }} {{ houseSelect.totalPrice }}
                  </a-descriptions-item>
                </a-descriptions>
                <a-descriptions title="" :column="4">
                  <a-descriptions-item label="小区地址" :span="4">
                    {{ houseSelect.address }}
                  </a-descriptions-item>
                  <a-descriptions-item label="楼盘类型" :span="4">
                    {{ houseSelect.buildingType }}
                  </a-descriptions-item>
                </a-descriptions>
                <a-descriptions title="" :column="4">
                  <a-descriptions-item label="交易权属" :span="4">
                    {{ houseSelect.transactionOwnership }}
                  </a-descriptions-item>
                  <a-descriptions-item label="建筑时间" :span="4">
                    {{ houseSelect.constructionAge ? houseSelect.constructionAge + '年' : '' }}
                  </a-descriptions-item>
                  <a-descriptions-item label="楼盘户型" :span="4">
                    一居 二居 三居
                  </a-descriptions-item>
                </a-descriptions>
                <a-descriptions title="" :column="4">
                  <a-descriptions-item label="区域板块" :span="4">
                    {{ houseSelect.districtPlanning }}
                  </a-descriptions-item>
                  <a-descriptions-item label="所属环线" :span="4">
                    {{ houseSelect.loopSummary }}
                  </a-descriptions-item>
                  <a-descriptions-item label="地铁站" :span="4">
                    <template v-for="m in houseSelect.metroInfo">
                      <span :key="m">
                        {{ m.metroLine + ' ' + m.subwayStation }}
                      </span>
                    </template>
                  </a-descriptions-item>
                </a-descriptions>
                <a-descriptions title="" :column="4">
                  <a-descriptions-item label="对口小学" :span="4">
                    <template v-for="s in houseSelect.schoolDistrictInfo">
                      <span :key="s">
                        {{ s.schoolName }}
                      </span>
                    </template>
                  </a-descriptions-item>
                  <a-descriptions-item label="对口中学" :span="4">
                    <template v-for="s in houseSelect.schoolDistrictInfo">
                      <span :key="s">
                        {{ s.schoolName }}
                      </span>
                    </template>
                  </a-descriptions-item>
                  <a-descriptions-item label="" :span="4">
                    <a @click="showDetail"> 查看更多楼盘详情 > </a>
                  </a-descriptions-item>
                </a-descriptions>
              </a-layout-content>
            </a-layout>
          </a-layout-content>
        </a-layout>
      </a-layout-header>
      <a-layout-content></a-layout-content>
    </a-layout>
    <a-drawer :visible="detailFlag > 0" width="80vw" @close="closeDetail">
      <house-edit :houseSelect="houseSelect" :toCreate="detailFlag === 2" ref="houseeditref"></house-edit>
    </a-drawer>
  </page-header-wrapper>
</template>

<script>
import { AutoComplete } from 'ant-design-vue'
import HouseEdit from './HouseEdit.vue'
import {
  areaOptions,
  getMetroLineOptions,
  averageLlistedPriceOptions,
  totalPriceOptions,
  roomAreaOptions,
  constructionAgeOptions,
  loopSummaryOptions,
  booleanOptions,
  liftOptions,
  subwayOptions,
  areaPlate,
  getLabel,
  statusMap
} from '@/api/data'

export default {
  name: 'HouseOverview',
  components: {
    AutoComplete,
    HouseEdit
  },
  computed: {
  },
  data () {
    return {
      tagInputVisible: false,
      edit: this.toCreate,
      stationOptions: [],
      labels: [],
      areaPlate,
      plateOptions: [],
      editPlateOptions: [],
      areaOptions,
      liftOptions,
      metroLineOptions: getMetroLineOptions(),
      averageLlistedPriceOptions,
      totalPriceOptions,
      totalPriceEdit: false,
      roomAreaOptions,
      constructionAgeOptions,
      loopSummaryOptions,
      booleanOptions,
      subwayOptions,
      statusMap,
      loading: false,
      plates: {},
      subwayStations: {},
      getLabel: getLabel,
      metrolineDistrictInfo: [],
      houseSelect: {},
      current: 0,
      detailFlag: 0,
      albumList: [
      { title: '1sasd', imgsrc: '/house/6.webp', active: true },
      { title: 'zxkhx', imgsrc: '/house/2.webp', active: false },
      { title: 'sdjds', imgsrc: '/house/4.webp', active: false },
      { title: '4sdsa', imgsrc: '/house/1.webp', active: false }
      ],
      pictureList: [
      { title: '1sasd', imgsrc: '/house/6.webp' },
      { title: 'zxkhx', imgsrc: '/house/2.webp' },
      { title: 'sdjds', imgsrc: '/house/4.webp' },
      { title: 'sdjds', imgsrc: '/house/4.webp' },
      { title: '4sdsa', imgsrc: '/house/1.webp' }
      ]
    }
  },
  created () {
  },
  beforeMount () {
    console.log(this.$route.params)
    this.houseSelect = this.$route.params.houseSelect
  },
  methods: {
    closeDetail () {
      this.detailFlag = 0
    },
    showDetail () {
      this.detailFlag = 1
      this.$refs.houseeditref && this.$refs.houseeditref.showDetail()
    }
  }
}
</script>
<style scoped>
.house-picture >>> .slick-slide {
  text-align: center;
  height: 336px;
  line-height: 336px;
  background: #364d79;
  overflow: hidden;
}
.house-album-list >>> .ant-spin-container {
  overflow-x: scroll;
  padding-bottom: 0px;

}
.house-album-list >>> .ant-spin-container::-webkit-scrollbar { width: 0 !important; height: 0 !important; }
.house-album-list >>> .ant-list-items {
    height: 72px;
    width: max-content;

}
.house-album-list >>> .ant-list-item {
  padding: 0 8px 0 0;
  height: 72px;
  width: 116px;
  border-bottom: unset;
  float: left;
}
.house-album-view {
  display: flex;
  user-select: none;
}
.album-view-left, .album-view-right {
  width: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 2px 0px 0px 2px;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
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
.album-list-item.active span{
  background: rgba(183, 28, 43, 0.8);
}
.album-list-item img{
  width: 100%;
  height: 100%;
}
.album-list-item span{
  height: 24px;
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  text-align: center;
}
.picture-list{
  position: relative;
}
.picture-list span{
  position:absolute;
  left: 10px;
  top: 304px;
  height: 24px;
  width: 40px;
  background: rgba(0, 0, 0, 0.6);
  line-height: 24px;
  font-weight: 400;
  color: #FFFFFF;
  font-size: 12px;
}
.picture-list button{
  position:absolute;
  right: 10px;
  top: 304px;
}
</style>
