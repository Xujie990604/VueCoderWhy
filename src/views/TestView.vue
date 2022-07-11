<!--
 * @Author: x09898 coder_xujie@163.com
 * @Date: 2022-06-16 17:27:06
 * @LastEditors: x09898 coder_xujie@163.com
 * @LastEditTime: 2022-07-11 13:35:28
 * @FilePath: \VueCoderWhy\src\views\TestView.vue
 * @Description: 专门用来测试的页面
-->

<template>
  <div class="test-view">
    <ul>
      <li v-for="(item,index) of arr" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'TestView',
  data() {
    return {
      name: 'app',
      isTrue: true,
      arr: ['1', '2', '3']
    }
  },
  beforeCreate() {
  },
  created() {
    window.data = this
  },
  computed: {
  }
}
</script>

<style scoped>
</style>
