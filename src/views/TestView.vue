<template>
  <div class="test-view">
    <img src="image" alt="">
    test页面
  </div>
</template>

<script>
var img = require("../assets/img/logo.png")
export default {
  name: "TestView",
  // 如果data和beforeCreate中同时定义了某个变量。会先从beforeCreate中读取数据
  // data中的数据初始化有顺序吗？
  data() {
    return {
    };
  },
  created() {
    // this.$axios("/data.json")
    // fetch("/assets/data.json")
  },
  methods: {},
};
</script>

<style scoped>
.test-view {
  /* background-image: url("../assets/img/logo.png"); */
}
</style>
