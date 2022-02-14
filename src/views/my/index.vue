<template>
  <div class="my-container">
    <div v-if="user" class="header user-info">
      <div class="base-info">
        <div class="left">
          <van-image
            class="avatar"
            round
            fit="cover"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <span class="text">用户名</span>
        </div>
        <div class="right">
          <van-button round type="info" size="small">编辑资料</van-button>
        </div>
      </div>
      <div class="data-status">
        <div class="data-item">
          <span class="count">66</span>
          <span class="text">头条</span>
        </div>
        <div class="data-item">
          <span class="count">66</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">66</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="count">66</span>
          <span class="text">获赞</span>
        </div>
      </div>
    </div>
    <div v-else class="header not-login">
      <div class="login-btn" @click="$router.push('/login')">
        <van-icon name="user-circle-o" size=80px color="#fff" />
        <span class="text">登录 / 注册</span>
      </div>
    </div>
    <!-- 宫格导航 -->
    <van-grid :column-num="2" class="grid-nav" clickable>
      <van-grid-item class="grid-item"><i slot="icon" class="iconfont icon-star"></i><span slot="text" class="text">收藏</span></van-grid-item>
      <van-grid-item class="grid-item"><i slot="icon" class="iconfont icon-package"></i><span slot="text" class="text">历史</span></van-grid-item>
    </van-grid>

    <van-cell title="消息通知" is-link />
    <van-cell title="智能对话" is-link />
    <van-cell class="logout-cell" title="退出登录"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MyIndex',
  data () {
    return {}
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style lang="less" scoped>
  .my-container {
    .header {
      height: 200px;
      background-color: #1989fab0;
      .text {
        color: #fff;
      }
    }
    .not-login {
      display: flex;
      justify-content: center;// 垂直居中
      align-items: center;// 水平居中
      .login-btn {
        display: flex;
        flex-direction: column;
        justify-content: center;// 垂直居中
        align-items: center;// 水平居中
        .text {
          font-size: 20px;
        }
      }
    }
    .user-info {
      .base-info {
        height: 135px;
        padding: 50px 20px 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          display: flex;
          align-items: center;
          .avatar {
            width: 90px;
            height: 90px;
            border: 2px solid #fff;
            margin-right: 20px;
          }
        }
      }
      .data-status {
        display: flex;
        .data-item {
          height: 77px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .count {
            color: #fff;
          }
        }
      }
    }
    .grid-nav {
      .grid-item {
        height: 86px;
        i.iconfont {
          font-size: 30px;
        }
        .icon-star {
          color: #fa1919b0;
        }
        .icon-package {
          color: #fab319b0;
        }
      }
    }
  }
</style>
