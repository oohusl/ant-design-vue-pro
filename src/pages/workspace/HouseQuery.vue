<template>
  <page-header-wrapper>
    <a-layout>
      <a-layout-header :style="{ background: '#f5f5f5', padding: 0 }">
        <div class="house-query-search-holder">
          <AutoComplete
            class="house-query-search"
            dropdown-class-name="house-query-search-dropdown"
            :dropdown-match-select-width="false"
            :dropdown-style="{ width: '552px' }"
            size="large"
            style="width: 100%"
            placeholder="请输入区域或楼盘名开始找房"
            option-label-prop="value"
          >
            <template slot="dataSource">
              <a-select-option v-for="item in dataSource" :key="item.category" :title="item.category">
                Found {{ item.query }} on
                <a :href="`https://s.taobao.com/search?q=${item.query}`" target="_blank" rel="noopener noreferrer">
                  {{ item.category }}
                </a>
                <span className="global-search-item-count">{{ item.count }} results</span>
              </a-select-option>
            </template>
            <a-input>
              <a-icon slot="suffix" type="search" class="certain-category-icon" />
            </a-input>
          </AutoComplete>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ background: '#ffffff', margin: '24px 16px 0', padding:'0 128px' }">
        <a-form :label-col="{ span: 2 }" :wrapper-col="{ span: 20 }" :label-align="left">
          <a-form-item label="位置">
            <template>
              <a-tabs default-active-key="1" type="card">
                <a-tab-pane key="1" tab="区域">
                  <a-checkbox-group v-model="queryParam.area" size="small" @change="refresh">
                    <a-checkbox value="青浦"> 青浦 </a-checkbox>
                    <a-checkbox value="松江"> 松江 </a-checkbox>
                    <a-checkbox value="嘉定"> 嘉定 </a-checkbox>
                    <a-checkbox value="奉贤"> 奉贤 </a-checkbox>
                    <a-checkbox value="浦东"> 浦东 </a-checkbox>
                    <a-checkbox value="宝山"> 宝山 </a-checkbox>
                    <a-checkbox value="闵行"> 闵行 </a-checkbox>
                    <a-checkbox value="徐汇"> 徐汇 </a-checkbox>
                    <a-checkbox value="长宁"> 长宁 </a-checkbox>
                    <a-checkbox value="静安"> 静安 </a-checkbox>
                    <a-checkbox value="普陀"> 普陀 </a-checkbox>
                    <a-checkbox value="杨浦"> 杨浦 </a-checkbox>
                    <a-checkbox value="黄浦"> 黄浦 </a-checkbox>
                    <a-checkbox value="虹口"> 虹口 </a-checkbox>
                    <a-checkbox value="金山"> 金山 </a-checkbox>
                    <a-checkbox value="崇明"> 崇明 </a-checkbox>
                  </a-checkbox-group>
                </a-tab-pane>
                <a-tab-pane key="2" tab="板块">
                  <a-input v-model="queryParam.plate" placeholder="请选择" />
                </a-tab-pane>
                <a-tab-pane key="3" tab="环线">
                  <a-checkbox-group v-model="queryParam.loopSummary">
                    <a-checkbox value="内环内"> 内环内 </a-checkbox>
                    <a-checkbox value="内环至中环"> 内环至中环 </a-checkbox>
                    <a-checkbox value="中环至外环"> 中环至外环 </a-checkbox>
                    <a-checkbox value="外环外"> 外环外 </a-checkbox>
                  </a-checkbox-group>
                </a-tab-pane>
                <a-tab-pane key="4" tab="地铁线">
                  <a-checkbox-group v-model="queryParam.metroLine">
                    <a-checkbox value="1">1号线</a-checkbox>
                    <a-checkbox value="2">2号线</a-checkbox>
                    <a-checkbox value="3">3号线</a-checkbox>
                    <a-checkbox value="4">4号线</a-checkbox>
                    <a-checkbox value="5">5号线</a-checkbox>
                    <a-checkbox value="6">6号线</a-checkbox>
                    <a-checkbox value="7">7号线</a-checkbox>
                    <a-checkbox value="8">8号线</a-checkbox>
                    <a-checkbox value="9">9号线</a-checkbox>
                    <a-checkbox value="10">10号线</a-checkbox>
                    <a-checkbox value="11">11号线</a-checkbox>
                    <a-checkbox value="12">12号线</a-checkbox>
                    <a-checkbox value="13">13号线</a-checkbox>
                    <a-checkbox value="14">14号线</a-checkbox>
                    <a-checkbox value="15">15号线</a-checkbox>
                    <a-checkbox value="16">16号线</a-checkbox>
                    <a-checkbox value="17">17号线</a-checkbox>
                    <a-checkbox value="18">18号线</a-checkbox>
                    <a-checkbox value="19">磁悬浮</a-checkbox>
                  </a-checkbox-group>
                  <!-- <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> - </span>
                  <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
                    <a-input style="width: 100%" v-model="queryParam.distance" placeholder="地铁距离" />
                  </a-form-item> -->
                </a-tab-pane>
                <a-tab-pane key="5" tab="学校">
                  <a-checkbox-group v-model="queryParam.echelonPerformances" @pressEnter="refresh">
                    <a-checkbox value="小学">小学</a-checkbox>
                    <a-checkbox value="中学">中学</a-checkbox>
                    <a-checkbox value="一贯制学校">一贯制学校</a-checkbox>
                  </a-checkbox-group>
                </a-tab-pane>
              </a-tabs>
            </template>
          </a-form-item>
          <!-- <a-form-item label="类型">
            <a-checkbox-group v-model="queryParam.housetypes">
              <a-checkbox value="1" > 住宅 </a-checkbox>
              <a-checkbox value="2" > 别墅 </a-checkbox>
              <a-checkbox value="3" > 商办 </a-checkbox>
              <a-checkbox value="4" > 商铺 </a-checkbox>
              <a-checkbox value="5" > 写字楼 </a-checkbox>
            </a-checkbox-group>
          </a-form-item> -->
          <a-form-item label="户型">
            <a-checkbox-group v-model="queryParam.roomType">
              <a-checkbox value="1"> 一房 </a-checkbox>
              <a-checkbox value="2"> 二房 </a-checkbox>
              <a-checkbox value="3"> 三房 </a-checkbox>
              <a-checkbox value="4"> 其他 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="单价">
            <a-checkbox-group v-model="queryParam.averageLlistedPrice">
              <a-checkbox value="1"> 2万以下 </a-checkbox>
              <a-checkbox value="2"> 2-2.5万 </a-checkbox>
              <a-checkbox value="3"> 2.5-3万 </a-checkbox>
              <a-checkbox value="4"> 3-3.5万 </a-checkbox>
              <a-checkbox value="5"> 3.5-4万 </a-checkbox>
              <a-checkbox value="6"> 4-5万 </a-checkbox>
              <a-checkbox value="7"> 5-6万 </a-checkbox>
              <a-checkbox value="8"> 6万以上 </a-checkbox>
            </a-checkbox-group>
            <a-form-item :style="{ display: 'inline-block', width: '63px' }">
              <a-input style="width: 100%" v-model="queryParam.averageLlistedPriceMin" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '63px' }">
              <a-input style="width: 100%" v-model="queryParam.averageLlistedPriceMax" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> 万 </span>
            <a-button size="small">确定</a-button>
          </a-form-item>
          <a-form-item label="总价">
            <a-checkbox-group v-model="queryParam.totalPrice">
              <a-checkbox value="1"> 200万以下 </a-checkbox>
              <a-checkbox value="2"> 200-300万 </a-checkbox>
              <a-checkbox value="3"> 300-400万 </a-checkbox>
              <a-checkbox value="4"> 400-500 </a-checkbox>
              <a-checkbox value="5"> 500-800万 </a-checkbox>
              <a-checkbox value="6"> 800-1000万 </a-checkbox>
              <a-checkbox value="7"> 1000-2000万 </a-checkbox>
              <a-checkbox value="8"> 2000万以上 </a-checkbox>
            </a-checkbox-group>
            <a-form-item :style="{ display: 'inline-block', width: '63px' }">
              <a-input style="width: 100%" v-model="queryParam.totalPriceMin" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '63px' }">
              <a-input style="width: 100%" v-model="queryParam.totalPriceMax" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> 万 </span>
            <a-button size="small">确定</a-button>
          </a-form-item>
          <a-form-item label="面积">
            <a-checkbox-group v-model="queryParam.roomArea">
              <a-checkbox value="1"> 50平方以下 </a-checkbox>
              <a-checkbox value="2"> 50-70平方 </a-checkbox>
              <a-checkbox value="3"> 70-90平方 </a-checkbox>
              <a-checkbox value="4"> 90-110平方 </a-checkbox>
              <a-checkbox value="5"> 110-130平方 </a-checkbox>
              <a-checkbox value="6"> 130-150平方 </a-checkbox>
              <a-checkbox value="7"> 150平方以上 </a-checkbox>
            </a-checkbox-group>
            <a-form-item :style="{ display: 'inline-block', width: '63px' }">
              <a-input style="width: 100%" v-model="queryParam.roomAreaMin" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '22px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '63px' }">
              <a-input style="width: 100%" v-model="queryParam.roomAreaMax" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '44px', textAlign: 'center' }"> 平方 </span>
            <a-button size="small">确定</a-button>
          </a-form-item>
          <!-- <a-form-item label="成交量">
            <a-checkbox-group v-model="queryParam.prices">
              <a-checkbox value="1"> 5套以下 </a-checkbox>
              <a-checkbox value="2"> 5-10套 </a-checkbox>
              <a-checkbox value="3"> 10-15套 </a-checkbox>
              <a-checkbox value="4"> 15-20套 </a-checkbox>
              <a-checkbox value="5"> 20-25套 </a-checkbox>
              <a-checkbox value="6"> 25-30套 </a-checkbox>
              <a-checkbox value="7"> 30套以上 </a-checkbox>
            </a-checkbox-group>
          </a-form-item> -->
          <a-form-item label="建筑年代">
            <a-checkbox-group v-model="queryParam.constructionAge">
              <a-checkbox value="1"> 1900年以前 </a-checkbox>
              <a-checkbox value="2"> 1990-1995 </a-checkbox>
              <a-checkbox value="3"> 1995-2000 </a-checkbox>
              <a-checkbox value="4"> 2000-2005 </a-checkbox>
              <a-checkbox value="5"> 2005-2010 </a-checkbox>
              <a-checkbox value="6"> 2010以后 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="建筑类型">
            <a-checkbox-group v-model="queryParam.buildingType">
              <a-checkbox value="1"> 塔楼 </a-checkbox>
              <a-checkbox value="2"> 板楼 </a-checkbox>
              <a-checkbox value="3"> 塔板结合 </a-checkbox>
              <a-checkbox value="4"> 其他 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="小区属性">
            <a-checkbox-group v-model="queryParam.cellAttributes">
              <a-checkbox value="1"> 住宅 </a-checkbox>
              <a-checkbox value="2"> 别墅 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="电梯">
            <a-checkbox-group v-model="queryParam.isLift">
              <a-checkbox value="1"> 有电梯 </a-checkbox>
              <a-checkbox value="0"> 无电梯 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
        </a-form>
        <a-card :bordered="false">
          <a-layout>
            <a-layout-header :style="{ background: '#ffffff', padding: '0 128px', height: '50px', display: 'flex' }">
              <div class="result">
                共找到<span>500</span>套 符合条件房源
              </div>
              <a-button-group>
                <a-button>综合排序</a-button>
                <a-button>
                  房屋总价
                </a-button>
                <a-button>
                  房屋单价
                </a-button>
                <a-button>
                  成交量
                </a-button>
              </a-button-group>
            </a-layout-header>
            <a-layout-content>
              <a-card :bordered="false" :style="{ background: '#ffffff', padding: '25px 17px'}" class="house-list">
                <a-layout :style="{ background: '#ffffff'}">
                  <a-layout-sider :style="{ background: '#ffffff', padding: 0 }" width="300">
                    <img src="@/assets/house.png" >
                  </a-layout-sider>
                  <a-layout-content :style="{ background: '#ffffff', 'padding-left': '20px' }">
                    <a-layout :style="{ background: '#ffffff', height: '100%','text-align':'left' }">
                      <a-layout-header :style="{ background: '#ffffff', padding: 0, color: '#000000','font-size':'20px', height:'24px','line-height': '24px' }">
                        复地雅园公馆
                      </a-layout-header>
                      <a-layout-content :style="{ background: '#ffffff', padding: 0,display:'flex','justify-content':'center','algin-item':'flex-end' }">
                        <a-form :label-col="{ span: 2 }" :wrapper-col="{ span: 8 }" :label-align="left" style="width:100%">
                          <a-form-item label="地址" :style="{height:'30px'}">
                            <span>上海市黄浦区昼锦路与馆驿街交叉路口</span>
                          </a-form-item>
                          <a-form-item label="环线" :style="{height:'30px'}">
                            <span>内环内</span>
                          </a-form-item>
                          <a-form-item label="地铁" :style="{height:'30px'}" >
                            <span>10号线 豫园站</span>
                          </a-form-item>
                        </a-form>
                      </a-layout-content>
                      <a-layout-footer :style="{ background: '#ffffff', display:'flex',padding:0}">
                        <a-tag color="pink">
                          黄浦
                        </a-tag>
                        <a-tag color="red">
                          豫园
                        </a-tag>
                      </a-layout-footer>
                    </a-layout>
                  </a-layout-content>
                  <a-layout-sider :style="{ background: '#ffffff', padding: 0 }" width="200">
                    <a-layout :style="{ background: '#ffffff', height: '100%','text-align':'center' }">
                      <a-layout-header :style="{ background: '#ffffff', padding: 0, color: '#B71C2B','font-size':'16px' }" width="200">
                        均价<span style="font-size:24px;font-weight:bold">125,000</span>元/m²
                      </a-layout-header>
                      <a-layout-content :style="{ background: '#ffffff', padding: 0,display:'flex','justify-content':'center','algin-item':'flex-end' }">
                        <a-button>查看详情</a-button>
                      </a-layout-content>
                    </a-layout>
                  </a-layout-sider>
                </a-layout>
              </a-card>
              <a-card :bordered="false" :style="{ background: '#ffffff', padding: '25px 17px'}" class="house-list">
                <a-layout :style="{ background: '#ffffff'}">
                  <a-layout-sider :style="{ background: '#ffffff', padding: 0 }" width="300">
                    <img src="@/assets/house.png" >
                  </a-layout-sider>
                  <a-layout-content :style="{ background: '#ffffff', 'padding-left': '20px' }">
                    <a-layout :style="{ background: '#ffffff', height: '100%','text-align':'left' }">
                      <a-layout-header :style="{ background: '#ffffff', padding: 0, color: '#000000','font-size':'20px', height:'24px','line-height': '24px' }">
                        复地雅园公馆
                      </a-layout-header>
                      <a-layout-content :style="{ background: '#ffffff', padding: 0,display:'flex','justify-content':'center','algin-item':'flex-end' }">
                        <a-form :label-col="{ span: 2 }" :wrapper-col="{ span: 8 }" :label-align="left" style="width:100%">
                          <a-form-item label="地址" :style="{height:'30px'}">
                            <span>上海市黄浦区昼锦路与馆驿街交叉路口</span>
                          </a-form-item>
                          <a-form-item label="环线" :style="{height:'30px'}">
                            <span>内环内</span>
                          </a-form-item>
                          <a-form-item label="地铁" :style="{height:'30px'}" >
                            <span>10号线 豫园站</span>
                          </a-form-item>
                        </a-form>
                      </a-layout-content>
                      <a-layout-footer :style="{ background: '#ffffff', display:'flex',padding:0}">
                        <a-tag color="pink">
                          黄浦
                        </a-tag>
                        <a-tag color="red">
                          豫园
                        </a-tag>
                      </a-layout-footer>
                    </a-layout>
                  </a-layout-content>
                  <a-layout-sider :style="{ background: '#ffffff', padding: 0 }" width="200">
                    <a-layout :style="{ background: '#ffffff', height: '100%','text-align':'center' }">
                      <a-layout-header :style="{ background: '#ffffff', padding: 0, color: '#B71C2B','font-size':'16px' }" width="200">
                        均价<span style="font-size:24px;font-weight:bold">125,000</span>元/m²
                      </a-layout-header>
                      <a-layout-content :style="{ background: '#ffffff', padding: 0,display:'flex','justify-content':'center','algin-item':'flex-end' }">
                        <a-button @click="() => (this.moreQuery = true)">查看详情</a-button>
                      </a-layout-content>
                    </a-layout>
                  </a-layout-sider>
                </a-layout>
              </a-card>
            </a-layout-content>
          </a-layout>
        </a-card>
      </a-layout-content>
    </a-layout>
    <!-- <a-card :bordered="false">
        <div class="table-page-search-wrapper">
          <a-form layout="inline">
            <a-row :gutter="48">
              <a-col :md="8" :sm="24">
                <span class="table-page-search-submitButtons">
                  <a-button style="margin-left: 8px" @click="() => (this.moreQuery = true)">查询</a-button>
                </span>
              </a-col>
            </a-row>
          </a-form>
        </div>
        <s-table
          ref="table"
          size="small"
          rowKey="id"
          :columns="columns"
          :data="loadData"
          :alert="false"
          :scroll="{ x: 2000 }"
          bordered
          showPagination="auto"
        >
          <span slot="isXXX" slot-scope="text">
            <template>
              {{ text ? '是' : '' }}
            </template>
          </span>
        </s-table>
    </a-card> -->
    <a-drawer :visible="moreQuery" width="80vw" @close="onClose">
      <a-layout :style="{ background: '#ffffff', padding: '0', height: '50px'}">
        <a-layout-header :style="{ padding: '0', height: '80px' }">
          <a-layout :style="{ background: '#ffffff', padding: '0', height: '80px' }">
            <a-layout-content :style="{ background: '#ffffff', padding: '0','line-height': '32px','font-size': '24px',color:'#000000'}">
              <div>复地雅园公馆<span style="font-size:16px;color: #B71C2B;">均价 125,000元/m²</span></div>
              <div>
                <a-tag>会所</a-tag>
                <a-tag>室外游泳池</a-tag>
                <a-tag>儿童乐园</a-tag>
                <a-tag>篮球场</a-tag>
                <a-tag>羽毛球场</a-tag>
                <a-tag>老年文化中心</a-tag>
                <a-tag closable >
                  标签
                </a-tag>
                <a-tag style="background: #fff; borderStyle: dashed;" @click="showInput">
                  <a-icon type="plus" /> 标签
                </a-tag>
              </div>
            </a-layout-content>
            <a-layout-sider :style="{ background: '#ffffff', padding: '0'}">
              <a-button>
                编辑
              </a-button>
            </a-layout-sider>
          </a-layout>
        </a-layout-header>
        <a-layout-content>
          <a-descriptions title="基本信息" :column="4">
            <a-descriptions-item label="楼盘名称" :span="2">
              复地雅园公馆
            </a-descriptions-item>
            <a-descriptions-item label="楼盘地址" :span="2">
              上海市黄浦区昼锦路与馆驿街交叉路口
            </a-descriptions-item>
            <a-descriptions-item label="所属区域">
              黄浦区
            </a-descriptions-item>
            <a-descriptions-item label="所属板块">
              豫园
            </a-descriptions-item>
            <a-descriptions-item label="所属环线">
              内环内
            </a-descriptions-item>
            <a-descriptions-item label="板块距离">
              距内环1.9km
            </a-descriptions-item>
            <a-descriptions-item label="区域规划">
              城市主中心
            </a-descriptions-item>
            <a-descriptions-item label="地铁线路">
              10号线
            </a-descriptions-item>
            <a-descriptions-item label="地铁站名">
              豫园站
            </a-descriptions-item>
            <a-descriptions-item label="地铁距离">
              700m
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="楼盘概况" :column="4">
            <a-descriptions-item label="开发商" :span="2">
              上海复地新河房地产开发有限公司
            </a-descriptions-item>
            <a-descriptions-item label="物业公司" :span="2">
              上海复瑞物业管理有限公司
            </a-descriptions-item>
            <a-descriptions-item label="小区属性">
              住宅
            </a-descriptions-item>
            <a-descriptions-item label="交易权属">
              黄浦区
            </a-descriptions-item>
            <a-descriptions-item label="产权年限">
              豫园
            </a-descriptions-item>
            <a-descriptions-item label="建筑时间">
              内环内
            </a-descriptions-item>
            <a-descriptions-item label="小区栋数">
              距内环1.9km
            </a-descriptions-item>
            <a-descriptions-item label="小区户数">
              城市主中心
            </a-descriptions-item>
            <a-descriptions-item label="停车位数">
              10号线
            </a-descriptions-item>
            <a-descriptions-item label="人车分流">
              豫园站
            </a-descriptions-item>
            <a-descriptions-item label="容积率">
              700m
            </a-descriptions-item>
            <a-descriptions-item label="绿化率">
              内环内
            </a-descriptions-item>
            <a-descriptions-item label="建筑类型">
              距内环1.9km
            </a-descriptions-item>
            <a-descriptions-item label="是否电梯">
              城市主中心
            </a-descriptions-item>
            <a-descriptions-item label="最大层数">
              10号线
            </a-descriptions-item>
            <a-descriptions-item label="最小层数">
              豫园站
            </a-descriptions-item>
            <a-descriptions-item label="物业属性">
              700m
            </a-descriptions-item>
            <a-descriptions-item label="物业费">
              700m
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="学区情况" :column="4">
            <a-descriptions-item label="是否一贯制" :span="4">
              是九年一贯制
            </a-descriptions-item>
            <a-descriptions-item label="对口小学">
              蓬莱路第二小学
            </a-descriptions-item>
            <a-descriptions-item label="小学梯队">
              第二梯队
            </a-descriptions-item>
            <a-descriptions-item label="对口中学">
              上海市第十中学
            </a-descriptions-item>
            <a-descriptions-item label="中学梯队">
              第三梯队
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="价格及交易" :column="4">
            <a-descriptions-item label="1居">
              90-108m²，900-1100万
            </a-descriptions-item>
            <a-descriptions-item label="2居">
              104-118m²，1100-1500万
            </a-descriptions-item>
            <a-descriptions-item label="3居">
              104-140m²，1100-1700万
            </a-descriptions-item>
            <a-descriptions-item label="4居室">
              130-180m²，1600-2100万
            </a-descriptions-item>
            <a-descriptions-item label="在售套数">
              6套
            </a-descriptions-item>
            <a-descriptions-item label="在租套数">
              13套
            </a-descriptions-item>
            <a-descriptions-item label="2019年成交">
              3套
            </a-descriptions-item>
          </a-descriptions>
        </a-layout-content>
      </a-layout>
    </a-drawer>
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import { STable, Ellipsis } from '@/components'
import { getHouse } from '@/api/manage'
import storage from 'store'
import { AutoComplete } from 'ant-design-vue'
const columns = [
  {
    title: '小区名称',
    dataIndex: 'communityName',
    width: '150px',
    fixed: true,
    scopedSlots: { customRender: 'communityName' }
  },
  { title: '区域', dataIndex: 'area', width: '50px' },
  { title: '板块', dataIndex: 'plate', width: '80px' },
  { title: '地区规划', dataIndex: 'districtPlanning', width: '100px' },
  { title: '环线汇总', dataIndex: 'loopSummary', width: '90px' },
  { title: '小区属性', dataIndex: 'cellAttributes', width: '80px' },
  { title: '地铁线', dataIndex: 'metroLine', width: '60px' },
  { title: '地铁站', dataIndex: 'subwayStation', width: '120px' },
  { title: '距离', dataIndex: 'distance', width: '60px' },
  { title: '交易权属', dataIndex: 'transactionOwnership', width: '80px' },
  { title: '最大楼层', dataIndex: 'maxFloor', width: '80px' },
  { title: '最小楼层', dataIndex: 'minFloor', width: '80px' },
  { title: '近一年成交量', dataIndex: 'volume2019', width: '100px' },
  { title: '1房面积段', dataIndex: 'roomArea1Max', width: '90px' },
  { title: '2房面积段', dataIndex: 'roomArea2Max', width: '90px' },
  { title: '3房面积段', dataIndex: 'roomArea3Max', width: '90px' },
  { title: '1房价格段', dataIndex: 'roomPriceRange1Max', width: '90px' },
  { title: '2房价格段', dataIndex: 'roomPriceRange2Max', width: '90px' },
  { title: '3房价格段', dataIndex: 'roomPriceRange3Max', width: '90px' },
  { title: '电梯', dataIndex: 'isLift', width: '60px', scopedSlots: { customRender: 'isXXX' } },
  { title: '室外游泳池', dataIndex: 'isOutdoorSwimmingRoom', width: '100px', scopedSlots: { customRender: 'isXXX' } },
  { title: '室内游泳池', dataIndex: 'isIndoorSwimmingPool', width: '100px', scopedSlots: { customRender: 'isXXX' } },
  { title: '会所', dataIndex: 'clubhouse', width: '60px', scopedSlots: { customRender: 'isXXX' } },
  { title: '洋房', dataIndex: 'bungalow', width: '60px', scopedSlots: { customRender: 'isXXX' } },
  { title: '双阳台', dataIndex: 'doubleBalcony', width: '60px', scopedSlots: { customRender: 'isXXX' } },
  { title: '大阳台', dataIndex: 'largeBalcony', width: '60px', scopedSlots: { customRender: 'isXXX' } },
  { title: '带花园', dataIndex: 'withGarden', width: '60px', scopedSlots: { customRender: 'isXXX' } },
  { title: '大露台', dataIndex: 'largeTerrace', width: '60px', scopedSlots: { customRender: 'isXXX' } },
  { title: '人车分流', dataIndex: 'peopleAndVehicles', width: '70px', scopedSlots: { customRender: 'isXXX' } },
  { title: '建筑类型', dataIndex: 'buildingType', width: '90px' },
  { title: '物业属性', dataIndex: 'propertyAttributes', width: '90px' },
  { title: '物业费', dataIndex: 'propertyCosts', width: '90px' },
  { title: '栋数', dataIndex: 'buildingNumber', width: '60px' },
  { title: '户数', dataIndex: 'householdsNumber', width: '60px' },
  { title: '车位数', dataIndex: 'parkingSpacesNumber', width: '300px' },
  { title: '容积率', dataIndex: 'volumeRate', width: '60px' },
  { title: '绿化率', dataIndex: 'greeningRate', width: '90px' },
  { title: '挂牌均价', dataIndex: 'averageLlistedPrice', width: '90px' },
  { title: '在售', dataIndex: 'inStock', width: '60px' },
  { title: '正租', dataIndex: 'positiveRent', width: '60px' },
  { title: '建筑年代', dataIndex: 'constructionAge', width: '80px' },
  { title: '开发商', dataIndex: 'developer', width: '250px' },
  { title: '物业公司', dataIndex: 'propertyCompany', width: '280px' },
  { title: '小学', dataIndex: 'primarySchool', width: '100px' },
  { title: '梯队表现', dataIndex: 'echelonPerformance', width: '90px' },
  { title: '一贯制', dataIndex: 'isConsistentSystem', width: '90px', scopedSlots: { customRender: 'isXXX' } },
  { title: '中学', dataIndex: 'middleSchool', width: '120px' },
  { title: '市梯队', dataIndex: 'cityEchelon', width: '90px', scopedSlots: { customRender: 'isXXX' } },
  { title: '区梯队', dataIndex: 'districtEchelon', width: '90px', scopedSlots: { customRender: 'isXXX' } },
  { title: '叠拼别墅', dataIndex: 'stackedVilla', width: '90px', scopedSlots: { customRender: 'isXXX' } },
  { title: '独栋别墅', dataIndex: 'singleFamilyVilla', width: '90px', scopedSlots: { customRender: 'isXXX' } },
  { title: '联排别墅', dataIndex: 'townhouse', width: '90px', scopedSlots: { customRender: 'isXXX' } },
  { title: '双拼别墅', dataIndex: 'semiDetachedHouse', width: '90px', scopedSlots: { customRender: 'isXXX' } },
  { title: '内部配套', dataIndex: 'internalSupporting', width: '150px' },
  { title: '地址', dataIndex: 'address', width: '150px' },
  { title: '产权年限', dataIndex: 'propertyRights', width: '350px' },
  { title: '小区介绍', dataIndex: 'communityDesc', width: '500px' }
]

