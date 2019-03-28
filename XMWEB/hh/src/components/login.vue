<template>
	<div>
		<section class="sec1">
			<span class="sec1_l"></span>
			<span class="sec1_r">用户登录</span>
		</section>
		<section class="secm">
			<span class="sec2_l"><img src="../assets/user.gif"></span>
			<span class="sec2_0"><input type=""v-model="username" placeholder="用户名/手机号/邮箱" name="username"/></span>
		</section>
		<section class="secm">
			<span class="sec2_l"><img src="../assets/pass.gif"></span>
			<span class="sec2_r"><input type="" v-model="password" placeholder="请输入您的登录密码" name="password"/></span>
		</section>
		<section class="sec3" v-on:click='login'>登录</section>
		<section class="sec4">
			<router-link to="register">没有账号立即注册</router-link>
		</section>
	</div>
</template>

<script>
export default {
  data () {
    return {
      username:'',
      password:''
    }
  },
  methods:{
  	login:function(event){
  		this.axios.post('/api/users/login',{username:this.username,password:this.password}
  	).then((data)=>{
  		if(data!=null){
  			alert("登录成功");
  			this.$router.push('/');
  		}
  	})
  	},
  	toRegister:function(){
  		this.$router.push('/register');
  	}
  }
}
</script>

<style>
	 *{
		 padding: 0;
		 margin: 0 auto;
	 }
	.sec1 {
		display: flex;
		flex-direction: row;
		height: 125px;
		line-height: 135px;
		border-bottom: 1px solid #e1e1e1;
		background: #c19a3b;
		position: relative;
		top: -60px;
	}

	.sec1_l {
		text-indent: 20px;
		font-size: 50px;
		color: white;
		background: url(../assets/left.gif)20px center no-repeat;
	}
	.sec1_r {
		/* font-size: 35px;
		color: white;
		text-align: center;
		float: left; */
		margin-top: -5px;
		width: 100%;
		padding: 0 27px;
		display: flex;
		justify-content: center;
		height: 130px;
		line-height: 130px;
		align-content: center;
		font-size: 36px;
		letter-spacing: 0.1875rem;
		background: #c19a3b;
		color: #ffffff;
	}
	.secm {
		display: flex;
		flex-direction: row;
		margin: 0px 55px;
	    position: relative;
		top: -35px;
		border-bottom: 1px solid #cccccc;
		height: 140px;
		line-height: 140px;
	}
	.sec2_l {
		font-size: 30px;
	}
	.sec2_l img{
		margin-top: 15px;
	}
	.sec2_0 input{
		width: 100%;
		border: 0px;
		text-align: left;
		height: 136px;
		position: relative;
		left: 0;
		font-size: 30px;
	}
	.sec2_r input {
		width: 100%;
		text-align: left;
		border: 0px;
		height: 136px;
		font-size: 30px;
	}
	.sec3 {
		margin-top: 5px;
		padding: 0 27px;
		display: flex;
		justify-content: center;
		height: 130px;
		line-height: 130px;
		border-radius: 10px;
		align-content: center;
		font-size: 36px;
		letter-spacing: 0.1875rem;
		background: #c19a3b;
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
</style>
