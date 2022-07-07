<template>
    <div class="home-page ">
       我是HomePage页面: {{$t("normal.confirm")}}
       <el-input placeholder="输入"> </el-input>
       <home-page-main></home-page-main>
    </div>
</template>

<script>
import HomePageMain from '@/components/HomePage/HomePageMain.vue'
export default {
  name: 'HomePage',
  components: {
    HomePageMain
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
