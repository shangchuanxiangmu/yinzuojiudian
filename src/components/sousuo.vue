<template>
	<div class="sousuo">
		<div class="sousuo1_div1">
			<img src="../../static/jiantou.jpg" @click="gd()"/>
			<div>
				<input type="" name="" id="" value="" placeholder="酒店名/商圈/地址"/>
				<img src="../../static/sousuo.jpg"/>
			</div>
		</div>
		<div class="sousuo1_div2">
			
			<div class="navbar-list">
		      <ul class="flex-imd">
		          <li v-for="(item,index) in obj" :key="index" class="navbar-item" @click="tab(index,$event)" :data-navid='item.navId'>
		            {{item.tab}}
		          </li>
		      </ul>
		   </div>
			<div v-for="(i,index) in obj" v-show="i.show">{{i.title}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'sousuo',
		data(){
			return{
				obj:[
					{
						"tab":"搜索历史",
						"show":true,
						"title":"历史"
					},
					{
						"tab":"行政区",
						"show":false,
						"title":"我是政区"
					},
					{
						"tab":"商业区",
						"show":false,
						"title":"我是商业"
					},
					{
						"tab":"机场车站",
						"show":false,
						"title":"我是机场车站"
					},
					{
						"tab":"火车站",
						"show":false,
						"title":"我是火车站"
					},
					{
						"tab":"高铁车站",
						"show":false,
						"title":"我是高铁车站"
					},
					{
						"tab":"汽车车站",
						"show":false,
						"title":"我是汽车车站"
					},
				]
			}
		},
		methods:{
			tab:function(index,e){				
				for(var i=0;i<this.obj.length;i++){
					this.obj[i].show=false;
					
					if(i==index){
						this.obj[index].show=true;
					}
				}
			},
			gd(){
				 window.history.go(-1);
			}
		}
	}
</script>

<style>
	.sousuo{
		width: 100%;
	}
	.sousuo1_div1{
		width: 100%;
		height: 5rem;
		background: #43a0fd;
	}
	.sousuo1_div1>img{
		width: 5rem;
		height: 5rem;
	}
	.sousuo1_div1>div{
		position: relative;
	}
	.sousuo1_div1>div>input{
		width: 23rem;
		height: 3rem;
		border-radius: 2rem;
		line-height: 3rem;
		position: absolute;
		padding-left: 5rem;
		top: -4.5rem;
		left: 7rem;
		outline: none;
	}
	.sousuo1_div1>div>img{
		position: absolute;
		top: -4rem;
		left: 8.8rem;
	}
	.sousuo1_div2{
		font-size: 1.4rem;
	}
	.navbar-list{
	  margin: 20px auto;
	  width: 100%;
	  height: 80px;
	  position: relative;
	  overflow-x: scroll;
	  overflow-y: hidden;    /*溢出隐藏*/
	}
	.navbar-list>ul{
	  /* padding: 0 20px; */
	  position: absolute;
	  height: 80px;
	  left: 0;
	  display: flex;
	  flex-flow: row nowrap;
	}
	.navbar-item{
	  /* width: 120px; */
	  width: max-content;
	  padding: 0px 18px;
	  box-sizing: border-box;
	  height: 80px;
	  display: flex;
	  flex-flow: column nowrap;
	  justify-content: space-around;
	  align-items: center;
	  cursor: pointer;
	  /* margin-right: 10px; */
	}
	.navbar-list::-webkit-scrollbar {
	  display: none;
	}
	.navbar-item.act{
	  background-image: -webkit-linear-gradient(left, #ff512f, #dd2476);
	  -webkit-background-clip: text;
	  -webkit-text-fill-color: transparent;
	  font-weight: bold;
	}
	.sousuo1_div2>div{
		width: 37.5rem;
		height: 20rem;
		margin: 0 auto;
		text-align: center;
		line-height: 20rem;
	}
</style>