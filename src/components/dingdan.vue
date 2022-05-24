<template>
	<div class="dingdan">
		<div class="top3">
			<div class="dan">订单</div>
			
		</div>
		<div class="ding">
				<el-tabs v-model="activeName" @tab-click="handleClick" >
					<el-tab-pane label="全部" name="first" >全部页面</el-tab-pane>
					<el-tab-pane label="待支付" name="second">
						<div class="han">
							<div class="pane1">
								<ul>
									<li>订单信息</li>
									<li>实付款</li>
									<li>订单状态</li>
									<li>交易操作</li>
								</ul>
							</div>
							<div class="pane2" :style="{display:pan}">
								<ul>
									<li>
										<div class="zuo">
											<img :src="bb.url"/>
										</div>
										<div class="you">
											<div>{{bb.bang}}</div>
											<div>{{bb.lun}}</div>
										</div>
									</li>
									<li>{{bb.jiage}}</li>
									<li>等待付款</li>
									<li>
										<div @click="fu()">立即付款</div>
										<div @click="shi()">取消订单</div>
									</li>								
								</ul>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="待评价" name="third">待评价页面</el-tab-pane>
					<el-tab-pane label="退款" name="fourth">退款页面</el-tab-pane>
				</el-tabs>
			</div>
			<div class="chulai" :style="{ display:lai }">付款成功</div>
	</div>
</template>

<script>
	export default {
		name : 'dingdan',
		data(){
			return{
				 activeName: 'second',
				 bb:[],
				 lai:'none',
				 pan:'block'
			}
		},
		methods:{
			fu(){
				var that=this;
				this.lai='block'
				
				setInterval(function(){
					that.lai="none"
					
				},1500)
			},
			shi(){
				this.pan="none"
			}
		},
	    mounted(){
	    	this.bb=JSON.parse(localStorage.getItem("at"))
	    }
	}
</script>

<style>
	.dingdan{
		width: 100%;
		height: 60rem;
		position: relative;
	}
	.top3{
		width: 100%;
		height: 9.5rem;
		background: white;
		overflow: hidden;
	}
	.top3>.dan{
		width: 4rem;
		height: 3rem;
		font-size: 2rem;
		margin: 1rem auto;
		font-weight: 600;
	}
	.el-tabs {
		width: 37.5rem;
	}
	.el-tabs__header{
		width: 37.5rem;
		/*margin: 0 auto;*/
	}
	.el-tabs__content{
		width: 37.5rem;
		height: 60rem;
		margin: 1rem auto;
		line-height: 10rem;
		text-align: center;
	}
	.ding{
		width: 37.5rem;
		position: absolute;
		top: 5.4rem;
		left: 0;
	}
	.el-tabs__item {
   	 padding: 0 3.5rem;
	}
	.el-tabs--top .el-tabs__item.is-top:nth-child(2) {
   	 padding-left: 1rem;
	}
	.el-tab-pane{
		width: 37.5rem;
		height: 60rem;
	}
	.pane1{
		width: 37.5rem;
		height: 5rem;
	}
	.pane1>ul{
		width: 37.5rem;
		margin-top: -3rem;
		list-style: none;
		display: flex;
		justify-content: center;
	}
	.pane1>ul>li{
		width: 8rem;
		height: 3rem;
	}
	.pane1>ul>li:nth-child(1){
		width: 13rem;
	}
	.pane2{
		width: 37.5rem;
		height: 6rem;
	}
	.pane2>ul{
		width: 37.5rem;
		margin-top: 1.5rem;
		list-style: none;
		display: flex;
		justify-content: center;
	}
	.pane2>ul>li{
		width: 8rem;
		height: 6rem;
		border: 0.1rem solid #b8becd;
	}
	.pane2>ul>li:nth-child(1){
		width: 13rem;
	}
	.pane2>ul>li:nth-child(2){
		text-align: center;
		line-height: 6rem;
	}
	.pane2>ul>li:nth-child(3){
		text-align: center;
		line-height: 6rem;
	}
	.pane2>ul>li:nth-child(4)>div:nth-child(1){
		width: 6rem;
		height: 3rem;
		background: #f36a6e;
		text-align: center;
		line-height: 3rem;
		color: white;
		margin: 0.2rem auto;
		border-radius: 0.5rem;
	}
	.pane2>ul>li:nth-child(4){
		position: relative;
	}
	.pane2>ul>li:nth-child(4)>div:nth-child(2){
		width: 10rem;
		height: 2rem;
		line-height: 2rem;
		text-align: center;
		position: absolute;
		top: 3.6rem;
		left: -0.9rem;
	}
	.zuo{
		position: relative;
	}
	.zuo>img{
		width: 5rem;
		height: 5rem;
		position: absolute;
		top: 0.4rem;
		left: 0.2rem;
		float: left;
	}
	.you{
		
		position: absolute;
		top: 0.4rem;
		left: 6rem;
	}
	.you>div:nth-child(2){
		margin-top: -7rem;
	}
	.chulai{
		width: 31rem;
		height: 4rem;
		line-height: 4rem;
		text-align: center;
		margin: 12.5rem auto;
		background: #f0f9eb;
		border-radius: 0.5rem;
		color: #a4d878;
	}
</style>