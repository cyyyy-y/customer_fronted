<template>
  <div>
    <top-line @searchChange="searchChange" :add="true"
              :dialogFormVisible="dialogFormVisible" @dialogMsg="dialogMsg"/>
    <staff-describe :staffInfo="staffInfo" />
    <default-table
        :is-mine="true"
        :total="total"
        @handleCurrentChange="handleCurrentChange"
        :tableData="tableData.filter(data => !search || data.account.toLowerCase().includes(search.toLowerCase()))"/>

    <el-dialog class="Req" :visible.sync="dialogFormVisible">
      <RequestDialog @submitForm="submitForm"/>
    </el-dialog>
  </div>
</template>

<script>
import TopLine from "../../common/TopLine/TopLine";
import DefaultTable from "../../common/DefaultTable/DefaultTable";
import StaffDescribe from "./children/StaffDescribe";
import RequestDialog from "@/components/staff/DefaultApplication/children/RequestDialog";
import {getOwnDefault} from "@/network/default_info";
import {getReason} from "@/network/reason";

export default {
  name: "DefaultApplication",
  components: {StaffDescribe, DefaultTable, TopLine, RequestDialog},
  mounted() {
    this.staffInfo = {
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
      staffInfo: {},
      dialogFormVisible: false,
      pageNum: 1,
      pageSize: 4,
      total: 0
    }
  },
  methods: {
    init() {
      console.log("getOwnDefaulted");
      this.getOwnDefaulted()
    },
    getOwnDefaulted() {
      console.log("getOwnDefaulted");
      getOwnDefault(this.pageNum, this.pageSize, null).then(res => {
        console.log(res);
        this.tableData = res.data.data.list
        this.total = res.data.data.total
      })
    },
    searchChange(search) {
      this.search = search
    },
    dialogMsg(dialogMsg) {
      this.dialogFormVisible = dialogMsg
    },
    submitForm() {
      this.getOwnDefaulted()
      this.dialogFormVisible = false

    },
    handleCurrentChange(page) {
      this.pageNum = page
      this.getOwnDefaulted()
    }
  }

}
</script>

<style scoped>

</style>