<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录"/>
    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
    <van-field
      v-model="user.mobile"
      name="手机号"
      placeholder="请输入手机号"
      left-icon="phone-circle-o"
    />
    <van-field
      v-model="user.code"
      name="验证码"
      placeholder="请输入验证码"
      left-icon="comment-circle-o"
    >
      <template #button>
        <van-button round class="send-btn" size="small" type="default">获取验证码</van-button>
      </template>
    </van-field>
    <div style="margin: 16px;">
      <van-button block type="info" native-type="submit">登录</van-button>
    </div>
  </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      // 1.获取表单数据
      const user = this.user

      // 2.表单验证

      // 3.提交表单请求登录
      try {
        const res = await login(user)
        console.log('success!', res)
      } catch (err) {
        console.log('fail!', err)
      }
      // 4.根据请求响应结果处理后续操作
    }
  }
}
</script>

<style lang="less">
.login-container {
  .van-field__left-icon .van-icon {
    font-size: 22px;
  }
  .send-btn {
    height: 25px;
    background-color: #ededed;
  }
}
</style>
