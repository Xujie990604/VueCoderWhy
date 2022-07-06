<template>
  <div class="home-page " @click="changeName">
    我是HomePage页面的name: {{$store.state.name}}
  </div>
</template>

<script>
// import HomePageMain from '@/components/HomePage/HomePageMain.vue';
export default {
  name: 'HomePage',
  components: {
    // HomePageMain
  },
  data () {
    return {
      checkLIst: ['1', '2', '3']
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
