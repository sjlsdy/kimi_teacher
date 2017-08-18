<template>
	<div id="app">
		<div class="mainRight">
			<div class="mainCont">
				<router-view></router-view>
			</div>
		</div>
		<div class="mainLeft">
			<div class="userInfo">
				<img src="http://img1.imgtn.bdimg.com/it/u=2530404822,1329936343&fm=26&gp=0.jpg" />
				<h4>何敏钢</h4>
				<span>高中物理老师</span>
			</div>
			<div class="nav">
				<ul>
					<li>
						<router-link :to="{ path: 'home' }">
							<Icon type="home"></Icon>首页</router-link>
					</li>
					<li>
						<router-link :to="{ path: 'manageStudent' }">
							<Icon type="home"></Icon>学生管理</router-link>
					</li>
					<li>
						<router-link :to="{ path: 'main' }">
							<Icon type="home"></Icon>教学管理</router-link>
					</li>
					<li>
						<router-link :to="{ path: 'main' }">
							<Icon type="home"></Icon>教学研修</router-link>
					</li>
					<li>
						<router-link :to="{ path: 'main' }">
							<Icon type="home"></Icon>意见反馈</router-link>
					</li>
					<li>
						<router-link :to="{ path: 'main' }">
							<Icon type="home"></Icon>下载APP</router-link>
					</li>
					<li>
						<router-link :to="{ path: 'main' }">
							<Icon type="home"></Icon>关于软件</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style>
	html,
	body {
		width: 100%;
		height: 100%;
	}
	
	#app {
		width: 100%;
		height: 100%;
	}
	
	.mainRight {
		float: left;
		width: 100%;
		height: 100%;
		background: rgb(246, 247, 252);
	}
	
	.mainCont {
		padding-left: 140px;
	}
	
	.mainLeft {
		float: left;
		width: 140px;
		height: 100%;
		margin-left: -100%;
		background: rgb(59, 84, 136);
		color: #FFFFFF;
	}
	
	.userInfo {
		margin: 40px 0;
		text-align: center;
	}
	
	.userInfo img {
		border: #FFF 2px solid;
		border-radius: 1000px;
		display: block;
		width: 80px;
		height: 80px;
		margin: 0 auto;
	}
	
	.userInfo h4 {
		font-size: 16px;
	}
	
	.nav li {
		font-size: 14px;
		line-height: 40px;
		margin-bottom: 10px;
	}
	
	.nav li a {
		color: #FFFFFF;
		display: block;
		padding: 0 10%;
		border-left: rgb(59, 84, 136) 4px solid;
	}
	
	.nav li a i {
		margin-right: 10px;
	}
	
	.nav li a:hover,
	.nav li a.router-link-active {
		background: rgb(38, 58, 99);
		border-left: rgb(255, 217, 73) 4px solid;
	}
</style>