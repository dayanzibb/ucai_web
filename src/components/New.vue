<template>
  <div class="hot">
  	<div class="nav">
		<router-link to="/" class="iconfont back-icon">&#xe624;</router-link>
		<span class="middle">最新</span>
	</div>
	<div class='bigcard'>
		<div class="card" v-for="item in list" :key="item.id">
			<div class="pic">
				<img :src="item.t_pic" >
				<span class="name">{{item.t_name}}</span>
				<span class="time">{{item.time}}</span>
			</div>
			<div class="top">
				<img :src="item.pic">
				<div class="text">{{item.content}}</div>
			</div>
			<div class="bottom">
				<span class="span1">{{item.s_time}}&nbsp;&nbsp;|&nbsp;&nbsp;{{item.watch}}人观看</span>
				<span class="span2">#视频</span>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
import {Toast} from "mint-ui";
	export default{
        data(){
            return{ 
                list:[]
             }
        }, 
        created(){
            this.getImageList();
        },      
        methods:{
            getImageList(){
                this.$http.get("grid/fight").then(result=>{
                    var obj=result.body;
                    if(obj.length>0){
                        this.list=obj;
                        //console.log(this.list)
                    }else{
                        //测试：this.$toast("数据加载失败！")
                        Toast("数据加载失败！");//脚手架
                    }
                    
                });
            }
        }
    }
</script>
<style lang="stylus" scoped>
	.nav
		height:.86rem
		color:#333
		background:#fff
		border-bottom:1px solid #ccc
		position:fixed
		top:0
		width:100%
		z-index:1000
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
	.bigcard
		margin-top:.86rem
		.card
			width:100%
			margin-bottom:.2rem
			background:#fff
			padding:.2rem 0
		.pic
			width:92%
			height:.7rem
			margin:0 auto
			img
				width:.6rem
				height:.6rem
				border-radius:50%
			.name
				font-size:.26rem
				color:#999
				margin-left:.2rem
			.time
				font-size:.26rem
				color:#999
				float:right
		.top
			width:92%
			height:30%
			position:relative
			margin:0 auto
		img
			width:100%
			height:30%
			border-radius:.1rem
		.text
			position:absolute
			width:100%
			height:.8rem
			background:rgba(0,0,0,.5)
			color:#fff
			bottom:0
			border-radius:.1rem
			line-height:.8rem
			font-size:.28rem
			padding-left:.1rem
		.bottom
			width:92%
			height:.6rem
			line-height:.8rem
			font-size:.24rem
			color:#999
			margin:0 auto
			.span1
				float:left
			.span2
				float:right
			
		
</style>

