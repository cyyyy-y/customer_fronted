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
          width="170"
          prop="reason"
          label="原因描述">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" :content="scope.row.reason" placement="bottom">
            <span>{{ scope.row.reason.substr(0, 8) }}……</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column
          prop="isUsed"
          label="是否启用">
        <template slot-scope="scope">
          <el-switch
              @change="switchChange(scope.row.id, scope.row.isUsed)"
              v-model="scope.row.isUsed"
              active-text="已启用"
              inactive-text="未启用">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
          prop="createTime"
          label="创建时间">
        <template slot-scope="scope">
          {{ dateFormat(scope.row.createTime) }}
        </template>
      </el-table-column>
      <el-table-column
          prop="updateTime"
          label="修改时间">
        <template slot-scope="scope">
          {{ dateFormat(scope.row.updateTime) }}
        </template>
      </el-table-column>
      <el-table-column
          label="操作">
        <template slot-scope="scope">
          <el-button @click="deleteReason(scope.row.id)" type="danger" size="small" round>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="4"
        layout="total, prev, pager, next, jumper"
        :total="total">
    </el-pagination>
  </el-card>

</template>

<script>
import {dateFormat} from "../../../../utils/date";

export default {
  name: "ReasonTable",
  props: {
    tableData: {
      type: Array,
      default: []
    },
    total: {
      type: Number,
      default: 0
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
      this.$emit('handleCurrentChange', val)
      console.log(`当前页: ${val}`);
    },
    dateFormat(date) {
      return dateFormat(date)
    },
    switchChange(id, val) {
      this.$emit('switchChange', id, val)
      // console.log(id, val)
    },
    deleteReason(id) {
      this.$emit('deleteReason', id)
    }
  }

}
</script>

<style scoped>
.el-pagination {
  margin-top: 20px;
}
</style>