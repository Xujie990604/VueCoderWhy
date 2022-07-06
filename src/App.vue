<template>
  <div>
    app页面
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'APP',
  data () {
    return {

    }
  },
  created () {
    console.log(this.axios)
  }
}
</script>

<style lang="scss">
$color: red;

</style>
