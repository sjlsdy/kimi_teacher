<template>
	<div class="mainBox">
		<Modal v-model="loginOutModal" title="提示" @on-ok="ok">
			<p>确定退出吗？</p>
		</Modal>
		<div class="mainTop">
			<div class="userInfo">
				<span><img src="http://img1.imgtn.bdimg.com/it/u=2530404822,1329936343&fm=26&gp=0.jpg" /></span>
				<span><h4>何敏钢</h4></span>
				<span style="margin-top: 17px;"><Badge count="4"><Icon type="ios-bell" size="24"></Icon></Badge></span>
				<span v-on:click="loginOut">退出</span>
			</div>
		</div>
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
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				loginOutModal: false
			}
		},
		methods: {
			loginOut: function() {
				this.loginOutModal = true;
			},
			ok() {
				this.$Message.success('退出成功');
				localStorage.setItem("userInfo", "");
				this.$router.push({
					path: 'login'
				});
			}
		}
	}
</script>

<style></style>