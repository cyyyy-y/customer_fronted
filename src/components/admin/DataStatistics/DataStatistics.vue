<template>
  <div>
    <el-tabs v-model="activeTab" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="行业" name="first">

        <stacked-line :stackedDateList="stackedDateList" :legend="legend"/>
        <pie-chart :pieDateList="pieDateList" :legend="legend"/>
      </el-tab-pane>
      <el-tab-pane label="区域" name="second">
        区域
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
import StackedLine from "./children/StackedLine";
import PieChart from "./children/PieChart";
import {getDefaultTotal, getIndustryDefaultTotal} from "../../../network/industry";

export default {
  name: "DataStatistics",
  components: {PieChart, StackedLine},
  data() {
    return {
      activeTab: 'first',
      industryList: [],
      countList: [],
      pieDateList: [],
      legend: [],
      stackedDateList: [],
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      getDefaultTotal().then(res => {
        console.log(res)
        this.industryList = res.data.data
        this.industryList.forEach((industry, index) => {
          this.pieDateList.push({value: industry.total, name: industry.industry})
          this.legend.push(industry.industry)

          getIndustryDefaultTotal(industry.industry).then(res => {
            console.log(res)
            this.countList[index] = res.data.data
          })
        })
        return res;
      }).then(() => {
        setTimeout(() => {
          this.countList.forEach(industry => {
            console.log(industry)
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
            console.log(this.stackedDateList)
          })
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