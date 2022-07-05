<template>
  <el-card class="staff-des" shadow="none">
    <el-descriptions title="用户信息" :size="'medium'">
      <el-descriptions-item label="用户名">{{ username }}</el-descriptions-item>
<!--      <el-descriptions-item label="违约情况">{{ // staffInfo.default_state === 1 ? '已违约' : '未违约' }}</el-descriptions-item>-->
      <el-descriptions-item label="角色">{{ role }}</el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script>
export default {
  name: "StaffDescribe",
  props: {

  },
  data() {
    return {
      username: localStorage.getItem('user'),
      role: localStorage.getItem('role') === 1 ? '管理员' : '员工'
    }
  }
}
</script>

<style scoped>
.staff-des {
  margin-top: 15px;
}
</style>