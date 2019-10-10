<template>
  <div>
    <!-- 一级路由页面 -->
    <h1>登录</h1>
    <input type="text" placeholder="账号" />
    <br />
    <input type="password" placeholder="密码" />
    <button @click="login">点击登录</button>
  </div>
</template>
<script>
export default {
  name: 'login',
  methods: {
    login() {
      window.localStorage.setItem(
        'userInfo',
        JSON.stringify({ userName: '张三' })
      )
      //登录成功跳转到你之前想去的页面或者首页
      let redirect = this.$route.query.redirect || '/films'
      this.$router.replace(redirect)
    }
  }
}
</script>