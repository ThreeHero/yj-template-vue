<script setup>
import { USERINFO } from '@/config/const.config'
import useTitle from '@/hooks/useTitle'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { App } from 'yj-design-tools'

const { setToken, setCache } = App

const testLoginConfig = {
  username: 'admin',
  password: '123456'
}
const bgColor = 'linear-gradient(to right, #a8ff78, #78ffd6)'

const router = useRouter()

const login = ({ username, password }) => {
  if (username === testLoginConfig.username && password === testLoginConfig.password) {
    message.success('登录成功')
    setToken('demo')
    setCache(USERINFO, { username: 'admin', token: 'demo' })
    router.push('/')
  } else {
    message.error('登录失败')
  }
}

useTitle('登录')
</script>

<template>
  <yj-login
    :background="bgColor"
    @login="login"
  />
</template>
