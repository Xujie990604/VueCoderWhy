<template>
  <div class="test-view">
    test页面{{ name }} {{lName}}

    {{ arr1 }} {{ arr2 }}
  </div>
</template>

<script>
export default {
  name: "TestView",
  // 如果data和beforeCreate中同时定义了某个变量。会先从beforeCreate中读取数据
  // data中的数据初始化有顺序吗？
  data() {
    return {
      arr1: this.arr.en,
      arr2: this.arr.zh,
      arr: "",
      name: "data中定义",
      lName: this.name
    };
  },
  // beforeCreated会在data初始化之前执行
  // beforeCreated可以定义this.xxx。但是拿不到data中定义的数据
  beforeCreate() {
    // this.$axios('http://jsonplaceholder.typicode.com/posts')
    // let url = 'http://jsonplaceholder.typicode.com/posts';
    // let xmlHttp = new window.XMLHttpRequest();
    // xmlHttp.open("GET", url, true);
    // xmlHttp.send(null);
    // this.arr = JSON.parse(xmlHttp.responseText)
    // console.log(this.arr)
    this.arr = {
      en: 'xujie',
      zh: 'xiaohan'
    }
    this.name = "beforeCreated中定义";
    console.log(this.name);
  },
  created() {
    console.log("created");
  },
  methods: {},
};
</script>

<style scoped></style>
