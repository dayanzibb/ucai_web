<template>
	<div class="table">
		<div class="bigbox">
			<h4>今日热门</h4>
			<div class="line"></div>
			<ul class="mui-table-view mui-grid-view">
		       <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in tableImage" :key="item.id" @click="jump(item.cid)">
		            <a href="#">
		                <img class="mui-media-object" :src="item.pic">
		                <div class="mui-media-body">{{item.content}}</div>
		                <div class="mui-media-map">
		                	<span>免费</span>
		                </div>
		            </a>
		        </li>
		    </ul> 
		    <router-link to="/hot"><h6>查看全部&nbsp;&gt;</h6></router-link>
	    </div>
	    <div class="bigbox">
			<h4>最新课程</h4>
			<div class="line"></div>
			<ul class="mui-table-view mui-grid-view">
		       <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in news" :key="item.id">
		            <a href="#">
		                <img class="mui-media-object" :src="item.pic">
		                <div class="mui-media-body">{{item.content}}</div>
		                <div class="mui-media-map">
		                	<span>免费</span>
		                </div>
		            </a>
		        </li>>
		    </ul> 
		    <router-link to="/new"><h6>查看全部&nbsp;&gt;</h6></router-link>
	    </div>
	</div>
</template>
<script>
import store from '@/store.js'
	export default{
		data(){
			return{
				tableImage:[],
				news:[]
			}
		},
		created(){
            this.getTableImage();
            this.getNew();
        },      
        methods:{
            getTableImage(){
               this.$http.get("grid/grid").then(result=>{
               	this.tableImage=result.body;
       				//console.log(result.bodyText);
           		 })
       		 },
       		  getNew(){
                this.$http.get("grid/fight").then(result=>{
                    var obj=result.body;
                    //console.log(obj);
                    var newList=[];
                    if(obj.length>0){
                    	for(var i=0;i<4;i++){
                    		newList.push(obj[i])
                    	}
                    	 this.news=newList;
                    	//console.log(this.news)
                        //console.log(this.list)
                    }else{
                        //测试：this.$toast("数据加载失败！")
                        Toast("数据加载失败！");//脚手架
                    }
                    
                });
            },
            jump(id){
            	//console.log(id);
            	this.$router.push("/details")
            }
   		 }
	}
</script>
<style lang="stylus" scoped>
	.table
		padding-bottom:.9rem
		.bigbox
			background-color:#fff
			h4
				background:#fff
				margin:0
				padding-top:.4rem
				padding-bottom:.14rem
				flex:1
				text-align:center
				color:#333
				font-size:.3rem
			h6
				flex:1
				text-align:center
				color:#333
				font-size:.24rem
				padding-top:.2rem
				padding-bottom:.3rem
			.line
				margin:0 auto
				width:.4rem
				border-bottom:1px solid #333
				background-color:#fff
			.mui-table-view:before
				background-color:#fff
			.mui-table-view.mui-grid-view
				padding-top:.1rem
				padding-bottom:.3rem	
				.mui-table-view-cell .mui-media-object	
					width:96%
					border-radius:.1rem
				.mui-table-view-cell .mui-media-body
					width:94%
					height:.66rem
					line-height :.34rem
					font-size:.26rem
					text-align:left
					white-space:normal
					display:-webkit-box
					-webkit-line-clamp:2
					-webkit-box-orient:vertical
					margin:.16rem auto 0
				.mui-table-view-cell .mui-media-map
					width:.8rem
					height:.4rem
					position:relative
					z-index:100
					top:-1.3rem
					left:2.4rem
					background:#4cacec
					border-radius:.1rem
					span
						font-size:.26rem
						line-height:.4rem
						color:#fff
		#relax		
			.mui-table-view .mui-media-object
				max-width:1.4rem
				height:2rem
				border-radius:.1rem
				
						
</style>
