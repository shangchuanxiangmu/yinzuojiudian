<template>
	<div class="huodong">
		<div class="top2">
			<span>优惠活动</span>
			<img src="../../static/fenxiang.jpg" @click="dian()"/>
		</div>
		<div class="middle">
			<ul>
				<li>
					<router-link to="/qiandao">
						<div><img src="../../static/qiandao1.jpg"/></div>
						<div>
							<span>积分签到</span>
							<span>剩余331天</span>
						</div>
						<div>积分签到</div>
					</router-link>
				</li>
				<li>
					<router-link to='/lvxing'>
						<div><img src="../../static/lvxing1.jpg"/></div>
						<div>
							<span>银座旅行家六周年庆</span>
							<span>剩余331天</span>
						</div>
						<div>银座旅行家六周年庆</div>
					</router-link>
				</li>
				<li>
					<router-link to='/chajia'>
						<div><img src="../../static/chajia1.jpg"/></div>
						<div>
							<span>差价双倍赔偿</span>
							<span>剩余331天</span>
						</div>
						<div>差价双倍赔偿</div>
					</router-link>
				</li>
			</ul>
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
	export default {
		name : 'huodong',
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
			}
		}
	}
</script>

<style>
	.huodong{
		width: 100%;
		height: 100rem;
		background: white;
	}
	.top2{
		width: 100%;
		height: 5rem;
		background: #3e95fa;
		font-size: 2rem;
		color: white;
		position: fixed;
		top: 0;
	}
	.top2>span{
		position: absolute;
		top: 1.3rem;
		left: 14rem;
	}
	.top2>img{
		width: 5rem;
		height: 5rem;
		position: absolute;
		top: 0;
		left: 32.6rem;
	}
	.middle{
		width: 34rem;
		margin: 7rem auto;
	}
	.middle>ul>li>a>div:nth-child(1)>img{
		width: 34rem;
		height: 16rem;
	}
	.middle>ul>li>a>div:nth-child(2){
		margin-top: 1rem;
		margin-left: 0.8rem;
		display: flex;
		justify-content: space-between;
	}
	.middle>ul>li>a>div:nth-child(2)>span:nth-child(1){
		font-size: 1.8rem;
		font-weight: 600;
	}
	.middle>ul>li>a>div:nth-child(2)>span:nth-child(2){
		font-size: 1.5rem;
		color: #d3d6da;
	}
	.middle>ul>li>a>div:nth-child(3){
		font-size: 1.5rem;
		color: #b1b8be;
		margin-top: 1rem;
		margin-bottom: 1rem;
		margin-left: 0.8rem;
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