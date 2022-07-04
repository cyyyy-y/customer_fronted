<template>
  <div class="line-box">
    <div id="stackedLine"></div>
  </div>
</template>

<script>

export default {
  name: "StackedLine",
  data() {
    return {
      myChart: ''
    }
  },
  props: {
    stackedDateList: Array,
    legend: Array
  },
  mounted() {
    let chartDom = document.getElementById('stackedLine');
    this.myChart = this.$echarts.init(chartDom);

    this.draw()
  },
  methods: {

    draw() {
      setTimeout(() => {
        this.myChart.setOption({
          title: {
            text: '增长趋势'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: this.legend
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2019', '2020', '2021', '2022', '2023', '2024']
          },
          yAxis: {
            type: 'value'
          },
          series: this.stackedDateList
        });
      }, 1000)
    }
  }

}
</script>

<style scoped>
.line-box {
  height: 400px;

}

#stackedLine {
  width: 800px;
  height: 380px;
  margin: 20px auto;
}
</style>