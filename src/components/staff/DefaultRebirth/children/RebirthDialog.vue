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
        <el-form-item label="客户名称：" prop="name">
          <el-input v-model="ruleForm.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="最新外部等级：" prop="level">
          <el-radio-group v-model="ruleForm.level">
            <el-radio disabled  :label="1" style="padding: 15px">重大风险</el-radio>
            <el-radio disabled  :label="2" style="padding: 15px">较大风险</el-radio>
            <el-radio disabled  :label="3" style="padding: 15px">一般风险</el-radio>
            <el-radio disabled  :label="4" style="padding: 15px">低风险</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="认定违约原因：" prop="DefaultReason">
          <el-input v-model="ruleForm.DefaultReason" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="违约严重性：" prop="serious">
          <el-radio-group v-model="ruleForm.serious">
            <el-radio disabled  :label="1" style="padding: 15px">高</el-radio>
            <el-radio disabled  :label="2" style="padding: 15px">中</el-radio>
            <el-radio disabled  :label="3" style="padding: 15px">低</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="认定人：" prop="name">
          <el-input v-model="ruleForm.reviewerNickname" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="认定申请时间" prop="time">
          <el-date-picker
                  v-model="ruleForm.applyTime"
                  type="datetime"
                  placeholder="选择日期时间"
                  style="width: 520px"
                  disabled>
          </el-date-picker>
        </el-form-item>
        <el-form-item label="重生原因：" prop="rebirthReason">
          <el-select v-model="ruleForm.rebirthReason" placeholder="请选择违约原因" style="width: 520px">
            <el-option :value="1" label="正常结算后解除"></el-option>
            <el-option :value="2" label="在其他金融机构违约解除，或外部评级显示为非违约级别"></el-option>
            <el-option :value="3" label="计提比例小于设置界限"></el-option>
            <el-option :value="4" label="连续 12 个月内按时支付本金和利息"></el-option>
            <el-option :value="5" label="客户的还款意愿和还款能力明显好转，已偿付各项逾期本金、逾期利息和其他费用（包
括罚息等），且连续 12 个月内按时支付本金、利息"></el-option>
            <el-option :value="6" label=" 导致违约的关联集团内其他发生违约的客户已经违约重生，解除关联成员的违约设定"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button class="submit" type="primary" @click="submitForm('ruleForm')">提交申请</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RebirthDialog",
  data() {
    return {
      ruleForm: {
        name: '',//客户名称
        level: '',//最新外部等级
        DefaultReason: '',//违约原因
        serious: '',//违约严重性
        reviewerNickname: '',//认定人
        applyTime: '',//认定申请时间
        rebirthReason: '',//重生原因
      },
      rules: {
        rebirthReason: [
          {required: true, message: '请选择重生原因', trigger: 'change'}
        ],
      }
    };
  },
  props: {
    dialogFormVisible: Boolean,
  },
  methods: {
    //提交表单
    submitForm(ruleForm) {
      let that = this;
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          this.$notify({
            title: '成功',
            message: '提交成功！',
            type: 'success'
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
    padding-left: 20px;
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
    margin-top: 20px;
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

  /deep/.el-dialog__body {
    padding: 0px 20px!important;
  }
</style>