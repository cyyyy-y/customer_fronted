<template>
  <el-container>
    <!--导航栏-->
    <el-header>
      <el-row>
        <!--导航栏logo-->
        <el-col :span="3"><div class="head1"><img src="../../assets/ht_logo.png"/></div></el-col>
        <!--导航栏 菜单 铃铛 消息-->
        <el-col :span="17">
          <div class="head2">
            <el-col :span="2"><div class="head2_1"><img src="../../assets/head_dh.png"/></div></el-col>
            <el-col :span="2"><div class="head2_2"><img src="../../assets/head_ring.png"/></div></el-col>
            <el-col :span="18"><div class="head2_3">&nbsp</div></el-col>
            <el-col :span="2">
              <el-badge value="4" class="item">
                <div class="item-b"><el-button class="item_button" icon="el-icon-message"></el-button></div>
              </el-badge>
            </el-col>
          </div>
        </el-col>
        <!--导航栏 用户名 退出按钮-->
        <el-col :span="4">
          <div class="head3">
            <el-col :span="4" class="head3_1"><img src="../../assets/head_people.png"/></el-col>
            <el-col :span="13" class="head3_2">公司{{isAdmin ? '管理员' : '员工'}} - {{userName}}</el-col>
            <el-col :span="7" class="head3_3"><img src="../../assets/head_exit.png"/></el-col>
          </div>
        </el-col>
      </el-row>
    </el-header>

    <el-container>
      <!--侧边栏-->
      <el-aside width="230px">
        <el-menu
            router
            unique-opened
            mode="vertical"
            background-color="#fff"
            text-color="#666"
            active-text-color="#eee"
            :default-active="$route.path">
          <el-menu-item v-for="item in isAdmin ? menuAdmin : menuStaff"
                        :key="item.name"
                        :index="item.routerPath">
            <template slot="title">
              <i :class=item.icon></i>
              {{item.name}}
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <!--主体main-->
      <el-main>
        <router-view  />
      </el-main>

    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Index",
  beforeMount() {
    this.isAdmin = this.$route.path.includes('admin')
    console.log(this.isAdmin)
  },
  watch: {},
  data() {
    return {
      isAdmin: null,
      userName: 'manager',
      menuStaff: [
        {routerPath: "/staff/StaffHome", name: "主页", icon: "el-icon-s-home"},
        {routerPath: "/staff/DefaultQueries", name: "违约查询", icon: "el-icon-money"},
        {routerPath: "/staff/DefaultApplication", name: "违约申请", icon: "el-icon-folder-opened"},
        {routerPath: "/staff/DefaultRebirth", name: "违约重生", icon: "el-icon-tickets"},
      ],
      menuAdmin: [
        {routerPath: "/admin/AdminHome", name: "主页", icon: "el-icon-s-home"},
        {routerPath: "/admin/DefaultQueries", name: "违约查询", icon: "el-icon-money"},
        {routerPath: "/admin/DefaultAudit", name: "违约审核", icon: "el-icon-folder-opened"},
        {routerPath: "/admin/RebirthAudit", name: "重生审核", icon: "el-icon-tickets"},
        {routerPath: "/admin/ReasonManagement", name: "原因管理", icon: "el-icon-film"},
        {routerPath: "/admin/DataStatistics", name: "数据统计", icon: "el-icon-pie-chart"},
      ],
    }
  }
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
    background-color: #f5f6fa;
    color: #333;
    text-align: center;
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

  .head2_1 img, .head2_2 img {
    height: 25px;
    width: 25px;
  }

  .head3_1 img{
    height: 20px;
    width: 20px;
  }

  .head3_3 img{
    height: 18px;
    width: 18px;
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

  /deep/ .item-b .el-button {
    font-size: 20px;
  }

</style>

<style>
.el-menu .is-active {
  background-color: #11327f!important;
}
.el-menu-item {
  margin: 0 15px 0 15px!important;
  border-radius: 7px!important;
}
.el-menu-item:hover {
  background-color: #eee!important;
}
.el-menu-item:focus:hover {
  background-color: #11327f!important;
}
</style>