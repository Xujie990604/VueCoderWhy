<!--
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-07-10 14:24:59
 * @LastEditors: xujie 1607526161@qq.com
 * @LastEditTime: 2022-07-12 23:07:58
 * @FilePath: \supermarket\src\views\homePage\HomePage.vue
 * @Description: home视图组件
-->
<template>
  <div class="home-page">
    <!-- 顶部导航栏 -->
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar.vue";
import { getOneData, addOneData } from 'network/homePage/HttpHomePage'
export default {
  components: { NavBar },
  name: "HomePage",
  data() {
    return {
        data: {
          title: 'xujie',
          body: 'body',
          userId: 1
        }
    };
  },
  created() {
    getOneData()
    .then(res => console.log(res))

    addOneData({ data: this.data })
    .then(res => console.log(res))
  }
};
</script>

<style lang="scss" scoped>
.home-page {
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
}
</style>
