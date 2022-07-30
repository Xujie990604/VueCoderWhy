<!--
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-07-26 18:50:19
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \supermarket\src\views\homePage\homePageChild\HomeSwiper.vue
 * @Description: 抽离的 el-carousel 组件
-->
<template>
  <div class="home-swiper">
    <el-carousel
      ref="swiper"
      :trigger="trigger"
      :arrow="arrow"
      :loop="loop"
      @change="change">
      <el-carousel-item
        v-for="(item, index) in banner"
        ref="item.name"
        :key="index"
        :name="item.title">
        <a :href="item.link">
          <img :src="item.image" alt="item.title">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    // 轮播图的图片数据
    banner: {
      type: Array,
      default() {
        return []
      }
    },
    // 轮播图切换的方式，在移动端情况下 hover 失效
    trigger: {
      type: String,
      default: 'click'
    },
    // 切换箭头显示时机，移动端 hover 失效
    arrow: {
      type: String,
      default: 'always'
    },
    // 是否循环
    loop: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    /**
     * @description: 轮播图切换时，将当前活跃图片的 name 传给父组件
     * @param {*} now 目前活跃的轮播图图片
     * @param {*} old 上次活跃的轮播图图片
     * @return { undefined }
     */
    change(now, old) {
      this.$emit('change-swiper', this.$refs.swiper.$children[now].name)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-carousel
{
  // 因为item使用的absolute定位，所以container不会被item撑起来
  // 图片和尺寸随着视口的宽度变化，所以给container一个根据视口宽度变化的高度
  // 52这个数值来源于 图片长度/图片高度
  // 因为 el-carousel__container 中有一个按钮的 z-index 为10 在滚动过程中会遮挡导航栏
  // 所以直接在 el-carousel__container 设置为2 小于导航栏的 3
  // 这样整个 el-carousel__container 都不会在层级上高于 导航栏，即使内部按钮的 层级为 10，但这也是在 el-carousel__container 中和同级别的兄弟们去比，无法直接和伯伯元素去比
  ::v-deep.el-carousel__container {
    height: 52vw;
    z-index: 2;
    .el-carousel__arrow {
      top: 26vw;
    }
  }
  .el-carousel__item {
    // 图片宽度和轮播图插件宽度保持一致，img DOM 在组件中出现过，不需要使用样式穿透
    img {
      // 保留图片的长宽比,图片宽度和视口宽度一致
      display: inline-block;
      width: 100%;
      height: auto;
    }
  }
}
</style>
