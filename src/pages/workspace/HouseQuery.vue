<template>
  <div>
    <div>
      <BackTop></BackTop>
    </div>
    <a-layout class="house-query">
      <a-layout-header :style="{ padding: 0, textAlign: 'center' }">
        <Affix>
          <AutoComplete
            class="house-query-search"
            dropdown-class-name="house-query-search-dropdown"
            :dropdown-match-select-width="false"
            :dropdown-style="{ width: '552px' }"
            style="width: 350px; marginRight: 20px"
            placeholder="请输入楼盘名开始找房"
            option-label-prop="value"
            v-model="queryParam.communityName"
          >
            <a-input>
              <a-button slot="suffix" style="margin-right: -12px" class="search-btn" type="primary" @click="search">
                <a-icon type="search" />
              </a-button>
            </a-input>
          </AutoComplete>
          <a-button @click="doSearch()" type="primary"> 查询 </a-button>
          <a-button @click="resetSearchForm()" :style="{ marginLeft: '8px' }"> 重置 </a-button>
          <a-dropdown :style="{ marginLeft: '8px' }">
            <a-menu slot="overlay">
              <a-menu-item key="1" @click="newHouse()"> 新建 </a-menu-item>
              <a-menu-item key="2"> 导入 </a-menu-item>
              <a-menu-item key="3">
                <a download="985.xlsx" id="anchorNewApi" href="#" @click="dataExport">导出</a>
              </a-menu-item>
            </a-menu>
            <a-button> 操作 <a-icon type="down" /> </a-button>
          </a-dropdown>

          <a :style="{ marginLeft: '8px', fontSize: '12px' }" @click="advanced = !advanced">
            {{ advanced ? '收起' : '展开' }} <a-icon :type="advanced ? 'up' : 'down'" />
          </a>
        </Affix>
      </a-layout-header>
      <a-layout-content :style="{ background: '#ffffff', padding: '0 128px' }">
        <a-form :label-col="{ span: 2 }" :wrapper-col="{ span: 22 }" style="margin-top: 10px">
          <a-form-item label="区域板块">
            <a-checkbox-group v-model="queryParam.area" size="small" @change="areaChange">
              <a-popover
                v-for="(options, i) in areaOptions"
                :key="options.value"
                trigger="hover"
                :placement="i > 8 ? 'bottomLeft' : 'topLeft'"
              >
                <template slot="content">
                  <a-checkbox-group v-model="plates[options.value]" @change="plateChange(options)">
                    <a-row>
                      <a-col
                        v-for="plateOption in getPlate(options.value)"
                        :span="getPlate(options.value).length < 7 ? 4 : 3"
                        :key="plateOption.value"
                      >
                        <a-checkbox
                          :value="plateOption.value"
                          :indeterminate="queryParam.area && queryParam.area.indexOf(options.value) >= 0"
                        >{{ plateOption.label }}</a-checkbox
                        >
                      </a-col>
                    </a-row>
                  </a-checkbox-group>
                </template>
                <a-checkbox
                  :value="options.value"
                  :indeterminate="plates[options.value] && plates[options.value].length > 0"
                  :checked="true"
                >{{ options.label }}</a-checkbox
                >
              </a-popover>
            </a-checkbox-group>
            <a-tag
              v-for="p in queryParam.area"
              :key="p"
              color="pink"
              :closable="true"
              @close="handleTagClose(p, queryParam.area)"
            >{{ p }}</a-tag
            >
            <template v-for="(value, key) in plates">
              <a-tag v-for="p in value" :key="p" :closable="true" @close="handleTagClose(p, plates[key])">{{
                key + '-' + p
              }}</a-tag>
            </template>
          </a-form-item>
          <a-form-item label="地铁线路">
            <a-checkbox-group v-model="queryParam.metroLine" @change="metroLineChange" style="width: 100%">
              <a-row>
                <a-col>
                  <a-popover
                    trigger="hover"
                    v-for="(metroLine, i) in metroLineOptions"
                    :key="metroLine.value"
                    :placement="i > 8 ? 'bottomLeft' : 'topLeft'"
                  >
                    <template slot="content">
                      <a-checkbox-group
                        v-model="subwayStations[metroLine.value]"
                        @change="subwayStationChange(metroLine.value)"
                      >
                        <a-row>
                          <template v-for="subwayName in getSubwayStation(metroLine.value)">
                            <a-col :span="getSubwayStation(metroLine.value).length < 7 ? 4 : 3" :key="subwayName">
                              <a-checkbox
                                :value="subwayName"
                                :key="subwayName"
                                :indeterminate="hasMetroLineSelected(metroLine.value)"
                              >{{ subwayName }}</a-checkbox
                              >
                            </a-col>
                          </template>
                        </a-row>
                      </a-checkbox-group>
                    </template>
                    <a-checkbox :value="metroLine.value" :indeterminate="hasSubwaySelected(metroLine.value)">{{
                      metroLine.label
                    }}</a-checkbox>
                  </a-popover>
                </a-col>
              </a-row>
            </a-checkbox-group>
            <a-tag
              v-for="ss in queryParam.metroLine"
              :key="ss"
              color="pink"
              :closable="true"
              @close="handleTagClose(ss, queryParam.metroLine)"
            >{{ ss }}</a-tag
            >
            <template v-for="(value, key) in subwayStations">
              <a-tag v-for="p in value" :key="p" :closable="true" @close="handleTagClose(p, subwayStations[key])">{{
                key + '-' + p
              }}</a-tag>
            </template>
          </a-form-item>
          <a-form-item label="地铁距离">
            <a-select
              v-model="queryParam.subwayDistance"
              :options="metroDistanceOption"
              size="small"
              style="width: 120px"
              :showSearch="true"
              :allowClear="true"
              :maxTagCount="0"
              mode="multiple"
              :showArrow="true"
            >
            </a-select>
            <a-form-item :style="{ display: 'inline-block', width: '60px', 'margin-left': '20px' }">
              <a-input type="number" style="width: 100%" size="small" v-model="tempParam.minDistance" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '10px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '114px', 'margin-right': '20px' }">
              <a-input type="number" style="width: 100%" size="small" suffix="米" v-model="tempParam.maxDistance">
                <a-icon
                  slot="addonAfter"
                  type="plus"
                  aria-disabled="true"
                  @click="addToRang(tempParam.subwayDistanceRang, tempParam.minDistance, tempParam.maxDistance)"
                />
              </a-input>
            </a-form-item>
            <a-tag
              v-for="rangTag in gatherSelect(queryParam.subwayDistance, tempParam.subwayDistanceRang)"
              :key="rangTag"
              :closable="true"
              @close="handleTagClose(rangTag, queryParam.subwayDistance, tempParam.subwayDistanceRang)"
              color="pink"
            >{{ translateRang(rangTag, '米', metroDistanceOption) }}</a-tag
            >
          </a-form-item>
          <a-form-item label="环线">
            <a-checkbox-group v-model="queryParam.loopSummary" :options="loopSummaryOptions"> </a-checkbox-group>
          </a-form-item>
          <a-form-item label="楼盘等级">
            <a-checkbox-group v-model="queryParam.communityLev" :options="communityLevOptions"> </a-checkbox-group>
          </a-form-item>
          <a-form-item label="地区规划">
            <a-checkbox-group v-model="queryParam.districtPlannings" :options="districtPlanningOptions">
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="学校" v-if="advanced">
            <a-form-item :style="{ display: 'inline-block', width: '160px', 'margin-right': '20px' }">
              <a-select
                v-model="queryParam.schoolName"
                size="small"
                placeholder="请选择配套学校"
                :showSearch="true"
                :allowClear="true"
                :maxTagCount="0"
                mode="multiple"
                :showArrow="true"
                @blur="handleOnBlur"
                @search="handleOnSearch"
              >
                <a-select-option v-for="ss in schools_" :key="ss.value" :value="ss.value">
                  {{ ss.label }}
                </a-select-option>
              </a-select>
            </a-form-item>
            <a-checkbox-group v-model="queryParam.schoolType" @change="schoolTypeChange">
              <template v-for="options in schoolType">
                <a-popover :key="options.type" trigger="hover" placement="topLeft" v-if="options.echelon">
                  <template slot="content">
                    <a-checkbox-group
                      v-model="queryParam.echelonPerformance[options.type]"
                      @change="echelonChange(options.type)"
                    >
                      <a-row>
                        <a-col v-for="e in options.echelon" :key="e.value">
                          <a-checkbox
                            :value="e.value"
                            :indeterminate="queryParam.schoolType.indexOf(options.type) >= 0"
                          >{{ e.label }}</a-checkbox
                          >
                        </a-col>
                      </a-row>
                    </a-checkbox-group>
                  </template>
                  <a-checkbox
                    :value="options.type"
                    :indeterminate="
                      queryParam.echelonPerformance[options.type] &&
                        queryParam.echelonPerformance[options.type].length > 0
                    "
                  >{{ options.type }}</a-checkbox
                  >
                </a-popover>
                <a-checkbox :key="options.type" v-else :value="options.type">{{ options.type }}</a-checkbox>
              </template>
            </a-checkbox-group>
            <div>
              <a-tag
                v-for="p in queryParam.schoolName"
                :key="p"
                :color="colors[0]"
                :closable="true"
                @close="handleTagClose(p, queryParam.schoolName)"
              >{{ p }}</a-tag
              >
              <a-tag
                v-for="p in queryParam.schoolType"
                :key="p"
                :color="colors[1]"
                :closable="true"
                @close="handleTagClose(p, queryParam.schoolType)"
              >{{ p }}</a-tag
              >
              <template v-for="(value, key) in queryParam.echelonPerformance">
                <a-tag
                  v-for="(v, i) in value"
                  :key="v + i"
                  :color="colors[1]"
                  :closable="true"
                  @close="handleTagClose(v, queryParam.echelonPerformance[key])"
                >{{ key }} - {{ v }}</a-tag
                >
              </template>
            </div>
          </a-form-item>
          <a-form-item label="户型" v-if="advanced">
            <a-checkbox-group v-model="queryParam.roomType">
              <a-checkbox value="1"> 一房 </a-checkbox>
              <a-checkbox value="2"> 二房 </a-checkbox>
              <a-checkbox value="3"> 三房 </a-checkbox>
              <a-checkbox value="-1"> 其他 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="单价" v-if="advanced">
            <a-select
              style="width: 120px"
              v-model="queryParam.averageLlistedPrice"
              size="small"
              placeholder="选择单价区间"
              :options="averageLlistedPriceOptions"
              :showSearch="true"
              :allowClear="true"
              :maxTagCount="0"
              mode="multiple"
              :showArrow="true"
            />
            <a-form-item :style="{ display: 'inline-block', width: '60px', 'margin-left': '20px' }">
              <a-input type="number" style="width: 100%" v-model="queryParam.averageLlistedPriceMin" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '10px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '114px', 'margin-right': '20px' }">
              <a-input
                type="number"
                style="width: 100%"
                v-model="queryParam.averageLlistedPriceMax"
                size="small"
                suffix="万"
              >
                <a-icon
                  slot="addonAfter"
                  type="plus"
                  aria-disabled="true"
                  @click="
                    addToRang(
                      queryParam.ranges.price,
                      queryParam.averageLlistedPriceMin,
                      queryParam.averageLlistedPriceMax
                    )
                  "
                />
              </a-input>
            </a-form-item>
            <a-tag
              v-for="rangTag in gatherSelect(queryParam.averageLlistedPrice, queryParam.ranges.price)"
              :key="rangTag"
              :closable="true"
              @close="handleTagClose(rangTag, queryParam.averageLlistedPrice, queryParam.ranges.price)"
              color="pink"
            >{{ translateRang(rangTag, '万', averageLlistedPriceOptions) }}</a-tag
            >
          </a-form-item>
          <a-form-item label="总价" v-if="advanced">
            <a-select
              style="width: 120px"
              v-model="queryParam.totalPrice"
              size="small"
              placeholder="选择总价区间"
              :options="totalPriceOptions"
              :showSearch="true"
              :allowClear="true"
              :maxTagCount="0"
              mode="multiple"
              :showArrow="true"
            />
            <a-form-item :style="{ display: 'inline-block', width: '60px', 'margin-left': '20px' }">
              <a-input style="width: 100%" v-model="queryParam.totalPriceMin" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '10px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '114px', 'margin-right': '20px' }">
              <a-input style="width: 100%" v-model="queryParam.totalPriceMax" size="small" suffix="万">
                <a-icon
                  slot="addonAfter"
                  type="plus"
                  aria-disabled="true"
                  @click="addToRang(queryParam.ranges.total, queryParam.totalPriceMin, queryParam.totalPriceMax)"
                />
              </a-input>
            </a-form-item>
            <a-tag
              v-for="rangTag in gatherSelect(queryParam.totalPrice, queryParam.ranges.total)"
              :key="rangTag"
              :closable="true"
              @close="handleTagClose(rangTag, queryParam.totalPrice, queryParam.ranges.total)"
              color="pink"
            >{{ translateRang(rangTag, '万', totalPriceOptions) }}</a-tag
            >
          </a-form-item>
          <a-form-item label="面积" v-if="advanced">
            <a-select
              style="width: 120px"
              v-model="queryParam.roomArea"
              size="small"
              placeholder="选择面积区间"
              :options="roomAreaOptions"
              :showSearch="true"
              :allowClear="true"
              :maxTagCount="0"
              mode="multiple"
              :showArrow="true"
            />
            <a-form-item :style="{ display: 'inline-block', width: '60px', 'margin-left': '20px' }">
              <a-input style="width: 100%" v-model="queryParam.roomAreaMin" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '10px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '114px', 'margin-right': '20px' }">
              <a-input style="width: 100%" v-model="queryParam.roomAreaMax" size="small" suffix="m²">
                <a-icon
                  slot="addonAfter"
                  type="plus"
                  aria-disabled="true"
                  @click="addToRang(queryParam.ranges.roomArea, queryParam.roomAreaMin, queryParam.roomAreaMax)"
                />
              </a-input>
            </a-form-item>
            <a-tag
              v-for="rangTag in gatherSelect(queryParam.roomArea, queryParam.ranges.roomArea)"
              :key="rangTag"
              :closable="true"
              @close="handleTagClose(rangTag, queryParam.roomArea, queryParam.ranges.roomArea)"
              color="pink"
            >{{ translateRang(rangTag, '平方', roomAreaOptions) }}</a-tag
            >
          </a-form-item>
          <a-form-item label="建筑年代" v-if="advanced">
            <a-select
              style="width: 120px"
              v-model="queryParam.constructionAge"
              size="small"
              placeholder="选择建筑年代"
              :options="constructionAgeOptions"
              :showSearch="true"
              :allowClear="true"
              :maxTagCount="0"
              mode="multiple"
              :showArrow="true"
            />
            <a-form-item :style="{ display: 'inline-block', width: '60px', 'margin-left': '20px' }">
              <a-input style="width: 100%" v-model="queryParam.constructionAgeMin" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '10px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '114px', 'margin-right': '20px' }">
              <a-input style="width: 100%" v-model="queryParam.constructionAgeMax" size="small" suffix="年">
                <a-icon
                  slot="addonAfter"
                  type="plus"
                  aria-disabled="true"
                  @click="
                    addToRang(
                      queryParam.ranges.constructionAge,
                      queryParam.constructionAgeMin,
                      queryParam.constructionAgeMax
                    )
                  "
                />
              </a-input>
            </a-form-item>
            <a-tag
              v-for="rangTag in gatherSelect(queryParam.constructionAge, queryParam.ranges.constructionAge)"
              :key="rangTag"
              :closable="true"
              @close="handleTagClose(rangTag, queryParam.constructionAge, queryParam.ranges.constructionAge)"
              color="pink"
            >{{ translateYearRang(rangTag, '年') }}</a-tag
            >
          </a-form-item>
          <a-form-item v-if="advanced" label="小区属性">
            <a-checkbox-group v-model="queryParam.cellAttributes">
              <a-checkbox value="住宅"> 住宅 </a-checkbox>
              <a-checkbox value="别墅"> 别墅 </a-checkbox>
              <a-checkbox value="其他"> 其他 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item v-if="advanced" label="小区权属">
            <a-checkbox-group v-model="queryParam.transactionOwnerships" :options="transactionOwnershipOptions">
            </a-checkbox-group>
          </a-form-item>
          <a-form-item v-if="advanced" label="物业属性">
            <a-checkbox-group v-model="queryParam.propertyAttributes" :options="propertyOptions"> </a-checkbox-group>
          </a-form-item>
          <a-form-item v-if="advanced" label="建筑类型">
            <a-checkbox-group v-model="queryParam.buildingType">
              <a-checkbox value="塔楼"> 塔楼 </a-checkbox>
              <a-checkbox value="板楼"> 板楼 </a-checkbox>
              <a-checkbox value="塔板结合"> 塔板结合 </a-checkbox>
              <a-checkbox value="其他"> 其他 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item v-if="advanced" label="是否电梯">
            <a-checkbox-group v-model="queryParam.isLift">
              <a-checkbox :value="1"> 有电梯 </a-checkbox>
              <a-checkbox :value="0"> 无电梯 </a-checkbox>
              <a-checkbox :value="2"> 其他 </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
          <a-form-item v-if="advanced" label="人车分流">
            <a-checkbox-group v-model="queryParam.peopleAndVehicles" :options="peopleAndVehiclesOptions">
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="车位配比" v-if="advanced">
            <a-select
              style="width: 120px"
              v-model="queryParam.parkingSpacesRatios"
              size="small"
              placeholder="选择车位配比"
              :options="parkingSpaceRatioOptions"
              :showSearch="true"
              :allowClear="true"
              :maxTagCount="0"
              mode="multiple"
              :showArrow="true"
            />
            <a-form-item :style="{ display: 'inline-block', width: '60px', 'margin-left': '20px' }">
              <a-input style="width: 100%" v-model="tempParam.parkingSpacesRatioMin" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '10px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '114px', 'margin-right': '20px' }">
              <a-input style="width: 100%" v-model="tempParam.parkingSpacesRatioMax" size="small" suffix="%">
                <a-icon
                  slot="addonAfter"
                  type="plus"
                  aria-disabled="true"
                  @click="
                    addToRang(
                      tempParam.parkingSpacesRatioRang,
                      tempParam.parkingSpacesRatioMin,
                      tempParam.parkingSpacesRatioMax
                    )
                  "
                />
              </a-input>
            </a-form-item>
            <a-tag
              v-for="rangTag in gatherSelect(queryParam.parkingSpacesRatios, tempParam.parkingSpacesRatioRang)"
              :key="rangTag"
              :closable="true"
              @close="handleTagClose(rangTag, queryParam.parkingSpacesRatios, tempParam.parkingSpacesRatioRang)"
              color="pink"
            >{{ translateRang(rangTag, '', parkingSpaceRatioOptions) }}</a-tag
            >
          </a-form-item>
          <a-form-item label="成交量" v-if="advanced">
            <a-select
              style="width: 120px"
              v-model="queryParam.volume2019s"
              size="small"
              placeholder="选择成交量"
              :options="volume2019Options"
              :showSearch="true"
              :allowClear="true"
              :maxTagCount="0"
              mode="multiple"
              :showArrow="true"
            />
            <a-form-item :style="{ display: 'inline-block', width: '60px', 'margin-left': '20px' }">
              <a-input style="width: 100%" v-model="tempParam.volume2019Min" size="small" />
            </a-form-item>
            <span :style="{ display: 'inline-block', width: '10px', textAlign: 'center' }"> - </span>
            <a-form-item :style="{ display: 'inline-block', width: '114px', 'margin-right': '20px' }">
              <a-input style="width: 100%" v-model="tempParam.volume2019Max" size="small" suffix="套">
                <a-icon
                  slot="addonAfter"
                  type="plus"
                  aria-disabled="true"
                  @click="addToRang(tempParam.volume2019Rang, tempParam.volume2019Min, tempParam.volume2019Max)"
                />
              </a-input>
            </a-form-item>
            <a-tag
              v-for="rangTag in gatherSelect(queryParam.volume2019s, tempParam.volume2019Rang)"
              :key="rangTag"
              :closable="true"
              @close="handleTagClose(rangTag, queryParam.volume2019s, tempParam.volume2019Rang)"
              color="pink"
            >{{ translateRang(rangTag, '套', volume2019Options) }}</a-tag
            >
          </a-form-item>
        </a-form>
        <!-- 列表 -->
        <a-card :bordered="false">
          <a-layout>
            <a-layout-header :style="{ background: '#ffffff', padding: '0', height: '50px', display: 'flex' }">
              <div class="result">
                共找到<span>{{ results['x-total-count'] ? results['x-total-count'] : 0 }}</span
                >套 符合条件房源
              </div>
              <a-button-group>
                <a-button> 排序 </a-button>
                <a-button @click="sortChange('averageLlistedPrice')">
                  房屋单价
                  <a-icon :type="sortType == 'asc' ? 'down' : 'up'" />
                </a-button>
              </a-button-group>
            </a-layout-header>
            <a-layout-content>
              <a-card
                :bordered="false"
                :style="{ background: '#ffffff', padding: '25px 17px' }"
                class="house-list"
                v-for="community of results"
                :key="community.id"
              >
                <a-layout :style="{ background: '#ffffff' }">
                  <a-layout-sider :style="{ background: '#ffffff', padding: 0 }" width="300">
                    <img
                      v-if="community.communityPhoto"
                      :src="community.communityPhoto"
                      :style="{ 'border-radius': '4px' }"
                    />
                    <img v-else src="~@/assets/first.png" :style="{ 'border-radius': '4px' }" />
                  </a-layout-sider>
                  <a-layout-content :style="{ background: '#ffffff', 'padding-left': '20px' }">
                    <a-layout :style="{ background: '#ffffff', height: '100%', 'text-align': 'left' }">
                      <a-layout-header
                        :style="{
                          background: '#ffffff',
                          padding: 0,
                          color: '#000000',
                          'font-size': '20px',
                          height: '24px',
                          'line-height': '24px',
                          cursor: 'pointer'
                        }"
                        @click="showOverview(community)"
                      >
                        {{ community.communityName }}
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
                        <a-form
                          :label-col="{ span: 3 }"
                          :wrapper-col="{ span: 21 }"
                          label-align="left"
                          style="width: 100%"
                        >
                          <a-form-item label="地址" :style="{ height: '30px' }">
                            <span>{{ community.address }}</span>
                          </a-form-item>
                          <a-form-item label="环线" :style="{ height: '30px' }">
                            <span>{{ community.loopSummary }}</span>
                          </a-form-item>
                          <a-form-item
                            v-for="(m, i) in community.metroInfo"
                            :key="JSON.stringify(m)"
                            :colon="i == 0"
                            :label="i == 0 ? '地铁' : ' '"
                            :style="{ height: '30px' }"
                          >
                            <span>{{ m.metroLine + ' ' + m.subwayStation }}</span>
                          </a-form-item>
                        </a-form>
                      </a-layout-content>
                      <a-layout-footer :style="{ background: '#ffffff', display: 'flex', padding: 0 }">
                        <a-tag color="pink" v-if="community.area">
                          {{ community.area }}
                        </a-tag>
                        <a-tag color="red" v-if="community.plate">
                          {{ community.plate }}
                        </a-tag>
                        <a-tag color="orange" v-if="community.cellAttributes">
                          {{ community.cellAttributes }}
                        </a-tag>
                        <a-tag color="green" v-if="community.constructionAge">
                          {{ community.constructionAge }}
                        </a-tag>
                        <a-tag color="cyan" v-if="community.isLift === '1'">电梯</a-tag>
                        <a-tag color="blue" v-if="community.buildingType">
                          {{ community.buildingType }}
                        </a-tag>
                      </a-layout-footer>
                    </a-layout>
                  </a-layout-content>
                  <a-layout-sider :style="{ background: '#ffffff', padding: 0 }" width="200">
                    <a-layout :style="{ background: '#ffffff', height: '100%', 'text-align': 'center' }">
                      <a-layout-header
                        :style="{ background: '#ffffff', padding: 0, color: '#B71C2B', 'font-size': '16px' }"
                        width="200"
                      >
                        均价<span style="font-size: 24px; font-weight: bold">{{
                          community.averageLlistedPrice == null ? '--' : community.averageLlistedPrice.toLocaleString()
                        }}</span
                        >元/m²
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
                        <a-button @click="showDetail(community)">查看详情</a-button>
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
    <a-drawer :visible="detailFlag > 0" width="80vw" @close="closeDetail">
      <house-edit :houseSelect="house" :toCreate="detailFlag === 2" @change="search" ref="houseeditref"></house-edit>
    </a-drawer>
  </div>
