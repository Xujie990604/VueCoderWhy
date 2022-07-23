<!--
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-07-10 14:24:59
 * @LastEditors: xujie 1607526161@qq.com
 * @LastEditTime: 2022-07-23 12:54:15
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
import { getHomeMultidata } from 'network/homePage/HttpHomePage'
export default {
  components: { NavBar },
  name: 'HomePage',
  data() {
    return {
      banner: [], // 轮播图的数据
      recommend: [] // 推荐的数据
    }
  },
  created() {
    // 获取页面的所有数据
    // p156 11:33
    // 存在dev的暂存区
    // a
    getHomeMultidata().then(res => {
      console.log('Home页面请求到的所有数据', res.data)
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
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
