
<!--
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-07-10 14:24:59
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \supermarket\src\views\homePage\HomePage.vue
 * @Description: home页面
-->

<template>
  <div class="home-page">
    <!-- 顶部导航栏 -->
    <nav-bar><div slot="center">购物车</div></nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banner="banner"></home-swiper>
    <!-- 推荐组件 -->
    <home-recommend :recommend="recommend"></home-recommend>
    <!-- 本周推荐 -->
    <home-feature></home-feature>
    <!-- tab 组件 -->
    <tab-controller
      :tabs="tabs" default="0"
      @tab-click="tabClick">
    </tab-controller>
    <!-- 商品展示组件 -->
    <good-list :goods="showGoods"></good-list>
    <!-- p165开始 -->
  </div>
</template>

<script>
// 公共组件
import NavBar from 'components/common/navBar/NavBar.vue'
import TabController from 'components/content/TabController.vue'
import GoodList from 'components/content/goods/GoodList.vue'
// 子组件
import HomeSwiper from './homePageChild/HomeSwiper.vue'
import HomeRecommend from './homePageChild/HomeRecommend.vue'
import HomeFeature from './homePageChild/HomeFeature.vue'
// 网络请求的方法
import { getHomeMultidata, getHomeGoods } from 'network/homePage/HttpHomePage'

export default {
  components: {
    NavBar,
    TabController,
    GoodList,
    HomeSwiper,
    HomeRecommend,
    HomeFeature
  },
  name: 'HomePage',
  data() {
    return {
      banner: [], // 轮播图的数据
      recommend: [], // 推荐的数据
      tabs: [ // tab 组件中需要使用的数据
        {
          label: '流行',
          name: '0'
        },
        {
          label: '新款',
          name: '1'
        },
        {
          label: '精选',
          name: '2'
        }
      ],
      goods: { // 展示三种商品的信息
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop' // 当前展示商品的类型
    }
  },
  computed: {
    // 要传进商品组件中进行展示的数据
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('new', 1)
    this.getHomeGoods('pop', 1)
    this.getHomeGoods('sell', 1)
  },
  methods: {
    /**
     * @description: 获取页面需要的多条数据
     * @return { undefined }
     */
    getHomeMultidata() {
      getHomeMultidata()
        .then(res => {
          console.log('Home页面请求到的所有数据', res.data)
          this.banner = res.data.banner.list
          this.recommend = res.data.recommend.list
        })
        .catch(err => console.log(err))
    /**
     * @description: 获取页面中的商品数据
     * @params { String } 获取商品的类型
     * @params { Number } 获取商品的页码
     * @return { undefined }
     */
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page)
        .then(res => {
          this.$utils.showMessage(res.returnCode)
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page++
          console.log(this.goods)
        })
        .catch(err => {
          console.log(err)
          // 错误不是由服务端返回的，是由浏览器或者 Vue 抛出的
          // 所以错误里面没有 错误码 ，消息提示时一律为未知错误
          this.$utils.showMessage(err.returnCode)
        })
    },
    /**
     * @description: 点击 tab 时进行商品信息的切换
     * @param { String } index 商品种类的索引值
     * @return { undefined }
     */
    tabClick(index) {
      switch (index) {
        case '0':
          this.currentType = 'pop'
          break
        case '1':
          this.currentType = 'new'
          break
        case '2':
          this.currentType = 'sell'
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.home-page {
  padding-top: 44px;
  // 顶部导航栏 z-index设置为3，是因为下面使用的swiper插件的z-index是2
  // 为了保证 导航栏不被 swiper 遮挡，需要设置一个大于它的数值
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
  }
  // 为了 tab 在滚动时不被商品列表遮挡
  .tab-controller {
    z-index: 1;
  }
}

</style>
