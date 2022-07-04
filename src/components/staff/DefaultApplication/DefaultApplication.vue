<template>
  <div>
    <top-line @searchChange="searchChange" :add="true"
              :dialogFormVisible="dialogFormVisible" @dialogMsg="dialogMsg"/>
    <staff-describe :staffInfo="staffInfo" />
    <default-table
        :is-mine="true"
        :tableData="tableData.filter(data => !search || data.account.toLowerCase().includes(search.toLowerCase()))"/>

    <el-dialog class="Req" :visible.sync="dialogFormVisible">
      <RequestDialog/>
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
    this.tableData = [
      {
        default_id: 0, account: '海底捞', default_reason: 'reasonreasonreason', default_level: 2,
        remarks: '', apply_time: '2022-7-1 12:12:33', reviewer_account: '海底捞', credit: 1,
        review_state: 0, review_time: '2022-7-1 12:32:23', applicant_account: '123'
      },
      {
        default_id: 0, account: '海底捞', default_reason: 'reareasonson', default_level: 1, credit: 0,
        remarks: '', apply_time: '2022-7-1 12:12:33', reviewer_account: '海底捞',
        review_state: 1, review_time: '2022-7-1 12:32:23', applicant_account: '123'
      },
      {
        default_id: 0, account: '海底捞', default_reason: 'rereasonason', default_level: 0, credit: 2,
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
      staffInfo: {},
      dialogFormVisible: false,
    }
  },
  methods: {
    init() {
      console.log("getOwnDefaulted");
      this.getOwnDefaulted()
    },
    getOwnDefaulted() {
      console.log("getOwnDefaulted");
      getOwnDefault(this.pageNum, this.pageSize).then(res => {
        this.tableData = res.data.data.list
        // this.total = 12
        this.pageNum = 1
        // this.pageNum = res.data.data.pageNum
        this.pageSize = 5
        // this.pageSize = res.data.data.pageSize
      })
    },
    searchChange(search) {
      this.search = search
    },
    dialogMsg(dialogMsg) {
      this.dialogFormVisible = dialogMsg
    }
  }

}
</script>

<style scoped>

</style>