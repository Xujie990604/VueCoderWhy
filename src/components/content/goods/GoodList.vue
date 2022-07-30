<!--
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-07-31 00:14:40
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \supermarket\src\components\content\goods\GoodList.vue
 * @Description: 商品组件
-->
<template>
  <div class="good-list">
    <good-list-item
      class="good-list-item"
      v-for="(good, index) in goods"
      :key="index"
      :goods-item="good"
    />
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'
export default {
  name: 'GoodList',
  components: {
    GoodListItem
  },
  props: {
    goods: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>

<style  lang="scss" scoped >
.good-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .good-list-item {
    flex: 1 1 150px;
    padding-right: 3px;
    padding-left: 3px;
  }
}
</style>
