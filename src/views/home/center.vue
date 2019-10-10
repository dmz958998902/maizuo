<template>
  <div class="page-two-center">
    <!-- 二级路由页面 -->
    <h1>个人中心页面</h1>
    <p v-if="userInfo.userName">{{ userInfo.userName }}</p>
    <router-link to="/login" v-else>登录</router-link>
    <hr />
    <router-link to="/money">余额</router-link>
  </div>
</template>
<script>
export default {
  name: 'center',
  data() {
    let userInfo = window.localStorage.getItem('userInfo')
    return {
      userInfo: userInfo ? JSON.parse(userInfo) : {}
    }
  }
}
</script>