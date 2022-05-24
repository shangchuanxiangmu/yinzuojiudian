<template>
	<div class="cunchu">		
		<div class="shu">
			<div class="shu_xiao1">
				<div><img src="../../static/fanhui.jpg" @click="hui()"/></div>
				<div>
					<img src="../../static/xin.jpg" class="xin"/>
					<img src="../../static/xiang.jpg" @click="dian()"/>
				</div>
			</div>
			<div class="shu_xiao2">
				<div class="middle7_left">
					<img :src="aa.url"/>
				</div>
				<div class="middle7_right">
					<div class="ming">{{aa.ming}}</div>
					<div class="ba">
						<span>{{aa.bang}}</span>
						<span>{{aa.lun}}</span>
					</div>
					<div class="cha">
						<span>{{aa.chajia}}</span>
						<span>{{aa.zizhu}}</span>
					</div>
					<div class="ju">{{aa.juli}}</div>
					<div class="jia">
						<span>{{aa.jiage}}</span>
					</div>
				</div>
			</div>
			<div class="anniu" @click="dingyue()">
				订阅
			</div>
			<div class="tanchu" :style="{ display:xian }">订阅成功</div>
			<div class="zhezhao" v-show="isShow" @click="cang()"></div>
			<div class="di" v-show="isShow">
				<div>
					<div><img src="../../static/weixin.jpg"/></div>
					<div>微信好友</div>
				</div>
				<div>
					<div><img src="../../static/pengyouquan.jpg"/></div>
					<div>微信朋友圈</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'cunchu',		
		data(){
			return{		
				xian:'none',
				aa:[],
				isShow:false
			}
		},
		methods:{
			hui(){
				 window.history.go(-1);
			},
			dingyue(){
				
				var a=this.xian;
				
				var that=this;
				this.xian="block";
				setInterval(function(){
					that.xian="none"
					
				},1500)
				localStorage.setItem("at",JSON.stringify(this.aa))
				console.log(at)
			},
			dian(){
				this.isShow=true
			},
			cang(){
				this.isShow=false
			}
		},
		mounted(){
			this.aa=JSON.parse(localStorage.getItem("dat"))
		}
		
	}
</script>

<style>
	.shu{
		width: 100%;
		height: 61rem;
		background: white;
		margin-top: 0.5rem;
	}
	.shu_xiao1{
		width: 36rem;
		height: 6rem;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		background: white;
		overflow: hidden;
	}
	.shu_xiao1>div{
		margin-top: 1rem;
	}
	.shu_xiao2{
		width: 36rem;
		height: 18rem;
		margin: 0 auto;
		background: white;
	}
	.middle7_left{
		float: left;
	}
	.middle7_left>img{
		width: 12rem;
		height: 15rem;
	}
	.middle7_right{
		float: left;
	}
	.middle7_right>.ming{
		width: 20rem;
		height: 2rem;
		margin-left: 0.5rem;
		margin-top: 0.5rem;
		font-size: 1.5rem;
		font-weight: 600;
	}
	.middle7_right>.ba{
		width: 20rem;
		height: 2rem;
		margin-left: 0.5rem;
		margin-top: 0.5rem;
	}
	.middle7_right>.ba>span:nth-child(1){
		font-size: 1.5rem;
		color: #5999ed;
	}
	.middle7_right>.ba>span:nth-child(2){
		margin-left: 0.3rem;
		color: #969696;
	}
	.middle7_right>.cha{
		width: 20rem;
		height: 3rem;
		margin-left: 0.5rem;
		margin-top: 0.5rem;
	}
	.middle7_right>.cha>span:nth-child(1){
		width: 7.5rem;
		height: 1.5rem;
		border: 0.1rem solid #e6deca;
		display: inline-block;
		color: #e7d1a4;
	}
	.middle7_right>.cha>span:nth-child(2){
		width: 5.5rem;
		height: 1.5rem;
		border: 0.1rem solid #e6deca;
		display: inline-block;
		color: #e7d1a4;
		margin-left: 0.2rem;
	}
	.middle7_right>.ju{
		width: 20rem;
		height: 2rem;
		color: #c4c4c4;
		margin-left: 0.5rem;
		margin-top: 0.5rem;
	}
	.middle7_right>.jia{
		width: 6.8rem;
		height: 3rem;
		margin-left: 14.5rem;
		margin-top: 3rem;
		color: #f6a496;
		font-size: 1.7rem;
	}
	.anniu{
		width: 10rem;
		height: 5rem;
		text-align: center;
		line-height: 5rem;
		border-radius: 0.5rem;
		color: white;
		font-size: 1.5rem;
		background: #56adfc;
		margin: 2rem auto;
	}
	.tanchu{
		width: 31rem;
		height: 4rem;
		line-height: 4rem;
		text-align: center;
		margin: -9rem auto;
		background: #f0f9eb;
		border-radius: 0.5rem;
		color: #a4d878;
	}
	.zhezhao{
		width: 100%;
		height: 54rem;
		border: 0.1rem solid black;
		background: #000000;
		opacity: 0.5;
		position: fixed;
		top: 0;
		left: 0;
	}
	.di{
		width: 37.5rem;
		height: 13.6rem;
		background: white;
		position: fixed;
		bottom: 0;
		z-index: 11;
		font-size: 1.6rem;
		display: flex;
		justify-content: space-around;
	}
	.di>div{
		margin-top: 2rem;
	}
	.di>div>div:nth-child(1)>img{
		width: 7rem;
		height: 7rem;
	}
</style>