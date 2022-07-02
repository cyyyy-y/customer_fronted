import Vue from 'vue'
import Router from 'vue-router'
import Index from "./components/index/Index";
import Login from "./components/index/Login";
import DefaultApplication from "./components/staff/DefaultApplication/DefaultApplication";
import AdminHome from "./components/admin/AdminHome/AdminHome";
import DefaultAudit from "./components/admin/DefaultAudit/DefaultAudit";
import ReasonManagement from "./components/admin/ReasonManagement/ReasonManagement";
import RebirthAudit from "./components/admin/RebirthAudit/RebirthAudit";
import StaffHome from "./components/staff/StaffHome/StaffHome";
import DefaultRebirth from "./components/staff/DefaultRebirth/DefaultRebirth";
import DataStatistics from "./components/admin/DataStatistics/DataStatistics";
import DefaultQueries from "./components/common/DefaultQueries/DefaultQueries";
import RequestDialog from "@/components/staff/DefaultApplication/children/RequestDialog";

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/index',
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '/admin/DefaultQueries',
          component: DefaultQueries
        },
        //  test
        {
          path: '/RequestDialog',
          component: RequestDialog
        },
        //  test

        {
          path: '/admin/DataStatistics',
          component: DataStatistics
        },
        {
          path: '/admin/AdminHome',
          component: AdminHome
        },
        {
          path: '/admin/DefaultAudit',
          component: DefaultAudit
        },
        {
          path: '/admin/ReasonManagement',
          component: ReasonManagement
        },
        {
          path: '/admin/RebirthAudit',
          component: RebirthAudit
        },
        {
          path: '/staff/DefaultQueries',
          component: DefaultQueries
        },
        {
          path: '/staff/StaffHome',
          component: StaffHome
        },
        {
          path: '/staff/DefaultRebirth',
          component: DefaultRebirth
        },
        {
          path: '/staff/DefaultApplication',
          component: DefaultApplication
        },
      ]
    }]
})