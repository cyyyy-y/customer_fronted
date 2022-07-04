<template>
  <div>
    <top-line @searchChange="deSearchChange" :add="true" :title="'违约原因'"
              :dialogFormVisible="dialogFormVisible" @dialogMsg="dialogMsg"/>
    <reason-table
        @switchChange="deSwitchChange"
        @deleteReason="deleteReason"
        @handleCurrentChange="handleDeChange"
        :total="total"
        :table-data="deReasonList.filter(data => data.type === 0 && (!deSearch ||
    data.reason.toLowerCase().includes(deSearch.toLowerCase())))"/>

    <top-line class="re-top" @searchChange="reSearchChange" :add="true" :title="'重生原因'"/>
    <reason-table
        @switchChange="reSwitchChange"
        @deleteReason="deleteReason"
        @handleCurrentChange="handleReChange"
        :total="total"
        :table-data="reReasonList.filter(data => data.type === 1 && (!reSearch ||
    data.reason.toLowerCase().includes(reSearch.toLowerCase())))"/>

    <el-dialog class="Req" :visible.sync="dialogFormVisible" @close="closeDialog">
      <ReasonDialog @submitForm="submitForm"/>
    </el-dialog>
  </div>
</template>

<script>
import TopLine from "../../common/TopLine/TopLine";
import ReasonTable from "./children/ReasonTable";
import ReasonDialog from "@/components/admin/ReasonManagement/children/ReasonDialog";
import {deleteReason, getReason, updateReason} from "../../../network/reason";

export default {
  name: "ReasonManagement",
  components: {ReasonTable, TopLine, ReasonDialog},
  mounted() {
    this.init()
  },
  data() {
    return {
      deSearch: '',
      reSearch: '',
      deReasonList: [],
      reReasonList: [],
      dialogFormVisible: false,
      pageNum: 1,
      pageSize: 4,
      total: 0,
    }
  },
  methods: {
    init() {
      this.getDeReason()
      this.getReReason()

    },
    getDeReason() {
      getReason(this.pageNum, this.pageSize, 0).then(res => {
        this.reasonList = res.data.data.list
        this.total = res.data.data.total
        this.pageNum = res.data.data.pageNum
        this.pageSize = res.data.data.pageSize
      })
    },
    getReReason() {
      getReason(this.pageNum, this.pageSize, 1).then(res => {
        this.reasonList = res.data.data.list
        this.total = res.data.data.total
        this.pageNum = res.data.data.pageNum
        this.pageSize = res.data.data.pageSize
      })
    },
    deSearchChange(search) {
      this.deSearch = search
    },
    reSearchChange(search) {
      this.reSearch = search
    },
    //关闭表单
    closeDialog() {
      this.dialogFormVisible = false;
    },
    dialogMsg(dialogMsg) {
      this.dialogFormVisible = dialogMsg
    },
    handleDeChange(page) {
      this.pageNum = page
      this.getDeReason()
    },
    handleReChange(page) {
      this.pageNum = page
      this.getReReason()
    },
    deSwitchChange(id, val) {
      updateReason(id, val).then(res => {
        console.log(res)
      })
    },
    reSwitchChange(id, val) {
      updateReason(id, val).then(res => {
        console.log(res)
      })
    },
    deleteReason(id) {
      deleteReason(id).then(res => {
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
        this.getDeReason()
        this.getReReason()
      }).catch(err => {
        this.$message({
          message: '操作失败！',
          type: 'error'
        });
      })
    },
    submitForm() {
      this.getDeReason()
      this.getReReason()
    }
  }
}
</script>

<style scoped>
.re-top {
  margin-top: 20px;
}
</style>