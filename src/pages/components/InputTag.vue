<template>
  <div>
    <template v-for="tag in tags">
      <a-tag :key="tag" :closable="!readonly" @close="() => handleClose(tag)" :color="isCustomTag(tag)">
        {{ tag }}
      </a-tag>
    </template>
    <template v-if="!readonly">
      <AutoComplete
        :value="inputValue"
        v-if="tagInputVisible"
        style="width: 100px"
        :data-source="labels"
        size="small"
        @select="handleInputConfirm"
        @change="handleInputChange"
        @blur="handleInputConfirm"
        @keydown.enter="handleInputConfirm"
      />
      <a-tag v-else style="background: #fff; borderstyle: dashed" @click="showInput">
        <a-icon type="plus" /> New Tag
      </a-tag>
    </template>
  </div>
</template>

<script>
import { AutoComplete } from 'ant-design-vue'

export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    labels: {
      type: Array,
      default: () => {
        return []
      }
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  components: {
    AutoComplete
  },
  data () {
    return {
      inputValue: '',
      tagInputVisible: false
    }
  },
  methods: {
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
    isCustomTag (tag) {
      if (this.labels.includes(tag)) {
        return ''
      }
      return 'red'
    }
  },
  computed: {
    tags: {
      // getter
      get: function () {
        return this.value ? this.value.split(',') : []
      },
      set: function (newValue) {
        this.$emit('input', newValue.join(','))
      }
    }
  }
}
</script>
