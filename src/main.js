import { createApp } from 'vue'
import { App as AppConfig } from 'yj-design-tools'
import config from '@/config/project.config'
import Antd from 'ant-design-vue'
import install from 'yj-design-components-vue'
import ComponentInstall from '@/components'

import App from './App.vue'
import router from './router'

import 'yj-design-components-vue/dist/yj_design_components_vue.css'
import '@/assets/style/index.css'

AppConfig.setConfig(config)

const app = createApp(App)

app.use(router)
app.use(Antd)
// 注册所有组件库内组件
app.use(install)
app.use(ComponentInstall)

app.mount('#app')
