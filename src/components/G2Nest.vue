<template>
	<div :id="id"></div>
</template>

<script>
	import G2 from 'g2';
	export default {
		data() {
			return {
				chart: null
			};
		},
		props: ['id', 'charData'],
		mounted: function() {
			this.drawChart(this.charData);
		},
		beforeUpdate: function() {
			//      this.drawChart();
		},
		watch: {
			charData: function(val, oldVal) {
				console.log(val)
				console.log(oldVal)
				console.log('new: %s, old: %s', val, oldVal);
				this.drawChart(val);
			}
		},
		methods: {
			drawChart: function(datas) {
				this.chart && this.chart.destroy();
				let data = datas;
				this.chart = new G2.Chart({
					id: 'c1',
					forceFit: true,
					height: 450
				});
				this.chart.source(data, {
					month: {
						alias: '月份',
						range: [0, 1]
					},
					temperature: {
						alias: '平均温度(°C)'
					}
				});
				this.chart.line().position('month*temperature').size(2);
				this.chart.render();
			}
		}
	}
</script>

<style>

</style>