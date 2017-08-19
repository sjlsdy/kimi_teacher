<template>
	<div>
		<Row>
			<Col span="8" offset="8">
			<div class="login">
				<h3>KIMI教师PC后台</h3>
				<br /><br />
				<Input v-model="userName" placeholder="用户名" style="width: 100%"></Input>
				<br /><br />
				<Input type="password" v-model="PassWord" placeholder="密码" style="width: 100%"></Input>
				<br /><br />
				<Button type="success" long v-on:click="login">登录</Button>
			</div>
			</Col>
		</Row>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				userName: '',
				PassWord: '',
				msg: 'Welcome to Your Vue.js App'
			}
		},
		methods: {
			login: function() {
				if(this.userName && this.userName) {
					this.$Message.success('登录成功');
					localStorage.setItem("userInfo", "sjl");
					this.$router.push({
						path: 'home'
					});
				} else {
					this.$Message.warning('请填写用户名、密码');
				}
			}
		},
		mounted: function() {
			if(localStorage.getItem("userInfo")) {
				this.$router.push({
					path: 'home'
				})
			}
		}
	}
</script>

<style>

</style>