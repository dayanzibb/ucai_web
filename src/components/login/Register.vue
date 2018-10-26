<template>
	<div>
		<div class="nav">
			<router-link to="/mine" class="iconfont back-icon">&#xe624;</router-link>
			<span class="middle">注册</span>
		</div>
		<div class="form">
			<input type="text" placeholder="用户名" v-model="uname">
			<input type="text" placeholder="手机号" v-model="phone">
			<input type="password" placeholder="密码" v-model="upwd">
			<input type="password" placeholder="确认密码" v-model="c_upwd">
			<button disabled id="btn" @click="sub">注册</button>
			<router-link to="/login"><p>已注册，立即登录</p></router-link>	
		</div>
	</div>
</template>
<script>
import { Toast } from 'mint-ui'
import axios from "axios"
import Qs from "qs"
	export default{
		data(){
			return{
				uname:"",
				phone:"",
				upwd:"",
				c_upwd:""
			}
		},
		updated(){
			var reg_phone=/^[0-9]{11}$/;
			if(reg_phone.test(this.phone)){
				if(this.uname!="" && this.phone!="" && this.upwd!="" && this.upwd==this.c_upwd){
					var btn=document.getElementById("btn");
					btn.disabled=false;
					btn.style.backgroundColor="#4cacec";
				}else{
					var btn=document.getElementById("btn");
					btn.disabled=true;
				}
			}else{
				var btn=document.getElementById("btn");
				btn.disabled=true;
			}
		},
		mounted(){

		},
		methods:{
			sub(){
				axios.post("http://localhost:3000/register",
				Qs.stringify({uname:this.uname,upwd:this.upwd,phone:this.phone}))
				.then(result=>{
       				//console.log(result);
					Toast({
					  message: '注册成功！3s后返回登录页面',
					  position: 'center',
					  duration: 3000
					});
					setTimeout(()=>{
						this.$router.push("/login");
					},3000)
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