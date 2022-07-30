<!--
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-07-26 21:38:31
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \supermarket\src\views\homePage\homePageChild\HomeRecommend.vue
 * @Description: Home页面的 recommend 组件
-->
<template>
  <div class="home-recommend">
    <div class="recommend-item"
      v-for="(item, index) in recommend"
      :key="index">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title">
          <div class="title">{{ item.title }}</div>
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.home-recommend {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0 20px;
  border-bottom: solid 5px #eee;
  .recommend-item {
    flex: 1;
    text-align: center;
    img {
      height: 70px;
      width: 70px;
      margin-bottom: 10px;
    }
  }
}

</style>
