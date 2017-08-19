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
			<div class="paneBody">
				<div class="panel">
					<div class="panelTitle">
						班级学习课程
						<span>更多</span>
					</div>
				</div>
			</div>
			</Col>
			<Col span="12">
			<div class="paneBody">
				<div class="panel">
					<div class="panelTitle">
						班级学习课程
						<span class="more">更多</span>
					</div>
					<div class="panelCont">
						<Button v-on:click="toggleChart">切换图表</Button>
						<G2Nest :charData="serverData1" :id="'c1'" id="c1"></G2Nest>
					</div>
				</div>
			</div>
			<div class="paneBody">sdfsdf</div>
			</Col>
		</Row>
	</div>
</template>

<script>
	import G2Nest from './G2Nest.vue';
	export default {
		components: {
			G2Nest
		},
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				serverData1: [{
						month: 'Jan',
						temperature: 7.0
					},
					{
						month: 'Feb',
						temperature: 6.9
					},
					{
						month: 'Mar',
						temperature: 9.5
					}
				],
				serverData2: [{
						month: 'Jan',
						temperature: 4.0
					},
					{
						month: 'Feb',
						temperature: 9.9
					},
					{
						month: 'Mar',
						temperature: 2.5
					}
				]
			}
		},
		methods: {
			toggleChart: function(event) {
				this.serverData1 = this.serverData2;
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