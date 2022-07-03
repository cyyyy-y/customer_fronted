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