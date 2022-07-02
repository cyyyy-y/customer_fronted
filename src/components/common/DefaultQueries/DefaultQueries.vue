<template>
  <div>
    <top-line @searchChange="searchChange" :add="false" :title="'查询'"/>
    <default-table
        :tableData="tableData.filter(data => !search || data.account.toLowerCase().includes(search.toLowerCase()))"/>
  </div>
</template>

<script>
import TopLine from "../TopLine/TopLine";
import DefaultTable from "../DefaultTable/DefaultTable";

export default {
  name: "DefaultQueries",
  components: {DefaultTable, TopLine},
  mounted() {
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
      },
      {
        default_id: 0, account: '真功夫', default_reason: 'reason', default_level: 0, credit: 2,
        remarks: '', apply_time: '2022-7-1 12:12:33', reviewer_account: '真功夫',
        review_state: 2, review_time: '2022-7-1 12:32:23', applicant_account: '123'
      },
      {
        default_id: 0, account: '真功夫', default_reason: 'reason', default_level: 2, credit: 1,
        remarks: '', apply_time: '2022-7-1 12:12:33', reviewer_account: '真功夫',
        review_state: 0, review_time: '2022-7-1 12:32:23', applicant_account: '123'
      },
    ]
  },
  data() {
    return {
      search: '',
      tableData: []
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