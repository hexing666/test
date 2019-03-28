<template>
	 <section class="sec1">
	 	<span class="sec1_l"><</span>
	 	<span class="sec1_r">用户登录</span>
	 	<span class="nav1"><img src="../assets/bg1.gif"></span>
	 </section>
	 <section class="secm">
	 	<span class="sec2_l">用户名</span>
	 	<span class="sec2_0"><input type=""v-model="username" placeholder="请输入用户名" name="" id="" value="" /></span>
	 </section>
	 <section class="secm">
	 	<span class="sec2_l">登录密码</span>
	 	<span class="sec2_r"><input type="" v-model="password" placeholder="6-16个字符（数字、字母）" name="" id="" value="" /></span>
	 </section>
	 <section class="sec3" v-on:click=login()>马上报名</section>
	 <section class="sec4" >
	 	<router-link to="register">没有账号立即注册</router-link>
	 </section>
</template>
<script>
</script>
<style lang="css" scoped="scoped">
.header{
    z-index: 2;
    text-align: center;
    line-height: 2.5em;
    position: relative;
    left: 0;
	top: -60px;
	width: 100%;
    font-size: 1.2em;
    background: #c19a3b;
}
.header .left{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5em;
    height: 2.6em;
    font-size: 1em;
    background:url(../assets/left.gif) 20px center no-repeat;
    background-size: auto 45%;
}
.header .right{
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 2.5em;
    height: 2.5em;
    font-size: 1em;
    background-size: auto 40%;
	color: white;
}
.box{
 display: flex;
 justify-content: center;
 align-items: center;
 padding-top: 20px;
 width: 80%;
}
</style>
