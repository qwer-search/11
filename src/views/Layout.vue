<template>
  <!-- 顶部通栏 -->
  <AppNavbar></AppNavbar>

  <!-- 头部组件 -->
  <AppHeader></AppHeader>
  <!-- 内容容器 -->
  <div class="app-body">
    <!-- 二级路由 -->
    <RouterView />
  </div>
  <!-- 底部组件 -->
  <AppFooter></AppFooter>
</template>

<script>
import AppNavbar from '../components/app-navbar.vue'
import AppHeader from '../components/app-header.vue'
import AppFooter from '../components/app-footer.vue'

export default {

  components: { AppNavbar, AppHeader, AppFooter },
  name: 'Layout'
}
</script>

<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>
