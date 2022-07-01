<template>
  <div>
    <top-line />
    <queries-table :tableData="tableData" />
  </div>
</template>

<script>
import TopLine from "./children/TopLine";
import QueriesTable from "./children/QueriesTable";
export default {
  name: "DefaultQueries",
  components: {QueriesTable, TopLine},
  mounted() {
    this.tableData = [
      {default_id: 0, account: 123, default_reason: 'reason', default_level: 1,
        remarks: '', apply_time: '2022-7-1 12:12:33', reviewer_account: '123',
        review_state: 0, review_time: '2022-7-1 12:32:23', applicant_account: '123'},
      {default_id: 0, account: 123, default_reason: 'reason', default_level: 1,
        remarks: '', apply_time: '2022-7-1 12:12:33', reviewer_account: '123',
        review_state: 0, review_time: '2022-7-1 12:32:23', applicant_account: '123'},
      {default_id: 0, account: 123, default_reason: 'reason', default_level: 1,
        remarks: '', apply_time: '2022-7-1 12:12:33', reviewer_account: '123',
        review_state: 0, review_time: '2022-7-1 12:32:23', applicant_account: '123'},
      {default_id: 0, account: 123, default_reason: 'reason', default_level: 1,
        remarks: '', apply_time: '2022-7-1 12:12:33', reviewer_account: '123',
        review_state: 0, review_time: '2022-7-1 12:32:23', applicant_account: '123'},
    ]
  },
  data() {
    return {
      search: '',
      tableData: ''
    }
  }
}
</script>

<style scoped>

</style>