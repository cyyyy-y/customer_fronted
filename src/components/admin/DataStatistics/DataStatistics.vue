<template>
  <div>
    <el-tabs v-model="activeTab" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="行业" name="first">

        <stacked-line :stackedDateList="stackedDateList" :legend="legend"/>
        <pie-chart :pieDateList="pieDateList" :legend="legend"/>
      </el-tab-pane>
      <el-tab-pane label="区域" name="second">
        <area-stacked-line :stackedDateList="areaStackedDateList" :legend="areaLegend"/>
        <area-pie-chart :pieDateList="areaPieDateList" :legend="areaLegend"/>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
import StackedLine from "./children/StackedLine";
import PieChart from "./children/PieChart";
import {getAreaTotal, getDefaultTotal, getIndustryAreaTotal, getIndustryDefaultTotal} from "../../../network/industry";
import AreaStackedLine from "./children/AreaStackedLine";
import AreaPieChart from "./children/AreaPieChart";

export default {
  name: "DataStatistics",
  components: {AreaPieChart, AreaStackedLine, PieChart, StackedLine},
  data() {
    return {
      activeTab: 'first',
      industryList: [],
      countList: [],
      pieDateList: [],
      legend: [],
      stackedDateList: [],

      areaPieDateList: [],
      areaLegend: [],
      areaStackedDateList: [],

    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      getDefaultTotal().then(res => {
        this.industryList = res.data.data
        this.industryList.forEach((industry, index) => {
          this.pieDateList.push({value: industry.total, name: industry.industry})
          this.legend.push(industry.industry)
          getIndustryDefaultTotal(industry.industry).then(res => {
            this.countList[index] = res.data.data
          })
        })
        return res;
      }).then(() => {
        setTimeout(() => {
          this.countList.forEach(industry => {
            let dataList = []
            industry.forEach(i => {
              dataList.push(i.count)
            })
            this.stackedDateList.push({
              name: industry[0].industry,
              type: 'line',
              stack: 'Total',
              data: dataList
            })
          })
        }, 500)
      })

      getAreaTotal().then(res => {
        console.log(res)
        this.industryList = res.data.data
        this.industryList.forEach((industry, index) => {
          console.log(industry)
          this.areaPieDateList.push({value: industry.total, name: industry.area})
          this.areaLegend.push(industry.area)

          // getIndustryAreaTotal(industry.industry).then(res => {
          //   console.log(res)
          //   this.countList[index] = res.data.data
          // })
          console.log(this.areaPieDateList)
        })
        return res;
      }).then(() => {
        setTimeout(() => {
          // this.countList.forEach(industry => {
          //   console.log(industry)
          //   let dataList = []
          //   industry.forEach(i => {
          //     dataList.push(i.count)
          //   })
          //   this.areaStackedDateList.push({
          //     name: industry[0].industry,
          //     type: 'line',
          //     stack: 'Total',
          //     data: dataList
          //   })
          //   console.log(this.areaStackedDateList)
          // })
        }, 500)
      })

    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>

</style>

<style>
.el-tabs--border-card {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
</style>