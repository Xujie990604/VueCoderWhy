<!--
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-07-10 14:24:59
 * @LastEditors: xujie 1607526161@qq.com
 * @LastEditTime: 2022-07-17 17:39:59
 * @FilePath: \supermarket\src\views\homePage\HomePage.vue
 * @Description: home视图组件
-->
<template>
  <div class="home-page">
    <!-- 顶部导航栏 -->
    <nav-bar><div slot="center">购物车</div></nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar.vue'
import { getHomeMultidata } from 'network/homePage/httpHomePage'
export default {
  components: { NavBar },
  name: 'HomePage',
  data() {
    return {
    }
  },
  created() {
    // 获取页面的所有数据
    getHomeMultidata().then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
