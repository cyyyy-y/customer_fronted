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
            <el-form-item label="认定违约原因" label-width="70px">
              <span>{{ props.row.reason }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
          v-if="!isMine"
          prop="company"
          label="违约客户">
      </el-table-column>
      <el-table-column
          width="110"
          prop="reason"
          label="认定违约原因">
        <template slot-scope="scope">
          <span>{{ scope.row.reason.substr(0, 5) }}…</span>
        </template>
      </el-table-column>
      <el-table-column
          width="90"
          prop="defaultLevel"
          label="严重程度">
        <template slot-scope="scope">
          <span
              :style="{'color': scope.row.defaultLevel === 0 ? 'darkseagreen' :
              scope.row.defaultLevel === 1 ? 'orange' : 'red', 'text-align': 'center'}"
              disable-transitions>{{ default_level_switch[scope.row.defaultLevel] }}</span>
        </template>
      </el-table-column>

      <el-table-column
          prop="applicant"
          label="申请人">
      </el-table-column>
      <el-table-column
          prop="applyTime"
          label="申请时间">
        <template slot-scope="scope">
          {{ getFormattingDate(scope.row.applyTime) }}
        </template>
      </el-table-column>

      <el-table-column
          width="100"
          v-if="!isAudit"
          prop="applicant"
          label="认定人">
      </el-table-column>
      <el-table-column
          v-if="!isAudit"
          prop="reviewTime"
          label="审核时间">
        <template slot-scope="scope">
          {{ getFormattingDate(scope.row.reviewTime) }}
        </template>
      </el-table-column>
      <el-table-column
          width="110"
          prop="credit"
          label="最新外部等级">
        <template slot-scope="scope">
          <span
              :style="{'color': scope.row.credit === 0 ? 'darkseagreen' : scope.row.credit === 1 ? 'orange' : 'red'}"
              disable-transitions>{{ credit_switch[scope.row.credit] }}</span>
        </template>
      </el-table-column>
      <el-table-column
          v-if="!isAudit"
          prop="reviewState"
          :filters="[{ text: '待审核', value: 0 }, { text: '已通过', value: 1 }, { text: '已驳回', value: 2 }]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
          label="审核状态">
        <template slot-scope="scope">
          <el-tag
              :type="scope.row.reviewState === 0 ? 'primary' : scope.row.reviewState === 1 ? 'success' : 'danger'"
              disable-transitions>{{ review_state_switch[scope.row.reviewState] }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
          v-if="isRebirth"
          prop="rebornState"
          label="操作">
        <template slot-scope="scope">
          <el-button v-if="scope.row.rebornState === null" type="info" size="small" round>重生</el-button>
          <el-button v-if="scope.row.reviewState === 1 && scope.row.rebornState === 1"
                     type="info" size="small" round plain disabled>已重生
          </el-button>
          <!--          <el-button v-else type="info" size="small" round plain disabled>已重生</el-button>-->
        </template>
      </el-table-column>
      <el-table-column
          v-if="isAudit"
          label="审核">
        <template slot-scope="scope">
          <el-popconfirm
              title="确定通过此申请？"
              icon="el-icon-success"
              icon-color="darkseagreen"
              @confirm="confirmPass(scope.row.id || scope.row.defaultId)"
          >
            <el-button slot="reference" type="success" size="small" round>通过</el-button>
          </el-popconfirm>
          <el-popconfirm
              style="margin-left: 10px"
              title="确定驳回此申请？"
              icon="el-icon-warning"
              icon-color="red"
              @confirm="confirmRejected(scope.row.defaultId ||  scope.row.id)"
          >
            <el-button slot="reference" type="danger" size="small" round>驳回</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="isQueries ? 10 : 2"
        layout="total, prev, pager, next, jumper"
        :total="tableData.length">
    </el-pagination>
  </el-card>

</template>

<script>
import {dateFormat} from "../../../utils/date";

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
    isQueries: {
      type: Boolean,
      default: false
    },
    isMine: {
      type: Boolean,
      default: false
    },
    isRebirth: {
      type: Boolean,
      default: false
    },
    isAudit: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    filterTag(value, row) {
      return row.review_state === value;
    },
    getFormattingDate(date) {
      return dateFormat(date)
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
      console.log(`当前页: ${val}`);
    },
    confirmPass(id) {
      this.$emit('confirmPass', id)
    },
    confirmRejected(id) {
      this.$emit('confirmRejected', id)
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