<template>
	<div class="binguan">
		<div class="zhe" @click="xiao()" :style="{display:cang}"></div>
		<div class="quan" :style="{display: cang}">
			<div v-for='(i,index) in ass' v-show="index==num" >
				{{i}}
			</div>
			
		</div>
		<div class="top5">
			<div class="min">
				<div class="min_div1">
					<div class="min_div1_div1"><img src="../../static/fanhui.jpg" @click="fanhui2()"/></div>
					<div class="min_div1_div2">
						<div><span>郑州市</span><img src="../../static/xiangxia.jpg"/></div>
						<div>2家</div>
					</div>
					<div class="min_div1_div3">地图</div>
				</div>
				<router-link to='/sousuo'>
					<div class="min_div2">
					<div class="min_div2_left">
						<div>住 04-09</div>
						<div>店 04-10</div>
					</div>
					<div class="min_div2_right">
						<img src="../../static/sousuo1.jpg"/>
						<span>关键字/酒店/地址</span>
					</div>
				</div>
				</router-link>
				<div class="min_div3">
					<ul>
						<li v-for="(item,index) in zhineng" :class="{active:index == num}" @click="zou(index)">
							<span>{{item.name}}</span>
							<img :src="item.url"/>
						</li>						
					</ul>
				</div>
			</div>
		</div>
		<div class="middle7">
			<ul>
				<li v-for="(item,index) in guan" @click="tiao(item,$event)">

						<div class="middle7_left">
							<img :src="item.url"/>
						</div>
						<div class="middle7_right">
							<div class="ming">{{item.ming}}</div>
							<div class="ba">
								<span>{{item.bang}}</span>
								<span>{{item.lun}}</span>
							</div>
							<div class="cha">
								<span>{{item.chajia}}</span>
								<span>{{item.zizhu}}</span>
							</div>
							<div class="ju">{{item.juli}}</div>
							<div class="jia">
								<span>{{item.jiage}}</span>
							</div>
						</div>

				</li>
			</ul>			
		</div>
	</div>
</template>

<script>
	export default{
		name:'binguan',
		data(){
			return{
				num: 0,
				cang:'none',
				ass:["11","22","33","44"],
				zhineng:[
					{
						name:'智能排序',
						url:'../../static/xiangxia1.jpg'
					},
					{
						name:'价格区间',
						url:'../../static/xiangxia1.jpg'
					},
					{
						name:'酒店品牌',
						url:'../../static/xiangxia1.jpg'
					},
					{
						name:'服务设施',
						url:'../../static/xiangxia1.jpg'
					}
				],
				guan:[
					{
						url:'../../static/liebiao1.jpg',
						ming:'银座佳驿郑州文化路省实...',
						bang:'4.9棒',
						lun:'783条评论',
						chajia:'差价双倍赔偿',
						zizhu:'自助选房',
						juli:'距您32.9km',
						jiage:'￥99'
					},
					{
						url:'../../static/liebiao2.jpg',
						ming:'银座佳驿郑州东风路科技...',
						bang:'5.0棒',
						lun:'456条评论',
						chajia:'差价双倍赔偿',
						zizhu:'自助选房',
						juli:'距您33.5km',
						jiage:'￥119'
					}
				]
			}
		},
		methods:{
			fanhui2(){
				 if (window.history.length >= 1) {
	                this.$router.push({path:'/'})  /*返回到首页*/
	            } 
			},
			zou(index) {
		      this.num = index;
		      
		      this.cang="block";
		  	},
		  	xiao(){
		  		this.cang="none";
		  	},
		  	tiao(e){
		  		 this.$router.push({ path:'/cunchu'})  /*跳转页面*/
		  		localStorage.setItem("dat",JSON.stringify(e));
		  	}
		}
	}
</script>

<style>
	.binguan{
		width: 100%;
		position: relative;
	}
	.zhe{
		width: 100%;
		height: 60rem;
		background: #000000;
		opacity: 0.5;
		z-index: 10;
		position: absolute;
		top: 0;
		left: 0;
	}
	.quan>div{
		width: 100%;
		height: 43.3rem;
		background: white;
		position: fixed;
		font-size: 2rem;
		text-align: center;
		line-height: 43.3rem;
		bottom: 0;
		left: 0;
		z-index: 11;
	}
	.top5{
		width: 100%;
		height: 15rem;
		background: white;
	}
	.min{
		width: 35.3rem;
		margin: 0 auto;
		overflow: hidden;
	}
	.min_div1{
		width: 35.3rem;
		height: 5rem;
		margin-top: 1rem;
		display: flex;
		justify-content: space-between;
	}
	.min_div1_div2>div:nth-child(1){
		width: 7rem;
		height: 2rem;
		font-size: 1.4rem;
		color: #666666;
	}
	.min_div1_div2>div:nth-child(1)>img{
		vertical-align: middle;
	}
	.min_div1_div2>div:nth-child(2){
		width: 7rem;
		height: 2rem;
		text-align: center;
		font-size: 1.3rem;
		color: #e6e6e6;
	}
	.min_div1_div3{
		font-size: 1.4rem;
		color: #5f5f5f;
	}
	.min_div2{
		width: 35rem;
		height: 4.5rem;
		background: #eeeeee;
		border-radius: 0.5rem;
		display: flex;
	}
	.min_div2_left{
		width: 6.5rem;
		height: 3rem;
		border-bottom: 0.1rem solid #e5e5e5;
		margin-top: 0.7rem;
		margin-left: 1rem;
	}
	.min_div2_right{
		width: 20rem;
		height: 3rem;
		margin-top: 0.7rem;
		margin-left: 2rem;
	}
	.min_div2_right>img{
		width: 3rem;
		height: 3rem;
		vertical-align: middle;
	}
	.min_div3{
		width: 35rem;
		height: 1.8rem;
		margin-top: 2.5rem;
	}
	.min_div3>ul{
		display: flex;
		justify-content: space-between;
	}
	.min_div3>ul>li>img{
		vertical-align: middle;
	}
	.middle7{
		width: 100%;
		height: 46rem;
		background: #f6f6f6;
		margin-top: 0.5rem;
	}
	.middle7>ul>li{
		width: 36rem;
		height: 18rem;
		margin: 0 auto;
		background: white;
	}
	.middle7>ul>li>:nth-child(2){
		margin-top: 0.5rem;
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
</style>