<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const { params } = route
</script>

<template>
  <div>示例{{ params.id }}</div>
</template>
