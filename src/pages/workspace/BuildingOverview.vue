<template>
  <div class="building-overview">
    <a-layout :style="{ background: 'transparent', padding: '0', height: '100%', padding: '0 24px' }">
      <a-layout-header :style="{ background: 'transparent', padding: '0', height: '174px', color: 'white' }">
        <a-layout :style="{ background: 'transparent', padding: '0', height: '174px' }">
          <a-layout-sider :style="{ background: 'transparent', padding: '0 10px', height: '174px' }" width=300>
            <a-layout :style="{ background: 'transparent', padding: '0', height: '174px' }">
              <a-layout-header :style="{ background: 'transparent', padding: '0', height: '48px' }">
                <div class="community-header">
                  <div class="community-name">{{ houseSelect.communityName }}</div>
                  <div class="community-price">
                    <span>5月份参考均价</span>
                    <span style="font-size:18px;font-weight: bold;text-align: center;">￥{{ houseSelect.averageLlistedPrice == null ? '--' : houseSelect.averageLlistedPrice.toLocaleString() }}元/m²</span>
                  </div>
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
          <a-layout-content :style="{ background: 'transparent', padding: '0', height: '174px' }">
            <a-layout :style="{ background: 'transparent', padding: '0 5px 0 34px', height: '174px', lineHeight: '1.4' }">
              <a-layout :style="{ background: 'transparent', padding: '0' }">
                <a-layout-sider :style="{ background: 'transparent', padding: '0'}" width=345>
                  <div class="price7label">近7日挂牌行情</div>
                  <div class="price7">87864元/㎡</div>
                  <div class="price30label">近30日同比</div>
                  <div class="price30">
                    <span>挂牌价持平</span>
                    <span>挂牌量持平</span>
                  </div>
                </a-layout-sider>
                <a-layout-content :style="{ background: 'transparent', padding: '0', position: 'relative'}">
                  <div style="position: absolute;bottom: 0px;font-size: 18px;line-height: 44px;margin-left: 92px;">未来60天成交价走势<span style="margin-left: 20px;display: inline-block;width: 89px;color: rgb(0,37,200);font-weight: bold;text-align: center;letter-spacing: 16px;">上涨</span></div>
                </a-layout-content>
              </a-layout>
              <a-layout-footer :style="{ background: 'transparent', padding: '0', display: 'flex', height: '45px',lineHeight: '34px',paddingRight: '20px' }">
                <div class="sale-label">目前在售同户型房源 <span>1套</span></div>
                <div class="sent-buiding">参考租金</div>
                <div class="sent-label">房型<span>两室一厅</span></div>
                <div class="sent-label">价格<span>￥1000</span></div>
              </a-layout-footer>
            </a-layout>
          </a-layout-content>
        </a-layout>
      </a-layout-header>
      <a-layout-content>
      </a-layout-content>
    </a-layout>
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
      houseSelect: {}
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
    }
  }
}
</script>
<style scoped lang='less'>
.building-overview {
  padding:0;
  background: url(~@/assets/print-bg.png);
  height: 794px;
  width: 1123px;;
}
.community-header {
  line-height: 48px;
  display: flex;
}
.community-name {
  flex: 1;
  font-size: 24px;
}
.community-price{
  flex: 1;
  line-height: 24px;
}
.price7label{
  font-size: 16px;
  line-height: 35px;
}
.price7{
    line-height: 36px;
    font-size: 20px;
    color: rgb(0,37,200);
    font-weight: bold;
}
.price30label{
  font-size: 16px;
  line-height: 30px;
}
.price30{
    line-height: 20px;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    span{
      display: inline-block;
      flex: 1;
    }
}
.sale-label{
  flex: 1;
}
.sent-buiding{
  color: rgb(0,37,200);
  font-size: 18px;
  font-weight: bold;
}
.sent-label,.sale-label{
  color: rgb(0,37,200);
  font-size: 16px;
  span{
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
