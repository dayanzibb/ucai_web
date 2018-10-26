<template>
	<div>
		<nav class="mui-bar mui-bar-tab">
			<router-link to="/hot" class="mui-tab-item">
				<span class="mui-icon iconfont icon1">&#xe60f;</span>
				<span class="mui-tab-label">最热</span>
			</router-link>
			<router-link to="/new" class="mui-tab-item">
				<span class="mui-icon iconfont icon2">&#xe664;</span>
				<span class="mui-tab-label">最新</span>
			</router-link>
			<router-link to="/project" class="mui-tab-item">
				<span class="mui-icon iconfont icon3">&#xe637;</span>
				<span class="mui-tab-label">实战</span>
			</router-link>
			<router-link to="/sort" class="mui-tab-item">
				<span class="mui-icon iconfont icon4">&#xe600;</span>
				<span class="mui-tab-label">分类</span>
			</router-link>
		</nav>
	</div>
</template>
<script>
	
</script>
<style lang="stylus" scoped>
	.mui-bar.mui-bar-tab
		position:relative
		background-color:#fff
		box-shadow:none
		border-bottom:1px solid #eee
		padding:.1rem
		.mui-tab-item
			.mui-icon
				width:1rem
				height:.6rem
				font-size:.6rem
			.icon1
				color:#ec615c
			.icon2
				color:#e48e42
			.icon3
				color:#4cacec
			.icon4
				color:#67ad46
			.mui-tab-label
				font-size:.28rem
				margin-top:.14rem
			
			
</style>