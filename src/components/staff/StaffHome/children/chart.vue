<template>
  <div class="chart" style="width:350px;height:240px;margin-left: 20px">
    <div id="myChart" style="width:350px;height:240px;float:left;"></div>
  </div>
</template>

<script>
  export default {
    name: 'chart',
    data () {
      return {
        myChart: '',
        opinionData2: [
          { value: 10, name: '审核中', itemStyle: '#FCAB61' },
          { value: 10, name: '已通过', itemStyle: '#41ec85' },
          { value: 10, name: '已驳回', itemStyle: '#3F8FFF' }
        ]
      }
    },
    props:{
      check: {type:Number},
      pass: {type:Number},
      reject: {type:Number},
    },
    mounted: function () {
      this.drawLine()
    },
    methods: {
      drawLine () {
        this.myChart = this.$echarts.init(document.getElementById('myChart'))
        this.myChart.setOption({
          title: {
            text: ' ', // 主标题
            subtext: '', // 副标题
            x: 'left' // x轴方向对齐方式
          },
          grid: { containLabel: true },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {d}%'
          },
          color: ['#FCAB61', '#41ec85', '#3F8FFF'],
          legend: {
            orient: 'vertical',
            icon: 'circle',
            align: 'left',
            x: 'right',
            y: 'bottom',
            data: ['审核中', '已通过', '已驳回']
          },
          series: [
            {
              name: '审核中',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              center: ['40%', '50%'],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                color: function (params) {
                  // 自定义颜色
                  var colorList = ['#FCAB61', '#41ec85', '#3F8FFF']
                  return colorList[params.dataIndex]
                }
              },
              data: this.opinionData2
            }
          ]
        })
      }
    }
  }
</script>


<style scoped>

</style>