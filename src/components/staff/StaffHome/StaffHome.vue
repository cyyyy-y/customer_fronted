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
      <el-col :span="24" class="QE1">
        <div class="QE-line"></div>
        <div class="QE-text">快捷入口</div>
      </el-col>
      <el-col :span="24" class="QE2">
        <el-row :gutter="20">
          <el-col :span="2">
            <div class="QE2-mini">
              <div class="QE2-mini-icon"><img src="../../../assets/QE1.png"/></div>
              <div class="QE2-mini-text">违约查询</div>
            </div>
          </el-col>

          <el-col :span="2">
            <div class="QE2-mini">
              <div class="QE2-mini-icon"><img src="../../../assets/QE2.png"/></div>
              <div class="QE2-mini-text">违约申请</div>
            </div>
          </el-col>

          <el-col :span="2">
            <div class="QE2-mini">
              <div class="QE2-mini-icon"><img src="../../../assets/QE3.png"/></div>
              <div class="QE2-mini-text">违约重生</div>
            </div>
          </el-col>

          <el-col :span="2">
            <div class="QE2-mini">
              <div class="QE2-mini-icon"><img src="../../../assets/QE4.png"/></div>
              <div class="QE2-mini-text">自定义</div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

<!--    消息提醒 & 申请数量图表-->
    <el-row :gutter="20" class="MessChart">
<!--      消息提醒-->
      <el-col :span="16">
        <div class="mess">
          <div class="mess1">
            <div class="QE-line"></div>
            <div class="QE-text">消息提醒</div>
          </div>

          <div class="mess2">
            <template>
              <el-table
                      :data="tableData"
                      stripe
                      :show-header="false"
                      style="width: 97%;height: 220px;margin-top: 20px;margin-left: 12px">
                <el-table-column
                        prop="pass"
                        label="是否通过"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="message"
                        label="详细信息"
                        width="380">
                </el-table-column>
                <el-table-column
                        prop="time"
                        label="时间">
                </el-table-column>
              </el-table>
            </template>
          </div>
        </div>
      </el-col>

<!--      申请数量图表-->
      <el-col :span="8">
        <div class="chart">1</div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "StaffHome",
  data() {
    return {
      tableData: [{
        pass: '已通过',
        message: 'XXX申请与XX年X月X日被通过，审核人XXX ...',
        time: '11-02 09:09'
      }, {
        pass: '已驳回',
        message: 'XXX申请与XX年X月X日被驳回，审核人XXX ...',
        time: '11-02 09:09'
      }, {
        pass: '新增',
        message: 'XX年X月X日新增XXX申请 ...',
        time: '11-02 09:09'
      }, {
        pass: '审核中',
        message: 'XXX申请正在审核中，审核人XXX ...',
        time: '11-02 09:09'
      }]
    }
  }
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
    background-color: #ffffff;
    height: 25%;
    border-radius: 4px;
    margin-left: 0px!important;
    margin-right: 0px!important;
  }

  .MessChart {
    background-color: beige;
    height: 44%;
    margin-top: 2.5%;
    margin-bottom: 2.5%;
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
    /*justify-content: center;*/
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
    margin-left: 35px;
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
    margin-left: 65px;
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

  .card-m1, .card-m2, .card-m3 {
    border-radius: 4px;
  }


  /*QEntry*/
  .QE1 {
    display: flex;
    /*background-color: #ffffff;*/
  }

  .QE-line {
    height: 21px;
    width: 3px;
    background-color: #11327F;
    margin-left: 15px;
    margin-top: 13px;
    margin-right: 10px;
  }

  .QE-text {
    margin-top: 13px;
    font-weight: bold;
    font-size: 14px;
  }

  .QE2 {
    padding-left: 25px;
  }

  .QE2-mini {
    /*background-color: #7e7fa5;*/
  }

  .QE2-mini-icon {
    margin-left: 5px;
    margin-top: 25px;
    margin-bottom: 10px;
  }

  .QE2-mini-text {
    font-size: 14px;
  }


/*MessChart*/
  .mess {
    background-color: #ffffff;
  }

  .mess1 {
    display: flex;
  }

  .mess-line {
    height: 21px;
    width: 3px;
    background-color: #11327F;
    margin-left: 15px;
    margin-top: 13px;
    margin-right: 10px;
  }

  .chart {
    background-color: #FCAB61;
  }

</style>