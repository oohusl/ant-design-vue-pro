<template>
  <div class="house-overview">
    <a-layout :style="{ background: '#ffffff', padding: '0', height: '100%', padding: '0 128px' }">
      <a-layout-header :style="{ background: '#ffffff', padding: '0', height: '100%' }">
        <a-layout :style="{ background: '#ffffff', padding: '0', height: '100%' }">
          <a-layout-header
            :style="{ padding: '0', height: '80px', width: '100%', color: '#000000', 'font-size': '24px' }"
          >
            {{ houseSelect.communityName }}
          </a-layout-header>
          <a-layout-content :style="{ width: '100%' }">
            <a-layout :style="{ padding: '0', background: '#ffffff' }">
              <a-layout-sider :style="{ padding: '0', background: '#ffffff' }" width="496">
                <a-layout>
                  <a-layout-header :style="{ height: '336px', padding: '0' }">
                    <a-carousel autoplay class="house-picture" v-if="pictureList.length > 0">
                      <div class="picture-list" v-for="(p, i) of pictureList" :key="p.title">
                        <img :src="p.url" />
                        <span>{{ i + 1 + '/' + pictureList.length }}</span>
                      </div>
                    </a-carousel>
                    <img src="/common/empty.png"  v-if="pictureList.length === 0" />
                  </a-layout-header>
                  <a-layout-content :style="{ padding: '8px 0', background: '#ffffff' }">
                    <div class="house-album-view" v-if="albumList.length">
                      <div class="album-view-left" @click="flip('prev')">
                        <
                      </div>
                      <div class="album-view-content">
                        <a-list :data-source="albumList" class="house-album-list" itemLayout="vertical">
                          <a-list-item slot="renderItem" slot-scope="item" @click="selectAlbum(item)">
                            <div class="album-list-item" :class="item.active ? 'active' : null">
                              <img :src="item.url" />
                              <span>{{ item.title }}</span>
                            </div>
                          </a-list-item>
                        </a-list>
                      </div>
                      <div class="album-view-right" @click="flip('next')">
                        >
                      </div>
                    </div>
                  </a-layout-content>
                </a-layout>
              </a-layout-sider>
              <a-layout-content :style="{ padding: '10px 32px', color: '#262626' }">
                <a-descriptions title="" :column="4" class="price">
                  <a-descriptions-item label="参考均价" :span="4">
                    <span>{{
                      houseSelect.averageLlistedPrice == null ? '--' : houseSelect.averageLlistedPrice.toLocaleString()
                    }}</span
                    >元/m²(单价)
                    <span>{{ houseSelect.totalPrice == null ? '--' : houseSelect.totalPrice.toLocaleString() }}</span
                    >万元/套(总价)
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
                    {{ houseSelect.area }} {{ houseSelect.plate }}
                  </a-descriptions-item>
                  <a-descriptions-item label="所属环线" :span="4">
                    {{ houseSelect.loopSummary }}
                  </a-descriptions-item>
                  <a-descriptions-item label="地铁站" :span="4">
                    <template v-for="m in houseSelect.metroInfo">
                      <span :key="JSON.stringify(m)">
                        {{ m.metroLine + ' ' + m.subwayStation }}
                      </span>
                    </template>
                  </a-descriptions-item>
                </a-descriptions>
                <a-descriptions title="" :column="4">
                  <a-descriptions-item label="小学" :span="4">
                    <template v-for="s in houseSelect.schoolDistrictInfo">
                      <span :key="JSON.stringify(s)" v-if="s.schoolType == '小学'">
                        {{ s.schoolName }}
                      </span>
                    </template>
                  </a-descriptions-item>
                  <a-descriptions-item label="中学" :span="4">
                    <template v-for="s in houseSelect.schoolDistrictInfo">
                      <span :key="JSON.stringify(s)" v-if="s.schoolType == '中学'">
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
      <a-layout-content>
        <div class="house-type">
          <a-tabs default-active-key="1">
            <a-tab-pane key="1" tab="户型分析">
              <div class="type-select">
                <div
                  v-for="(h, i) of houseTypeOptions"
                  :class="h.active ? 'active' : null"
                  :key="i + h.label"
                  class="type-list"
                >
                  <span @click="triggerhouseType(h)">{{ h.label + '(' + h.num + ')' }}</span>
                </div>
                <div :style="{ float: 'right' }">
                  <a-button icon="edit" size="small" @click="showHouseType">
                    编辑
                  </a-button>
                  <a-button icon="plus" size="small" style="margin-left: 10px" @click="showHouseType">
                    新建
                  </a-button>
                </div>
              </div>
              <a-layout
                :style="{
                  background: '#ffffff',
                  height: '200px',
                  padding: '10px 0',
                  'border-bottom': 'solid 1px rgba(0, 0, 0, 0.06)'
                }"
                class="house-type-item"
                v-for="house of houseTypeList"
                :key="house.unitTypeName"
              >
                <a-layout-sider :style="{ background: '#ffffff', padding: 0, overflow: 'hidden' }" width="200">
                  <img :src="`/house/${house.id % 10}.webp`" />
                </a-layout-sider>
                <a-layout-content :style="{ background: '#ffffff', 'padding-left': '20px' }">
                  <a-layout
                    :style="{ background: '#ffffff', height: '100%', 'reviewContent-align': 'left', width: '300px' }"
                  >
                    <a-layout-header
                      :style="{
                        background: '#ffffff',
                        padding: 0,
                        color: 'rgba(0, 0, 0, 0.85)',
                        'font-size': '20px',
                        height: '24px',
                        'line-height': '36px',
                        cursor: 'pointer',
                        marginBottom: '24px'
                      }"
                    >
                      {{
                        `${house.room}室${house.hall ? house.hall + '厅' : ''}${
                          house.kitchen ? house.kitchen + '厨' : ''
                        }${house.toilet ? house.toilet + '卫  ' : '  '}建面${house.acreage}m²`
                      }}
                      <a-tag color="green" size="sm">在售</a-tag>
                    </a-layout-header>
                    <a-layout-content
                      :style="{
                        background: '#ffffff',
                        padding: 0,
                        display: 'flex',
                        'justify-content': 'center',
                        'algin-item': 'flex-end'
                      }"
                    >
                      <a-descriptions title="" :column="4">
                        <a-descriptions-item label="朝向" :span="2">
                          {{ house.towards }}
                        </a-descriptions-item>
                        <a-descriptions-item label="类型" :span="2">
                          {{ house.typesOfHouse }}
                        </a-descriptions-item>
                        <a-descriptions-item label="户型存量" :span="4">
                          {{ house.unitInventory }}
                        </a-descriptions-item>
                        <a-descriptions-item label="户型分析" :span="4">
                          {{ house.analysis }}
                        </a-descriptions-item>
                      </a-descriptions>
                    </a-layout-content>
                  </a-layout>
                </a-layout-content>
                <a-layout-sider :style="{ background: '#ffffff', padding: 0 }" width="200">
                  <a-layout :style="{ background: '#ffffff', height: '100%', 'reviewContent-align': 'center' }">
                    <a-layout-header
                      :style="{ background: '#ffffff', padding: 0, color: '#B71C2B', 'font-size': '16px' }"
                      width="200"
                    >
                      总价约<span style="font-size: 24px; font-weight: bold">{{ house.referenceTotalPrice }}万元</span>
                    </a-layout-header>
                    <a-layout-content
                      :style="{
                        background: '#ffffff',
                        padding: 0,
                        display: 'flex',
                        'justify-content': 'center',
                        'align-items': 'flex-end'
                      }"
                    >
                      <a-button>了解户型报价</a-button>
                    </a-layout-content>
                  </a-layout>
                </a-layout-sider>
              </a-layout>
            </a-tab-pane>
            <a-tab-pane key="2" tab="看房日记">
              <div class="house-diary">
                <div :style="{ float: 'right' }">
                  <a-button icon="edit" size="small" @click="houseDiaryVisible = true">
                    编辑
                  </a-button>
                  <a-button icon="plus" size="small" style="margin-left: 10px" @click="houseDiaryVisible = true">
                    新建
                  </a-button>
                </div>
                <a-tabs default-active-key="1">
                  <a-tab-pane key="1" tab="楼盘点评">
                    <a-layout>
                      <a-layout-header :style="{ height: '30px', padding: 0, lineHeight: '30px' }">
                        <!-- <div class="diary-option diary-all">
                          <span
                            size="small"
                            @click="selectAll()"
                            :class="diarySelectedAll ? 'active' : null"
                          >全部</span
                          >
                        </div>
                        <div v-for="y of diaryTypeOptions" :key="JSON.stringify(y)" class="diary-option">
                          <span :class="y.active ? 'active' : null" @click="triggerDiaryType(y)">{{
                            y.label + '(' + y.count + ')'
                          }}</span>
                        </div>
                         -->
                      </a-layout-header>
                      <a-layout-content>
                        <div class="diary-list">
                          <div
                            class="diary-list-item"
                            v-for="diary of diaryList"
                            :key="diary.userName"
                            :class="diary.open ? 'open' : 'close'"
                          >
                            <a-layout :style="{ height: '100%' }">
                              <a-layout-sider :style="{ background: '#fff' }" width="80">
                                <img :src="diary.userIcon" />
                              </a-layout-sider>
                              <a-layout :style="{ background: '#ffffff', padding: '0 5px' }">
                                <a-layout-header
                                  :style="{
                                    background: '#ffffff',
                                    padding: 0,
                                    color: 'rgba(0, 0, 0, 0.85)',
                                    'font-size': '16px',
                                    height: '40px',
                                    'line-height': '40px',
                                    cursor: 'pointer',
                                    'font-weight': 700
                                  }"
                                >{{ diary.userName }}
                                  <span :style="{ 'font-size': '14px', color: '#8C8C8C', 'font-weight': 'normal' }">{{
                                    diary.viewingTime
                                  }}</span></a-layout-header
                                  >
                                <a-layout-content :style="{ background: '#ffffff', overflow: 'hidden', color: 'rgba(0, 0, 0, 0.65)' }">
                                  <pre>{{ diary.reviewContent }}</pre>
                                </a-layout-content>
                                <!-- <a-layout-footer :style="{ background: '#ffffff', padding: '0' }">
                                  {{ diary.viewingTime }}
                                  <span style="float: right;cursor: pointer;" @click="triggerOpenState(diary)">
                                    {{ diary.open ? '收起全文' : '展开全文' }}
                                  </span>
                                </a-layout-footer> -->
                              </a-layout>
                            </a-layout>
                          </div>
                        </div>
                      </a-layout-content>
                    </a-layout>
                  </a-tab-pane>
                  <a-tab-pane key="2" tab="楼盘问问">
                    <div class="qa-list">
                      <div class="qa-item" v-for="qa of qaList" :key="qa.id">
                        <a-layout>
                          <a-layout :style="{ background: '#ffffff', padding: '0 5px' }">
                            <a-layout-header
                              :style="{
                                background: '#ffffff',
                                padding: 0,
                                color: 'rgba(0, 0, 0, 0.85)',
                                'font-size': '16px',
                                height: '40px',
                                'line-height': '40px',
                                cursor: 'pointer',
                                'font-weight': 700
                              }"
                            >
                              <span class="q-icon">Q</span>  {{ qa.diaryQuestion }}
                              <!-- <span :style="{ 'font-size': '14px', color: '#8C8C8C', 'font-weight': 'normal'  }">{{ qa.datetime }}</span> -->
                            </a-layout-header>
                            <a-layout-content>
                              <span class="a-icon">A</span><pre> {{ qa.diaryAnswer }}</pre>
                            </a-layout-content>
                          </a-layout>
                          <a-layout-sider :style="{ background: '#fff', 'text-align': 'center' }" width="90">
                            <img :src="qa.userIcon" />
                            <p>{{ qa.userName }}</p>
                          </a-layout-sider>
                        </a-layout>
                      </div>
                    </div>
                  </a-tab-pane>
                </a-tabs>
              </div>
            </a-tab-pane>
          </a-tabs>
        </div>
      </a-layout-content>
    </a-layout>
    <a-drawer :visible="detailFlag > 0" width="80vw" @close="closeDetail">
      <house-edit :houseSelect="houseSelect" :toCreate="detailFlag === 2" ref="houseeditref"></house-edit>
    </a-drawer>
    <a-modal :visible="houseTypeVisible" title="户型分析" :footer="null" @cancel="houseTypeOK" width="600px">
      <house-type-edit :houseSelect="houseSelect" @houseTypeOK="houseTypeOK" ref="housetypeeditref"></house-type-edit>
    </a-modal>
    <a-modal
      :visible="houseDiaryVisible"
      title="看房日记"
      @ok="handleOk('housediary')"
      @cancel="houseDiaryVisible = false"
    >
      <house-diary :houseSelect="houseSelect" ref="housediaryref"></house-diary>
    </a-modal>
  </div>
