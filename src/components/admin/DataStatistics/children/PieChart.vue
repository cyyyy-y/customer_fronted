<template>
  <div class="pie-box">
    <div id="pieChart" ></div>
  </div>
</template>

<script>
export default {
  name: "PieChart",
  data() {
    return {
      myChart: '',
    }
  },
  props: {
    pieDateList: Array,
    legend: Array
  },
  mounted() {
    let chartDom = document.getElementById('pieChart');
    this.myChart = this.$echarts.init(chartDom);

    this.draw()
  },
  methods: {
    draw() {
      setTimeout(() => {
        this.myChart.setOption({
          title: {
            text: '各行业占比',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            left: 'center',
            top: 'bottom',
            data: this.legend
          },
          toolbox: {
            show: true,
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          series: [
            {
              name: '各行业占比',
              type: 'pie',
              radius: [20, 140],
              center: ['50%', '50%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 5
              },
              data: this.pieDateList
            }
          ]
        })
      }, 500)

    }
  }
}
</script>

<style scoped>
.pie-box {
  height:400px;

}

#pieChart {
  width:800px;
  height:380px;
  margin: 70px auto;
}
</style>