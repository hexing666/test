<template>
	<div>
		<section class="sec1">
			<span class="sec1_l"></span>
			<span class="sec1_r">用户注册</span>
		</section>
		<section class="secm">
			<span class="sec2_l"><img src="../assets/user.gif"></span>
			<span class="sec2_0"><input type=""v-model="username" placeholder="用户名/手机号/邮箱" name="" id="" value="" /></span>
		</section>
		<section class="secm">
			<span class="sec2_l"><img src="../assets/pass.gif"></span>
			<span class="sec2_r"><input type="" v-model="password" placeholder="请输入密码" name="" id="" value="" /></span>
		</section>
		<section class="secm">
			<span class="sec2_l"><img src="../assets/pass.gif"></span>
			<span class="sec2_r"><input type="" v-model="rePassword" placeholder="请重复输入密码" name="" id="" value="" /></span>
		</section>
		<section class="sec3" v-on:click=register()>下一步</section>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				username: '',
				password:'',
				rePassword: '',
			}
		},
		methods: {
			//      注册方法
			register() {
					if(this.password != this.rePassword) {
						alert("两次密码不一致")
					} else {
						let sendDate = {
							username: this.username,
							password: this.password,
						}
						this.$http.post('/api/users/register', sendDate).then((data) => {
							if(data.body.status == 1) {
								alert(data.body.message)
							} else {
								alert(data.body.message)
							}
						})
				}
			}
		}
	}
</script>
<style>
	.sec1 {
		display: flex;
		flex-direction: row;
		height: 115px;
		line-height: 218px;
		border-bottom: 1px solid #e1e1e1;
		background:#c19a3b;
		margin-top: -60px;
	}

	.sec1_l {
		text-indent: 20px;
		font-size: 50px;
		color: white;
	}

	.sec1_r {
		text-indent: 20px;
		font-size: 35px;
		color: white;
		width: 100%;
		margin-top: -60px;
	}
	.secm {
		display: flex;
		flex-direction: row;
		margin: 0px 45px;
		border-bottom: 1px solid #cccccc;
		height: 140px;
		line-height: 140px;
	}

	.sec2_l {
		font-size: 30px;
	}
	.sec2_l  img{
	     margin-top: 20px;
     }
	.sec2_0 input{
		border: 0px;
		width: 100%;
		height: 136px;
		margin-left: 20px;
		font-size: 30px;
		text-indent: 25px;
	}
	.sec2_r input {
		border: 0px;
		height: 136px;
		margin-left: 20px;
		font-size: 30px;
	}

	.sec3 {
		padding: 0 47px;
		display: flex;
		justify-content: center;
		height: 130px;
		line-height: 130px;
		border-radius: 10px;
		align-content: center;
		font-size: 30px;
		margin-top: 25px;
		background:#c19a3b;
		color: #ffffff;
	}
	.sec4{
		padding: 0 47px;
		display: flex;
		justify-content: center;
		height: 130px;
		line-height: 130px;
		border-radius: 10px;
		align-content: center;
		font-size: 30px;
		background: white;
		color: #ffffff;
		border: 1px solid #d9d9d9;
		margin-top: 20px;
	}
	.sec4 a:-webkit-any-link {
    color: red;
    text-decoration: none;
    cursor: auto;
}
	.nav1{
		float: right;
		margin-top: 20px;
		margin-left: 420px;
	}
</style>