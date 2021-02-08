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
              <a-layout-sider :style="{ padding: '0', background: '#ffffff' }" width="500">
                <a-layout>
                  <a-layout-header :style="{ height: '350px', padding:'0'}">
                    <a-carousel autoplay class="house-album">
                      <div><img :src="`/house/1.webp`"></div>
                      <div><img :src="`/house/2.webp`"></div>
                      <div><img :src="`/house/3.webp`"></div>
                      <div><img :src="`/house/4.webp`"></div>
                      <div><img :src="`/house/5.webp`"></div>
                      <div><img :src="`/house/6.webp`"></div>
                    </a-carousel>
                  </a-layout-header>
                  <a-layout-content :style="{ padding:'8px 0', background: '#ffffff' }">
                    <div class="house-album-view">
                      <div class="album-view-left">
                        <
                      </div>
                      <div class="album-view-content">
                        <a-list :data-source="albumList" class="house-album-list" itemLayout="vertical">
                          <a-list-item slot="renderItem" slot-scope="item, index">
                            <div class="album-list-item">
                              <img src="/house/6.webp" >
                              <span>Content {{ item.title }} {{ index }}</span>
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
                    <a > 查看更多楼盘详情 > </a>
                  </a-descriptions-item>
                </a-descriptions>
              </a-layout-content>
            </a-layout>
          </a-layout-content>
        </a-layout>
      </a-layout-header>
      <a-layout-content></a-layout-content>
    </a-layout>
  </page-header-wrapper>
</template>

<script>
import { AutoComplete } from 'ant-design-vue'
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
  schoolOptions,
  statusMap
} from '@/api/data'

export default {
  name: 'HouseOverview',
  components: {
    AutoComplete
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
      schools: schoolOptions(),
      metrolineDistrictInfo: [],
      houseSelect: {},
      current: 0,
      albumList: [{ title: 1 }, { title: 1 }, { title: 1 }, { title: 1 }]
    }
  },
  created () {
  },
  beforeMount () {
    console.log(this.$route.params)
    this.houseSelect = this.$route.params.houseSelect
  },
  methods: {
  }
}
</script>
<style scoped>
.house-album >>> .slick-slide {
  text-align: center;
  height: 350px;
  line-height: 350px;
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
  padding: 0 10px;
  height: 72px;
  width: 116px;
  border-bottom: unset;
  float: left;
}
.house-album-view {
  display: flex;
}
.album-view-left, .album-view-right {
  width: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 2px 0px 0px 2px;
  color: #ffffff;
  text-align: center;
}
.album-view-content {
  flex: 1;
  padding: 0 8px;
  overflow: hidden;
}
.album-list-item {
  height: 100%;
  position: relative;
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
</style>
