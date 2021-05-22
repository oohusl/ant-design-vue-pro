<template>
  <div class="house-overview">
    <a-layout :style="{ background: '#ffffff', padding: '0', height: '100%', padding: '0 128px' }">
      <a-layout-header :style="{ background: '#ffffff', padding: '0', height: '100%' }">
        <a-layout :style="{ background: '#ffffff', padding: '0', height: '100%' }">
          <a-layout-header
            :style="{
              padding: '0',
              height: '60px',
              'margin-top': '10px',
              width: '100%',
              color: '#000000',
              'font-size': '24px'
            }"
          >
            {{ houseSelect.communityName }}
          </a-layout-header>
          <a-layout-content :style="{ width: '100%' }">
            <a-layout :style="{ padding: '0', background: '#ffffff' }">
              <img-viewer :houseId="houseSelect.id" :refresh="imgViewerReflesh"></img-viewer>
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
                    {{
                      houseTypeOptions
                        .filter(e => {
                          return e.room > 0 && e.count > 0
                        })
                        .map(e => {
                          return e.label
                        })
                        .join(',')
                    }}
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
                    <a @click="editHouseImage">上传图片</a>
                  </a-descriptions-item>
                  <a-descriptions-item label="" :span="4">
                    <a @click="showDetail">查看小区详情></a>
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
                <template v-for="h in houseTypeOptions">
                  <div
                    v-if="h.count > 0"
                    :class="h.room == roomNumber ? 'active' : null"
                    :key="h.room"
                    class="type-list"
                  >
                    <span @click="houseTypeClick(h.room)">{{ h.label + '(' + h.count + ')' }}</span>
                  </div>
                </template>
                <div style="float:right">
                  <a-button icon="plus" size="small" style="margin-left: 10px" @click="showHouseType"></a-button>
                </div>
              </div>
              <template v-for="house of houseTypeList">
                <a-layout
                  v-if="roomNumber === 0 || (roomNumber > 4 && house.room > 4) || roomNumber == house.room"
                  :key="house.unitTypeName"
                  :style="{
                    background: '#ffffff',
                    height: '200px',
                    padding: '10px 0',
                    'border-bottom': 'solid 1px rgba(0, 0, 0, 0.06)'
                  }"
                  class="house-type-item"
                >
                  <a-layout-sider :style="{ background: '#ffffff', padding: 0, overflow: 'hidden' }" width="200">
                    <img v-if="house.photoUrl" :src="house.photoUrl" @click="previewImage = house.photoUrl" />
                    <img v-else src="~@/assets/second.png" />
                  </a-layout-sider>
                  <a-layout-content :style="{ background: '#ffffff', 'padding-left': '20px' }">
                    <a-layout
                      :style="{ background: '#ffffff', height: '100%', 'reviewContent-align': 'left', width: '380px' }"
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
                        <a-button type="link" icon="edit" size="small" @click="editHouseType(house)" />
                        <a-button type="link" icon="delete" size="small" @click="deleteHouseType(house)" />
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
                          <a-descriptions-item label="层高" :span="2">
                            {{ house.floorHeight }}
                          </a-descriptions-item>
                          <a-descriptions-item label="户型存量" :span="2">
                            {{ house.unitInventory }}
                          </a-descriptions-item>
                          <a-descriptions-item label="梯户比" :span="2">
                            {{ house.ladderRatio }}
                          </a-descriptions-item>
                          <a-descriptions-item label="户型分析" :span="2">
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
                        总价约<span
                          style="font-size: 24px; font-weight: bold"
                        >{{ house.referenceTotalPrice }}万元</span
                        >
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
                        <!-- <a-button>了解户型报价</a-button> -->
                      </a-layout-content>
                    </a-layout>
                  </a-layout-sider>
                </a-layout>
              </template>
            </a-tab-pane>
            <a-tab-pane key="2" tab="楼盘点评">
              <div class="house-diary">
                <div :style="{ float: 'right' }">
                  <a-button icon="plus" size="small" style="margin-left: 10px" @click="editHouseDiary"> </a-button>
                </div>
                <a-layout>
                  <a-layout-header :style="{ height: '30px', padding: 0, lineHeight: '30px' }"> </a-layout-header>
                  <a-layout-content>
                    <div class="diary-list">
                      <div
                        class="diary-list-item"
                        v-for="diary of diaryList"
                        :key="diary.id"
                        :class="diary.open ? 'open' : 'close'"
                      >
                        <a-layout :style="{ height: '100%' }">
                          <a-layout-sider :style="{ background: '#fff' }" width="80">
                            <img :src="diary.userIcon" style="width: 60px; height: 60px" />
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
                              }}</span>
                              <a-button type="link" icon="edit" size="small" @click="editHouseDiary(diary)" />
                              <a-button type="link" icon="delete" size="small" @click="deleteHouseDiary(diary)" />
                            </a-layout-header>
                            <a-layout-content
                              :style="{ background: '#ffffff', overflow: 'hidden', color: 'rgba(0, 0, 0, 0.65)' }"
                            >
                              <pre>{{ diary.reviewContent }}</pre>
                            </a-layout-content>
                          </a-layout>
                        </a-layout>
                      </div>
                    </div>
                  </a-layout-content>
                </a-layout>
              </div>
            </a-tab-pane>
            <a-tab-pane key="3" tab="楼盘问问">
              <div class="house-diary">
                <a-layout>
                  <a-layout-header :style="{ height: '30px', padding: 0, lineHeight: '30px' }">
                    <span :style="{ float: 'right' }">
                      <a-button icon="plus" size="small" @click="editHouseQA"> </a-button>
                    </span>
                  </a-layout-header>
                  <a-layout-content>
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
                              <span class="q-icon">Q</span> {{ qa.diaryQuestion }}
                              <span :style="{ 'font-size': '14px', color: '#8C8C8C', 'font-weight': 'normal' }">{{
                                qa.datetime
                              }}</span>
                              <a-button type="link" icon="edit" size="small" @click="editHouseQA(qa)" />
                              <a-button type="link" icon="delete" size="small" @click="deleteHouseQuestion(qa)" />
                            </a-layout-header>
                            <a-layout-content>
                              <span class="a-icon">A</span>
                              <pre> {{ qa.diaryAnswer }}</pre>
                            </a-layout-content>
                          </a-layout>
                          <a-layout-sider :style="{ background: '#fff', 'text-align': 'center' }" width="90">
                            <img :src="qa.userIcon" style="width: 60px; height: 60px" />
                            <p>{{ qa.userName }}</p>
                          </a-layout-sider>
                        </a-layout>
                      </div>
                    </div>
                  </a-layout-content>
                </a-layout>
              </div>
            </a-tab-pane>
          </a-tabs>
        </div>
      </a-layout-content>
    </a-layout>
    <a-drawer :visible="detailFlag > 0" width="80vw" @close="closeDetail">
      <house-edit :houseSelect="houseSelect" :toCreate="detailFlag === 2" ref="houseeditref"></house-edit>
    </a-drawer>
    <a-modal title="户型分析" :visible="houseTypeVisible" @ok="saveHouseType" @cancel="houseTypeOK" width="600px">
      <house-type-edit :houseAnalysis="houseType" @houseTypeOK="houseTypeOK" ref="housetypeeditref"></house-type-edit>
    </a-modal>
    <a-modal :visible="houseDiaryVisible" title="楼盘点评" @ok="saveHouseDiary" @cancel="houseDiaryVisible = false">
      <house-diary :houseSelect="houseSelect" :diary="diaryEdit" ref="housediaryref"></house-diary>
    </a-modal>
    <a-modal title="楼盘问答" :visible="houseQAVisible" @ok="saveHouseQuestion" @cancel="houseQAVisible = false">
      <HouseQA :houseSelect="houseSelect" :question="questionEdit" ref="houseQARef"></HouseQA>
    </a-modal>
    <a-modal title="楼盘相册" :visible="imageEditVisible" @cancel="imageEditClose" @ok="saveHousePhoto" width="1000px">
      <house-image-edit :houseId="houseSelect.id" ref="housePhotoRef"></house-image-edit>
    </a-modal>
    <a-modal
      title="图片预览"
      :visible="previewImage != null"
      @cancel="previewImage = null"
      :footer="false"
      :zIndex="10000"
    >
      <img style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>

