<template>
  <div>
    <top-line @searchChange="searchChange" :title="'审核'"/>
    <admin-describe :admin-info="adminInfo"/>
    <default-table
        :is-audit="true"
        :total="total"
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
    this.init()
  },
  data() {
    return {
      search: '',
      tableData: [],
      pageNum: 1,
      pageSize: 4,
      total: 0,
      adminInfo: {},
    }
  },
  methods: {
    init() {
      this.getDefaultAuditList()
    },
    getDefaultAuditList() {
      getDefaultAuditList(this.pageNum, this.pageSize).then(res => {
        console.log(res)
        this.tableData = res.data.data.list
        this.total = res.data.data.total
        this.pageNum = res.data.data.pageNum
        this.pageSize = res.data.data.pageSize
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
        console.log(res)
        if (res.data.data === 1) {
          this.$message({
            message: '操作成功！',
            type: 'success'
          });
        } else {
          this.$message({
            message: '操作失败！!',
            type: 'error'
          });
        }
        this.getDefaultAuditList()
      }).catch(err => {
        this.$message({
          message: '操作失败！',
          type: 'error'
        });
      })
    },
    confirmRejected(id) {
      defaultAudit(id, 2).then(res => {
        console.log(res)
        if (res.data.data === 1) {
          this.$message({
            message: '操作成功！',
            type: 'success'
          });
        } else {
          this.$message({
            message: '操作失败！!',
            type: 'error'
          });
        }
        this.getDefaultAuditList()
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