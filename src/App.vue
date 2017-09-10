<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		mounted: function() {
			if(!localStorage.getItem("userInfo")) {
				this.$router.push({
					path: 'login'
				})
			}
		},
		watch: {
			'$route' (to, from) {
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