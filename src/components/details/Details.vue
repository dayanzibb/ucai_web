<template>
	<div class="details">
		<!--模态框-->
		<div class="modal-mask" v-if="showModal" @click="hideModal"></div>
		<div class="modal-dialog" v-if="showModal">
			<div class="modal-title">评论一下</div>
			<div>
				<div class="modal-content">
					<textarea placeholder="欢迎发表您的观点" v-model="text"></textarea>
				</div>
				<div class="modal-footer">
					<button @click="onCancel">取消</button>
					<button class="sub" @click="sub">发送</button>
				</div>
			</div>
		</div>
		<div class="nav">
			<div class="iconfont back-icon" @click="jump">&#xe624;</div>
		</div>
		<video src="http://127.0.0.1:3000/video/html1.mp4" x5-video-player-type="h5" webkit-playsinline="true" playsinline="true" x5-video-player-fullscreen="true" x5-video-orientation="portraint" controls></video>
		<div class="text">
			<p><span>课程简介：</span>实现手机应用隐私相册微写实图标制作，从设计思路-提炼设计元素-效果实现-细节掌握全方位打造写实图标的绘制过程。</p>
			<p><span>主要涉及的知识点：</span>UI图标分类、金属质感完美体现、形状图层的使用基本方法、立体效果打造、图层样式汇总。</p>
			<p><span>学习目标：</span>通过本节课的学习，可以提高对UI写实图标的设计思路、提炼元素、光影表现、PS图层样式使用技巧、混合模式技巧等有更深入的了解。</p>
		</div>
		<div class="xiala">
			<p class="p1" v-if="isshow" @click="show"></p>
			<p class="p2" v-else @click="hidden"></p>
		</div>
		<div class="input" @click="handleClick">
			<div class="input_w">写评论</div>	
		</div>
		<div class="comment">
			<h4>评论</h4>
			<div class="content">
				<span class="span1">大燕子bb</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>2018-06-10</span><span class="zan">1<span class="iconfont">&#xe688;</span></span>
				<p>老师讲解非常棒！</p>
			</div>
			<div class="content">
				<span class="span1">大燕子bb</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>2018-06-10</span><span class="zan">1<span class="iconfont">&#xe688;</span></span>
				<p>老师讲解非常棒！</p>
			</div>
			<div class="content">
				<span class="span1">大燕子bb</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>2018-06-10</span><span class="zan">1<span class="iconfont">&#xe688;</span></span>
				<p>老师讲解非常棒！</p>
			</div>
			<h6>查看更多&nbsp;&gt;</h6>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				isshow:true,
				showModal:false,
				text:''
			}
		},
		methods:{
			hideModal(){
				this.showModal=false
			},
			show(){
				var text=document.querySelector(".text");
				text.style.transition="1s"
				text.style.height="5.6rem";
				this.isshow=false;
			},
			hidden(){
				var text=document.querySelector(".text");
				text.style.transition="1s"
				text.style.height="1.6rem";
				this.isshow=true;
			},
			jump(){
				this.$router.go(-1)
			},
			handleClick(){
				this.showModal=true;
			},
			onCancel(){
				this.showModal=false;
			},
			sub(){
				this.showModal=false;
				console.log(this.text)
			}
		}
			
	}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
	.details
		position:relative
		.modal-mask
			width:100%
			height:100%
			position:fixed
			top:0
			left:0
			background:#000
			opacity:0.5
			overflow:hidden
			z-index:9000
			color:#fff
		.modal-dialog
			width:7rem
			overflow:hidden
			position:fixed
			top:0
			left:50%
			z-index:9999
			margin-left:-3.5rem
			margin-top:2rem
			padding-bottom:.2rem
			background:#f9f9f9
			border-radius:.2rem
			.modal-title
				padding-top:.16rem
				padding-bottom:.16rem
				font-size:.28rem
				color:#030303
				text-align:center
			.modal-content
				padding:.0 .2rem
				textarea
					font-size:.26rem
			.modal-footer
				display:flex
				margin:0 .2rem
				justify-content:space-between
				button
					width:100%
					margin-top:-.1rem
				.sub
					color:#4cacec
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
		video
			width:100%
			height:220px
		.text
			height:1.6rem
			overflow:hidden
			background:#fff
			padding:.2rem
			p
			text-indent:.4rem
			line-height:.5rem
			font-size:.26rem
			span
				font-weight:bold
				color:#333
				font-size:.28rem
		.xiala
			background:#fff
			padding-bottom:.4rem
			.p1
				width:.3rem
				height:.3rem
				border-right:1px solid #999
				border-bottom:1px solid #999
				margin:0 auto
				transform:rotate(45deg)
			.p2
				width:.3rem
				height:.3rem
				border-left:1px solid #999
				border-top:1px solid #999
				margin:0 auto
				transform:rotate(45deg)
		.input
			background:#fff
			padding:.3rem .3rem .2rem .3rem
			margin-bottom:.2rem
			.input_w
				padding:.1rem
				padding-left:.3rem
				border-radius:1rem
				background:#fff
				border:1px solid #ccc
				font-size:.28rem
				text-align:left
				color:#ccc
		.comment
			padding:.2rem
			background:#fff
			h4
				text-align:center
				font-size:.3rem
				color:#333
			.content
				border-bottom:1px solid #eee
				padding-top:.2rem
				span
					font-size:.26rem
					color:#999
				.span1
					color:$bgColor
				.zan
					float:right
					color:$bgColor
					.iconfont
						font-size:.34rem
						color:$bgColor
				p
					font-size:.26rem
			h6
				flex:1
				text-align:center
				color:#666
				font-size:.24rem
				padding-top:.2rem
				padding-bottom:.3rem
				
</style>