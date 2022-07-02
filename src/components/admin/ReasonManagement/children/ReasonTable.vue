<template>
  <el-card shadow="none">
    <el-table
        class="queries-table"
        :data="tableData"
        stripe
        style="width: 100%">
      <el-table-column
          type="selection"
          label="选择">
      </el-table-column>
      <el-table-column
          prop="id"
          label="序号">
      </el-table-column>
      <el-table-column
          width="120"
          prop="reason"
          label="原因描述">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" :content="scope.row.reason" placement="bottom">
            <span>{{ scope.row.reason.substr(0, 8) }}……</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column
          prop="is_used"
          label="是否启用">
        <template slot-scope="scope">
          <el-switch
              v-model="scope.row.is_used"
              active-text="已启用"
              inactive-text="未启用">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
          prop="create_time"
          label="创建时间">

      </el-table-column>
      <el-table-column
          prop="update_time"
          label="修改时间">
        <template slot-scope="scope">
          {{ scope.row.update_time }}
        </template>
      </el-table-column>
      <el-table-column
          label="操作">
        <template slot-scope="scope">
          <el-button type="danger" size="small" round>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="40">
    </el-pagination>
  </el-card>

</template>

<script>
export default {
  name: "ReasonTable",
  props: {
    tableData: {
      type: Array,
      default: []
    },
  },
  data() {
    return {
      review_state_switch: {0: '待审核', 1: '已通过', 2: '已驳回'},
      currentPage: 0
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }

}
</script>

<style scoped>
.el-pagination {
  margin-top: 20px;
}
</style>