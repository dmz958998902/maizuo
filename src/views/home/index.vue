<template>
  <div class="page">
    <!-- 一级路由页面 -->

    <!-- 二级路由页面的坑 -->
    <router-view></router-view>
    <ul class="nav-bot">
      <router-link tag="li" to="/films">电影</router-link>

      <router-link tag="li" to="/cinemas">影院</router-link>

      <router-link tag="li" to="/center">我的</router-link>
    </ul>
  </div>
</template>
<style lang="scss">
@import '../../assets/styles/common/mixins.scss';

.page {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  > div:first-child {
    flex: 1;
    overflow-y: auto;
  }
  .nav-bot {
    @include border-top;
    display: flex;
    height: 50px;
    li {
      flex: 1;
      line-height: 50px;
      text-align: center;

      &.router-link-active {
        color: red;
      }
    }
  }
}
</style>