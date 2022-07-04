<template>
  <div>
    <top-line @searchChange="deSearchChange" :add="true" :title="'违约原因'"
              :dialogFormVisible="dialogFormVisible" @dialogMsg="dialogMsg"/>
    <reason-table :table-data="reasonList.filter(data => data.type === 0 && (!deSearch ||
    data.reason.toLowerCase().includes(deSearch.toLowerCase())))"/>

    <top-line class="re-top" @searchChange="reSearchChange" :add="true" :title="'重生原因'"/>
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
import {getReason} from "../../../network/reason";

export default {
  name: "ReasonManagement",
  components: {ReasonTable, TopLine, ReasonDialog},
  mounted() {
    this.getReason()
  },
  data() {
    return {
      deSearch: '',
      reSearch: '',
      reasonList: [],
      dialogFormVisible: false,
      pageNum: 1,
      pageSize: 4,
      total: 0,
    }
  },
  methods: {
    init() {

    },
    getReason() {
      getReason(this.pageNum, this.pageSize).then(res => {
        console.log(res.data.data.list)
        this.reasonList = res.data.data.list
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
    }
  }
}
</script>

<style scoped>
.re-top {
  margin-top: 20px;
}
</style>