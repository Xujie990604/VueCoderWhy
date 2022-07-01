<template>
  <div class="test-view">
    test页面
  </div>
</template>

<script>
export default {
  name: "TestView",
  data() {
    return {
      
    };
  },
  created() {
    console.log("created 1")
    this.start().then(res => {
      使用网络请求
    })
    console.log("created 2")
    setTimeout(() => {
      console.log('setTimeout')
    });
    console.log('before setTimeout')
  },
  methods: {
    start() {
      return new Promise(resolve => {
        console.log("start 1");
        resolve("start data");
        console.log("start 2");
      })
    }
  },
};
</script>

<style scoped></style>
