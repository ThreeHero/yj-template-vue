<template>
  <!-- 组件外部的主题  -->
  <a-config-provider
    :locale="zhCN"
    :theme="{
      token: config.token
    }"
  >
    <!-- 组件内部的主题 -->
    <yj-app :token="config.token">
      <router-view />
    </yj-app>
  </a-config-provider>
</template>

<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import config from '@/config/antd.style.config'
</script>

<style lang="less"></style>
