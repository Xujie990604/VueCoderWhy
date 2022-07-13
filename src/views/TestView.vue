<!--
 * @Author: x09898 coder_xujie@163.com
 * @Date: 2022-06-16 17:27:06
 * @LastEditors: x09898 coder_xujie@163.com
 * @LastEditTime: 2022-07-13 14:43:32
 * @FilePath: \VueCoderWhy\src\views\TestView.vue
 * @Description: 专门用来测试的页面
-->

<template>
  <div class="test-view">
    {{ testName }}
  </div>
</template>
<script>
export default {
  name: 'TestView',
  data() {
    return {
    }
  },
  props: {
    testName: {
      type: String,
      default: 'test-name'
    }
  }
}
</script>

<style scoped>
.test-view {
  color: red;
}
</style>
