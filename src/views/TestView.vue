<!--
 * @Author: x09898 coder_xujie@163.com
 * @Date: 2022-06-16 17:27:06
 * @LastEditors: xujie 1607526161@qq.com
 * @LastEditTime: 2022-07-10 01:35:45
 * @FilePath: \supermarket\src\views\TestView.vue
 * @Description:
 *
 * Copyright (c) 2022 by x09898 coder_xujie@163.com, All Rights Reserved.
-->
<template>
  <div class="test-view">
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
  }
}
</script>

<style scoped>
</style>
