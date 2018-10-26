<template>
  <div class="header">
	<router-link to="/search" class="header-input">
		<span class="iconfont">&#xe632;</span>
		<span class="content">小程序·算法·面试</span>
	</router-link>
	<div class="header-right">
		<div class="iconfont back-look">&#xe601;</div>
	</div>
  </div>
</template>

<script>


export default {
  name: 'home',
}
</script>
<style lang="stylus" scoped>
	@import '~@/assets/styles/varibles.styl'
	.header 
		position:fixed
		top:0
		z-index:1000
		width:100%
		display:flex
		line-height:.86rem
		background:#fff
		color:#fff
		.header-input
			flex:1
			height:.64rem
			line-height:.64rem
			margin-top:.12rem
			margin-bottom:.12rem
			margin-left:.32rem
			background:#f2f2f2
			border-radius:.1rem
			color:#ccc
			padding-left:.2rem
			.iconfont
				color:#999
			.content
				font-size:.28rem
				margin-left:.14rem
		.header-right
			width:.86rem
			.back-look
				font-size:.5rem
				margin-left:.14rem
				color:#999
</style>
