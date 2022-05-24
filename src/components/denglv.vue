<template>
	<div class="denglv">
		<div class="wei">
			<div class="wei_div1"><img src="../../static/fanhui.jpg" @click="tui"/></div>
			<div class="wei_div2">
			  <div class="content_input">
                <div class="title">
                    <p>用户登录</p>
               </div>
	            <el-input v-model="UserName" clearable placeholder="用户名"></el-input>
	            <el-input v-model="PassWord" clearable show-password placeholder="密码"></el-input>
	            <div class="content_button">
	                <el-button type="primary" @click="SignIn">登录</el-button>
	            </div>
	            <div class="zhu" @click="zhu">没有账号注册</div>
            </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'denglv',
		  data() {
            return {
                UserName: '',
                PassWord: ''
            }
        },
        methods: {
            SignIn() {
                let that = this;
                let username = that.UserName;
                let password = that.PassWord;
                if (!username) {
                    this.$notify.error({
                        title: '错误',
                        message: '用户名不能为空'
                    });
                    return;
                }
				 if(password){
					 this.$message({
                        message: '登录成功',
                        type: 'success'
                        
                   });				
				}else{
					this.$notify.error({
                        title: '错误',
                        message: '密码不能为空'
                    });
				}
           },
           zhu(){
           	this.$router.push({
				path: '/zhuce',
			})
           },
            tui(){
          	window.history.go(-1);
          }
        }

	}
</script>

<style>
	.denglv{
		width: 37.5rem;
		height: 60.5rem;
		background: white;
	}
	.wei{
		width: 36rem;
		height: 100%;
		margin: 0 auto;
		overflow: hidden;
	}
	.wei_div1{
		margin-top: 1rem;
	}
	.content_input {
	width: 30rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

}

.content_button {
	margin-top: 1rem;
}

.el-input {
	margin-bottom: 2rem;
}

.title {
	text-align: center;
	font-size: 2.4rem;
	margin-bottom: 3rem;
	font-weight: bold;
	color: #606266;
}

.el-button--primary {
	width: 100%;

}
.zhu{
	width: 7.3rem;
	height: 2.5rem;
	margin: 1rem auto;
	text-align: center;
	line-height: 3.5rem;
	border-bottom: 0.1rem solid red;
	border-bottom-width: max-content;
}
</style>