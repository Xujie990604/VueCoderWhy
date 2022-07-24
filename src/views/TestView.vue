<!--
 * @Author: x09898 coder_xujie@163.com
 * @Date: 2022-06-16 17:27:06
 * @LastEditors: xujie 1607526161@qq.com
 * @LastEditTime: 2022-07-23 22:04:59
 * @FilePath: \supermarket\src\views\TestView.vue
 * @Description: 专门用来测试的页面
-->

<template>
  <div class="test-view" >
    <test-view-page>
      <template v-slot:footer="slotData">
        {{ slotData.footer }}
      </template>

      <template v-slot:main="slotData">
        {{ slotData.content }}
      </template>
    </test-view-page>
  </div>
</template>
<script>
import TestViewPage from './TestViewPage.vue'
export default {
  components: { TestViewPage },
  name: 'TestView',
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.test-view {
  color: red;
}
</style>
