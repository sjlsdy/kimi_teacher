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
				<div class="toBeDone">
					<ul>
						<li>教学进程<span class="number">80%</span></li>
						<li>学生提问<span class="number">22</span></li>
						<li>未完善课程<span class="number">10</span></li>
						<li>进步最快<span class="img"><img src="http://img1.imgtn.bdimg.com/it/u=2530404822,1329936343&fm=26&gp=0.jpg" /></span></li>
					</ul>
				</div>
			</div>
			<div class="paneBody">
				<div class="panel">
					<div class="panelCont">
						sdf
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
			<div class="paneBody">
				<div class="panel">
					<div class="panelTitle">
						疑难课程
						<span class="more">更多</span>
					</div>
					<div class="panelCont">
						<div class="smallDifficultyList">
						<dl>
							<dt>
								<img src="https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=2003558117,1870941956&fm=85&s=7E914D855E61591F1AB155590300F091" />
								<span class="import"></span>
							</dt>
							<dd>
								<h4>牛顿第一定律</h4>
								录制于2016-12-13 第一节
								<div>
									<ul>
										<li>
											<span style="width: 45%;"></span>
											<span>22人未掌握</span>
										</li>
										<li>
											<span style="width: 5%;"></span>
											<span>6人已掌握</span>
										</li>
									</ul>
								</div>
							</dd>
						</dl>
						<dl>
							<dt>
								<img src="https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=2003558117,1870941956&fm=85&s=7E914D855E61591F1AB155590300F091" />
								<span class="import"></span>
							</dt>
							<dd>
								<h4>牛顿第一定律</h4>
								录制于2016-12-13 第一节
								<div>
									<ul>
										<li>
											<span style="width: 45%;"></span>
											<span>22人未掌握</span>
										</li>
										<li>
											<span style="width: 5%;"></span>
											<span>6人已掌握</span>
										</li>
									</ul>
								</div>
							</dd>
						</dl>
						<dl>
							<dt>
								<img src="https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=2003558117,1870941956&fm=85&s=7E914D855E61591F1AB155590300F091" />
								<span class="import"></span>
							</dt>
							<dd>
								<h4>牛顿第一定律</h4>
								录制于2016-12-13 第一节
								<div>
									<ul>
										<li>
											<span style="width: 45%;"></span>
											<span>22人未掌握</span>
										</li>
										<li>
											<span style="width: 5%;"></span>
											<span>6人已掌握</span>
										</li>
									</ul>
								</div>
							</dd>
						</dl>
						<dl>
							<dt>
								<img src="https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=2003558117,1870941956&fm=85&s=7E914D855E61591F1AB155590300F091" />
								<span class="import"></span>
							</dt>
							<dd>
								<h4>牛顿第一定律</h4>
								录制于2016-12-13 第一节
								<div>
									<ul>
										<li>
											<span style="width: 45%;"></span>
											<span>22人未掌握</span>
										</li>
										<li>
											<span style="width: 5%;"></span>
											<span>6人已掌握</span>
										</li>
									</ul>
								</div>
							</dd>
						</dl>
						</div>
					</div>
				</div>
			</div>
			<div class="paneBody">
				<div class="panel">
					<div class="panelTitle">
						我的学习要求
						<span class="more">更多</span>
					</div>
					<div class="panelCont">
						<div class="articleList">
						<dl>
							<dt>
								我在《牛顿第一定律》课后@了孙淼、郑晓静、引申等6位同学。
								<span class="time">2016-12-25</span>
							</dt>
							<dd>
								内容：卷子单选第八题你们几个错了，附件中是你们错题的知识解析，你们先看下，如果还有疑问明天来找我。
								<span class="more">查看</span>
							</dd>
						</dl>
						<dl>
							<dt>
								我在《动能定理》课后@了孙淼、郑晓静等8位同学。
								<span class="time">2016-12-25</span>
							</dt>
							<dd>
								内容：卷子单选第八题你们几个错了，附件中是你们错题的知识解析，你们先看下，如果还有疑问明天来找我。
								<span class="more">查看</span>
							</dd>
						</dl>
						</div>
					</div>
				</div>
			</div>
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