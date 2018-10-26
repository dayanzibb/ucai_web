<template>
	<div class="box">
		<mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.url">
            </mt-swipe-item>
        </mt-swipe>
	</div>
</template>
<script>
import {Toast} from "mint-ui";
	export default{
		name:'HomeSwiper',
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
                this.$http.get("index").then(result=>{
                    var obj=result.body;
                    if(obj.length>0){
                        //console.log(obj.msg)
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
.box
    margin-top:.86rem
	.mint-swipe
		height:2.1rem
		img
			width: 100%
			height:100%
			
    
</style>