<!-- eslint-disable no-tabs -->
<!--
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-07-10 14:03:15
 * @LastEditors: xujie 1607526161@qq.com
 * @LastEditTime: 2022-07-10 23:17:03
 * @FilePath: \supermarket\src\components\content\MainTabBar.vue
 * @Description: 底部的导航栏组件
-->
<template>
  <div class="main-tab-bar">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane name="home">
        <span slot="label"><i class="el-icon-date">首页</i></span>
      </el-tab-pane>
      <el-tab-pane label="分类" name="category"></el-tab-pane>
      <el-tab-pane label="购物车" name="cart"></el-tab-pane>
      <el-tab-pane label="我的" name="profile"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'MainTabBar',
  data() {
    return {
      activeName: 'home' // 默认活跃标签的name
    }
  },
  methods: {
    /**
     * @description: 点击标签页进行路由的跳转
     * @param { Vue Component } tab 被点击的Vue组件
     * @return { none }
     */
    handleClick(tab) {
      this.$router.push(tab.name).catch((err) => err)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-tabs {
  ::v-deep.el-tabs__header {
    margin: 0;
    .el-tabs__nav {
      width: 100vw;
      display: flex;
      .el-tabs__item {
        flex: 1;
        height: 50px;
        text-align: center;
        line-height: 50px;
      }
    }
  }
}
</style>
