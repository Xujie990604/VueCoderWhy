<!--
 * @Author: x09898 coder_xujie@163.com
 * @Date: 2022-06-16 17:27:06
 * @LastEditors: x09898 coder_xujie@163.com
 * @LastEditTime: 2022-07-07 20:15:42
 * @FilePath: \VueCoderWhy\src\views\TestView.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by x09898 coder_xujie@163.com, All Rights Reserved. 
-->
<template>
  <div class="test-view">
    <div :id="name"></div>
  </div>
</template>
<script>
export default {
  name: 'TestView',
  data() {
    return {
      name: 'app',
      isTrue: true
    }
  },
  beforeCreate() {
  }, 
  created() {
    window.data = this
  },
  methods: {
    /**
     * @description: 
     * @param {*} a
     * @param {*} b
     * @return {*}
     */    
    add(a, b) {
      return a + b;
    }
  }
}
</script>

<style scoped>

</style>
