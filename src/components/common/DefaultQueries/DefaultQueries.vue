<template>
  <div>
    <top-line @searchChange="searchChange" :add="false" :title="'查询'"/>
    <default-table
        :isQueries="true"
        @handleCurrentChange="handleCurrentChange"
        :tableData="tableData.filter(data => !search || data.company.toLowerCase().includes(search.toLowerCase()))"/>
  </div>
</template>

<script>
import TopLine from "../TopLine/TopLine";
import DefaultTable from "../DefaultTable/DefaultTable";
import {getDefaultList} from "../../../network/default_info";
import {login} from "../../../network/user";

export default {
  name: "DefaultQueries",
  components: {DefaultTable, TopLine},
  mounted() {
    this.init()
  },
  data() {
    return {
      search: '',
      tableData: [],
      pageNum: 1,
      pageSize: 10,
      total: 0
    }
  },
  methods: {
    init() {
      this.getDefaultList()
    },
    getDefaultList() {
      getDefaultList(this.pageNum, this.pageSize).then(res => {
        this.tableData = res.data.data.list
        this.total = res.data.data.total
        this.pageNum = res.data.data.pageNum
        this.pageSize = res.data.data.pageSize
      })
    },
    searchChange(search) {
      this.search = search
    },
    handleCurrentChange(page) {
      this.pageNum = page
      this.getDefaultList()
    }
  }
}
</script>

<style scoped>

</style>