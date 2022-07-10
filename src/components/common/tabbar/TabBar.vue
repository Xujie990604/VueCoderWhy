<!--
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-07-10 14:00:26
 * @LastEditors: xujie 1607526161@qq.com
 * @LastEditTime: 2022-07-10 14:20:40
 * @FilePath: \supermarket\src\components\common\tabbar\TabBar.vue
 * @Description: 导航栏文件
-->
<template>
  <div>
    <div id="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  box-shadow: 0 -2px 1px rgba(100, 100, 100, .1);
}
</style>
