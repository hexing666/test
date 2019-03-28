<template>
	<div>
		<section class="sec1">
			<span class="sec1_l"><img src="../assets/left.gif" style="vertical-align: middle;width:20px;height: 38px;
			margin-left:5px;"></span>
			<span class="sec1_r">联系客服</span>
		</section>
		<section class="sec2">
			<span><img src="../assets/ma.gif"></span>
		</section>
		<section class="sec3">扫一扫二维码， 加Soul微信</section>
		<section class="sec4">微信号:hxjustin0112</section>
		<section class="sec5">
			<span class="sec2_r">电话客服</span>
		</section>
	</div>
</template>

<script>
</script>

<style>
	 *{
		 padding: 0;
		 margin: 0 auto;
	 }
	 body{
		 background: #f0f0f0;
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
	.sec2 {
		display: flex;
		flex-direction: row;
		margin: 0px 55px;
	    position: relative;
		top: -35px;
		border-bottom: 1px solid #cccccc;
		height: 140px;
		line-height: 140px;
	}
	.sec2 span img{
		width: 600px;
		height: 580px;
		margin-top: 30px;
	}
	.sec3{
	  width: 100;
	  margin-top: 480px;
	  font-size: 38px;
	 font-weight: bold;
	 font-family: "arial narrow";
	 color: #6c6c6c;
	}
	.sec4{
	  width: 100;
	  margin-top: 10px;
	  font-size: 35px;
	 font-family: "arial narrow";
	 color: #CCCCCC;
	}
	.sec5 {
		display: flex;
		flex-direction: row;
		height: 115px;
		line-height: 135px;
		width: 100%;
		border-bottom: 1px solid #e1e1e1;
		background: #c19a3b;
		position: fixed;
		font-weight: bold;
		letter-spacing: 12px;
		font-size: 35px;
		color: white;
	     bottom: 0;
	}color="#c19a3b"
	.sec5 .sec2_r {
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
	}
</style>
