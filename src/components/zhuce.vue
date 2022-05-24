<template>
	<div class="zhuce">
		<div class="wei1">
			<div class="wei1_div1"><img src="../../static/fanhui.jpg" @click="tui"/></div>
			<div class="wei1_div2">
			  <div class="content_input">
                <div class="title">
                    <p>用户注册</p>
               </div>
	            <el-input v-model="UserName" clearable placeholder="手机号"></el-input>
	            <el-input v-model="text" clearable  placeholder="验证码"></el-input>
	            <div class="content_button">
	                <el-button type="primary" @click="SignIn">注册</el-button>
	            </div>
	           
            </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'zhuce',
		  data() {
            return {
                UserName: '',
                text: ''
            }
        },
        methods: {
            SignIn() {
                let that = this;
                let username = that.UserName;
                let text = that.text;
                if (!username) {
                    this.$notify.error({
                        title: '错误',
                        message: '手机号不能为空'
                    });
                    return;
                }
				 if(text){
					 this.$message({
                        message: '注册成功',
                        type: 'success'
                        
                   });				
				}else{
					this.$notify.error({
                        title: '错误',
                        message: '验证码不能为空'
                    });
				}
          },
          tui(){
          	window.history.go(-1);
          }
           
        }

	}
</script>

<style>
	.zhuce{
		width: 37.5rem;
		height: 60.5rem;
		background: white;
	}
	.wei1{
		width: 36rem;
		height: 100%;
		margin: 0 auto;
		overflow: hidden;
	}
	.wei1_div1{
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
</style>