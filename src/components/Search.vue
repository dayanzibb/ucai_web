<template>
	<div class="search">
		<form action=“#” class="input">
			<input type="search" placeholder="小程序·算法·面试" autofocus>
			<router-link to="/index">取消</router-link>
		</form>
		<div class="find">
			<div class="left">搜索历史</div>
			<div class="right">清空历史</div>	
		</div>
		<div class="history">
			<div class="left">H5</div>
		</div>
	</div>
</template>

<script>


export default {
  name: 'search',
}
</script>
<style lang="stylus" scoped>
	.input
		width:100%
		height:.88rem
		line-height:1.1rem
		background:#fff
		border-bottom:1px solid #eee
		input
			width:84%
			height:.6rem
			margin-left:.2rem
			font-size:.26rem
			background:#efefef
			border:none
		a
			position:relative
			font-size:.26rem
			top:-0.1rem
			left:.16rem
			color:#999
	.find
		display:flex
		justify-content:space-between
		padding:.2rem
		font-size:.28rem
		color:#333
		background:#fff
		border-bottom:1px solid #efefef
		.left
			font-weight:bold
		.right
			font-size:.22rem
			color:#669900
	.history
		padding:.2rem
		background:#fff
		font-size:.26rem
		color:#999		
			
</style>
