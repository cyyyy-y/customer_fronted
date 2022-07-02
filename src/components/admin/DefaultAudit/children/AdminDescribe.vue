<template>
  <el-card class="staff-des" shadow="none">
    <el-descriptions title="管理员信息" :size="'medium'">
      <el-descriptions-item label="当前登录">{{ adminInfo.account }}</el-descriptions-item>
      <el-descriptions-item label="组织">{{ adminInfo.group_name }}</el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script>
export default {
  name: "AdminDescribe",
  props: {
    adminInfo: {
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