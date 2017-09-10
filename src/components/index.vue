<template>
	<div></div>
</template>

<script>
	export default {
		name: 'index',
		methods: {},
		mounted: function() {
			if(localStorage.getItem("userInfo")) {
				this.$router.push({
					path: 'home'
				})
			} else {
				this.$router.push({
					path: 'login'
				})
			}
		}
	}
</script>

<style>

</style>