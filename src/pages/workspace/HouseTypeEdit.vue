<template>
  <div>
    <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" :labelAlign="'right'">
      <!-- <a-form-item label="楼盘名称">
        <a-input :value="houseSelect.communityName" :disabled="true" />
      </a-form-item> -->
      <a-form-item label="房屋结构">
        <a-input style="width:100px" addon-after="室" v-model="houseTypeEdit.room"></a-input
        ><a-input style="width:100px" addon-after="厅" v-model="houseTypeEdit.hall"></a-input
        ><a-input style="width:100px" addon-after="厨" v-model="houseTypeEdit.kitchen"></a-input
        ><a-input style="width:100px" addon-after="卫" v-model="houseTypeEdit.toilet"></a-input>
      </a-form-item>
      <a-form-item label="房屋朝向">
        <a-select aria-placeholder="请选择" :options="towardOptions" v-model="houseTypeEdit.towards"></a-select>
      </a-form-item>
      <a-form-item label="建筑面积">
        <a-input addon-after="m²" v-model="houseTypeEdit.acreage"></a-input>
      </a-form-item>
      <a-form-item label="房屋层高">
        <a-input addon-after="米" v-model="houseTypeEdit.floorHeight"></a-input>
      </a-form-item>
      <a-form-item label="房屋类型">
        <a-select
          aria-placeholder="请选择"
          v-model="houseTypeEdit.typesOfHouse"
          :options="houseTypeOptions"
        ></a-select>
      </a-form-item>
      <a-form-item label="参考单价">
        <a-input addon-after="元" v-model="houseTypeEdit.referenceUnitPrice"></a-input>
      </a-form-item>
      <a-form-item label="参考总价">
        <a-input addon-after="万元" v-model="houseTypeEdit.referenceTotalPrice"></a-input>
      </a-form-item>
      <a-form-item label="户型存量">
        <a-input addon-after="套" v-model="houseTypeEdit.unitInventory"></a-input>
      </a-form-item>
      <a-form-item label="户型分析">
        <a-input v-model="houseTypeEdit.analysis"></a-input>
      </a-form-item>
      <a-form-item label=" " :colon="false">
        <a-upload
          :file-list="houseTypeFiles"
          accept="image/*"
          list-type="picture-card"
          :before-upload="beforeHouseTypeUpload"
          :remove="handleHouseTypeRemove"
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
      <!-- <a-form-item label=" " :colon="false">
        <a-button type="primary" :loading="uploading" style="margin-top: 16px" @click="saveHouseType">
          {{ uploading ? '处理中' : '提交' }}
        </a-button>
        <a-button style="margin-top: 16px;margin-left: 20px" @click="houseTypeOK">
          取消
        </a-button>
      </a-form-item> -->
    </a-form>
  </div>
</template>

<script>
import { AutoComplete } from 'ant-design-vue'
import {
  saveHouse,
  getLabels,
  photoUpload,
  houseTypePhotoUpload,
  photoQuery,
  photoDelete,
  queryAnalysis,
  saveAnalysis
} from '@/api/manage'
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
  name: 'HouseTypeEdit',
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
      loading: false,
      plates: {},
      subwayStations: {},
      getLabel: getLabel,
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
      houseTypeEdit: {},
      houseTypeOptions: [
        { label: '平层', value: '平层' },
        { label: '叠墅', value: '叠墅' },
        { label: '别墅', value: '别墅' },
        { label: 'loft', value: 'loft' }
      ],
      towardOptions: [
        { label: '南北', value: '南北' },
        { label: '朝南', value: '朝南' },
        { label: '朝东', value: '朝东' },
        { label: '朝北', value: '朝北' },
        { label: '朝西', value: '朝西' }
      ]
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
    this.getHouseTypes()
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

    getHouseTypes () {
      queryAnalysis(this.houseSelect.id).then(e => {
        this.houseTypes = e
      })
    },

    saveHouseType () {
      this.houseTypeEdit.unitTypeName = `${this.houseTypeEdit.room}室${this.houseTypeEdit.hall || 0}厅${!this
        .houseTypeEdit.kitchen || 0}厨${this.houseTypeEdit.toilet || 0}卫`
      saveAnalysis(this.houseTypeEdit)
        .then(e => {
          const up = []
          this.houseTypeFiles.forEach(file => {
            if (file.file) {
              const formData = new FormData()
              formData.append('file', file.file)
              formData.append('houseId', e.id)
              formData.append('type', '1')
              up.push(houseTypePhotoUpload(formData))
            }
          })
          Promise.all(up).then(r => {
            console.log('upload success')
          })
          this.$notification.success({
            message: '通知',
            description: this.houseSelect.id ? '修改成功' : '保存成功'
          })
        })
        .catch(e => {
          this.$notification.error({
            message: '通知',
            description: this.houseSelect.id ? '修改失败' : '保存失败'
          })
        })
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
      this.$emit('houseTypeOK')
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
    updateSchoolsOptions (school, disabled) {
      this.schools.forEach(s => {
        if (s.value === school) {
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
        if (item.label.indexOf(value) > -1) {
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
