<template>
	<div class="riqi">
		<div class="nav1">
			<img src="../../static/jiantou.jpg" @click="go()"/>
			<p>选择入住离店日期</p>
		</div>
		<div class="rili">
			<el-calendar v-model="value"></el-calendar>
		</div>						
	</div>
		
</template>

<script>
	export default {
		name : 'riqi',
		data(){
			return{
				value: new Date()
			}
		},
		methods: {
	        go(){
	            if (window.history.length >= 1) {
	                this.$router.push({path:'/'})
	            }
	        }
	   }
	}
//	$(document).ready(function(){
//		var a=new Date;
//		var month=a.getMonth()+1;
//		var year=a.getFullYear();
//		var riqi1=year+"年"+month+"月"
//		$(".middle_div2").html(riqi1)
//		a.setMonth(a.getMonth()+1)
//		var y=a.getFullYear()
//		var m=a.getMonth()+1
//		var riqi2=y+"年"+m+"月"
//		$(".middle_div8").html(riqi2)	
//		for(var i=0;i<37;i++){
//			var $li=$(".riqi_middle li").eq(i).html();
//			console.log($li)
//			if($($li)==$(day)){
//				$($li).css("color","red")
//			}
//		}
//			
//	})
</script>

<style>
	body{
		background: white;
	}
	.nav1{
		width: 100%;
		height: 5rem;
		font-size: 1.9rem;
		line-height: 5rem;
		background: #43a0fd;
		display: flex;
		position: fixed;
		top: 0;
		z-index: 11;
	}
	.nav1>img{
		width: 5rem;
		height: 5rem;
	}
	.nav1>p{
		margin-left: 5.5rem;
		color: white;
	}
	.rili{
		width: 37.5rem;
		margin-top: 5rem;
	}
</style>