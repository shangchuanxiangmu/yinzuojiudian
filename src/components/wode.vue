<template>
	<div class="wode">
		<div class="top4">
			<div>让生活更精彩</div>
			<div @click="deng">登录 / 注册</div>
		</div>
		<div class="middle3">
			<div class="middle3_div1">
				<div>
					<div>0张</div>
					<div>优惠券</div>
				</div>
				<div>
					<div>0分</div>
					<div>积分</div>
				</div>
			</div>
			<div class="middle3_div2">
				<div>常用服务</div>
				<ul>
					<li v-for="item in arr1">
						<router-link   :to='item.path1'>
							<div><img :src="item.url"/></div>
							<div>{{item.name}}</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name : 'wode',
		data(){
			return{
				arr1:[
					{
						url:'../../static/fapiao.jpg',
						name:'我的发票',
						path1:'/fapiao'
					},
					{
						url:'../../static/dingdan.jpg',
						name:'我的订单',
						path1:'/dan'
					},
					{
						url:'../../static/kefu.jpg',
						name:'智能客服',
						path1:'/kefu'
					},
					{
						url:'../../static/dianhua.jpg',
						name:'客服电话',
						path1:'/dianhua'
					},
					{
						url:'../../static/xieyi.jpg',
						name:'用户协议',
						path1:'/xieyi'
					},
					{
						url:'../../static/yinsi.jpg',
						name:'隐私声明',
						path1:'/yinsi'
					},
					{
						url:'../../static/huiyuan.jpg',
						name:'会员政策',
						path1:'/huiyuan'
					},
					{
						url:'../../static/guanyu.jpg',
						name:'关于本软件',
						path1:'/guanyu'
					},
					{
						url:'../../static/zhuxiao.jpg',
						name:'注销账号',
						path1:'/zhuxiao'
					}
				]
			}
		},
		methods:{
			deng(){
				 this.$router.push({ path:'/denglv'})
			}
		}
		
	}
</script>

<style>
	.wode{
		width: 100%;
	}
	.top4{
		width: 100%;
		height: 14.5rem;
		background-image: url(../../static/beijing.jpg);
		background-repeat: no-repeat;
		background-size: 100%;
		overflow: hidden;
	}
	.top4>div:nth-child(1){
		width: 8rem;
		height: 2rem;
		font-size: 1.3rem;
		margin: 2rem auto;
	}
	.top4>div:nth-child(2){
		width: 11rem;
		height: 4.5rem;
		border-radius: 5rem;
		border: 0.1rem solid black;
		font-size: 1.3rem;
		text-align: center;
		line-height: 4.5rem;
		margin: 0.3rem auto;
	}
	.middle3{
		width: 100%;
		height: 60rem;
		background: #f1f1f1;
		position: relative;
	}
	.middle3_div1{
		width: 35rem;
		height: 6.5rem;
		border-radius: 0.5rem;
		background: white;
		position: absolute;
		top: -1.5rem;
		left: 1.3rem;
		display: flex;
	}
	.middle3_div1>div:nth-child(1){
		width: 17.5rem;
		height: 4rem;
		border-right: 0.2rem solid #f9f9f9;
		margin-top: 1.2rem;
	}
	.middle3_div1>div:nth-child(1)>div{
		width: 3.7rem;
		height: 2rem;
		margin: 0 auto;
	}
	.middle3_div1>div:nth-child(1)>div:nth-child(1){
		text-align: center;
		font-size: 1.6rem;
		color: #53aafa;
		margin-bottom: 0.5rem;
	}
	.middle3_div1>div:nth-child(2){
		width: 15rem;
		height: 4rem;
	}
	.middle3_div1>div:nth-child(2){
		width: 17.5rem;
		height: 4rem;
		margin-top: 1.2rem;
	}
	.middle3_div1>div:nth-child(2)>div{
		width: 3.7rem;
		height: 2rem;
		margin: 0 auto;
	}
	.middle3_div1>div:nth-child(2)>div:nth-child(1){
		font-size: 1.6rem;
		color: #53aafa;
		margin-bottom: 0.5rem;
	}
	.middle3_div2{
		width: 35rem;
		height: 28rem;
		background: white;
		border-radius: 0.5rem;
		position: absolute;
		top: 7rem;
		left: 1.3rem;
	}
	.middle3_div2>div{
		width: 6.5rem;
		height: 1.6rem;
		font-size: 1.6rem;
		font-weight: 600;
		margin: 2.2rem 2.5rem;
	}
	.middle3_div2>ul>li{
		width: 6.5rem;
		height: 8rem;
		margin-left: 2rem;
		font-size: 1.3rem;
		float: left;
	}
	.middle3_div2>ul>li>a>div>img{
		width: 2.5rem;
		height: 2.5rem;
	}
	.middle3_div2>ul>li>a>div:nth-child(1){
		width: 2.5rem;
		height: 2.5rem;
		margin: 0 auto;
	}
	.middle3_div2>ul>li>a>div:nth-child(2){
		width: 6.5rem;
		text-align: center;
		margin-top: 1rem;
	}
</style>