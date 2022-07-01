<template>
  <div class="main">
<!--    首页card部分-->
    <el-row class="card" :gutter="12">
      <!--申请总数-->
      <el-col :span="8" class="card-mini">
        <el-card shadow="hover" class="card-m1">
          <el-row>
            <el-col :span="6" class="card-m11">
              <div class="card-m11-round">
                <img src="../../../assets/card1.png"/></div>
            </el-col>
            <el-col :span="18" class="card-m12">
              <div>申请总数：30</div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>

      <!--审核中-->
      <el-col :span="8" class="card-mini">
        <el-card shadow="hover" class="card-m2">
          <el-row>
            <el-col :span="6" class="card-m21">
              <div class="card-m21-round">
                <img src="../../../assets/card2.png"/></div>
            </el-col>
            <el-col :span="18" class="card-m22">
              <div>审核中：10</div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>

      <!--已通过-->
      <el-col :span="8" class="card-mini">
        <el-card shadow="hover" class="card-m3">
          <el-row>
            <el-col :span="6" class="card-m31">
              <div class="card-m31-round">
                <img src="../../../assets/card3.png"/></div>
            </el-col>
            <el-col :span="18" class="card-m32">
              <div>已通过：10</div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>

<!--    快捷入口-->
    <el-row class="QEntry">
      <el-col :span="24">
        <div>1</div>
      </el-col>
    </el-row>

<!--    消息提醒 & 申请数量图表-->
    <el-row class="MessChart">
      <el-col :span="24">
        <div>1</div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "StaffHome"
}
</script>

<style scoped>

/*布局*/
  .main {
    display: block;
    height: 100%;
  }

  .card {
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0px!important;
    margin-right: 0px!important;
  }

  .QEntry {
    background-color: lightblue;
    height: 25%;
  }

  .MessChart {
    background-color: beige;
    height: 50%;
  }

  /*card*/
  .el-card {
    width: 85%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-mini {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-m1 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7e8dc;
  }

  .card-m11 {
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-m12 {
    width: 200px;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }

  .card-m11-round {
    background-color: #FCAB61;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-m11-round img {
    width: 28px;
    height: 26px;
  }

  .card-m12 div {
    color: #FCAB61;
    font-weight: bold;
  }

  .card-m2 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4dbd7;
  }

  .card-m21 {
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-m22 {
    width: 200px;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }

  .card-m21-round {
    background-color: #F07D5B;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-m21-round img {
    width: 27px;
    height: 27px;
  }

  .card-m22 div {
    color: #F07D5B;
    font-weight: bold;
  }

  .card-m3 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dbd6ee;
  }

  .card-m31 {
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-m32 {
    width: 200px;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }

  .card-m31-round {
    background-color: #8063C6;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-m31-round img {
    width: 27px;
    height: 27px;
  }

  .card-m32 div {
    color: #8063C6;
    font-weight: bold;
  }


</style>