<template>
	<div style="padding: 20px;">
		<Row>
			<Col span="24">
			<Tabs value="name1">
				<Tab-pane label="高一1班" name="name1"></Tab-pane>
				<Tab-pane label="高一2班" name="name2"></Tab-pane>
				<Tab-pane label="高一4班" name="name3"></Tab-pane>
				<Tab-pane label="高一7班" name="name4"></Tab-pane>
			</Tabs>
			</Col>
		</Row>
		<Row :gutter="20">
			<Col span="12">
			<div class="paneBody">
				<div>
					<ul>
						<li>教学进程<br />80%</li>
						<li>学生提问<br />22</li>
						<li>未完善课程<br />10</li>
						<li>进步最快<br />80%</li>
					</ul>
				</div>
			</div>
			<div class="paneBody">sdfssdfsdf<br />dsfdssdf<br />dsfsdfdf</div>
			</Col>
			<Col span="12">
			<div class="paneBody">
				<i-circle :percent="80">
					<span class="demo-i-circle-inner" style="font-size:24px">80%</span>
				</i-circle>
			</div>
			<div class="paneBody">sdfsdf</div>
			</Col>
		</Row>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<style>
	.paneBody {
		width: 100%;
		background: #FFFFFF;
		box-shadow: 0px 0px 10px #CCC;
		margin-bottom: 20px;
	}
</style>