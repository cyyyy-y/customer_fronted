<template>
  <div>
    <top-line @searchChange="searchChange" :title="'审核'"/>
    <admin-describe :admin-info="adminInfo"/>
    <default-table
        :is-audit="true"
        @handleCurrentChange="handleCurrentChange"
        @confirmPass="confirmPass"
        @confirmRejected="confirmRejected"
        :tableData="tableData.filter(data => !search || data.account.toLowerCase().includes(search.toLowerCase()))"/>

  </div>
</template>

<script>
import TopLine from "../../common/TopLine/TopLine";
import DefaultTable from "../../common/DefaultTable/DefaultTable";
import AdminDescribe from "../DefaultAudit/children/AdminDescribe";
import {rebornAudit} from "../../../network/default_info";
export default {
  name: "RebirthAudit",
  components: { AdminDescribe, DefaultTable, TopLine},
  mounted() {
    this.adminInfo = {
      account: '海底捞',
      default_state: 0,
      group_name: '海底捞'
    }
    this.tableData = [
      {
        default_id: 0, account: '海底捞', default_reason: 'reasonreasonreason', default_level: 2,
        remarks: '', apply_time: '2022-7-1 12:12:33', reviewer_account: '海底捞', credit: 1,
        review_state: 0, review_time: '2022-7-1 12:32:23', applicant_account: '123'
      },
      {
        default_id: 1, account: '海底捞', default_reason: 'reareasonson', default_level: 1, credit: 0,
        remarks: '', apply_time: '2022-7-1 12:12:33', reviewer_account: '海底捞',
        review_state: 1, review_time: '2022-7-1 12:32:23', applicant_account: '123'
      },
      {
        default_id: 2, account: '海底捞', default_reason: 'rereasonason', default_level: 0, credit: 2,
        remarks: '', apply_time: '2022-7-1 12:12:33', reviewer_account: '海底捞',
        review_state: 2, review_time: '2022-7-1 12:32:23', applicant_account: '123'
      },
      {
        default_id: 0, account: '海底捞', default_reason: 'rereasonreasonason', default_level: 2, credit: 1,
        remarks: '', apply_time: '2022-7-1 12:12:33', reviewer_account: '海底捞',
        review_state: 0, review_time: '2022-7-1 12:32:23', applicant_account: '123'
      }
    ]
  },
  data() {
    return {
      search: '',
      tableData: [],
      adminInfo: {},
    }
  },
  methods: {
    searchChange(search) {
      this.search = search
    },
    handleCurrentChange(page) {
      this.pageNum = page
      this.getDefaultAuditList()
    },
    confirmPass(id) {
      rebornAudit(id, 1).then(res => {
        if (res.message === "ok") {
          this.$message({
            message: '操作成功！',
            type: 'success'
          });
          this.getDefaultAuditList()
        }
      }).catch(err => {
        this.$message({
          message: '操作失败！',
          type: 'error'
        });
      })
    },
    confirmRejected(id) {
      rebornAudit(id, 2).then(res => {
        if (res.message === "ok") {
          this.$message({
            message: '操作成功！',
            type: 'success'
          });
          this.getDefaultAuditList()
        }
      }).catch(err => {
        this.$message({
          message: '操作失败！',
          type: 'error'
        });
      })
    }

  }
}
</script>

<style scoped>

</style>