</template>

<script>
import { AutoComplete } from 'ant-design-vue'
import HouseEdit from './HouseEdit.vue'
import HouseTypeEdit from './HouseTypeEdit'
import HouseDiary from './HouseDiary'
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
import { photoQuery, queryAnalysis, getSeveralBedroomsInfo, queryHouseDiary, queryHouseQuestion } from '@/api/manage'
export default {
  name: 'HouseOverview',
  components: {
    AutoComplete,
    HouseEdit,
    HouseTypeEdit,
    HouseDiary
  },
  computed: {},
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
      houseTypeVisible: false,
      houseDiaryVisible: false,
      albumList: [
        // { title: '1sasd', url: '/house/6.webp', active: true },
        // { title: 'zxkhx', url: '/house/2.webp', active: false },
        // { title: 'sdjds', url: '/house/4.webp', active: false },
        // { title: 'sdjds', url: '/house/4.webp', active: false },
        // { title: '4sdsa', url: '/house/1.webp', active: false }
      ],
      pictureList: [
        // { title: '1sasd', url: '/house/6.webp' },
        // { title: 'zxkhx', url: '/house/2.webp' },
        // { title: 'sdjds', url: '/house/4.webp' },
        // { title: 'sdjds', url: '/house/4.webp' },
        // { title: '4sdsa', url: '/house/1.webp' }
      ],
      scroolPosition: 0,
      diaryTypeOptions: [
        {
          label: '住房舒适度',
          active: false,
          count: 1,
          diaryList: []
        },
        {
          label: '周边医院',
          active: false,
          count: 1
        },
        {
          label: '交通出行',
          active: false,
          count: 3
        },
        {
          label: '楼盘优点',
          active: false,
          count: 2
        },
        {
          label: '商业设施',
          active: false,
          count: 1
        }
      ],
      houseTypeOptions: [
        {
          label: '全部户型',
          active: false,
          num: 5,
          severalBedrooms: '0',
          houseTypeList: []
        },
        {
          label: '二居',
          active: false,
          num: 1,
          severalBedrooms: '2'
        },
        {
          label: '三居',
          active: false,
          num: 3,
          severalBedrooms: '3'
        },
        {
          label: '四居',
          active: false,
          num: 3,
          severalBedrooms: '4'
        }
      ],
      diarySelectedAll: true,
      diaryList: [],
      qaList: [],
      houseTypeList: []
    }
  },
  created () {},
  beforeMount () {
    console.log(this.$route.params)
    this.houseSelect = JSON.parse(this.$route.query.houseSelect)
    this.queryPhotos()
    this.queryAllAnalysis()
    this.queryAllHouseDiary()
    this.queryQuestion()
  },
  methods: {
    closeDetail () {
      this.detailFlag = 0
    },
    showDetail () {
      this.detailFlag = 1
      this.$refs.houseeditref && this.$refs.houseeditref.showDetail()
    },
    queryPhotos () {
      const photosOption = ['', '效果图', '环境规划图', '楼盘实景图', '周边实景图']
      photoQuery(this.houseSelect.id).then(photos => {
        const photosList = []
        for (const photo of photos) {
          if (!photosList[photo.type]) {
            photosList[photo.type] = []
          }
          photosList[photo.type].push({ uid: photo.id, title: '', url: '/media/' + photo.url, type: photo.type })
        }
        if (photosList.length) {
          for (const photo of photosList) {
            if (photo) {
              this.albumList.push({
                title: `${photosOption[photo[0].type]} (${photo.length})`,
                photos: photo,
                url: photo[0].url,
                active: photo[0].type === '1',
                index: photo[0].type
              })
            }
          }
          this.pictureList = photosList[1]
        } else {
          this.albumList = []
          this.pictureList = []
        }
      })
    },
    queryQuestion () {
      queryHouseQuestion(this.houseSelect.id).then(e => {
        console.log(e)
        this.qaList = e
      })
    },
    flip (opt) {
      switch (opt) {
        case 'prev':
          this.slideList(104)
          break
        case 'next':
          this.slideList(-104)
          break
        default:
          break
      }
    },
    selectAlbum (item) {
      this.albumList.forEach(i => {
        i.active = false
      })
      item.active = true
      this.pictureList = item.photos
    },
    slideList (space) {
      const scroll = document.querySelector('.house-album-list  ul')
      if (this.albumList.length < 5) {
        return
      }
      let position = this.scroolPosition
      position += space
      if (position >= 0) {
        position = 0
      } else if (position < -this.albumList.length * 104 + 448) {
        position = -this.albumList.length * 104 + 448
      }
      if (scroll) {
        scroll.style.transform = `translateX(${position}px)`
      }
      this.scroolPosition = position
    },
    queryAllAnalysis () {
      const bedroomsOption = { '1': '一居室', '2': '二居室', '3': '三居室', '4': '四居室', '5': '四居以上' }
      getSeveralBedroomsInfo(this.houseSelect.id).then(bedroomsInfo => {
        if (bedroomsInfo) {
          this.houseTypeOptions = bedroomsInfo
          let num = 0
          this.houseTypeList = []
          this.houseTypeOptions.forEach(async b => {
            b.active = false
            b.label = bedroomsOption[b.severalBedrooms]
            num = num + b.num
            b.houseTypeList = await queryAnalysis(this.houseSelect.id, b.severalBedrooms)
            if (b.houseTypeList?.length) {
              this.houseTypeList.push(...b.houseTypeList)
            }
          })
          this.houseTypeOptions.unshift({
            label: '全部户型',
            active: true,
            num: num,
            severalBedrooms: '0'
          })
        }
      })
    },
    queryAnalysisByBedrooms (bedrooms) {
      queryAnalysis(this.houseSelect.id, bedrooms).then(houseTypeList => {
        if (houseTypeList?.length) {
          this.houseTypeList = houseTypeList
        }
      })
    },
    queryAllHouseDiary () {
      this.diaryTypeOptions = []
      queryHouseDiary(this.houseSelect.id).then(houseDiary => {
        this.diaryList = houseDiary
        houseDiary.forEach(h => {
          const a = this.diaryTypeOptions.filter(d => d.label === h.classificationLabel)
          if (a.length) {
            a[0].count++
            a[0].diaryList.push(Object.assign({ open: false }, h))
          } else {
            this.diaryTypeOptions.push({
              label: h.classificationLabel,
              active: false,
              count: 1,
              diaryList: [Object.assign({ open: false }, h)]
            })
          }
        })
      })
    },
    queryHouseDiaryByLabel (label) {
      queryHouseDiary(this.houseSelect.id, label).then(houseDiary => {
        if (houseDiary?.length) {
          this.diaryList = houseDiary
        }
      })
    },
    triggerDiaryType (diary) {
      this.diarySelectedAll = false
      this.diaryTypeOptions.forEach(y => {
        if (y.label === diary.label) {
          y.active = !y.active
        }
      })
      this.diaryList = diary.diaryList
    },
    selectAll () {
      this.diarySelectedAll = true
      this.diaryTypeOptions.forEach(y => {
        y.active = false
      })
    },
    triggerOpenState (diary) {
      this.diaryList.forEach(y => {
        if (y.userName === diary.userName) {
          y.open = !y.open
        }
      })
    },
    triggerhouseType (house) {
      if (this.houseTypeOptions[0].active) {
        this.houseTypeOptions[0].active = false
        this.houseTypeOptions.forEach(h => {
          if (h.label === house.label) {
            h.active = !h.active
          }
        })
      } else if (house.label === this.houseTypeOptions[0].label) {
        this.houseTypeOptions.forEach(h => {
          h.active = false
        })
        this.houseTypeOptions[0].active = true
        this.queryAllAnalysis()
        return
      } else {
        this.houseTypeOptions.forEach(h => {
          h.active = false
          if (h.label === house.label) {
            h.active = !h.active
          }
        })
      }
      this.queryAnalysisByBedrooms(house.severalBedrooms)
    },
    houseTypeOK () {
      this.houseTypeVisible = false
      // this.$refs.housetypeeditref && this.$refs.housetypeeditref.houseTypeOK()
    },
    showHouseType () {
      this.houseTypeVisible = true
    },
    handleOk (type) {
      switch (type) {
        case 'housediary':
          this.$refs.housediaryref && this.$refs.housediaryref.save()
          this.houseDiaryVisible = false
          break
        default:
          break
      }
    }
  }
}
</script>
<style scoped>
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
.album-list-item.active span {
  background: rgba(183, 28, 43, 0.8);
}
.album-list-item img {
  width: 100%;
  height: 100%;
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
  width: 40px;
  background: rgba(0, 0, 0, 0.6);
  line-height: 24px;
  font-weight: 400;
  color: #ffffff;
  font-size: 12px;
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
.house-type {
  overflow: hidden;
  padding: 24px;
}
.house-type >>> .ant-tabs-nav-wrap {
  background: #f5f5f5;
}
/* .house-type > .ant-tabs-card > .ant-tabs-content {
  height: 120px;
  margin-top: -16px;
}

.house-type > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
  background: #fff;
  padding: 16px;
}

.house-type > .ant-tabs-card > .ant-tabs-bar {
  border-color: #fff;
}

.house-type > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
  border-color: transparent;
  background: transparent;
}

.house-type > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
  border-color: #fff;
  background: #fff;
} */
.house-diary {
  overflow: hidden;
  padding: 0;
}
.house-diary >>> .ant-tabs-bar {
  border: unset;
  margin: 0 0 10px 0;
}
.house-diary >>> .ant-tabs-nav-wrap {
  background: #ffffff;
}
.house-diary >>> .ant-tabs-ink-bar {
  background-color: transparent;
}
.house-diary >>> .ant-tabs-nav .ant-tabs-tab {
  padding: 0px 16px;
}
.diary-option {
  width: 127px;
  float: left;
  padding-right: 10px;
}
.diary-option.diary-all {
  width: 80px;
}
.diary-option span {
  color: #262626;
  cursor: pointer;
  height: 22px;
  line-height: 22px;
  text-align: center;
  border-radius: 2px;
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
}
.diary-option span.active {
  color: #b71c2b;
  border: 1px solid #b71c2b;
  background: rgba(183, 28, 43, 0.08);
}
img {
  width: 100%;
}
.house-type-item >>> .ant-descriptions-item-label {
  line-height: 2.5;
}
.diary-list-item {
  min-height: 100px;
}
.diary-list-item >>> .ant-layout-footer {
  display: block;
}
.diary-list-item.close {
  height: 147px;
}
.type-select {
  width: 100%;
  height: 30px;
}
.type-select .type-list {
  width: 80px;
  float: left;
  cursor: pointer;
  text-align: center;
}
.type-select .type-list.active {
  color: #b71c2b;
}
.q-icon {
    color: #FFF;
    background: #FE9F4C;
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 50%;
}
.a-icon {
    color: #FFF;
    background: #59C1FF;
    display: block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 50%;
    float: left;
}
</style>
