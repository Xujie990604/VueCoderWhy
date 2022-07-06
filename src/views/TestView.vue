<template>
  <div class="test-view">
    test页面
  </div>
</template>

<script>
export default {
  name: 'TestView',
  // 如果data和beforeCreate中同时定义了某个变量。会先从beforeCreate中读取数据
  // data中的数据初始化有顺序吗？
  data () {
    return {
    }
  },
  created () {
    // this.$axios("/data.json")
    const foo = () => 0
    console.log(foo)
  },
  methods: {}
}
</script>

<style scoped>

</style>
