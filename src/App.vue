<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		mounted: function() {
			// 当前如果没有localStorage，则跳转至登录页
			if(!localStorage.getItem("userInfo")) {
				this.$router.push({
					path: 'login'
				})
			}
		}
	}
</script>

<style>
	#app {
		width: 100%;
		height: 100%;
	}
</style>