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
        <el-form-item label="原因：" prop="reason">
          <el-input v-model="ruleForm.reason"></el-input>
        </el-form-item>
        <el-form-item label="是否启用：" prop="isUsed">
          <el-radio-group v-model="ruleForm.isUsed">
            <el-radio :label="0">是</el-radio>
            <el-radio :label="1" style="padding-left: 140px">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button class="submit" type="primary" @click="submitForm('ruleForm', )">确认</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {addReason} from "../../../../network/reason";

  export default {
    name: "ReasonDialog",
    data() {
      return {
        ruleForm: {
          reason: '',//原因
          type: '',//类型
          isUsed: '',//是否启用
          // createTime: '',//创建时间
          // changeTime: '',//修改时间
        },
        rules: {
          reason: [
            {required: true, message: '请输入违约原因', trigger: 'blur'},
          ],
          isUsed: [
            {required: true, message: '请选择是否启用', trigger: 'change'}
          ],
        }
      };
    },
    props: {
      dialogFormVisible: Boolean,
      type: Number,
    },
    methods: {
      //提交表单
      submitForm(ruleForm) {
        console.log(this.type);
        let that = this;
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            that.ruleForm.type = that.type;
            addReason(this.ruleForm).then(res => {
              console.log(res)
              this.$notify({
                title: '成功',
                message: '提交成功！',
                type: 'success'
              });
              this.$emit('submitForm');
            });
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