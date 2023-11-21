<script setup>
import { PRIMARY_COLOR } from '@/config/antd.style.config'
import config from '@/config/project.config'
import { useRouter, useRoute } from 'vue-router'
import { logout } from '@/utils/tools'
import { menuItem } from './menuConfig'
import { message } from 'ant-design-vue'
import useTitle from '@/hooks/useTitle'

const { name: projectName } = config
const router = useRouter()
const route = useRoute()

const jumpPage = ({ key }) => {
  router.push(key)
}

useTitle(projectName)
</script>

<template>
  <yj-layout
    triggerPosition="bottom"
    :bgColor="PRIMARY_COLOR"
    :logo="{
      complete: `${projectName}管理系统`,
      ellipsis: projectName
    }"
    :slideMenu="{ items: menuItem, onClick: jumpPage }"
  >
    <!-- 解决动态路由刷新问题 -->
    <router-view :key="route.path" />
    <template #headerLeftContent>
      <div></div>
    </template>
    <template #headerRightContent>
      <yj-button
        type="text"
        :confirm="{
          title: '确认退出?'
        }"
        @click="
          logout(() => {
            router.push('/login')
            message.success('退出成功')
          })
        "
      >
        退出
      </yj-button>
    </template>
  </yj-layout>
</template>
