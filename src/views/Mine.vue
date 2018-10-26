<template>
  <div class="mine">
  	<div class="bg">
	  	<div class="nav">
	  		<h3>我</h3>
	  	</div>
	 	<div class="head">
	 		<div class="logining" v-if="islogin">
		 		<img src="../../public/img/20170920_044314_9591.jpg">
				<span>{{uname}}<span @click="signout">退出登录</span></span>
	 		</div>	
	 		<div class="login" v-else>
	 			<router-link to="/login">登录，做个学霸～</router-link>
	 		</div>
	 	</div>
 	</div>
 	<ul class="mui-table-view mui-table-view-chevron">
		<li class="mui-table-view-cell mui-media">
			<a class="mui-navigate-right">
				<div class="mui-media-body">
					<p class='mui-ellipsis'>我的订单</p>
				</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media">
			<a class="mui-navigate-right">
				<div class="mui-media-body">
					<p class='mui-ellipsis'>我的余额</p>
				</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media">
			<a class="mui-navigate-right">
				<div class="mui-media-body">
					<p class='mui-ellipsis'>购物车</p>
				</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media">
			<a class="mui-navigate-right">
				<div class="mui-media-body">
					<p class='mui-ellipsis'>优惠券</p>
				</div>
			</a>
		</li>
	</ul>
  </div>
</template>

<script>
import axios from "axios"
import qs from "qs"
	export default {
	  data(){
	    return {
	    	islogin:false,
	    	uname:""
	    }
	  },
	  methods:{
	  	signout(){
			sessionStorage.removeItem("uid");
			this.islogin=false;
		}
	  },
	  mounted(){
			var uid=sessionStorage.getItem("uid");
			//console.log(uid)
			axios.post("http://localhost:3000/login/islogin",
	            qs.stringify({uid:uid})
				//console.log(window.uid);
	        ).then(res=>{
	                this.islogin=res.data.ok==1;
	                //console.log(res.data);
					this.uname=res.data.uname;
					//console.log(this.uname)
	            })
		}
	}
</script>
<style lang="stylus" scoped>
.bg
	background:url('../../public/img/bg_01.jpg') no-repeat
	background-size:100% 100%
	position:relative
	top:-.88rem
	margin-top:.86rem
	.nav
		height:.86rem
		color:#333
		text-align:center
		h3
			line-height:.86rem
			font-size:.3rem	
			margin-top:0
			color:#fff
	.head
		padding-left:.4rem
		margin-bottom:.1rem
		padding-top:.2rem
		padding-bottom:.3rem
		height:2.5rem
		.logining
			img
				width:1.4rem
				height:1.4rem
				border-radius:50%
			span
				font-size:.3rem
				margin-left:.2rem
				color:#fff
		.login
			text-align:center
			a
				color:#fff
				font-size:.28rem
				line-height:1.6rem
ul
	margin-top:-1rem
</style>
