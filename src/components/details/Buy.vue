<template>
	<div class="details">
		<div class="nav">
			<div class="iconfont back-icon" @click="jump">&#xe624;</div>
		</div>
		<div class="image">
			<img src="../../../public/img/banner_ps.jpg" alt="">
		</div>
		<div class="project">
			<span @click="c_jump" ref="project" style="color:#4cacec">课程介绍</span>
			<span @click="l_jump" ref="conlist">内容列表</span>	
		</div>
		<div class="line1" v-show="line1"></div>
		<div class="line2" v-show="line2"></div>
		<div class='tab' ref="tab">
			<div class='tab_content' ref='tabcontent'>
				<div class='tab_item item1' ref="con">
					<img src="../../../public/img/ps.png" style="width:100%">
				</div>	
				<div class='tab_item item2' ref="list">
					<ul>
						<li class="mui-media">
							<p><span class="dian">·</span>基础模块</p>
						</li>
						<li class="mui-media">
							<p><span class="dian">·</span>图像校色</p>
						</li>
						<li class="mui-media">
							<p><span class="dian">·</span>LR图像校色</p>
						</li>
						<li class="mui-media">
							<p><span class="dian">·</span>人物修图</p>
						</li>
						<li class="mui-media">
							<p><span class="dian">·</span>产品修图</p>
						</li>
						<li class="mui-media">
							<p><span class="dian">·</span>基础抠图</p>
						</li>
						<li class="mui-media">
							<p><span class="dian">·</span>高级抠图</p>
						</li>
						<li class="mui-media">
							<p><span class="dian">·</span>图像合成+剪切蒙版</p>
						</li>
						<li class="mui-media">
							<p><span class="dian">·</span>滤镜+详情页</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="bottom">
			<div class="add">加入购物车</div>
			<div class="buy">购买¥79&nbsp;&nbsp;<span>¥99</span></div>	
		</div>
	</div>
</template>
<script>
import BScroll from "better-scroll"
	export default{
		data(){
			return {
				left:document.body.clientWidth,
				line1:true,
				line2:false
			}
		},
		created(){
			this.$nextTick(() => {
        		this.InitTabScroll()
      		})
		},
		mounted(){
			// this.$refs.tabcontent.style.marginLeft=-this.left+'px';
		},
		methods:{
			InitTabScroll(){
				this.$refs.tabcontent.style.width=(document.body.clientWidth)*2+'px';
				this.$refs.con.style.width=document.body.clientWidth+'px';
				this.$refs.list.style.width=document.body.clientWidth+'px';
				this.$nextTick(()=>{
					if(!this.scroll){
						this.scroll=new BScroll(this.$refs.tab,{
							startX:0,
							click:true,
							scrollX:true,
							scrollY:false,
							probeType:3,
							eventPassthrough:'vertical'
						})
						this.scroll.on('scroll',(pos)=>{
							//console.log(pos.x)
							//console.log(this.scroll.directionX)
							if(this.scroll.directionX==1){
								this.scroll.scrollTo(-375,0,1000);
								this.line1=false;
								this.line2=true;
								this.$refs.project.style.color='#666'
								this.$refs.conlist.style.color='#4cacec'
							}else if(this.scroll.directionX==-1){
								this.scroll.scrollTo(0,0,1000);
								this.line1=true;
								this.line2=false;
								this.$refs.project.style.color='#4cacec'
				  				this.$refs.conlist.style.color='#666'
							}
						})
					}else{
						this.scroll.refresh()
					}
				})
			},
			jump(){
				this.$router.go(-1)
			},
			c_jump(){
				//console.log(111)
				this.$refs.project.style.color='#4cacec'
				this.$refs.conlist.style.color='#666'
				this.scroll.scrollTo(0,0,1000);
				this.line1=true;
				this.line2=false;
				this.scroll.refresh();
			},
			l_jump(){
				//console.log(222)
				this.$refs.project.style.color='#666'
				this.$refs.conlist.style.color='#4cacec'
				this.scroll.scrollTo(-375,0,1000);
				this.line1=false;
				this.line2=true;
				this.scroll.refresh();
			}
		}
			
	}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
	.nav
		position:absolute
		top:.2rem
		left:.2rem
		z-index:100
		width:.5rem
		height:.5rem
		line-height:.5rem
		background:#000
		opacity:.6
		text-align:center
		border-radius:50%
		.iconfont
			color:#fff
	.image
		width:100%
		height:4rem
		background:red
		img
			width:100%
			height:4rem
	.project
		display:flex
		justify-content:space-around
		background:#fff
		span
			height:.8rem
			line-height:.8rem
			font-size:.28rem
			color:#666
	.line1
		position:absolute
		width:50%
		height:.04rem
		background:$bgColor	
	.line2
		position:absolute
		right:0
		width:50%
		height:.04rem
		background:$bgColor	
	.tab
		overflow:hidden
		margin-top:.04rem
		margin-bottom:1rem
		.tab_content .tab_item
			float:left
			ul
				background:#fff
				.mui-media
					height:1rem
					margin-left:.2rem
					margin-right:.2rem
					border-bottom:1px solid #f0f0f0
					p
						line-height:1rem
						color:#333
						.dian
							color:$bgColor
							font-weight:bold
							margin-right:.2rem
	.bottom
		width:100%
		position:fixed
		bottom:0
		display:flex
		div
			flex:1
			text-align:center
			height:1rem
			line-height:1rem
			background:$bgColor	
			font-size:.3rem
		.add
			background:#fff
			color:#666
		.buy
			color:#fff
			span
				color:rgba(0,0,0,.3)
				text-decoration:line-through
		
			
								
</style>