</template>
<script>
import moment from 'moment'
import { STable, Ellipsis } from '@/components'
import { getHouse, getSchools } from '@/api/manage'
import { schoolType } from '@/api/school'
import HouseEdit from './HouseEdit.vue'
import {
  areaOptions,
  getMetroLineOptions,
  averageLlistedPriceOptions,
  totalPriceOptions,
  roomAreaOptions,
  constructionAgeOptions,
  loopSummaryOptions,
  communityLevOptions,
  booleanOptions,
  districtPlanningOptions,
  subwayOptions,
  areaPlate,
  transactionOwnershipOptions,
  propertyOptions,
  peopleAndVehiclesOptions,
  parkingSpaceRatioOptions,
  volume2019Options,
  metroDistanceOption,
  liftOptions,
  ExcelInfo,
  getLabel,
  calScope
} from '@/api/data'
import { AutoComplete, BackTop, Affix } from 'ant-design-vue'
import ExcellentExport from 'excellentexport'

export default {
  name: 'HouseQuery',
  components: {
    STable,
    Ellipsis,
    AutoComplete,
    HouseEdit,
    BackTop,
    Affix
  },
  data () {
    return {
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {
        area: [],
        schoolType: [],
        metroLine: [],
        averageLlistedPrice: [],
        totalPrice: [],
        roomArea: [],
        constructionAge: [],
        echelonPerformance: {},
        parkingSpacesRatios: [],
        volume2019s: [],
        ranges: {
          price: [],
          total: [],
          roomArea: [],
          constructionAge: [],
          parkingSpacesRatios: [],
          volume2019s: [],
          subwayDistance: []
        }
      },
      tempParam: { parkingSpacesRatioRang: [], volume2019Rang: [], subwayDistanceRang: [] },
      detailFlag: 0, // 0 close 1 view 2 edit
      colors: ['pink', 'orange', 'red', 'green', 'cyan', 'blue', 'purple'],
      results: [],
      house: {},
      sort: 'averageLlistedPrice,asc',
      sortType: 'asc',
      size: 20,
      stationOptions: [],
      areaPlate,
      plateOptions: [],
      editPlateOptions: [],
      areaOptions,
      metroLineOptions: getMetroLineOptions(),
      averageLlistedPriceOptions,
      roomAreaOptions,
      constructionAgeOptions,
      loopSummaryOptions,
      communityLevOptions,
      districtPlanningOptions,
      booleanOptions,
      totalPriceOptions,
      transactionOwnershipOptions,
      propertyOptions,
      peopleAndVehiclesOptions,
      metroDistanceOption,
      parkingSpaceRatioOptions,
      volume2019Options,
      loading: false,
      plates: {},
      subwayStations: {},
      schools: [],
      schools_: [],
      originalSchool: [],
      timer: undefined,
      schoolType,
      dataExcel: [],
      headers: Object.keys(ExcelInfo),
      fields: Object.values(ExcelInfo)
    }
  },
  created () {
    this.searchData()
    // this.schools_ = this.schools.slice(0, 50)

    const _this = this
    getSchools().then(function (e) {
      _this.originalSchool = e
      e.forEach(school => {
        _this.schools.push({ label: school.schoolName, value: school.schoolName })
      })
      _this.schools_ = _this.schools.slice(0, 50)
    })
  },
  mounted () {
    window.addEventListener('scroll', this.windowScroll)
    window.ExcellentExport = ExcellentExport
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.windowScroll)
  },
  methods: {
    closeDetail () {
      this.detailFlag = 0
      this.searchData(this.size)
    },

    resetSearchForm () {
      this.queryParam = {
        date: moment(new Date()),
        area: [],
        schoolType: [],
        metroLine: [],
        averageLlistedPrice: [],
        totalPrice: [],
        roomArea: [],
        constructionAge: [],
        echelonPerformance: {},
        parkingSpacesRatios: [],
        volume2019s: [],
        ranges: { price: [], total: [], roomArea: [], constructionAge: [] }
      }
      this.tempParam = { parkingSpacesRatioRang: [], volume2019Rang: [], subwayDistanceRang: [] }
      this.subwayStations = {}
      this.plates = {}
      this.areaReset()
      this.doSearch()
    },

    doSearch () {
      this.searchData()
    },

    searchData (size) {
      this.makeSearchRequest(size).then(e => {
        this.results = e
      })
      this.dataExportQuery()
    },

    makeSearchRequest (size) {
      const requestParameters = Object.assign({ sort: this.sort, size: size || this.size }, this.queryParam)
      requestParameters.subwayStation = Object.values(this.subwayStations).flat()
      requestParameters.plate = Object.values(this.plates).flat()

      requestParameters.averageLlistedPrice = this.gatherSelectParamter(
        requestParameters.averageLlistedPrice,
        requestParameters.ranges.price,
        10000
      )
      requestParameters.totalPrice = this.gatherSelectParamter(
        requestParameters.totalPrice,
        requestParameters.ranges.total
      )
      requestParameters.roomArea = this.gatherSelectParamter(
        requestParameters.roomArea,
        requestParameters.ranges.roomArea
      )
      requestParameters.constructionAge = this.gatherSelectParamter(
        requestParameters.constructionAge,
        requestParameters.ranges.constructionAge
      )
      requestParameters.parkingSpacesRatios = this.gatherSelectParamter(
        this.queryParam.parkingSpacesRatios,
        this.tempParam.parkingSpacesRatioRang
      )
      requestParameters.volume2019s = this.gatherSelectParamter(
        this.queryParam.volume2019s,
        this.tempParam.volume2019Rang
      )
      requestParameters.distances = this.gatherSelectParamter(
        this.queryParam.subwayDistance,
        this.tempParam.subwayDistanceRang
      )

      delete requestParameters.ranges
      delete requestParameters.averageLlistedPriceMin
      delete requestParameters.averageLlistedPriceMax
      delete requestParameters.totalPriceMin
      delete requestParameters.totalPriceMax
      delete requestParameters.roomAreaMin
      delete requestParameters.roomAreaMax
      delete requestParameters.constructionAgeMin
      delete requestParameters.constructionAgeMax

      // this.queryParam.echelonPerformance = this.echelons.flat()
      // requestParameters.echelonPerformance = Object.values(this.queryParam.echelonPerformance).flat()
      requestParameters.schoolTypeAndEchelon = {}
      requestParameters.schoolType.forEach(e => {
        requestParameters.schoolTypeAndEchelon[e] = []
      })
      Object.keys(requestParameters.echelonPerformance).forEach(e => {
        if (requestParameters.echelonPerformance[e].length > 0) {
          requestParameters.schoolTypeAndEchelon[e] = requestParameters.echelonPerformance[e]
        }
      })
      delete requestParameters.schoolType
      delete requestParameters.echelonPerformance

      if (this.queryParam?.isLift?.length !== 1) {
        delete requestParameters.isLift
      } else {
        requestParameters.isLift = requestParameters.isLift[0]
      }

      if (this.queryParam.checkedList) {
        this.queryParam.checkedList.forEach(e => {
          requestParameters[e] = true
        })
        delete requestParameters.checkedList
      }
      console.log('loadData request parameters:', requestParameters)
      return getHouse(requestParameters)
    },

    areaReset () {
      this.plateOptions.splice(0)
      this.queryParam.area.forEach(e => {
        this.plateOptions.push(...areaPlate[e])
      })
    },

    getPlate (area) {
      const plates = []
      areaPlate[area].forEach(v => {
        plates.push({ label: v, value: v })
      })
      return plates
    },

    areaChange () {
      this.queryParam.area.forEach(e => {
        const areaPlates = []
        this.getPlate(e).forEach(p => areaPlates.push(p.value))
        if (this.plates[e]) {
          this.plates[e] = this.plates[e].filter(selectedP => {
            return areaPlates.indexOf(selectedP) < 0
          })
        }
      })
    },

    plateChange (areaOption) {
      const area = areaOption.value
      if (this.plates[area].length > 0) {
        const index = this.queryParam.area.indexOf(area)
        if (index >= 0) this.queryParam.area.splice(index, 1)
      }
    },

    getSubwayStation (i) {
      let s = []
      subwayOptions.forEach(v => {
        if (v.line === i) {
          s = v.station
        }
      })
      return s
    },

    metroLineChange (e) {
      console.log(e)
      e.forEach(line => {
        if (this.subwayStations[line]) this.subwayStations[line].splice(0)
      })
    },

    subwayStationChange (line) {
      console.log(line)
      // 选中地铁站，清空地铁线
      if (this.hasSubwaySelected(line) > 0) {
        const index = this.queryParam.metroLine.indexOf(line)
        if (index >= 0) {
          this.queryParam.metroLine.splice(index, 1)
        }
      }
    },

    hasMetroLineSelected (line) {
      return this.queryParam.metroLine.indexOf(line) >= 0
    },

    hasSubwaySelected (line) {
      return this.subwayStations[line] && this.subwayStations[line].length > 0
    },

    getSchool (schoolName) {
      const school = this.originalSchool.find(school => {
        return school.schoolName === schoolName
      })
      let desc = ''
      if (school) {
        if (school.echelon) {
          desc = '-' + school.echelon
        }
        if (school.isConsistentSystem) {
          desc += '-' + school.isConsistentSystem
        }
      }
      return desc
    },

    schoolTypeChange (e) {
      e.forEach(e => {
        if (this.queryParam.echelonPerformance[e]) this.queryParam.echelonPerformance[e].splice(0)
      })
    },

    echelonChange (type) {
      const index = this.queryParam.schoolType.indexOf(type)
      if (this.queryParam.echelonPerformance[type].length > 0 && index >= 0) {
        this.queryParam.schoolType.splice(index, 1)
      }
    },

    showDetail (community) {
      this.detailFlag = 1
      this.house = community
      this.$refs.houseeditref && this.$refs.houseeditref.showDetail()
    },

    sortChange (type) {
      console.log(type)
      if (this.sortType === 'asc') {
        this.sortType = 'desc'
      } else {
        this.sortType = 'asc'
      }
      if (type) {
        this.sort = type + ',' + this.sortType
        this.searchData()
      }
    },

    addToRang (arr, min, max) {
      if (min && max) {
        arr.push(`${min}-${max}`)
      }
    },
    gatherSelect (arr, set) {
      arr = arr || []
      set = set || []
      return new Set(arr.concat(set))
    },
    rangToValue (arr, factor = 1) {
      return arr.map(x => {
        const two = x.split('-')
        two[0] = two[0] * factor
        if (two.length > 1) {
          two[1] = two[1] * factor
        }
        return two
      })
    },
    gatherSelectParamter (arr, set, factor = 1) {
      return this.rangToValue(Array.from(this.gatherSelect(arr, set)), factor)
    },
    translateRang (rang, unit, options) {
      const r = options.filter(e => {
        return e.value === rang
      })
      if (r.length > 0) {
        return r[0].label
      }
      return `${rang}${unit}`
    },

    translateYearRang (rang, unit) {
      const arr = rang.split('-')
      if (arr[0] === '0') {
        return `${arr[1]}${unit}以前`
      } else if (arr[1] === '100000000') {
        return `${arr[0]}${unit}以后`
      }
      return `${rang}${unit}`
    },

    handleTagClose (tag, ...arr1) {
      arr1.forEach(e => {
        this.removeEle(e, tag)
      })
    },

    removeEle (arr1, tag) {
      const i = arr1.indexOf(tag)
      if (i >= 0) {
        arr1.splice(i, 1)
      }
    },

    averagePriceAll (arr1, arr2) {
      const rangsMap = new Map()
      if (!arr1) {
        arr1 = []
      }
      if (!arr2) {
        arr2 = []
      }
      arr1.concat(arr2).forEach(e => {
        rangsMap.set(e.label, e)
      })
      return rangsMap.values()
    },

    newHouse () {
      this.detailFlag = 2
      this.house = {}
      this.house.metroInfo = []
      this.house.schoolDistrictInfo = []
      this.$refs.houseeditref && this.$refs.houseeditref.newHouse()
    },
    showOverview (overview) {
      console.log(overview)
      // this.$router.push({ name: 'HouseOverview', params: { houseSelect: overview } })
      const routeData = this.$router.resolve({
        name: 'HouseOverview',
        query: { houseId: overview.id }
      })
      window.open(routeData.href, '_blank')
    },
    windowScroll () {
      if (
        document.getElementById('app').children[0].offsetHeight - document.body.offsetHeight - 1 <
        document.documentElement.scrollTop
      ) {
        if (!this.loading) {
          this.loading = true
          setTimeout(() => {
            this.loading = false
            this.size = this.results.length
            this.size += 20
            this.searchData()
          }, 100)
        }
      }
    },
    handleOnBlur () {
      this.schools_ = this.schools.slice(0, 50)
    },
    searchValue (value) {
      const datas = []
      this.schools.forEach(item => {
        if (item.label.indexOf(value) > -1) {
          datas.push(item)
        }
      })
      this.schools_ = datas.slice(0, 50)
    },
    handleOnSearch (value) {
      const that = this
      if (!this.timer) {
        this.timer = setTimeout(function () {
          that.searchValue(value)
          that.timer = null
        }, 0)
      }
    },

    dataExport () {
      return ExcellentExport.convert(
        {
          anchor: 'anchorNewApi',
          filename: '985',
          format: 'xlsx'
        },
        [
          {
            name: '房源信息',
            from: {
              array: this.excelData
            }
          }
        ]
      )
    },
    dataExportQuery () {
      this.makeSearchRequest(200).then(r => {
        if (r.length < 1) {
          return
        }
        let excelData = r.map(e => {
          e.metroInfo = e.metroInfo || []
          e.schoolDistrictInfo = e.schoolDistrictInfo || []
          e.roomArea1 = calScope(e, 'roomArea', '1')
          e.roomArea2 = calScope(e, 'roomArea', '2')
          e.roomArea3 = calScope(e, 'roomArea', '3')
          e.roomArea4 = calScope(e, 'roomArea', '4')

          e.roomPriceRange1 = calScope(e, 'roomPriceRange', '1')
          e.roomPriceRange2 = calScope(e, 'roomPriceRange', '2')
          e.roomPriceRange3 = calScope(e, 'roomPriceRange', '3')
          e.roomPriceRangeMore = calScope(e, 'roomPriceRange', 'More')
          e.peopleAndVehicles = getLabel(e.peopleAndVehicles, peopleAndVehiclesOptions)
          e.isLift = getLabel(e.isLift, liftOptions)

          e.metroLine = []
          e.metroInfo.forEach(m => {
            e.metroLine.push(`${m.metroLine}-${m.subwayStation}-${m.distance != null ? m.distance + 'm' : ''}`)
          })
          e.metroLine = e.metroLine.join('/')

          const school1 = []
          const school2 = []
          const school3 = []
          e.schoolDistrictInfo.forEach(m => {
            const s = m.schoolName + this.getSchool(m.schoolName)
            if (m.schoolType === '幼儿园') {
              school1.push(s)
            }
            if (m.schoolType === '小学') {
              school2.push(s)
            }
            if (m.schoolType === '中学') {
              school3.push(s)
            }
          })
          e.school1 = school1.join('/')
          e.school2 = school2.join('/')
          e.school3 = school3.join('/')
          const row = []
          this.fields.forEach(f => {
            row.push(e[f])
          })
          return row
        })
        excelData = [this.headers, ...excelData]
        console.info(excelData)
        this.excelData = excelData
      })
    },
    search () {
      console.log('search')
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
.house-query-search-button {
  position: absolute;
  top: 26px;
  left: calc(50% + 300px);
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
img {
  width: 100%;
}
.house-list .ant-form-item {
  margin-bottom: 0;
}
.house-list .ant-card-body {
  padding: 0;
}
.ant-checkbox + span {
  padding-left: 6px;
}
</style>

<style>
.ant-checkbox + span {
  padding-left: 6px;
}
</style>
