<template>
	<div class="jiudian">
		<div class="top1"></div>
		<div class="middle1">
			<div class="middle1_he1"></div>
			<div class="middle1_he2">
				<router-link to='/chengshi'>
					<div class="weizhi">
						<p>郑州青年西路</p>
						<p>
							<img src="../../static/weizhi.jpg"/>
							<span>我的位置</span>
						</p>
					</div>
				</router-link>
				<router-link to='/riqi'>
					<div class="riqi">
						<p class="p1"></p>
						<span class="span1">今天</span>
						<span>-</span>
						<p class="p2"></p>
						<span class="span1">明天</span>
						<span class="jiwan">共一晚</span>
					</div>
				</router-link>
				<router-link to='/sousuo'>
					<div class="dizhi">						
						<img src="../../static/sousuo.jpg"/>
						<span>关键字/酒店/地址</span>						
					</div>
				</router-link>
				<div class="chazhao">
					<router-link to='/binguan'><button>查找酒店</button></router-link>
					<img src="../../static/fangkuang.jpg"/>
				</div>
			</div>
			<div class="middle1_he3">
				<ul>
					<li>
						<router-link to='/binguan'>
							<div><img src="../../static/zhong.jpg"/></div>
							<div>
								<p>钟点房</p>
								<p>6小时66元起</p>
							</div>
						</router-link>
					</li>
					<li>
						<router-link to='/binguan'>
							<div><img src="../../static/shu.jpg"/></div>
							<div>
								<p>APP特惠房</p>
								<p>最低七折起</p>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="middle2">
			<div>特色服务</div>
			<ul>
				<li><router-link to='/qiandao'><img src="../../static/qiandao.jpg"/></router-link></li>
				<li><router-link to='/lvxing'><img src="../../static/lvxing.jpg"/></router-link></li>
				<li><router-link to='chajia'><img src="../../static/chajia.jpg"/></router-link></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name : 'jiudian',		
	}
	$(document).ready(function(){
		var a=new Date;
		var month=a.getMonth()+1;
		var data1=a.getDate();
		var data2=a.getDate()+1;		
		var riqi1=month+"月"+data1+"日"
		var riqi2=month+"月"+data2+"日"
		$(".p1").html(riqi1)
		$(".p2").html(riqi2)
	})
	
</script>

<style>
	.top1{
		width: 100%;
		height: 9.7rem;
		background: #63c1ff;
	}
	.middle1{
		width: 100%;
		height: 33.4rem;
		background: white;
		position: relative;
	}
	.middle1>.middle1_he1{
		width: 34.6rem;
		height: 28.1rem;
		position: absolute;
		left: 1.6rem;
		top: -3.5rem;	
		background: #63c1ff;	
	}
	.middle1>.middle1_he2{
		width: 34.6rem;
		height: 28.3rem;
		position: absolute;
		border: 0.05rem solid #ececec;
		box-shadow: 0px 0.05rem 0.15rem black;
		border-radius: 0.5rem;
		left: 1.6rem;
		top: -3.5rem;	
		background: white;	
	}
	.middle2{
		width: 100%;
		height: 40rem;
		font-weight: 600;
		margin-top: 2rem;
	}
	.middle2>div{
		font-size: 2rem;
		margin-left: 1.5rem;
	}
	.middle2>ul>li{
		float: left;
		margin-left: 1rem;
	}
	.middle2>ul>li>a>img{
		width: 17rem;
		height: 19rem;
	}
	.weizhi{
		width: 34.6rem;
		height: 7rem;
		border-bottom: 0.5rem solid #b8becd;
		display: flex;
		justify-content: space-around;
	}
	.weizhi>p:nth-child(1){
		font-size: 2.2rem;
		margin-top: 1rem;
	}
	.weizhi>p:nth-child(2){
		width: 15.2rem;
		margin-top: 0.8rem;
		color: #9bdbfa;
	}
	.weizhi>p:nth-child(2)>img{
		margin-left: 5rem;
	}
	.weizhi>p:nth-child(2)>span{
		display: block;
		font-size: 1.9rem;
		margin-left: 2rem;
	}
	.riqi{
		width: 34.6rem;
		height: 6.5rem;
		line-height: 6.5rem;
		border-bottom: 0.1rem solid #b8becd;
		display: flex;
	}	
	.riqi>p{
		font-size:  2.2rem;
	}
	.riqi>span{
		font-size: 1.7rem;
	}
	.riqi>span:nth-child(2){
		width: 4rem;
		height: 0.25rem;
		display: inline-block;
	}
	.riqi>.span1{
		margin-top: 0.4rem;
	}
	.riqi>.jiwan{
		color: #b8becd;
		margin: 0.55rem;
	}
	.dizhi{
		width: 34.6rem;
		height: 6.5rem;
		line-height: 6.5rem;
		border-bottom: 0.1rem solid #b8becd;
	}	
	.dizhi>span{
		font-size: 2rem;
		color: #8f8f8f;
	}
	.dizhi>img{
		vertical-align: middle;	
		margin-left: 1rem;	
	}
	.chazhao{
		width: 34.6rem;
		height: 6.5rem;
		line-height: 6.5rem;
	}	
	.chazhao>a>button{
		padding: 1.2rem  8rem;
		background: #56adfc;
		border: none;
		margin-left: 2rem;
		border-radius: 0.5rem;
		font-size:  2rem;
		color: white;
		margin-top: 1rem;
	}
	.chazhao>img{
		vertical-align: middle;
		margin-top: -0.9rem;
	}
	.middle1_he3{
		width: 100%;
		position: absolute;
		bottom: 2rem;
	}
	.middle1_he3>ul{
		width: 100%;
		display: flex;
		justify-content: space-around;
	}
	.middle1_he3>ul>li{
		margin-left: 1.5rem;
	}
	.middle1_he3>ul>li>a>div:nth-child(1){
		margin: -4rem -2rem;
	}
	.middle1_he3>ul>li>a>div:nth-child(1)>img{
		vertical-align: middle;
	}
	.middle1_he3>ul>li>a>div:nth-child(2){
		margin-left: 2rem;
	}
	.middle1_he3>ul>li>a>div:nth-child(2)>p:nth-child(1){
		font-size: 2rem;
		font-weight: 700;
	}
	.middle1_he3>ul>li>a>div:nth-child(2)>p:nth-child(2){
		font-size: 1.5rem;
	}
</style>