<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
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
      <el-main>
        <router-view  />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      isAdmin: false,
      menuStaff: [
        { routerPath: "/staff/StaffHome", name: "主页", icon: "el-icon-s-home" },
        { routerPath: "/DefaultQueries", name: "违约查询", icon: "el-icon-money" },
        { routerPath: "/staff/DefaultApplication", name: "违约申请", icon: "el-icon-folder-opened" },
        { routerPath: "/staff/DefaultRebirth", name: "违约重生", icon: "el-icon-tickets" },
      ],
      menuAdmin: [
        { routerPath: "/admin/AdminHome", name: "主页", icon: "el-icon-s-home" },
        { routerPath: "/DefaultQueries", name: "违约查询", icon: "el-icon-money" },
        { routerPath: "/admin/DefaultAudit", name: "违约审核", icon: "el-icon-folder-opened" },
        { routerPath: "/admin/RebirthAudit", name: "重生审核", icon: "el-icon-tickets" },
        { routerPath: "/admin/ReasonManagement", name: "原因管理", icon: "el-icon-film" },
        { routerPath: "/admin/DataStatistics", name: "数据统计", icon: "el-icon-pie-chart" },
      ],
    }
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
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

</style>
<style>
.el-menu .is-active {
  background-color: #11327f!important;
}
.el-menu-item {
  margin: 0 15px 0 15px!important;
  border-radius: 7px!important;
}
.el-menu-item:focus:hover {
  background-color: #11327f!important;
}
.el-menu-item:hover {
  background-color: #eee!important;
}
</style>