<template>
  <div>
    <top-line @searchChange="searchChange" :add="false" :title="'重生'"
              :dialogFormVisible="dialogFormVisible" @dialogMsg="dialogMsg"/>
    <staff-describe :staffInfo="staffInfo" />
    <default-table
        :is-mine="true"
        :is-rebirth="true"
        :total="total"
        @reborn="reborn"
        @rebornDes="rebornDes"
        :tableData="tableData.filter(data => !search || data.account.toLowerCase().includes(search.toLowerCase()))"/>

    <el-dialog class="Req" :visible.sync="dialogFormVisible">
      <RebirthDialog :disabled="disabled" :ruleForm="ruleForm" @submitForm="submitForm" />
    </el-dialog>
  </div>
</template>

<script>
import StaffDescribe from "../DefaultApplication/children/StaffDescribe";
import DefaultTable from "../../common/DefaultTable/DefaultTable";
import TopLine from "../../common/TopLine/TopLine";
import RebirthDialog from "@/components/staff/DefaultRebirth/children/RebirthDialog";
import {getOwnDefault} from "../../../network/default_info";


export default {
  name: "DefaultRebirth",
  components: {StaffDescribe, DefaultTable, TopLine, RebirthDialog},
  mounted() {
    this.init()
  },
  data() {
    return {
      search: '',
      tableData: [],
      staffInfo: {},
      dialogFormVisible: false,
      pageNum: 1,
      pageSize: 5,
      total: 0,
      ruleForm: {},
      disabled: true
    }
  },
  methods: {
    init() {
      this.getOwnDefault()

    },
    getOwnDefault() {
      getOwnDefault(this.pageNum, this.pageSize, 1).then(res => {
        console.log(res)
        this.tableData = res.data.data.list
        this.total = res.data.data.total
        this.pageNum = res.data.data.pageNum
        this.pageSize = res.data.data.pageSize
      })
    },
    searchChange(search) {
      this.search = search
    },
    dialogMsg(dialogMsg) {
      this.dialogFormVisible = dialogMsg
    },
    reborn(ruleForm) {
      this.disabled = true
      this.ruleForm = ruleForm
      this.dialogFormVisible = true

    },
    rebornDes(ruleForm) {
      this.disabled = true
      this.ruleForm = ruleForm
      console.log(ruleForm)
      this.dialogFormVisible = true
    },
    submitForm() {
      this.getOwnDefault()
      this.dialogFormVisible = false
    }
  }
}
</script>

<style scoped>

</style>