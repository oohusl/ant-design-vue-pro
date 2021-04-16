<template>
  <div>
    <a-layout :style="{ background: '#ffffff', padding: '0', height: '50px' }" v-if="!edit">
      <a-layout-header :style="{ padding: '0', height: '80px' }">
        <a-layout :style="{ background: '#ffffff', padding: '0', height: '80px' }">
          <a-layout-content
            :style="{
              background: '#ffffff',
              padding: '0',
              'line-height': '32px',
              'font-size': '24px',
              color: '#000000'
            }"
          >
            <div>
              {{ houseSelect.communityName
              }}<span
                style="font-size:16px;color: #B71C2B; margin-left: 12px"
              >均价
                {{
                  houseSelect.averageLlistedPrice == null ? '--' : houseSelect.averageLlistedPrice.toLocaleString()
                }}元/m²</span
              >
            </div>
            <div>
              <template v-for="tag in tags">
                <a-tag :key="tag" :color="isCustomTag(tag)">
                  {{ tag }}
                </a-tag>
              </template>
            </div>
          </a-layout-content>
          <a-layout-sider :style="{ background: '#ffffff', padding: '0', width: '380px', 'min-width': '380px' }">
            <a-button @click="editHouse()">
              信息编辑
            </a-button>
            <a-button @click="editImage()" v-if="houseSelect.id">
              上传图片
            </a-button>
          </a-layout-sider>
        </a-layout>
      </a-layout-header>
      <a-layout-content class="show-house">
        <a-descriptions title="基本信息" :column="4">
          <a-descriptions-item label="楼盘名称" :span="2">
            {{ houseSelect.communityName }}
          </a-descriptions-item>
          <a-descriptions-item label="楼盘地址" :span="2">
            {{ houseSelect.address }}
          </a-descriptions-item>
          <a-descriptions-item label="所属区域">
            {{ houseSelect.area }}
          </a-descriptions-item>
          <a-descriptions-item label="所属板块">
            {{ houseSelect.plate }}
          </a-descriptions-item>
          <a-descriptions-item label="环线">
            {{ houseSelect.loopSummary }}
          </a-descriptions-item>
          <a-descriptions-item label="楼盘等级">
            {{ houseSelect.communityLev }}
          </a-descriptions-item>
          <a-descriptions-item label="区域规划">
            {{ houseSelect.districtPlanning }}
          </a-descriptions-item>
          <template v-for="(line, i) in houseSelect.metroInfo">
            <a-descriptions-item :label="i > 0 ? '' : '地铁线路'" :key="i" :span="4">
              {{ `${line.metroLine} / ${line.subwayStation}   ${line.distance != null ? line.distance + 'm' : ''}` }}
            </a-descriptions-item>
          </template>
        </a-descriptions>
        <a-descriptions title="楼盘概况" :column="4">
          <a-descriptions-item label="开发商" :span="2">
            {{ houseSelect.developer }}
          </a-descriptions-item>
          <a-descriptions-item label="物业公司" :span="2">
            {{ houseSelect.propertyCompany }}
          </a-descriptions-item>
          <a-descriptions-item label="类型">
            {{ houseSelect.cellAttributes }}
          </a-descriptions-item>
          <a-descriptions-item label="权属">
            {{ houseSelect.transactionOwnership }}
          </a-descriptions-item>
          <a-descriptions-item label="年限">
            {{ houseSelect.propertyRights ? houseSelect.propertyRights : '' }}
          </a-descriptions-item>
          <a-descriptions-item label="建筑时间">
            {{ houseSelect.constructionAge ? houseSelect.constructionAge + '年' : '' }}
          </a-descriptions-item>
          <a-descriptions-item label="小区栋数">
            {{ houseSelect.buildingNumber ? houseSelect.buildingNumber + '栋' : '' }}
          </a-descriptions-item>
          <a-descriptions-item label="小区户数">
            {{ houseSelect.householdsNumber ? houseSelect.householdsNumber + '户' : '' }}
          </a-descriptions-item>
          <a-descriptions-item label="停车位数">
            {{ houseSelect.parkingSpacesNumber }}
          </a-descriptions-item>
          <a-descriptions-item label="人车分流">
            {{ getLabel(houseSelect.peopleAndVehicles, peopleAndVehiclesOptions) }}
          </a-descriptions-item>
          <a-descriptions-item label="容积率">
            {{ houseSelect.volumeRate ? houseSelect.volumeRate : '' }}
          </a-descriptions-item>
          <a-descriptions-item label="绿化率">
            {{ houseSelect.greeningRate ? houseSelect.greeningRate + '%' : '' }}
          </a-descriptions-item>
          <a-descriptions-item label="建筑类型">
            {{ houseSelect.buildingType }}
          </a-descriptions-item>
          <a-descriptions-item label="是否电梯">
            {{ getLabel(houseSelect.isLift, liftOptions) }}
          </a-descriptions-item>
          <a-descriptions-item label="最大层数">
            {{ houseSelect.maxFloor ? houseSelect.maxFloor + '层' : '' }}
          </a-descriptions-item>
          <a-descriptions-item label="最小层数">
            {{ houseSelect.minFloor ? houseSelect.minFloor + '层' : '' }}
          </a-descriptions-item>
          <a-descriptions-item label="物业类型">
            {{ houseSelect.propertyAttributes }}
          </a-descriptions-item>
          <a-descriptions-item label="物业费">
            {{ houseSelect.propertyCosts ? houseSelect.propertyCosts + '元/m²' : '' }}
          </a-descriptions-item>
        </a-descriptions>
        <a-descriptions title="学区情况" :column="4">
          <template v-for="school in houseSelect.schoolDistrictInfo">
            <a-descriptions-item label="学校" :key="school.schoolName" :span="2">{{
              school.schoolName
            }}</a-descriptions-item>
            <a-descriptions-item
              label="类型"
              :key="school.schoolName"
              :span="2"
            >{{ school.schoolType }} {{ getSchool(school.schoolName) }}</a-descriptions-item
            >
          </template>
        </a-descriptions>
        <a-descriptions title="价格及交易" :column="4">
          <a-descriptions-item label="1居面积" :span="1">
            {{ houseSelect.roomArea1Min ? houseSelect.roomArea1Min + '-' : ''
            }}{{ houseSelect.roomArea1Max ? houseSelect.roomArea1Max + 'm²' : '' }}
          </a-descriptions-item>
          <a-descriptions-item label="1居价格" :span="1">
            {{ houseSelect.roomPriceRange1Min ? houseSelect.roomPriceRange1Min + '-' : ''
            }}{{ houseSelect.roomPriceRange1Max ? houseSelect.roomPriceRange1Max + '万' : '' }}
          </a-descriptions-item>
          <a-descriptions-item label="2居面积" :span="1">
            {{ houseSelect.roomArea2Min ? houseSelect.roomArea2Min + '-' : ''
            }}{{ houseSelect.roomArea2Max ? houseSelect.roomArea2Max + 'm²' : '' }}
          </a-descriptions-item>
          <a-descriptions-item label="2居价格" :span="1">
            {{ houseSelect.roomPriceRange2Min ? houseSelect.roomPriceRange2Min + '-' : ''
            }}{{ houseSelect.roomPriceRange2Max ? houseSelect.roomPriceRange2Max + '万' : '' }}
          </a-descriptions-item>
          <a-descriptions-item label="3居面积" :span="1">
            {{ houseSelect.roomArea3Min ? houseSelect.roomArea3Min + '-' : ''
            }}{{ houseSelect.roomArea3Max ? houseSelect.roomArea3Max + 'm²' : '' }}
          </a-descriptions-item>
          <a-descriptions-item label="3居价格" :span="1">
            {{ houseSelect.roomPriceRange3Min ? houseSelect.roomPriceRange3Min + '-' : ''
            }}{{ houseSelect.roomPriceRange3Max ? houseSelect.roomPriceRange3Max + '万' : '' }}
          </a-descriptions-item>
          <a-descriptions-item label="多居面积" :span="1">
            {{ houseSelect.roomArea4Min ? houseSelect.roomArea4Min + '-' : ''
            }}{{ houseSelect.roomArea4Max ? houseSelect.roomArea4Max + 'm²' : '' }}
          </a-descriptions-item>
          <a-descriptions-item label="多居价格" :span="1">
            {{ houseSelect.roomPriceRange4Min ? houseSelect.roomPriceRange4Min + '-' : ''
            }}{{ houseSelect.roomPriceRange4Max ? houseSelect.roomPriceRange4Max + '万' : '' }}
          </a-descriptions-item>
          <a-descriptions-item label="在售">
            {{ houseSelect.inStock ? houseSelect.inStock + '套' : '' }}
          </a-descriptions-item>
          <a-descriptions-item label="在租">
            {{ houseSelect.positiveRent ? houseSelect.positiveRent + '套' : '' }}
          </a-descriptions-item>
          <a-descriptions-item label="成交量">
            {{ houseSelect.volume2019 ? houseSelect.volume2019 + '套' : '' }}
          </a-descriptions-item>
        </a-descriptions>
        <a-descriptions title="综合" :column="4">
          <a-descriptions-item label="概括介绍" :span="4">
            {{ houseSelect.communityDesc }}
          </a-descriptions-item>
        </a-descriptions>
      </a-layout-content>
    </a-layout>
    <a-layout :style="{ background: '#ffffff', padding: '0', height: '50px' }" v-else>
      <a-layout-header :style="{ padding: '0', height: '80px' }">
        <a-layout :style="{ background: '#ffffff', padding: '0', height: '80px' }">
          <a-layout-content
            :style="{
              background: '#ffffff',
              padding: '0',
              'line-height': '32px',
              'font-size': '24px',
              color: '#000000'
            }"
          >
            <div>
              {{ houseSelect.communityName
              }}<span
                style="font-size:16px;color: #B71C2B; margin-left: 12px"
              >均价
                <a-input-number v-model="houseSelect.averageLlistedPrice" size="small" style="width: 100px" />
                元/m²</span
              >
            </div>
            <div>
              <template v-for="tag in tags">
                <a-tag :key="tag" closable @close="() => handleClose(tag)" :color="isCustomTag(tag)">
                  {{ tag }}
                </a-tag>
              </template>
              <AutoComplete
                :value="inputValue"
                v-if="tagInputVisible"
                style="width: 100px"
                :data-source="labels"
                :filter-option="tagOptionFilter"
                size="small"
                @select="handleInputConfirm"
                @change="handleInputChange"
                @blur="handleInputConfirm"
                @keyup.enter="handleInputConfirm"
              />
              <a-tag v-else style="background: #fff; borderStyle: dashed;" @click="showInput">
                <a-icon type="plus" /> New Tag
              </a-tag>
            </div>
          </a-layout-content>
          <a-layout-sider :style="{ background: '#ffffff', padding: '0' }">
            <a-button @click="saveHouse()">
              保存
            </a-button>
          </a-layout-sider>
        </a-layout>
      </a-layout-header>
      <a-layout-content class="edit-house">
        <a-descriptions title="基本信息" :column="4">
          <a-descriptions-item label="楼盘名称" :span="2">
            <a-input v-model="houseSelect.communityName" size="small" class="col2" />
          </a-descriptions-item>
          <a-descriptions-item label="楼盘地址" :span="2">
            <a-input v-model="houseSelect.address" size="small" class="col2" />
          </a-descriptions-item>
          <a-descriptions-item label="所属区域">
            <a-select
              :options="areaOptions"
              v-model="houseSelect.area"
              size="small"
              class="col1"
              @change="editAreaChange()"
            ></a-select>
          </a-descriptions-item>
          <a-descriptions-item label="所属板块">
            <a-select :options="editPlateOptions" v-model="houseSelect.plate" size="small" class="col1"></a-select>
          </a-descriptions-item>
          <a-descriptions-item label="环线">
            <a-select
              :options="loopSummaryOptions"
              v-model="houseSelect.loopSummary"
              size="small"
              class="col1"
            ></a-select>
          </a-descriptions-item>
          <a-descriptions-item label="楼盘等级">
            <a-select v-model="houseSelect.communityLev" size="small" class="col1" :options="communityLevOptions">
            </a-select>
          </a-descriptions-item>
          <a-descriptions-item label="区域规划">
            <a-select
              v-model="houseSelect.districtPlanning"
              size="small"
              class="col1"
              :options="districtPlanningOptions"
            >
            </a-select>
          </a-descriptions-item>
          <template v-for="(metro, i) in houseSelect.metroInfo">
            <a-descriptions-item :label="i === 0 ? '地铁线路' : ''" :span="4" :key="i">
              <a-input-group compact>
                <a-cascader
                  :options="metrolineDistrictInfo"
                  expand-trigger="hover"
                  size="small"
                  style="width: 220px"
                  placeholder="地铁"
                  :value="[metro.metroLine, metro.subwayStation]"
                  @change="selectMetroLine($event, i)"
                >
                </a-cascader>
                <a-input v-model="metro.distance" placeholder="距离" size="small" style="width: 145px" suffix="m">
                </a-input>
                <span
                  style="color: red; line-height: 24px; padding-left: 6px;cursor: pointer;"
                  @click="removeMetro(i)"
                ><a-icon
                  type="minus-circle"
                /></span>
              </a-input-group>
            </a-descriptions-item>
          </template>
          <a-descriptions-item :label="houseSelect.metroInfo.length === 0 ? '地铁线路' : ''" :span="4">
            <a-button type="dashed" style="width: 100px" size="small" @click="addMetroLine()">
              <a-icon type="plus" /> 添加
            </a-button>
          </a-descriptions-item>
        </a-descriptions>
        <a-descriptions title="楼盘概况" :column="4">
          <a-descriptions-item label="开发商" :span="2">
            <a-input v-model="houseSelect.developer" size="small" class="col2" />
          </a-descriptions-item>
          <a-descriptions-item label="物业公司" :span="2">
            <a-input v-model="houseSelect.propertyCompany" size="small" class="col2" />
          </a-descriptions-item>
          <a-descriptions-item label="类型">
            <a-select v-model="houseSelect.cellAttributes" size="small" class="col1">
              <a-select-option value="住宅"> 住宅 </a-select-option>
              <a-select-option value="别墅"> 别墅 </a-select-option>
            </a-select>
          </a-descriptions-item>
          <a-descriptions-item label="权属">
            <a-select
              v-model="houseSelect.transactionOwnership"
              size="small"
              class="col1"
              :options="transactionOwnershipOptions"
            >
            </a-select>
          </a-descriptions-item>
          <a-descriptions-item label="年限">
            <a-input v-model="houseSelect.propertyRights" class="col1" size="small" addon-after="年" />
          </a-descriptions-item>
          <a-descriptions-item label="建筑时间">
            <a-input v-model="houseSelect.constructionAge" class="col1" size="small" addon-after="年" />
          </a-descriptions-item>
          <a-descriptions-item label="小区栋数">
            <a-input v-model="houseSelect.buildingNumber" class="col1" size="small" addon-after="栋" />
          </a-descriptions-item>
          <a-descriptions-item label="小区户数">
            <a-input v-model="houseSelect.householdsNumber" class="col1" size="small" addon-after="户" />
          </a-descriptions-item>
          <a-descriptions-item label="停车位数">
            <a-input v-model="houseSelect.parkingSpacesNumber" class="col1" size="small" />
          </a-descriptions-item>
          <a-descriptions-item label="人车分流">
            <a-select
              :options="peopleAndVehiclesOptions"
              v-model="houseSelect.peopleAndVehicles"
              class="col1"
              size="small"
            >
            </a-select>
          </a-descriptions-item>
          <a-descriptions-item label="容积率">
            <a-input v-model="houseSelect.volumeRate" class="col1" size="small" />
          </a-descriptions-item>
          <a-descriptions-item label="绿化率">
            <a-input v-model="houseSelect.greeningRate" class="col1" size="small" addon-after="%" />
          </a-descriptions-item>
          <a-descriptions-item label="建筑类型">
            <a-select v-model="houseSelect.buildingType" size="small" class="col1">
              <a-select-option value="塔楼"> 塔楼 </a-select-option>
              <a-select-option value="板楼"> 板楼 </a-select-option>
              <a-select-option value="塔板结合"> 塔板结合 </a-select-option>
              <a-select-option value="其他"> 其他 </a-select-option>
            </a-select>
          </a-descriptions-item>
          <a-descriptions-item label="是否电梯">
            <a-select :options="liftOptions" v-model="houseSelect.isLift" class="col1" size="small"> </a-select>
          </a-descriptions-item>
          <a-descriptions-item label="最大层数">
            <a-input v-model="houseSelect.maxFloor" class="col1" size="small" addon-after="层" />
          </a-descriptions-item>
          <a-descriptions-item label="最小层数">
            <a-input v-model="houseSelect.minFloor" class="col1" size="small" addon-after="层" />
          </a-descriptions-item>
          <a-descriptions-item label="物业类型">
            <a-select v-model="houseSelect.propertyAttributes" size="small" class="col1" :options="propertyOptions">
            </a-select>
          </a-descriptions-item>
          <a-descriptions-item label="物业费">
            <a-input v-model="houseSelect.propertyCosts" class="col1" size="small" addon-after="元/m²" />
          </a-descriptions-item>
        </a-descriptions>
        <a-descriptions title="学区情况" :column="4">
          <template v-for="(school, s) in houseSelect.schoolDistrictInfo">
            <a-descriptions-item label="" :span="2" :key="s">
              <a-select
                class="col2"
                size="small"
                placeholder="请选中配套学校"
                :showSearch="true"
                :value="school.schoolName"
                @blur="handleOnBlur"
                @search="handleOnSearch"
                @change="selectSchool($event, s)"
              >
                <a-select-option
                  v-for="ss in schools_"
                  :key="ss.schoolName"
                  :value="ss.schoolName"
                  :disabled="ss.disabled"
                >
                  {{ ss.schoolName }}
                </a-select-option>
              </a-select>
              <span
                style="color: red; line-height: 24px; padding-left: 6px;cursor: pointer;"
                @click="removeSchool(s)"
              ><a-icon
                type="minus-circle"
              /></span>
            </a-descriptions-item>
            <a-descriptions-item label="类型" :span="2" :key="s">
              {{ school.schoolType }} {{ getSchool(school.schoolName) }}
            </a-descriptions-item>
          </template>
          <a-descriptions-item label="" :span="4">
            <a-button type="dashed" style="width: 100px" size="small" @click="addSchoolsInfo()">
              <a-icon type="plus" /> 添加
            </a-button>
          </a-descriptions-item>
        </a-descriptions>
        <a-descriptions title="价格及交易" :column="4">
          <a-descriptions-item label="1居面积" :span="1">
            <a-input-group compact>
              <a-input v-model="houseSelect.roomArea1Min" class="compactInput" size="small" placeholder="请输入" />
              <a-input
                style=" width: 14px; border-left: 0; border-right: 0; pointer-events: none; padding: 2px"
                size="small"
                placeholder="—"
                :disabled="true"
              />
              <a-input
                v-model="houseSelect.roomArea1Max"
                class="compactInput"
                style="border-left: 0"
                size="small"
                placeholder="请输入"
              />
            </a-input-group>
          </a-descriptions-item>
          <a-descriptions-item label="1居价格" :span="1">
            <a-input-group compact>
              <a-input
                v-model="houseSelect.roomPriceRange1Min"
                class="compactInput"
                size="small"
                placeholder="请输入"
              />
              <a-input class="compactCenter" size="small" placeholder="—" :disabled="true" />
              <a-input
                v-model="houseSelect.roomPriceRange1Max"
                class="compactInput"
                style="border-left: 0"
                size="small"
                placeholder="请输入"
              />
            </a-input-group>
          </a-descriptions-item>
          <a-descriptions-item label="2居面积" :span="1">
            <a-input-group compact>
              <a-input v-model="houseSelect.roomArea2Min" class="compactInput" size="small" placeholder="请输入" />
              <a-input class="compactCenter" size="small" placeholder="—" :disabled="true" />
              <a-input
                v-model="houseSelect.roomArea2Max"
                class="compactInput"
                style="border-left: 0"
                size="small"
                placeholder="请输入"
              />
            </a-input-group>
          </a-descriptions-item>
          <a-descriptions-item label="2居价格" :span="1">
            <a-input-group compact>
              <a-input
                v-model="houseSelect.roomPriceRange2Min"
                class="compactInput"
                size="small"
                placeholder="请输入"
              />
              <a-input class="compactCenter" size="small" placeholder="—" :disabled="true" />
              <a-input
                v-model="houseSelect.roomPriceRange2Max"
                class="compactInput"
                style="border-left: 0"
                size="small"
                placeholder="请输入"
              />
            </a-input-group>
          </a-descriptions-item>
          <a-descriptions-item label="3居面积" :span="1">
            <a-input-group compact>
              <a-input v-model="houseSelect.roomArea3Min" class="compactInput" size="small" placeholder="请输入" />
              <a-input class="compactCenter" size="small" placeholder="—" :disabled="true" />
              <a-input
                v-model="houseSelect.roomArea3Max"
                class="compactInput"
                style="border-left: 0"
                size="small"
                placeholder="请输入"
              />
            </a-input-group>
          </a-descriptions-item>
          <a-descriptions-item label="3居价格" :span="1">
            <a-input-group compact>
              <a-input
                v-model="houseSelect.roomPriceRange3Min"
                class="compactInput"
                size="small"
                placeholder="请输入"
              />
              <a-input class="compactCenter" size="small" placeholder="—" :disabled="true" />
              <a-input
                v-model="houseSelect.roomPriceRange3Max"
                class="compactInput"
                style="border-left: 0"
                size="small"
                placeholder="请输入"
              />
            </a-input-group>
          </a-descriptions-item>
          <a-descriptions-item label="多居面积" :span="1">
            <a-input-group compact>
              <a-input v-model="houseSelect.roomArea4Min" class="compactInput" size="small" placeholder="请输入" />
              <a-input class="compactCenter" size="small" placeholder="—" :disabled="true" />
              <a-input
                v-model="houseSelect.roomArea4Max"
                class="compactInput"
                style="border-left: 0"
                size="small"
                placeholder="请输入"
              />
            </a-input-group>
          </a-descriptions-item>
          <a-descriptions-item label="多居价格" :span="1">
            <a-input-group compact>
              <a-input
                v-model="houseSelect.roomPriceRange4Min"
                class="compactInput"
                size="small"
                placeholder="请输入"
              />
              <a-input class="compactCenter" size="small" placeholder="—" :disabled="true" />
              <a-input
                v-model="houseSelect.roomPriceRange4Max"
                class="compactInput"
                style="border-left: 0"
                size="small"
                placeholder="请输入"
              />
            </a-input-group>
          </a-descriptions-item>
          <a-descriptions-item label="在售">
            <a-input v-model="houseSelect.inStock" class="col1" size="small" addon-after="套" />
          </a-descriptions-item>
          <a-descriptions-item label="在租">
            <a-input v-model="houseSelect.positiveRent" class="col1" size="small" addon-after="套" />
          </a-descriptions-item>
          <a-descriptions-item label="年成交">
            <a-input v-model="houseSelect.volume2019" class="col1" size="small" addon-after="套" />
          </a-descriptions-item>
        </a-descriptions>
        <a-descriptions title="综合" :column="4">
          <a-descriptions-item label="概括介绍" :span="4">
            <a-textarea
              v-model="houseSelect.communityDesc"
              style="width: 858px"
              size="small"
              :auto-size="{ minRows: 2, maxRows: 6 }"
            />
          </a-descriptions-item>
        </a-descriptions>
      </a-layout-content>
    </a-layout>
    <a-modal v-model="imageEditVisible" title="楼盘相册" :footer="null" @ok="editImageOK" width="800px">
      <a-form>
        <a-form-item label="楼盘名称">
          <a-input :value="houseSelect.communityName" :disabled="true" />
        </a-form-item>
        <a-form-item label="相册类目">
          <a-select v-model="photoType" @change="queryPhotos">
            <a-select-option value="0">封面图</a-select-option>
            <a-select-option value="1">效果图</a-select-option>
            <a-select-option value="2">环境规划图</a-select-option>
            <a-select-option value="3">楼盘实景图</a-select-option>
            <a-select-option value="4">周边实景图</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item>
          <a-upload
            :file-list="fileList"
            accept="image/*"
            list-type="picture-card"
            :remove="handleRemove"
            :before-upload="beforeUpload"
            @preview="handlePreview"
          >
            <div>
              <a-icon type="plus" />
              <div class="ant-upload-text">
                上传图片
              </div>
            </div>
          </a-upload>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" :loading="uploading" style="margin-top: 16px" @click="handleUpload">
            {{ uploading ? '处理中' : '提交' }}
          </a-button>
          <a-button :disabled="uploading" style="margin-top: 16px" @click="editImageOK">
            取消
          </a-button>
        </a-form-item>
      </a-form>
    </a-modal>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>

