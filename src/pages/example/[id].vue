<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const { params } = route
</script>

<template>
  <h2>示例{{ params.id }}</h2>
</template>
