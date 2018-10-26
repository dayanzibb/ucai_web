<template>
	<div class="sort">
		<div class="nav">
			<router-link to="/" class="iconfont back-icon">&#xe624;</router-link>
			<span class="middle">分类</span>
		</div>
		<div class="course">
			<div>前端</div>
			<div>UI/UE</div>
			<div>PHP</div>
			<div>Android</div>
			<div>Java</div>
			<div>大数据</div>
			<div>游戏CG</div>
			<div>人工智能</div>
			<div>VR</div>
			<div>VR</div>
			<div>VR</div>
		</div>
	</div>
</template>

<script>


export default {
  name: 'sort',
}
</script>
<style lang="stylus" scoped>
	.nav
		height:.86rem
		color:#333
		background:#fff
		border-bottom:1px solid #ccc
		.back-icon
			height:.86rem
			line-height:.86rem
			font-size:.4rem
			color:#999	
			margin-left:.2rem
		.middle
			line-height:.86rem
			font-size:.3rem	
			margin-left:36%
	.course
		display:flex
		flex-wrap:wrap
		background:#fff
		div
			width:33.33%
			border:1px solid #e8e8e8
			text-align:center
			padding:.3rem .4rem
			font-size:.26rem
			margin-left:-1px
			margin-top:-1px
			color:#333
</style>
