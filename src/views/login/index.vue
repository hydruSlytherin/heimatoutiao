<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
      title="登录"
    />
    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
    <van-field
      v-model="user.mobile"
      name="手机号"
      placeholder="请输入手机号"
      left-icon="phone-circle-o"
      :rules="userFormRules.mobile"
    />
    <van-field
      v-model="user.code"
      name="验证码"
      placeholder="请输入验证码"
      left-icon="comment-circle-o"
      :rules="userFormRules.code"
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
      },
      userFormRules: {
        mobile: [{ required: true, message: '手机号不能为空' }, { pattern: /^\d{11}$/, message: '格式错误' }],
        code: [{ required: true, message: '验证码不能为空' }, { pattern: /^\d{6}$/, message: '格式错误' }]
      }
    }
  },
  methods: {
    async onSubmit () {
      // 1.获取表单数据
      const user = this.user

      // 2.表单验证
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true
      })

      // 3.提交表单请求登录
      try {
        const { data } = await login(user)
        this.$store.commit('setUser', data.data)
        // console.log('success', res)
        this.$toast.success('登录成功')
      } catch (err) {
        if (err.response.status === 404) {
          this.$toast.fail('手机号或验证码错误')
        } else {
          this.$toast.fail('登录失败')
        }
      }
      // 4.根据请求响应结果处理后续操作
    },
    async onClickLeft () {
      this.$router.back()// 返回上一个页面
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
