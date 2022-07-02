<template>
  <div>
    <el-tabs v-model="activeTab" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="行业" name="first">
        行业
      </el-tab-pane>
      <el-tab-pane label="区域" name="second">
        区域
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
export default {
  name: "DataStatistics",
  data() {
    return{
      activeTab: 'first'
    }
  },
  methods: {
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
  -webkit-box-shadow: none!important;
  box-shadow: none!important;
}
</style>