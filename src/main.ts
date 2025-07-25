// 引入全局样式文件
import './assets/main.css'

//  引入createApp
import { createApp } from 'vue'
import App from './App.vue'

// 引入pinia插件
import { createPinia } from 'pinia'
// 引入vue-router
import router from './router'
// 创建app
const app = createApp(App)
// 创建pinia
const pinia = createPinia()
// 使用插件
app.use(pinia)
// 使用路由
app.use(router)
// 挂载
app.mount("#app")