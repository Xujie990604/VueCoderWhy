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
    let arr = [1,2,3]
    console.log("created 1")
    this.start();
    console.log("created 2");
  },
  methods: {
    start() {
     console.log('start')
    }
  },
};
</script>

<style scoped></style>
