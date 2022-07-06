<template>
    <div class="home-page-main" @click="$emit('update:name', 'xiaohan');">
       我是main页面的name: {{name}}
    </div>
</template>

<script>
export default {
  name: 'HomePageMain',
  data () {
    return {

    }
  },
  props: {
    name: {
      default: 'Vue',
      type: String
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
