<!--
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-07-10 14:24:59
 * @LastEditors: xujie 1607526161@qq.com
 * @LastEditTime: 2022-07-17 16:51:37
 * @FilePath: \supermarket\src\views\homePage\HomePage.vue
 * @Description: home视图组件
-->
<template>
  <div class="home-page">
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navBar/NavBar.vue'
export default {
  components: { NavBar },
  name: 'HomePage',
  data() {
    return {
    }
  }
}
</script>