<script>
import { AutoComplete } from 'ant-design-vue'
import { saveHouse, getLabels, photoUpload, photoQuery, photoDelete, getSchools } from '@/api/manage'
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
  statusMap,
  peopleAndVehiclesOptions,
  districtPlanningOptions,
  communityLevOptions,
  transactionOwnershipOptions,
  propertyOptions
} from '@/api/data'
import HouseDiary from './HouseDiary.vue'

function getBase64 (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

export default {
  name: 'HouseSelect',
  components: {
    AutoComplete,
    HouseDiary
  },
  props: {
    houseSelect: {
      type: Object,
      default: function () {
        return {}
      }
    },
    toCreate: { type: Boolean, default: false }
  },
  computed: {
    tags: {
      get: function () {
        return this.houseSelect.labels ? this.houseSelect.labels.split(',') : []
      },
      set: function (newValue) {
        this.houseSelect.labels = newValue.join(',')
      }
    }
  },
  data () {
    return {
      imageEditVisible: false,
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
      peopleAndVehiclesOptions,
      statusMap,
      districtPlanningOptions,
      communityLevOptions,
      propertyOptions,
      transactionOwnershipOptions,
      loading: false,
      plates: {},
      subwayStations: {},
      getLabel: getLabel,
      schools: [],
      schools_: [],
      metrolineDistrictInfo: [],
      photoType: '0',
      fileList: [],
      uploading: false,
      toDelete: [],
      previewVisible: false,
      previewImage: '',
      houseTypeVisible: false,
      houseDiaryVisible: false,
      houseTypeFiles: [],
      houseTypes: [],
      houseTypeEdit: {}
    }
  },
  created () {
    getLabels().then(data => {
      this.labels = data
    })
    this.getMetrolineDistrictInfo()
    this.schools_ = this.schools.slice(0, 50)
    this.queryPhotos()
    this.houseTypeEdit.communityId = this.houseSelect.id

    const _this = this
    getSchools().then(function (e) {
      _this.schools = e
      _this.schools_ = _this.schools.slice(0, 50)
    })
  },
  beforeMount () {
    if (this.edit) {
      this.newHouse()
    }
  },
  methods: {
    editAreaChange () {
      if (this.houseSelect.area) {
        this.editPlateOptions.splice(0)
        areaPlate[this.houseSelect.area].forEach(v => {
          this.editPlateOptions.push({ label: v, value: v })
        })
      }
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
            console.log(selectedP)
            return areaPlates.indexOf(selectedP) < 0
          })
        }
      })
    },

    plateChange (areaOption) {
      const area = areaOption.value
      if (this.plates[area].length > 0) {
        areaOption.halfSelected = true
        const index = this.queryParam.area.indexOf(area)
        if (index >= 0) this.queryParam.area.splice(index + 1, 1)
      } else {
        // 未选中板块
        areaOption.halfSelected = false
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

    subwayStationChange () {
      this.queryParam.subwayStation = []
      const that = this
      Object.keys(this.subwayStations).forEach(e => {
        that.queryParam.subwayStation.push(...that.subwayStations[e])
      })
    },

    editHouse () {
      // edit
      console.log('editHouse')
      this.editAreaChange()
      this.houseSelect.metroInfo = this.houseSelect.metroInfo || []
      this.houseSelect.schoolDistrictInfo = this.houseSelect.schoolDistrictInfo || []
      this.houseSelect.metroInfo.forEach(station => {
        this.updateMetrolineDistrictInfo([station.metroLine, station.subwayStation], true)
      })
      this.houseSelect.schoolDistrictInfo.forEach(school => {
        this.updateSchoolsOptions(school.schoolName, true)
      })
      this.edit = !this.edit
    },
    editImage () {
      this.imageEditVisible = true
      this.queryPhotos()
    },
    openHouseType () {
      this.houseTypeEdit = {}
      this.houseTypeEdit.communityId = this.houseSelect.id
      this.houseTypeFiles = []
      this.houseTypeVisible = true
    },
    openHouseDiary () {
      this.houseDiaryVisible = true
    },
    houseTypeOK () {
      this.houseTypeVisible = false
    },
    editImageOK () {
      this.imageEditVisible = false
    },
    saveHouse () {
      // save
      console.log('save:', this.houseSelect)
      this.houseSelect.labels = this.tags.join(',')
      // this.houseSelect.schoolDistrictInfo = this.schoolsInfo
      saveHouse(this.houseSelect)
        .then(e => {
          this.edit = !this.edit
          this.$emit('change')
          this.$notification.success({
            message: '通知',
            description: this.houseSelect.id ? '修改成功' : '保存成功'
          })
        })
        .catch(() => {
          this.$notification.error({
            message: '通知',
            description: this.houseSelect.id ? '修改失败' : '保存失败'
          })
        })
    },

    newHouse () {
      this.detailVisible = true
      this.tags = []
      this.edit = true
    },
    showDetail () {
      this.edit = false
      console.log(this.houseSelect)
    },

    getMetrolineDistrictInfo () {
      this.metrolineDistrictInfo = []
      this.metrolineDistrictInfo = this.metroLineOptions
      const stationMap = new Map()
      subwayOptions.forEach(v => {
        stationMap.set(v.line, v.station)
      })
      this.metrolineDistrictInfo.forEach(v => {
        const station = stationMap.get(v.value)
        const stationoption = []
        if (station) {
          station.forEach(s => {
            stationoption.push({ label: s, value: s })
          })
          v.children = stationoption
        }
      })
    },
    addMetroLine () {
      this.houseSelect.metroInfo.push({
        metroLine: '',
        subwayStation: '',
        distance: 1
      })
      this.$forceUpdate()
    },
    selectMetroLine (value, o) {
      this.houseSelect.metroInfo[o].metroLine = value[0]
      this.houseSelect.metroInfo[o].subwayStation = value[1]
      this.updateMetrolineDistrictInfo(value, true)
      this.$forceUpdate()
    },
    removeMetro (index) {
      if (this.houseSelect.metroInfo.length >= index) {
        const metroinfo = this.houseSelect.metroInfo.splice(index, 1)
        if (metroinfo[0].metroLine) {
          this.updateMetrolineDistrictInfo([metroinfo[0].metroLine, metroinfo[0].subwayStation], false)
        }
      }
      this.$forceUpdate()
    },
    updateMetrolineDistrictInfo (value, disabled) {
      const [line, station] = value
      try {
        this.metrolineDistrictInfo.forEach(lineoption => {
          if (lineoption.value === line) {
            lineoption.children.forEach(option => {
              if (option.value === station) {
                option.disabled = disabled
              }
            })
          }
        })
      } catch (error) {}
    },
    removeSchool (index) {
      if (this.houseSelect.schoolDistrictInfo.length >= index) {
        const s = this.houseSelect.schoolDistrictInfo.splice(index, 1)
        if (s[0].schoolName) {
          this.updateSchoolsOptions(s[0].schoolName, false)
        }
      }
      this.$forceUpdate()
    },
    addSchoolsInfo () {
      this.houseSelect.schoolDistrictInfo.push({
        schoolName: '',
        echelonPerformance: '',
        schoolType: ''
      })
      this.$forceUpdate()
    },
    selectSchool (school, o) {
      this.schools.forEach(s => {
        if (s.schoolName === school) {
          s.disabled = true
          this.houseSelect.schoolDistrictInfo.splice(o, 1, {
            schoolName: school,
            schoolType: s.schoolType,
            echelonPerformance: s.echelon
          })
        }
      })
      this.$forceUpdate()
    },
    updateSchoolsOptions (school, disabled) {
      this.schools.forEach(s => {
        if (s.schoolName === school) {
          s.disabled = disabled
        }
      })
      this.$forceUpdate()
    },
    /* tag start */
    handleClose (removedTag) {
      const tags = this.tags.filter(tag => tag !== removedTag)
      this.tags = tags
    },

    showInput () {
      this.tagInputVisible = true
      this.$nextTick(function () {})
    },

    handleInputChange (e) {
      this.inputValue = e
    },

    handleInputConfirm () {
      const inputValue = this.inputValue
      let tags = this.tags
      if (inputValue && !tags.find(e => e === inputValue)) {
        tags = [...tags, inputValue]
      }
      this.tags = tags
      this.tagInputVisible = false
      this.inputValue = ''
    },

    tagOptionFilter (input, option) {
      return option.componentOptions.children[0].text.toUpperCase().indexOf(input.toUpperCase()) >= 0
    },

    isCustomTag (tag) {
      if (this.labels.includes(tag)) {
        return ''
      }
      return 'red'
    },
    handleOnBlur () {
      this.schools_ = this.schools.slice(0, 50)
    },
    searchValue (value) {
      const datas = []
      console.log(this.schools, value)
      this.schools.forEach(item => {
        if (item.schoolName.indexOf(value) > -1) {
          datas.push(item)
        }
      })
      this.schools_ = datas.slice(0, 50)
      console.log(this.schools_)
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
    getSchool (schoolName) {
      const school = this.schools.find(school => {
        return school.schoolName === schoolName
      })
      let desc = ''
      if (school) {
        if (school.echelon) {
          desc = '-' + school.echelon
        }
        if (school.isConsistentSystem) {
          desc += '-' + school.echelon
        }
      }
      return desc
    },
    beforeHouseTypeUpload (file) {
      getBase64(file).then(url => {
        this.houseTypeFiles = [
          ...this.houseTypeFiles,
          { uid: new Date().getMilliseconds, name: file.name, file: file, url: url }
        ]
      })
      return false
    },
    handleHouseTypeRemove (file) {
      const index = this.houseTypeFiles.indexOf(file)
      const newFileList = this.houseTypeFiles.slice()
      newFileList.splice(index, 1)
      this.houseTypeFiles = newFileList
    },
    queryPhotos () {
      this.fileList = []
      return photoQuery(this.houseSelect.id, this.photoType).then(e => {
        e.forEach(image => {
          this.fileList.push({ uid: image.id, status: 'done', name: image.url, url: '/media/' + image.url })
        })
      })
    },
    handleRemove (file) {
      if (file.url) {
        this.toDelete.push(file.uid)
      }
      const index = this.fileList.indexOf(file)
      const newFileList = this.fileList.slice()
      newFileList.splice(index, 1)
      this.fileList = newFileList
    },
    handleCancel () {
      this.previewVisible = false
    },
    handlePreview (file) {
      this.previewImage = file.url || file.preview
      this.previewVisible = true
    },
    beforeUpload (file) {
      getBase64(file).then(url => {
        if (this.photoType === '0') {
          this.fileList = [{ uid: new Date().getMilliseconds, name: file.name, file: file, url: url }]
        } else {
          this.fileList = [...this.fileList, { uid: new Date().getMilliseconds, name: file.name, file: file, url: url }]
        }
      })
      return false
    },
    doUpload () {
      this.uploading = true
      const up = []
      this.fileList.forEach(file => {
        if (file.file) {
          const formData = new FormData()
          formData.append('file', file.file)
          formData.append('communityId', this.houseSelect.id)
          formData.append('type', this.photoType)
          up.push(photoUpload(formData))
        }
      })
      this.toDelete.forEach(id => {
        up.push(photoDelete(id))
      })

      Promise.all(up)
        .then(r => {
          console.log(r)
        })
        .catch(e => {
          console.error(e)
        })
        .finally(e => {
          this.queryPhotos().then(e => {
            if (this.photoType === '0') {
              if (this.fileList.length > 0) {
                this.houseSelect['communityPhoto'] = this.fileList[0]['url']
              } else {
                this.houseSelect['communityPhoto'] = null
              }
              saveHouse(this.houseSelect).then(e => {
                console.log(e)
              })
            }
          })
          this.uploading = false
        })
    },
    handleUpload () {
      const { fileList } = this
      const formData = new FormData()
      fileList.forEach(file => {
        formData.append('files[]', file)
      })
      // this.uploading = true
      this.doUpload()
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
.col1 {
  width: 120px;
}
.col2 {
  width: 364px;
}
.compactInput {
  width: 53px;
  text-align: center;
  padding: 2px;
}
.compactCenter {
  width: 14px;
  border-left: 0;
  border-right: 0;
  pointer-events: none;
  padding: 2px;
}
</style>
