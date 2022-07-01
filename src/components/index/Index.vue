<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="3"><div class="head1"><img src="../../assets/ht_logo.png"/></div></el-col>
        <el-col :span="17"><div class="head2">
          <el-col :span="2"><div class="head2_1"><img src="../../assets/head_dh.png" height="25" width="25"/></div></el-col>
          <el-col :span="2"><div class="head2_2"><img src="../../assets/head_ring.png" height="25" width="25"/></div></el-col>
          <el-col :span="18"><div class="head2_3">&nbsp</div></el-col>
          <el-col :span="2">
            <el-badge value="4" class="item">
              <el-button class="item_button" icon="el-icon-message"></el-button>
            </el-badge>
          </el-col>
        </div></el-col>
        <el-col :span="4">
          <div class="head3">
            <el-col :span="4" class="head3_1"><img src="../../assets/head_people.png" height="20" width="20"/></el-col>
            <el-col :span="12" class="head3_2">公司员工 - 小姜</el-col>
            <el-col :span="8" class="head3_3"><img src="../../assets/head_exit.png" height="18" width="18"/></el-col>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <router-view  />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style scoped>
  .el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    color: #333;
    text-align: center;
    /*line-height: 60px;*/
  }

  .el-aside {
    color: #333;
    text-align: center;
    height: calc(100vh - 60px);
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .head1 img{
    height: 50px;
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
  }

  .head2{
    background-color: #7e7fa5;
  }

  .head2_1, .head2_2, .head3 {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /deep/ .el-badge__content.is-fixed{
    position: absolute;
    top: 8px;
    right: 30px;
  }

  .item {
    margin-top: 7px;
  }

  .item_button{
    border: none;
  }

  /deep/ .el-button {
    font-size: 20px;
  }

</style>