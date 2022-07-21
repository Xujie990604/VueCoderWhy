<!--
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-07-12 20:26:58
 * @LastEditors: xujie 1607526161@qq.com
 * @LastEditTime: 2022-07-21 21:49:35
 * @FilePath: \supermarket\src\components\common\navBar\NavBar.vue
 * @Description: 顶部导航栏, 内部有三个插槽
-->
<template>
  <div class="nav-bar">
		<div class="left">
			<slot name="left"></slot>
		</div>
		<div class="center">
			<slot name="center"></slot>
		</div>
		<div class="right">
			<slot name="right"></slot>
		</div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
	display: flex;
	height: 44px;
	line-height: 44px;
	text-align: center;
	box-shadow: 0 1px 1px rgba(100, 100, 100, .8);
	// 左右两个插槽固定宽度
	.left, .right{
		flex: 0 0 60px;
	}
	// 中间插槽占满余下宽度
	.center {
		flex: 1 1 0;
	}
}
</style>
