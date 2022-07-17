<!--
 * @Author: x09898 coder_xujie@163.com
 * @Date: 2022-06-16 17:27:06
 * @LastEditors: xujie 1607526161@qq.com
 * @LastEditTime: 2022-07-17 16:54:07
 * @FilePath: \supermarket\src\views\TestView.vue
 * @Description: 专门用来测试的页面
-->

<template>
  <div class="test-view">
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[100]"
      :default-checked-keys="[96]"
      :props="defaultProps"
      @check-change="handleCheckChange">
  </el-tree>
  </div>
</template>
<script>
export default {
  name: "TestView",
  data() {
    return {
      data: [{
          id: 11,
          label: '一级 1',
          children: [{
            id: 44,
            label: '二级 1-1',
            children: [{
              id: 96,
              label: '三级 1-1-1'
            }, {
              id: 100,
              label: '三级 1-1-2',
              disabled: true
            }]
          }]
        }, {
          id: 22,
          label: '一级 2',
          children: [{
            id: 55,
            label: '二级 2-1'
          }, {
            id: 66,
            label: '二级 2-2'
          }]
        }, {
          id: 33,
          label: '一级 3',
          children: [{
            id: 77,
            label: '二级 3-1'
          }, {
            id: 88,
            label: '二级 3-2'
          }]
        }],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    // 处理点击node节点事件
    handleClick(data) {
      console.log("click", data);
    },
    // 处理选择变化
    handleCheckChange(data, checked, indeterminate) {
      console.log("change", data, checked, indeterminate);
    }
  },
};
</script>

<style scoped>
.test-view {
  color: red;
}
</style>
