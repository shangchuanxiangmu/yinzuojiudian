<template>
	<div class="huiyuan">
		<div class="top7">
			<div class="top7_div">
				<div><img src="../../static/jiantou.jpg" @click="go()"/></div>
				<div>会员政策</div>
				<div><img src="../../static/fenxiang.jpg" @click="dian()"/></div>
			</div>
		</div>
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
</template>

<script>
	export default{
		name:'huiyuan',
		data(){
			return{
				isShow:false
			}
		},
		methods:{
			dian(){
				this.isShow=true
			},
			cang(){
				this.isShow=false
			},
			 go(){
	           window.history.go(-1);  /*返回上一级*/
	        }
		}
	}
</script>

<style>
	.lvxing{
		width: 100%;
	}
	.top7{
		width: 37.5rem;
		height: 5.5rem;
		background: #429afc;
		overflow: hidden;
	}
	.top7_div{
		width: 37.5rem;
		height: 5rem;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}
	.top7_div>div:nth-child(1)>img{
		width: 5rem;
		height: 5rem;
	}
	.top7_div>div:nth-child(2){
		font-size: 1.6rem;
		margin-top: 1rem;	
		color: white;	
	}
	.top7_div>div:nth-child(3)>img{
		width: 5rem;
		height: 5rem;
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