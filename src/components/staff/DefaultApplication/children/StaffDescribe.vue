<template>
  <el-card class="staff-des" shadow="none">
    <el-descriptions title="用户信息" :size="'medium'">
      <el-descriptions-item label="用户名">{{ staffInfo.account }}</el-descriptions-item>
      <el-descriptions-item label="违约情况">{{ staffInfo.default_state === 1 ? '已违约' : '未违约' }}</el-descriptions-item>
      <el-descriptions-item label="组织">{{ staffInfo.group_name }}</el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script>
export default {
  name: "StaffDescribe",
  props: {
    staffInfo: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>
.staff-des {
  margin-top: 15px;
}
</style>