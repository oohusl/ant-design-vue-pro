<template>
  <page-header-wrapper>
    <a-layout :style="{ background: '#f00f00', padding: '0', height: '100%', padding: '0 128px' }">
      <a-layout-header :style="{ background: '#ff0ff0', padding: '0', height: '100%' }">
        <a-layout :style="{ background: '#000000', padding: '0', height: '100%' }">
          <a-layout-header :style="{ padding: '0', height: '80px', width: '100%', color: '#000000', 'font-size': '24px' }">
            {{ houseSelect.communityName }}
          </a-layout-header>
          <a-layout-content :style="{ width:'100%'}">
            <a-layout>
              <a-layout-sider :style="{ padding: '0' }" width="500">
                <a-layout>
                  <a-layout-header :style="{ height: '350px', padding:'0'}">
                    <a-carousel autoplay>
                      <div><img :src="`/house/1.webp`"></div>
                      <div><img :src="`/house/2.webp`"></div>
                      <div><img :src="`/house/3.webp`"></div>
                      <div><img :src="`/house/4.webp`"></div>
                      <div><img :src="`/house/5.webp`"></div>
                      <div><img :src="`/house/6.webp`"></div>
                    </a-carousel>
                  </a-layout-header>
                  <a-layout-content>
                  </a-layout-content>
                </a-layout>
              </a-layout-sider>
              <a-layout-content>

              </a-layout-content>
            </a-layout>
          </a-layout-content>
        </a-layout>
      </a-layout-header>
      <a-layout-content>
        1
      </a-layout-content>
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
      houseSelect: {}
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
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 350px;
  line-height: 350px;
  background: #364d79;
  overflow: hidden;
}
</style>
