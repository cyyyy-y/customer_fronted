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
import AdminDescribe from "./children/AdminDescribe";
import {defaultAudit, getDefaultAuditList, getDefaultList} from "../../../network/default_info";
export default {
  name: "DefaultAudit",
  components: {AdminDescribe, DefaultTable, TopLine},
  mounted() {
    this.adminInfo = {
      account: '海底捞',
      default_state: 0,
      group_name: '海底捞'
    }

  },
  data() {
    return {
      search: '',
      tableData: [],
      pageNum: 1,
      pageSize: 4,
      total : 0,
      adminInfo: {},
    }
  },
  methods: {
    init() {
      this.getDefaultAuditList()
    },
    getDefaultAuditList() {
      getDefaultAuditList(this.pageNum, this.pageSize).then(res => {
        this.tableData = res.data.list
        this.total = res.data.total
        this.pageNum = res.data.pageNum
        this.pageSize = res.data.pageSize
      })
    },
    searchChange(search) {
      this.search = search
    },
    handleCurrentChange(page) {
      this.pageNum = page
      this.getDefaultAuditList()
    },
    confirmPass(id) {
      defaultAudit(id, 1).then(res => {
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
      defaultAudit(id, 2).then(res => {
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