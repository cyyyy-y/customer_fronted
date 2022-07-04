<template>
  <div>
    <top-line @searchChange="deSearchChange" :add="true" :title="'违约原因'"
              :dialogFormVisible="dialogFormVisible" @dialogMsg="dialogMsg"
              :type="0"/>
    <reason-table :table-data="reasonList.filter(data => data.type === 0 && (!deSearch ||
    data.reason.toLowerCase().includes(deSearch.toLowerCase())))"/>

    <top-line class="re-top" @searchChange="reSearchChange" :add="true" :title="'重生原因'"
              :dialogFormVisible="dialogFormVisible" @dialogMsg="dialogMsg"
              :type="1"/>
    <reason-table :table-data="reasonList.filter(data => data.type === 1 && (!reSearch ||
    data.reason.toLowerCase().includes(reSearch.toLowerCase())))"/>

    <el-dialog class="Req" :visible.sync="dialogFormVisible" @close="closeDialog">
      <ReasonDialog/>
    </el-dialog>
  </div>
</template>

<script>
import TopLine from "../../common/TopLine/TopLine";
import ReasonTable from "./children/ReasonTable";
import ReasonDialog from "@/components/admin/ReasonManagement/children/ReasonDialog";
import {getReason} from "@/network/reason";

export default {
  name: "ReasonManagement",
  components: {ReasonTable, TopLine, ReasonDialog},
  mounted() {
    this.reasonList = [
      {
        id: 0, reason: 'reasonreasonreasonreason', type: 0, is_used: false,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 1, reason: 'reasonreasonreasonreason', type: 1, is_used: false,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 2, reason: 'reasonreasonreasonreason', type: 0, is_used: true,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 3, reason: 'reasonreasonreasonreason', type: 0, is_used: true,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 4, reason: 'reasonreasonreasonreason', type: 1, is_used: false,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 5, reason: 'reasonreasonreasonreason', type: 1, is_used: true,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 6, reason: 'reasonreasonreasonreason', type: 1, is_used: true,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 0, reason: 'reasonreasonreasonreason', type: 0, is_used: false,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 1, reason: 'reasonreasonreasonreason', type: 1, is_used: false,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 2, reason: 'reasonreasonreasonreason', type: 0, is_used: true,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 3, reason: 'reasonreasonreasonreason', type: 0, is_used: true,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 4, reason: 'reasonreasonreasonreason', type: 1, is_used: false,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 5, reason: 'reasonreasonreasonreason', type: 1, is_used: true,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 6, reason: 'reasonreasonreasonreason', type: 1, is_used: true,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
    ]
  },
  data() {
    return {
      deSearch: '',
      reSearch: '',
      reasonList: [],
      dialogFormVisible: false,
    }
  },
  methods: {
    init() {
      console.log("213")
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