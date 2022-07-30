<!--
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-07-31 00:14:40
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \supermarket\src\components\content\goods\GoodListItem.vue
 * @Description: 每一个小的商品组件
-->
<template>
  <div class="goods">
    <img :src="goodsItem.show.img" alt="货品图片" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">￥{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodListItem',
  props: {
    goodsItem: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.goods {
  padding-bottom: 40px;
  position: relative;
  img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    P {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
    }
    .price {
      color: var(--color-high-text);
      margin-right: 20px;
    }
    .collect {
      position: relative;
    }
    .collect::before {
      content: "";
      position: absolute;
      left: -15px;
      top: 0;
      width: 14px;
      height: 14px;
      background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    }
  }
}
</style>
