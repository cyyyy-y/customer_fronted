<template>
  <div>
    <top-line @searchChange="deSearchChange" :add="true" :title="'违约原因'"
              :type="0"
              :dialogFormVisible="dialogFormVisible" @dialogMsg="dialogMsg"/>
    <reason-table
        @switchChange="deSwitchChange"
        @deleteReason="deleteReason"
        @handleCurrentChange="handleDeChange"
        :total="deTotal"
        :table-data="deReasonList.filter(data => data.type === 0 && (!deSearch ||
    data.reason.toLowerCase().includes(deSearch.toLowerCase())))"/>

    <top-line class="re-top" @searchChange="reSearchChange" :type="1" :add="true"
              :title="'重生原因'" :dialogFormVisible="dialogFormVisible" @dialogMsg="dialogMsg"/>
    <reason-table
        @switchChange="reSwitchChange"
        @deleteReason="deleteReason"
        @handleCurrentChange="handleReChange"
        :total="reTotal"
        :table-data="reReasonList.filter(data => data.type === 1 && (!reSearch ||
    data.reason.toLowerCase().includes(reSearch.toLowerCase())))"/>

    <el-dialog class="Req" :visible.sync="dialogFormVisible" @close="closeDialog">
      <ReasonDialog :type="type"/>
    </el-dialog>
  </div>
</template>

<script>
import TopLine from "../../common/TopLine/TopLine";
import ReasonTable from "./children/ReasonTable";
import ReasonDialog from "@/components/admin/ReasonManagement/children/ReasonDialog";
import {getReason, updateReason, deleteReason, addReason} from "../../../network/reason";

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
      dePageNum: 1,
      dePageSize: 4,
      deTotal: 0,
      rePageNum: 1,
      rePageSize: 4,
      reTotal: 0,
      type: 0
    }
  },
  methods: {
    init() {
      this.getDeReason()
      this.getReReason()
    },
    getDeReason() {
      getReason(this.dePageNum, this.dePageSize, 0).then(res => {
        console.log(res)
        this.deReasonList = res.data.data.list
        this.deTotal = res.data.data.total
        this.dePageNum = res.data.data.pageNum
        this.dePageSize = res.data.data.pageSize
      })
    },
    getReReason() {
      getReason(this.rePageNum, this.rePageSize, 1).then(res => {
        console.log(res)
        this.reReasonList = res.data.data.list
        this.reTotal = res.data.data.total
        this.rePageNum = res.data.data.pageNum
        this.rePageSize = res.data.data.pageSize
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
    dialogMsg(dialogMsg, type) {
      this.dialogFormVisible = dialogMsg;
      this.type = type
    },
    handleDeChange(page) {
      this.dePageNum = page
      this.getDeReason()
    },
    handleReChange(page) {
      this.rePageNum = page
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
      this.dialogFormVisible = false;
    }
  }
}
</script>

<style scoped>
.re-top {
  margin-top: 20px;
}
</style>