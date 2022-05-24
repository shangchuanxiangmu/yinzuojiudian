<template>
  <div id="app">
  	<router-view></router-view>
   	<div class="footer">
   		<ul>
   			<li v-for="(i,index) in sites" :key="index">
   				<router-link   :to="i.path">
   					<img  :src="i.path===$route.path?sites[index].url1 : sites[index].url"/>
   					<p>{{i.name}}</p>
   				</router-link>
   			</li>
   		</ul>
   	</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  	return {
  		sites:[
  			{
  				url:require("./assets/dibu11.jpg"),
  				url1:require("./assets/di1.jpg"),
  				name:"酒店",
  				path:"/"
  			},
  			{
  				url:require("./assets/di2.jpg"),
  				url1:require("./assets/dibu22.jpg"),
  				name:"活动",
  				path:"/huodong"
  			},
  			{
  				url:require("./assets/di3.jpg"),
  				url1:require("./assets/dibu33.jpg"),
  				name:"订单",
  				path:"/dingdan"
  			},
  			{
  				url:require("./assets/di4.jpg"),
  				url1:require("./assets/dibu44.jpg"),
  				name:"我的",
  				path:"/wode"
  			}
  		]
  	}
  }
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	body{
		width: 100%;
		/*height: 1000px;*/
		background: #eff4fa;
	}
	li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	.footer{
		width: 100%;
		height: 60px;
		background: white;
		position: fixed;
		bottom: 0;
		font-size: 18px;
		color: #d4d4d4;
	}
	.footer>ul{
		display: flex;
		justify-content: space-around;
	}	
	.footer>ul>li>a>img{
		margin-left: 4px;
	}
</style>
