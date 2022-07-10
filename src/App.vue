<!--
 * @Author: your Name
 * @Date: 2022-06-10 10:50:31
 * @LastEditors: xujie 1607526161@qq.com
 * @LastEditTime: 2022-07-10 23:15:50
 * @Description:项目的app.vue文件
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

<style lang="scss">
// 引入base.css
@import 'assets/css/base.css';

.main-tab-bar {
 position: fixed;
 bottom: 0;
 border-top: 1px solid #666;
}
</style>
