<!--
 * @Author: x09898 coder_xujie@163.com
 * @Date: 2022-06-10 10:50:31
 * @LastEditors: xujie 1607526161@qq.com
 * @LastEditTime: 2022-07-14 21:00:19
 * @FilePath: \supermarket\src\App.vue
 * @Description: App页面
-->

<template>
  <div>
    <router-view/>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar.vue'
export default {
  name: 'APP',
  components: {
    MainTabBar
  },
  data() {
    return {

    }
  }
}
</script>

<style>
/* 引入base.css */
@import 'assets/css/base.css';
</style>

<style lang="scss" scoped>
.main-tab-bar {
  position: fixed;
  bottom: 0;
  border-top: 1px solid #666;
}
</style>