const statusMap = {
  0: {
    status: 'default',
    text: '关闭'
  },
  1: {
    status: 'processing',
    text: '运行中'
  },
  2: {
    status: 'success',
    text: '已上线'
  },
  3: {
    status: 'error',
    text: '异常'
  }
}

export default {
  name: 'HouseQuery',
  components: {
    STable,
    Ellipsis,
    AutoComplete
  },
  data () {
    this.columns = columns
    return {
      // create model
      visible: false,
      confirmLoading: false,
      mdl: null,
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      moreQuery: false,
      inputVisible: false,
      tags: [],
      colors: ['pink', 'orange', 'red', 'green', 'cyan', 'blue', 'purple'],
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        const requestParameters = Object.assign({ sort: 'id,asc' }, parameter, this.queryParam)
        if (this.queryParam.checkedList) {
          this.queryParam.checkedList.forEach(e => {
            requestParameters[e] = true
          })
          delete requestParameters.checkedList
        }
        console.log('loadData request parameters:', requestParameters)
        return getHouse(requestParameters).then(res => {
          console.log(res)
          return res
        })
      },
      selectedRowKeys: [],
      selectedRows: [],
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 21,
            offset: 1
          },
          sm: {
            span: 16,
            offset: 6
          }
        }
      },
      otherOptions: ['isLift', '近地铁', 'doubleBalcony'],
      dataSource: [],
      housetypes: [],
      housetypes1: [],
      prices: [],
      prices2: [],
      left: 'left',
      results: [],
      resultdata: {}
    }
  },
  filters: {
    statusFilter (type) {
      return statusMap[type].text
    },
    statusTypeFilter (type) {
      return statusMap[type].status
    }
  },
  created () {
    this.tags = storage.get('tags') ? [].concat(JSON.parse(storage.get('tags'))) : []
  },
  computed: {
    rowSelection () {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange
      }
    }
  },
  methods: {
    handleSub (record) {
      if (record.status !== 0) {
        this.$message.info(`${record.no} 订阅成功`)
      } else {
        this.$message.error(`${record.no} 订阅失败，规则已关闭`)
      }
    },
    onClose () {
      this.moreQuery = false
      this.refresh()
    },
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    toggleAdvanced () {
      this.advanced = !this.advanced
    },
    resetSearchForm () {
      this.queryParam = {
        date: moment(new Date())
      }
    },
    handleClose (removedTag) {
      const tags = this.tags.filter(tag => tag.label !== removedTag)
      console.log(tags)
      this.tags = tags
    },

    showInput () {
      this.inputVisible = true
      this.$nextTick(function () {
        this.$refs.tagInput.focus()
      })
    },

    tagNameChange (e) {
      this.inputValue = e.target.value
    },

    tagNameConfirm () {
      const inputValue = this.inputValue
      let tags = this.tags
      if (inputValue && !tags.find(e => e.label === inputValue)) {
        tags = [...tags, { label: inputValue, values: Object.assign({}, this.queryParam) }]
      }
      Object.assign(this, {
        tags,
        inputVisible: false,
        inputValue: ''
      })
      storage.set('tags', JSON.stringify(this.tags))
    },

    tagQuery (tag) {
      this.queryParam = tag.values
      this.$refs.table.refresh(true)
    },

    refresh (a) {
      // this.$refs.table.refresh(true)
      console.log(Array.from(a))
    }
  }
}
</script>

<style scoped>
.ant-table th {
  white-space: nowrap;
}
.ant-table td {
  white-space: nowrap;
}

.ant-form-item {
  margin-bottom: 12px;
}
.ant-form-item .ant-form-item {
  margin-bottom: 0px;
}
.ant-card-grid {
  padding: 0px;
}
.house-query-search-holder {
  width: 552px;
  margin: 0 auto;
}
.ant-checkbox-wrapper + .ant-checkbox-wrapper {
  margin-left: 0;
}
.result {
  flex: 1;
  font-size: 20px;
  color: #262626;
}
.result span {
  color: #b71c2b;
}
.ant-checkbox + span {
  padding-right: 0px;
}
img{
  width: 100%;
}
.house-list .ant-form-item{
  margin-bottom: 0;
}
.house-list .ant-card-body{
  padding: 0;
}
</style>
