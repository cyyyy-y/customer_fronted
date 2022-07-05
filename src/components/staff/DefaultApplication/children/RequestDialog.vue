<template>
  <div class="Req">
    <!--顶部logo-->
    <el-row>
      <el-col :span="24">
        <div class="Req-top"><img src="../../../../assets/ht_logo.png"/></div>
      </el-col>
    </el-row>

    <!--表单title-->
    <el-row>
      <el-col :span="24">
        <div class="form-title">申请基本信息</div>
      </el-col>
    </el-row>

    <!--表单主体-->
    <div class="form">
      <el-form :model="ruleForm" :rules="rules" label-position="left" ref="ruleForm" label-width="125px"
               class="demo-ruleForm">
        <el-form-item label="客户名称：" prop="company">
          <el-input v-model="ruleForm.company"></el-input>
        </el-form-item>
        <el-form-item label="违约原因：" prop="reasonId">
          <el-select v-model="ruleForm.reasonId" placeholder="请选择违约原因" style="width: 520px">
            <el-option v-for="item in reasonList" v-if="item.isUsed" :value="item.id" :label="item.reason"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="违约严重性：" prop="defaultLevel">
          <el-radio-group v-model="ruleForm.defaultLevel">
            <el-radio :label="1" style="padding: 15px">高</el-radio>
            <el-radio :label="2" style="padding: 15px">中</el-radio>
            <el-radio :label="3" style="padding: 15px">低</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注" prop="remarks">
          <el-input type="textarea"
                    v-model="ruleForm.remarks"
                    placeholder="可输入备注，字数不超过100个字"
                    :autosize="{ minRows: 4, maxRows: 6}">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="submit" type="primary" @click="submitForm('ruleForm')">提交申请</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {applyDefault} from "@/network/default_info";
  import {getReason} from "../../../../network/reason";

  export default {
    name: "RequestDialog",
    data() {
      return {
        ruleForm: {
          company: '',//客户名称
          reasonId: '',//违约原因
          defaultLevel: '',//违约严重性
          remarks: '',//备注
        },
        rules: {
          name: [
            {required: true, message: '请输入客户名称', trigger: 'blur'},
          ],
          level: [
            {required: true, message: '请选择最新外部等级', trigger: 'change'}
          ],
          reason: [
            {required: true, message: '请选择违约原因', trigger: 'change'}
          ],
          serious: [
            {required: true, message: '请选择违约严重性', trigger: 'change'}
          ],
        },
        reasonList: []
      };
    },
    props: {
      dialogFormVisible: Boolean,
    },
    mounted() {
      getReason(1, 100, 0).then(res => {
        console.log(res)
        this.reasonList = res.data.data.list
      })
    },
    methods: {
      //提交表单
      submitForm(ruleForm) {
        let that = this;
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            applyDefault(this.ruleForm).then(res => {
              console.log(res)
              if (res.data.code === 0) {
                this.$emit('submitForm');
                this.$notify({
                  title: '成功',
                  message: '提交成功！',
                  type: 'success'
                });
              } else {
                this.$notify({
                  title: '失败',
                  message: '提交失败！' + res.data.message,
                  type: 'error'
                });
              }

              this.dialogFormVisible = false;
            });
            this.dialogFormVisible = false;
            console.log(that.ruleForm);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>

<style scoped>
  .Req {
    padding: 20px;
    /*background-color: white;*/
  }

  .Req-top {
    height: 50px;
    width: 140px;
    display: flex;
  }

  .form-title {
    font-weight: bold;
    display: flex;
    padding-left: 15px;
    margin-top: 30px;
    padding-top: 15px;
    margin-bottom: 30px;
    border-top: 1px solid #9da5a3;
  }

  .form {
    width: 92%;
    margin-left: 25px;
  }

  .submit {
    margin-left: 400px;
    background-color: #11327F;
    border-color: #11327F;
  }
</style>