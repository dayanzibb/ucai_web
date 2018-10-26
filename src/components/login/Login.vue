<template>
	<div>
		<div class="nav">
			<router-link to="/mine" class="iconfont back-icon">&#xe607;</router-link>
			<span class="middle">登录</span>
		</div>
		<div class="form">
			<input type="text" placeholder="手机号" v-model="phone">
			<input type="password" placeholder="密码" v-model="upwd">
			<button disabled id="btn" @click="sub">登录</button>
			<router-link to="/register"><p>手机号码快速注册</p></router-link>	
		</div >
	</div>
</template>
<script>
import { Toast } from 'mint-ui'
import axios from "axios"
import Qs from "qs"
	export default{
		data(){
			return{
				phone:"",
				upwd:""
			}
		},
		updated(){
			if(this.phone!="" && this.upwd!=""){
				var btn=document.getElementById("btn");
				btn.disabled=false;
				btn.style.backgroundColor="#4cacec";
			}
		},
		mounted(){

		},
		methods:{
			sub(){
				axios.post("http://localhost:3000/login/logins",
				Qs.stringify({phone:this.phone,upwd:this.upwd}))
				.then(result=>{
				console.log(result);
				if(result.data.ok!=0){
					var u=result.data.uid;
					sessionStorage.setItem("uid",u);
					Toast({
					  message: '登录成功！3s后返回我的页面',
					  position: 'center',
					  duration: 3000
					});
					setTimeout(()=>{
						this.$router.push("/mine");
					},3000)
				}else{
					this.uname="";
					this.upwd="";
				}
	         })
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
	.form
		background:#fff
		padding:.8rem
		display:flex
		flex-direction:column
		input
			font-size:.26rem
		button
			height:.9rem
			background:#999
			color:#fff
		p
			font-size:.24rem
			text-align:right
			margin-top:.2rem
			
	
</style>