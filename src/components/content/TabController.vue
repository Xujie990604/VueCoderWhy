<!--
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-07-30 15:17:04
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \supermarket\src\components\content\TabController.vue
 * @Description: tabs 导航栏
-->
<template>
  <div class="tab-controller">
    <el-tabs v-model="defaultValue" type="card" @tab-click="handleClick">
      <el-tab-pane
        v-for="(tab, index) in tabs"
        :key="index"
        :label="tab.label"
        :name="tab.name"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'TabController',
  data() {
    return {
      defaultValue: this.default
    }
  },
  props: {
    // 展示的数据列表
    tabs: {
      type: Array,
      default() {
        return []
      }
    },
    // 选中的tab
    default: {
      type: String,
      default: '0'
    }
  },
  methods: {
    handleClick(tab) {
      console.log(tab.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-controller {
  // 使用 CSS 的粘性定位属性
  position: sticky;
  top: 44px;
  background-color: #fff;
  .el-tabs {
    // 修改组件内部使用float布局的方式
    // 改用flex进行布局
    ::v-deep.el-tabs__nav {
      display: flex;
      float: none;
      .el-tabs__item {
        flex: 1;
        text-align: center;
      }
    }
  }
}
</style>
