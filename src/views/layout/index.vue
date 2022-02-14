<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view></router-view>
    <!-- 底部标签栏 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item replace to="/" icon="home-o"><span>首页</span></van-tabbar-item>
      <van-tabbar-item replace to="/qa" icon="search"><span>问答</span></van-tabbar-item>
      <van-tabbar-item replace to="/video" icon="video-o"><span>视频</span></van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="user-o"><span>我的</span></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
