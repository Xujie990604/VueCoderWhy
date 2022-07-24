<template>
  <div class="test-view-page">
    子组件内的内容
    <slot name="main" :content="content"></slot>
    <slot name="footer" :footer="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'TestViewPage',
  data() {
    return {
      content: 'son',
      footer: 'footer'
    }
  },
  props: {
    son: Object
  }

}
</script>

<style>

</style>
