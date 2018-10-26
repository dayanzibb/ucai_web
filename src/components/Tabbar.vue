<template>
	<div>
		<nav class="mui-bar mui-bar-tab">
			<div class="mui-tab-item" @click="addclass" id="1" >
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</div>
			<div class="mui-tab-item"  @click="addclass" id="2">
				<span class="mui-icon mui-icon-flag"></span>
				<span class="mui-tab-label">精品</span>
			</div>
			<div class="mui-tab-item" @click="addclass" id="3">
				<span class="mui-icon mui-icon-star"></span>
				<span class="mui-tab-label">课间</span>
			</div>
			<div class="mui-tab-item" @click="addclass" id="4">
				<span class="mui-icon mui-icon-extra mui-icon-extra-people"></span>
				<span class="mui-tab-label">我</span>
			</div>
		</nav>
	</div>
</template>
<script>
import store from '@/store.js'
	export default{
		data(){
			return{

			}
		},
		mounted(){
			//console.log(this.$route.path);
			if(this.$route.path=='/index'){
				document.getElementById('1').className+=' mui-active';
			}else if(this.$route.path=='/good'){
				document.getElementById('2').className+=' mui-active';
			}else if(this.$route.path=='/play'){
				document.getElementById('3').className+=' mui-active';
			}else if(this.$route.path=='/mine'){
				document.getElementById('4').className+=' mui-active';
			}
		},
		methods:{
			addclass(e){
				var parent=e.target.parentElement;
				parent.className+=' mui-active';
				if(parent.id==1){
					this.$router.push('/index');
				}else if(parent.id==2){
					this.$router.push('/good');
				}else if(parent.id==3){
					this.$router.push('/play');
				}else if(parent.id==4){
					this.$router.push('/mine');
				}
				var p=parent.parentElement;
				//console.log(p)
				var cs=p.children;
				//console.log(cs)
				for(var i=0;i<cs.length;i++){
					var ci=cs[i];
					if(ci!=parent){
						//console.log()
						//console.log(ci);
						ci.setAttribute("class",'mui-tab-item')
					}
				}
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.mui-bar.mui-bar-tab
		background-color:#fff
		box-shadow:none
		border-top:1px solid #ccc
		z-index:1000
</style>