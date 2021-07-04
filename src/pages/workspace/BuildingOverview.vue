<template>
  <div>
    <div>
      <button @click="printpdf">print</button>
    </div>
    <div class="building-overview" ref="print">
      <a-layout :style="{ background: 'transparent', padding: '0', height: '100%', padding: '0' }">
        <a-layout-header :style="{ padding: '22px 30px 22px', color: 'white', height: '255px' }" class="print-header">
          <a-layout :style="{ background: 'transparent', padding: '0' }">
            <a-layout-sider :style="{ background: 'transparent', padding: '0' }" width="400">
              <a-layout :style="{ background: 'transparent', padding: '0' }">
                <a-layout-header :style="{ background: 'transparent', padding: '0', height: '32px' }">
                  <div class="community-header">
                    <div class="community-name">{{ houseSelect.communityName }}</div>
                  </div>
                </a-layout-header>
                <a-layout-content class="building-params">
                  <a-descriptions title="" :column="4">
                    <a-descriptions-item label="楼栋" :span="2">
                      {{ houseSelect.buildingNumber ? houseSelect.buildingNumber + '栋' : '' }}
                    </a-descriptions-item>
                    <a-descriptions-item label="绿化" :span="2">
                      {{ houseSelect.greeningRate ? houseSelect.greeningRate + '%' : '' }}
                    </a-descriptions-item>
                    <a-descriptions-item label="年代" :span="2">
                      {{ houseSelect.constructionAge ? houseSelect.constructionAge + '年' : '' }}
                    </a-descriptions-item>
                    <a-descriptions-item label="停车" :span="2">
                      {{ houseSelect.parkingSpacesNumber }}
                    </a-descriptions-item>
                    <a-descriptions-item label="户数" :span="2">
                      {{ houseSelect.householdsNumber ? houseSelect.householdsNumber + '户' : '' }}
                    </a-descriptions-item>
                    <a-descriptions-item label="物业费" :span="2">
                      {{ houseSelect.propertyCosts ? houseSelect.propertyCosts + '元/m²' : '' }}
                    </a-descriptions-item>
                    <a-descriptions-item label="物业" :span="4">
                      {{ houseSelect.propertyCompany }}
                    </a-descriptions-item>
                    <a-descriptions-item label="开发" :span="4">
                      {{ houseSelect.developer }}
                    </a-descriptions-item>
                  </a-descriptions>
                </a-layout-content>
              </a-layout>
            </a-layout-sider>
            <a-layout-content :style="{ background: 'transparent', padding: '0' }">
              <a-layout :style="{ background: 'transparent', padding: '0 5px 0 34px', lineHeight: '1.4' }">
                <a-layout :style="{ background: 'transparent', padding: '0' }">
                  <a-layout-sider :style="{ background: 'transparent', padding: '0',position: 'relative'}" width="345">
                    <div class="price7label">近7日挂牌行情</div>
                    <div class="price7">87864元/㎡</div>
                    <div class="price7-bg"></div>
                    <div class="price30label">近30日同比</div>
                    <div class="price30">
                      <p>挂牌价 <span class="tag-less">减少</span></p>
                      <p>挂牌量 <span class="tag-add">增加</span></p>
                    </div>
                  </a-layout-sider>
                  <a-layout-content :style="{ background: 'transparent', padding: '0', position: 'relative'}">
                    <div class="price60label">
                      <span>未来60天成交价走势</span>
                      <div class="price60-bg"></div>
                      <span class="price60">上涨</span>
                    </div>
                  </a-layout-content>
                </a-layout>
                <a-layout-footer :style="{ background: 'transparent', padding: '0', display: 'block'}">
                  <div class="print-sale">
                    <div class="sent-label">目前在售同户型房源 <span>1套</span></div>
                    <div class="sent-label">参考租金<span>4000元/月</span></div>
                    <div class="sent-label">房型<span>两室一厅</span></div>
                    <div class="sent-label">总售价<span>1000万</span></div>
                  </div>
                </a-layout-footer>
              </a-layout>
            </a-layout-content>
          </a-layout>
        </a-layout-header>
        <a-layout-content :style="{ background: 'transparent', padding: '0 24px'}">
          <div style="display:flex;height:100%">
            <div style="flex:1">
              <a-layout :style="{ background: 'transparent', padding: '0'}">
                <a-layout-header :style="{ background: 'transparent', padding: '10px 0 0 0', height: '200px'}">
                  <a-layout style="background:white">
                    <a-layout-header style="height: 20px;line-height: 20px;padding: 0;font-size: 16px;">
                      <div class="lift-title"> 周边配置</div>
                    </a-layout-header>
                    <a-layout-content>
                      <div class="live-around">
                        <div class="live-item traffic">
                          <div class="live-label">交通</div>
                          <div class="live-content">
                            <template v-for="(metro, v) of houseSelect.metroInfo.slice(0,2)">
                              <div :key="v">
                                <span class="label">{{metro.distance+'米'}}</span>
                                {{ metro.metroLine + metro.subwayStation }}
                              </div>
                            </template>
                          </div>
                        </div>
                        <div class="live-item hospital">
                          <div class="live-label">医疗</div>
                          <div class="live-content">
                            <template v-for="(hospital, v) of hospitals">
                              <div :key="v">
                                <span class="label">{{hospital.distance+'米'}}</span>
                                {{ hospital.name }}
                              </div>
                            </template>
                          </div>
                        </div>
                        <div class="live-item life">
                          <div class="live-label">生活</div>
                          <div class="live-content">
                            <template v-for="(sm, v) of supermakets">
                              <div :key="v">
                                <span class="label">{{sm.distance+'米'}}</span>
                                {{ sm.name }}
                              </div>
                            </template>
                          </div>
                        </div>
                        <div class="live-item tree">
                          <div class="live-label">休闲</div>
                          <div class="live-content">
                            <template v-for="(t, v) of trees">
                              <div :key="v">
                                <span class="label">{{t.distance+'米'}}</span>
                                {{ t.name}}
                              </div>
                            </template>
                          </div>
                        </div>
                        <div class="live-item school">
                          <div class="live-label">教育</div>
                          <div class="live-content">
                            <div>
                              <span class="label">小初高</span>
                              {{ schoolText() }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </a-layout-content>
                  </a-layout>
                </a-layout-header>
                <a-layout-content :style="{ background: 'transparent', padding: '0'}">
                  <div class="type-header">
                    <div class="lift-title"> 户型图</div>
                    <img class="type-image" src="~@/assets/tmp/fangxing.png" alt="">
                  </div>
                </a-layout-content>
              </a-layout>
            </div>
            <div style="flex:1">
              <div class="deal-rate">
                <img class="type-image" src="~@/assets/tmp/chengjiao1.png" alt="">
              </div>
              <div class="deal-volume">
                <img class="type-image" src="~@/assets/tmp/chengjiaol.png" alt="">
              </div>
              <div class="deal-price">
                <img class="type-image" src="~@/assets/tmp/chengjiaojia.png" alt="">
              </div>
            </div>
          </div>
        </a-layout-content>
      </a-layout>
    </div>
  </div>
</template>

<script>

import {
  getHouseDetail
} from '@/api/manage'
export default {
  name: 'BuildingOverview',
  components: {},
  computed: {},
  data () {
    return {
      houseSelect: {},
      hospitals: [{
        name: '上海市黄浦区中西医结合医院',
        distance: 200
      }],
      supermakets: [{
        name: 'M2香港名都',
        distance: 200
      }],
      trees: [{
        name: '花神广场花神广场',
        distance: 200
      }]
    }
  },
  beforeMount () {
    console.log(this.$route.params)
    this.houseSelect.id = this.$route.query.houseId
    this.queryHouse()
  },
  methods: {
    queryHouse () {
      getHouseDetail(this.houseSelect.id).then(d => {
        this.houseSelect = d
        console.log(d)
      })
    },
    printpdf () {
      this.$print(this.$refs.print)
    },
    schoolText () {
      let text = ''
      this.houseSelect.schoolDistrictInfo && this.houseSelect.schoolDistrictInfo.forEach(school => {
        if (text) {
          text = text + '、'
        }
        text = text + school.schoolName + school.schoolType
      })
      return text
    }
  }
}
</script>
<style scoped lang='less'>
.building-overview {
  padding:0;
  background: #FFFFFF;
  height: 792px;
  width: 1123px;;
}
.print-header{
  background-image: url(~@/assets/print-bg.png) !important;
  background-size: cover !important;
}
.community-header {
  line-height: 32px;
  display: flex;
}
.community-name {
  flex: 1;
  font-size: 30px;
  font-weight: 600;
}
.price7label{
  font-size: 16px;
  line-height: 20px;
  background: url(~@/assets/icons/icon_print_7.png) no-repeat;
  background-position: 0 50%;
  padding-left: 20px;
}
.price7-bg{
    width: 160px;
    line-height: 32px;
    border-width: 32px 32px 0px 0px;
    border-style: solid  solid none none;
    border-color: #fff transparent  transparent transparent;
        margin: 10px 0 20px;
  }
  .price7{
    font-weight: 600;
    color: #030091;
    font-size: 19px;
    top: 30px;
    position: absolute;
    line-height: 32px;
    left: 10px;
  }
  .price60label{
  position: absolute;bottom: 0px;font-size: 16px;line-height: 24px;right: 0;
  }
  .price60-bg{
      width: 75px;
      line-height: 24px;
      border-width: 0 0 24px 24px;
      border-style: none none solid  solid;
      border-color:  transparent  transparent #fff;
      display: inline-block;
      vertical-align: bottom;
    }
    .price60{
      position: absolute;display: inline-block;width: 60px;color: rgb(0,37,200);font-weight: 600;text-align: center;font-size: 18px;right: 0;
    }
.price30label{
    font-size: 16px;
    line-height: 20px;
    background: url(~@/assets/icons/icon_print_7.png) no-repeat;
    background-position: 0 50%;
    padding-left: 20px;
}
.price30{
    line-height: 20px;
    font-size: 16px;
    display: flex;
    margin:10px 0 20px;
    p{
      display: inline-block;
      flex: 1;
      margin: 0;
    }
    span{
      display: inline-block;
      background-repeat: no-repeat;
       background-position: 0 50%;
       padding-left: 10px;
       margin-left: 10px;
      &.tag-less{
        background-image: url(~@/assets/icons/icon_print_less.png);
        color: #4BD2FD;
      }
      &.tag-add{
        background-image: url(~@/assets/icons/icon_print_add.png);
        color: #FF6A19;
      }
      &.tag-nochange{
        background-image: url(~@/assets/icons/icon_print_add.png);
        color: #9CEE45;
      }
    }
}
.print-sale{
    width: 100%;
    height: 37px;
    display: flex;
    line-height: 37px;
    background: #fff;
    border-radius: 3px;
    margin-top: 20px;
    padding: 0 5px;
}
.sent-label{
  color: rgb(0,37,200);
  font-size: 16px;
  flex: auto;
  span{
    font-weight: bold;
    margin-left: 12px;
  }
}
.live-around{
  line-height: 1.4;
  font-size: 12px;
}
.live-item{
  display: flex;
  height: 32px;
  padding: 8px 0;
}
.live-label{
  width: 76px;
  color: #030091;
  display: inline-block;
  background-repeat: no-repeat;
  background-position: 0 50%;
  padding-left: 16px;
  margin-left: 10px;
}
.live-content {
  color: #000;
  display: flex;
  flex: 1;
  font-size: 13px;
  > div{
    margin-right: 5px;
  }
  .label{
    width: 40px;
    border-radius: 1px;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 11px;
  }
}
.traffic {
  .label{
    background: #4A83FE;
  }
  .live-label {
    background-image: url(~@/assets/icons/icon_print_car.png);
  }
}
.hospital {
  .label{
    background: #FB5A3B;
  }
  .live-label {
    background-image: url(~@/assets/icons/icon_print_hospital.png);
  }
}
.life {
  .label{
    background: #FFA92C;
  }
  .live-label {
    background-image: url(~@/assets/icons/icon_print_shopping.png);
  }
}
.tree {
  .label{
    background: #50BD20;
  }
  .live-label {
    background-image: url(~@/assets/icons/icon_print_tree.png);
  }
}
.school {
  .label{
    background: #41D6D7;
  }
  .live-label {
    background-image: url(~@/assets/icons/icon_print_school.png);
  }
}
.lift-title {
  font-size: 16px;
  border-left: 3px solid #030091;
  padding-left: 10px;
  color: #030091;
}
.type-header{
  padding: 0px;
}
.type-image{
  width: 100%
}
.deal-rate{
      margin-top: 26px;
    width: 475px;
    margin-left: 50px;
}
.deal-volume {
      margin-top: 10px;
    width: 475px;
    margin-left: 50px;
}
.deal-price {
      margin-top: 80px;
    width: 475px;
    margin-left: 50px;
}
</style>
