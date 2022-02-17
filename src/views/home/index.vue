<template>
  <div class="home-container">
    <!-- 搜索导航栏 -->
    <van-nav-bar class="page-nav-bar">
      <van-button class="search-btn" slot="title" type="info" size="small" round icon="search">搜索</van-button>
    </van-nav-bar>
    <!-- 标签页 -->
    <van-tabs v-model="active">
      <van-tab
       :title="channel.name"
       v-for="channel in channels"
       :key="channel.id"
      >{{ channel.name }}</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getUserChannels } from '@/api/user.js'
export default {
  name: 'HomeIndex',
  data () {
    return {
      active: 0,
      channels: []
    }
  },
  created () {
    this.loadChannels()
  },
  methods: {
    async loadChannels () {
      try {
        const { data } = await getUserChannels()
        this.channels = data.data.channels
      } catch (err) {
        this.$toast('error')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  .search-btn {
    width: 163px;
    height: 32px;
    background-color: #5babef;
    border: none;
  }
}
</style>