<script>
import { AutoComplete } from 'ant-design-vue'
import ImgViewer from '../components/ImgViewer.vue'
import HouseEdit from './HouseEdit.vue'
import HouseTypeEdit from './HouseTypeEdit'
import HouseDiary from './HouseDiary'
import HouseImageEdit from './HouseImageEdit'
import HouseQA from './HouseQA'
import { EventBus } from '@/event-bus'

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
  getLabel
} from '@/api/data'
import {
  queryAnalysis,
  queryHouseDiary,
  queryHouseQuestion,
  getHouseDetail,
  deleteAnalysis,
  deleteHouseDiary,
  deleteHouseQuestion
} from '@/api/manage'
export default {
  name: 'HouseOverview',
  components: {
    AutoComplete,
    HouseEdit,
    HouseTypeEdit,
    HouseDiary,
    HouseQA,
    HouseImageEdit,
    ImgViewer
  },
  computed: {},
  data () {
    return {
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
      houseQAVisible: false,
      imageEditVisible: false,
      activeIndex: 0,
      diaryTypeOptions: [],
      houseTypeOptions: [],
      roomNumber: 0,
      roomResort: 1,
      diarySelectedAll: true,
      diaryList: [],
      qaList: [],
      houseTypeList: [],
      houseType: {},
      diaryEdit: null,
      questionEdit: null,
      previewImage: null,
      imgViewerReflesh: 0
    }
  },
  created () {
    EventBus.$on('preview', e => {
      this.previewImage = e
    })
  },
  beforeMount () {
    console.log(this.$route.params)
    this.houseSelect = {}
    this.houseSelect.id = this.$route.query.houseId
    this.houseType.communityId = this.houseSelect.id
    this.queryHouse()
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
    queryHouse () {
      getHouseDetail(this.houseSelect.id).then(d => {
        this.houseSelect = d
      })
    },
    queryQuestion () {
      queryHouseQuestion(this.houseSelect.id).then(e => {
        this.qaList = e
      })
    },
    queryAllAnalysis () {
      const bedroomsOption = [
        { label: '全部户型', room: 0, count: 0 },
        { label: '一居室', room: 1, count: 0 },
        { label: '二居室', room: 2, count: 0 },
        { label: '三居室', room: 3, count: 0 },
        { label: '四居室', room: 4, count: 0 },
        { label: '四居室以上', room: 5, count: 0 }
      ]
      queryAnalysis(this.houseSelect.id).then(result => {
        this.houseTypeList = result
        result.forEach(r => {
          ++bedroomsOption[0].count
          const index = r.room > 4 ? 5 : r.room
          if (index <= 0) {
            return
          }
          ++bedroomsOption[index].count
        })
        this.houseTypeOptions = bedroomsOption
        if (bedroomsOption[this.roomNumber].count === 0) {
          this.roomNumber = 0
        }
      })
    },
    houseTypeClick (room) {
      // 同一户型点两次切换排序
      this.roomResort = this.roomResort * (this.roomNumber === room ? -1 : 1)
      this.houseTypeList.sort((a, b) => {
        return this.roomResort * (b.acreage - a.acreage)
      })
      this.roomNumber = room
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
    showHouseType () {
      this.houseType = { communityId: this.houseSelect.id }
      this.houseTypeVisible = true
      this.$nextTick(() => {
        this.$refs.housetypeeditref.refresh()
      })
    },
    editHouseType (house) {
      this.houseType = house
      this.houseTypeVisible = true
      this.$nextTick(() => {
        this.$refs.housetypeeditref.refresh()
      })
    },
    editHouseImage (house) {
      this.imageEditVisible = true
    },
    editHouseDiary (diary) {
      this.houseDiaryVisible = true
      this.diaryEdit = diary
    },
    editHouseQA (quesiton) {
      this.houseQAVisible = true
      this.questionEdit = quesiton
    },
    deleteHouseType (house) {
      const that = this
      this.$confirm({
        content: '确认删除户型信息？',
        onOk () {
          deleteAnalysis(house.id).then(function () {
            that.queryAllAnalysis()
          })
        },
        onCancel () {
          console.log('Cancel')
        }
      })
    },
    deleteHouseDiary (diary) {
      const that = this
      this.$confirm({
        content: '确认删除点评信息？',
        onOk () {
          deleteHouseDiary(diary.id).then(function () {
            that.queryAllHouseDiary()
          })
        },
        onCancel () {
          console.log('Cancel')
        }
      })
    },
    deleteHouseQuestion (question) {
      const that = this
      this.$confirm({
        content: '确认删除问答信息？',
        onOk () {
          deleteHouseQuestion(question.id).then(function () {
            that.queryQuestion()
          })
        }
      })
    },
    triggerhouseType (house) {
      // this.queryAnalysisByBedrooms(house.severalBedrooms)
    },
    houseTypeOK () {
      this.houseTypeVisible = false
      // this.$refs.housetypeeditref && this.$refs.housetypeeditref.houseTypeOK()
    },
    imageEditClose () {
      this.imageEditVisible = false
      this.$refs.housePhotoRef.refresh()
      ++this.imgViewerReflesh
    },
    saveHousePhoto () {
      this.$refs.housePhotoRef.save().then(e => {
        this.imageEditVisible = false
        ++this.imgViewerReflesh
      })
    },
    saveHouseType () {
      this.$refs.housetypeeditref.saveHouseType().then(e => {
        this.houseTypeVisible = false
        this.queryAllAnalysis()
      })
    },
    saveHouseDiary () {
      this.$refs.housediaryref.save().then(e => {
        this.houseDiaryVisible = false
        this.queryAllHouseDiary()
      })
    },
    saveHouseQuestion () {
      this.$refs.houseQARef.save().then(e => {
        this.houseQAVisible = false
        this.queryQuestion()
      })
    }
  }
}
</script>
<style scoped>
.house-type {
  overflow: hidden;
  padding: 24px 0;
}
.house-type >>> .ant-tabs-nav-wrap {
  background: #f5f5f5;
}
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
  width: 100px;
  float: left;
  cursor: pointer;
  text-align: center;
}
.type-select .type-list.active {
  color: #b71c2b;
}
.q-icon {
  color: #fff;
  background: #fe9f4c;
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
}
.a-icon {
  color: #fff;
  background: #59c1ff;
  display: block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  float: left;
}
</style>
