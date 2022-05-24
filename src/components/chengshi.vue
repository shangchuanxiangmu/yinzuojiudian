<template>
	<div class="chengshi">
		<div class="top">
			<img src="../../static/jiantou.jpg" @click="go()"/>
			<p>选择城市</p>
		</div>
		<div class="middle">
			<div class="sou">
				<input type="text" name="" id="" value="" placeholder="拼音或头字母搜索城市"/>
				<img src="../../static/sousuo.jpg"/>
			</div>
			<div class="dangqian">
				当前
			</div>
			<div class="diqu">
				<div>
					郑州
				</div>
			</div>
			<div class="redian">热点城市</div>
			<div class="recheng">
				<ul v-for="item in recheng">
					<li>{{item}}</li>					
				</ul>
			</div>
			<div class="a"><a href="#" name="A">A</a></div>
			<div class="b"><a href="#" name="B">B</a></div>
			<div class="baoding">保定</div>
			<div class="c"><a href="#" name="C">C</a></div>
			<div class="caoxian">曹县</div>
			<div class="d"><a href="#" name="D">D</a></div>
			<div class="dongying">东营</div>
			<div class="e"><a href="#" name="E">E</a></div>
			<div class="emei">峨眉山</div>
			<div class="f"><a href="#" name="F">F</a></div>
			<div class="feicheng">肥城</div>
			<div class="g"><a href="#" name="G">G</a></div>
			<div class="gaotang">高唐</div>
			<div class="h"><a href="#" name="H">H</a></div>
			<div class="huimin">惠民</div>
			<div class="j"><a href="#" name="J">J</a></div>
			<div class="jinan">济南</div>
			<div class="k"><a href="#" name="K">K</a></div>
			<div class="kunming">昆明</div>
			<div class="l"><a href="#" name="L">L</a></div>
			<div class="luoyang">洛阳</div>
			<div class="m"><a href="#" name="M">M</a></div>
			<div class="n"><a href="#" name="N">N</a></div>
			<div class="ningyang">宁阳</div>
			<div class="p"><a href="#" name="P">P</a></div>
			<div class="penglai">蓬莱</div>
			<div class="q"><a href="#" name="Q">Q</a></div>
			<div class="qingdao">青岛</div>
			<div class="r"><a href="#" name="R">R</a></div>
			<div class="rizhao">日照</div>
			<div class="s"><a href="#" name="S">S</a></div>
			<div class="shenyang">沈阳</div>
			<div class="t"><a href="#" name="T">T</a></div>
			<div class="tianjin">天津</div>
			<div class="w"><a href="#" name="W">W</a></div>
			<div class="weihai">威海</div>
			<div class="x"><a href="#" name="X">X</a></div>
			<div class="xuzhou">徐州</div>
			<div class="y"><a href="#" name="Y">Y</a></div>
			<div class="yantai">烟台</div>
			<div class="z"><a href="#" name="Z">Z</a></div>
			<div class="zhengzhou">郑州</div>
		</div>
		<div class="aside">
			<ul>
				<li v-for="item in aside"><a :href="item.href" >{{item.name}}</a></li>
				
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name : 'chengshi',
		data(){
			return{
				recheng:['青岛','济南','泰安','潍坊','威海','烟台','淄博','临沂'],
				aside:[
					{
						href:'#A',
						name:'A'
					},
					{
						href:'#B',
						name:'B'
					},
					{
						href:'#C',
						name:'C'
					},
					{
						href:'#D',
						name:'D'
					},
					{
						href:'#E',
						name:'E'
					},
					{
						href:'#F',
						name:'F'
					},
					{
						href:'#G',
						name:'G'
					},
					{
						href:'#H',
						name:'H'
					},
					{
						href:'#I',
						name:'I'
					},
					{
						href:'#J',
						name:'J'
					},
					{
						href:'#K',
						name:'K'
					},
					{
						href:'#L',
						name:'L'
					},
					{
						href:'#M',
						name:'M'
					},
					{
						href:'#N',
						name:'N'
					},
					{
						href:'#O',
						name:'O'
					},
					{
						href:'#P',
						name:'P'
					},
					{
						href:'#Q',
						name:'Q'
					},
					{
						href:'#R',
						name:'R'
					},
					{
						href:'#S',
						name:'S'
					},
					{
						href:'#T',
						name:'T'
					},
					{
						href:'#U',
						name:'U'
					},
					{
						href:'#V',
						name:'V'
					},
					{
						href:'#W',
						name:'W'
					},
					{
						href:'#X',
						name:'X'
					},
					{
						href:'#Y',
						name:'Y'
					},
					{
						href:'#Z',
						name:'Z'
					}
				]
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
</script>

<style>
	body{
		background: white;
	}
	.top{
		width: 100%;
		height: 5rem;
		font-size: 2rem;
		line-height: 5rem;
		background: #43a0fd;
		display: flex;
		position: fixed;
		top: 0;
	}
	.top>img{
		width: 5rem;
		height: 5rem;
	}
	.top>p{
		margin-left: 11rem;
		color: white;
	}
	.middle{
		height: 445rem;
		font-size: 2rem;
	}
	.middle>div{
		padding-left: 3rem;
	}
	.sou{
		width: 37.5rem;
		height: 5rem;
		position: fixed;
		background: white;
		top: 5.5rem;
	}
	.sou>input{
		width: 27rem;
		height: 4rem;
		border: 0.1rem solid black;
		outline: none;
		padding-left: 7.5rem;
		margin: -1.9rem;
		border-radius: 4rem;
	}
	.sou>img{
		position: absolute;
		left: 2.7rem;
		top: 0.7rem;
	}
	.dangqian{
		width: 30.5rem;
		background: #e8e8e8;
		margin-top: 13rem;
		line-height: 4rem;
		padding-left: 3rem;
		
	}
	.diqu{
		width: 30.5rem;
		height: 9rem;
		background: #f4f4f4;
		overflow: hidden;
	}
	.diqu>div{
		width: 10rem;
		line-height: 4rem;
		text-align: center;
		background: white;
		margin: 2.5rem 1.5rem;
	}
	.redian{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
		padding-left: 3rem;
	}
	.recheng{
		width: 30.5rem;
		height: 25rem;
		background: #f4f4f4;
	}
	.recheng>ul>li{
		width: 10rem;
		line-height: 4rem;
		text-align: center;
		background: white;
		margin: 1rem;
		float: left;
	}
	.a{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
	}
	.b{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
	}
	.baoding{
		width: 30.5rem;
		height: 7rem;
		line-height: 7rem;
		margin-left: 2rem;
	}
	.c{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
	}
	.caoxian{
		width: 30.5rem;
		height: 7rem;
		line-height: 7rem;
		margin-left: 2rem;
	}
	.d{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
	}
	.dongying{
		width: 30.5rem;
		height: 7rem;
		line-height: 7rem;
		margin-left: 2rem;
	}
	.e{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
	}
	.emei{
		width: 30.5rem;
		height: 7rem;
		line-height: 7rem;
		margin-left: 2rem;
	}
	.f{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
	}
	.feicheng{
		width: 30.5rem;
		height: 7rem;
		line-height: 7rem;
		margin-left: 2rem;
	}
	.g{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
	}
	.gaotang{
		width: 30.5rem;
		height: 7rem;
		line-height: 7rem;
		margin-left: 4rem;
	}
	.h{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
	}
	.huimin{
		width: 30.5rem;
		height: 7rem;
		line-height: 7rem;
		margin-left: 2rem;
	}
	.j{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
	}
	.jinan{
		width: 30.5rem;
		height: 7rem;
		line-height: 7rem;
		margin-left: 2rem;
	}
	.k{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
	}
	.kunming{
		width: 30.5rem;
		height: 7rem;
		line-height: 7rem;
		margin-left: 2rem;
	}
	.l{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
	}
	.luoyang{
		width: 30.5rem;
		height: 7rem;
		line-height: 7rem;
		margin-left: 2rem;
	}
	.m{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
	}
	.n{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
	}
	.ningyang{
		width: 30.5rem;
		height: 7rem;
		line-height: 7rem;
		margin-left: 2rem;
	}
	.p{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
	}
	.penglai{
		width: 30.5rem;
		height: 7rem;
		line-height: 7rem;
		margin-left: 2rem;
	}
	.q{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
	}
	.qingdao{
		width: 30.5rem;
		height: 7rem;
		line-height: 7rem;
		margin-left: 2rem;
	}
	.r{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
	}
	.rizhao{
		width: 30.5rem;
		height: 7rem;
		line-height: 7rem;
		margin-left: 2rem;
	}
	.s{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
	}
	.shenyang{
		width: 30.5rem;
		height: 7rem;
		line-height: 7rem;
		margin-left: 2rem;
	}
	.t{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
	}
	.tianjin{
		width: 30.5rem;
		height: 7rem;
		line-height: 7rem;
		margin-left: 2rem;
	}
	.w{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
	}
	.weihai{
		width: 30.5rem;
		height: 7rem;
		line-height: 7rem;
		margin-left: 2rem;
	}
	.x{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
	}
	.xuzhou{
		width: 30.5rem;
		height: 7rem;
		line-height: 7rem;
		margin-left: 2rem;
	}
	.y{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
	}
	.yantai{
		width: 30.5rem;
		height: 7rem;
		line-height: 7rem;
		margin-left: 2rem;
	}
	.z{
		width: 30.5rem;
		background: #e8e8e8;
		line-height: 4rem;
	}
	.zhengzhou{
		width: 30.5rem;
		height: 7rem;
		line-height: 7rem;
		margin-left: 2rem;
	}
	.aside{
		width: 4rem;
		height: 100rem;
		/*border: 1px solid black;*/
		text-align: center;
		font-size: 1.5rem;
		position: fixed;
		right: 0px;
		top: 10rem;
		background: white;
	}
</style>