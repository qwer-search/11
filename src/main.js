import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入自己的组件库
import UI from "@/components/library";

import 'normalize.css'
import '../src/assets/style/common.less'

createApp(App).use(store).use(router).use(UI).mount('#app')
