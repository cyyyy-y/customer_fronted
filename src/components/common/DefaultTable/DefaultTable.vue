<template>
  <el-card shadow="none">
    <el-table
        class="queries-table"
        :data="tableData"
        stripe
        style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="table-expand">
            <el-form-item label="认定违约原因" label-width="130px">
              <span>{{ props.row.default_reason }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
          type="selection"
          label="选择">
      </el-table-column>
      <el-table-column
          v-if="!isMine"
          prop="account"
          label="违约客户">
      </el-table-column>
      <el-table-column
          width="120"
          prop="default_reason"
          label="认定违约原因">
        <template slot-scope="scope">
          <span>{{ scope.row.default_reason.substr(0, 8) }}……</span>
        </template>
      </el-table-column>
      <el-table-column
          width="90"
          prop="default_level"
          label="严重程度">
        <template slot-scope="scope">
          <span
              :style="{'color': scope.row.default_level === 0 ? 'darkseagreen' :
              scope.row.default_level === 1 ? 'orange' : 'red', 'text-align': 'center'}"
              disable-transitions>{{ default_level_switch[scope.row.default_level] }}</span>
        </template>
      </el-table-column>
      <el-table-column
          prop="reviewer_account"
          label="认定人">
      </el-table-column>
      <el-table-column
          prop="apply_time"
          label="申请时间">
        <template slot-scope="scope">
          {{ getFormattingDate(scope.row.apply_time) }}
        </template>
      </el-table-column>
      <el-table-column
          prop="review_time"
          label="审核时间">
        <template slot-scope="scope">
          {{ getFormattingDate(scope.row.review_time) }}
        </template>
      </el-table-column>
      <el-table-column
          prop="credit"
          label="最新外部等级">
        <template slot-scope="scope">
          <span
              :style="{'color': scope.row.credit === 0 ? 'darkseagreen' : scope.row.credit === 1 ? 'orange' : 'red'}"
              disable-transitions>{{ credit_switch[scope.row.credit] }}</span>
        </template>
      </el-table-column>
      <el-table-column
          prop="review_state"
          :filters="[{ text: '待审核', value: 0 }, { text: '已通过', value: 1 }, { text: '已驳回', value: 2 }]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
          label="审核状态">
        <template slot-scope="scope">
          <el-tag
              :type="scope.row.review_state === 0 ? 'primary' : scope.row.review_state === 1 ? 'success' : 'danger'"
              disable-transitions>{{ review_state_switch[scope.row.review_state] }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
          v-if="isRebirth"
          prop="review_time"
          label="操作">
        <template slot-scope="scope">
          <el-button type="info" round plain>重生</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
    </el-pagination>
  </el-card>

</template>

<script>
export default {
  name: "DefaultTable",
  data() {
    return {
      review_state_switch: {0: '待审核', 1: '已通过', 2: '已驳回'},
      credit_switch: {0: '低风险', 1: '较大风险', 2: '重大风险'},
      default_level_switch: {0: '低', 1: '中', 2: '高'},
      currentPage: 0
    }
  },
  props: {
    tableData: {
      type: Array,
      default: []
    },
    isMine: {
      type: Boolean,
      default: false
    },
    isRebirth: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    filterTag(value, row) {
      return row.review_state === value;
    },
    getFormattingDate(date) {
      let list = date.split(' ')
      console.log(list)
      return list[0] + '\r\n' + list[1]
    },
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
.el-card {
  margin-top: 20px;
}

.el-pagination {
  margin-top: 20px;
}

.queries-table {
  text-align: center;
}
</style>
<style>
.queries-table .table-expand {
  font-size: 0;
}

.queries-table .table-expand label {
  width: 90px;
  color: #99a9bf;
}

.queries-table .table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

.queries-table .cell {
  text-align: center;
}
</style>