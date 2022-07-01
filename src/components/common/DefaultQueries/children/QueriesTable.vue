<template>
  <el-card shadow="none">
    <el-table
        :data="tableData"
        stripe
        style="width: 100%">
      <el-table-column
          type="selection"
          label="选择">
      </el-table-column>
      <el-table-column
          prop="name"
          label="违约客户">
      </el-table-column>
      <el-table-column
          prop="address"
          label="认定违约原因">
      </el-table-column>
      <el-table-column
          prop="address"
          label="严重程度">
      </el-table-column>
      <el-table-column
          prop="address"
          label="认定人">
      </el-table-column>
      <el-table-column
          prop="address"
          label="申请时间">
      </el-table-column>
      <el-table-column
          prop="address"
          label="审核时间">
      </el-table-column>
      <el-table-column
          prop="address"
          label="最新外部等级">
      </el-table-column>
      <el-table-column
          prop="address"
          label="审核状态">
      </el-table-column>
    </el-table>
  </el-card>

</template>

<script>
export default {
  name: "QueriesTable",
  props: {
    tableData: {
      type: Array,
      default: () => {[]}
    }
  }
}
</script>

<style scoped>
.el-card {
  margin-top: 30px;
}
</style>