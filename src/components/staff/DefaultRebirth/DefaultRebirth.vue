<template>
  <div>
    <top-line @searchChange="searchChange" :add="true"/>
    <staff-describe :staffInfo="staffInfo" />
    <default-table
        :is-mine="true"
        :is-rebirth="true"
        :tableData="tableData.filter(data => !search || data.account.toLowerCase().includes(search.toLowerCase()))"/>
  </div>
</template>

<script>
import StaffDescribe from "../DefaultApplication/children/StaffDescribe";
import DefaultTable from "../../common/DefaultTable/DefaultTable";
import TopLine from "../../common/TopLine/TopLine";

export default {
  name: "DefaultRebirth",
  components: {StaffDescribe, DefaultTable, TopLine},
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
    }
  },
  methods: {
    searchChange(search) {
      this.search = search
    }
  }
}
</script>

<style scoped>

</style>