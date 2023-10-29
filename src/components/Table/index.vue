<script setup>
import { ref } from 'vue'

// 设计表格
defineOptions({
  name: 'DesignTable'
})

const props = defineProps({
  columns: {
    type: Array,
    default: () => []
  },
  request: {
    type: Function,
    required: true
  },
  seral: {
    type: Boolean
  },
  items: Object,
  searchHidden: Boolean,
  resetHidden: Boolean
})

const initParams = ref({
  page: 1,
  pageSize: 10
})
const changeParams = (v = {}) => {
  initParams.value = { ...initParams.value, ...v }
}
</script>

<template>
  <yj-search-bar
    :items="items"
    :searchHidden="searchHidden"
    :resetHidden="resetHidden"
    @setInitParams="changeParams"
  >
    <template #extra>
      <slot name="extra" />
    </template>
  </yj-search-bar>
  <yj-table
    :request="request"
    :initParams="initParams"
    :columns="columns"
    @pageChange="changeParams"
  />
</template>
