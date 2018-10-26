<template>
	<div class="project">
		<div class="nav">
			<router-link to="/" class="iconfont back-icon">&#xe624;</router-link>
			<span class="middle">实战</span>
		</div>
		<div class="biglist">
			<router-link to='/buy'>
				<div class="list" v-for="item in list" :key="item.id">
			  		<div class="left">
			  			<img :src="item.pic">
			  		</div>
			  		<div class="right">
			  			<h5>{{item.content}}</h5>
			  			<span>¥{{item.price}}&nbsp;&nbsp;{{item.classify}}</span>
			  			<span class="iconfont">&#xe602;</span><span>{{item.watch}}</span>
			  		</div>
		  		</div>
	  		</router-link>
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
	.biglist
		margin-top:.86rem
		.list
			width:100%
			height:2rem
			padding-left:.3rem
			padding-right:.3rem
			background:#fff
			.left
				width:38%
				float:left
				line-height:2rem
				img
					width:100%
					border-radius:.1rem
			.right
				float:right
				width:60%
				height:2rem
				padding-left:.1rem
				padding-right:.1rem
				border-bottom:1px solid #ccc
				h5
					margin-top:.6rem
					color:#333
				span
					font-size:.24rem
					color:#999
				.iconfont
					margin-left:.4rem
					margin-right:.1rem
					color:#666
</style>
