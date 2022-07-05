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
          <el-input v-model="ruleForm.applicant" :disabled="disabled"></el-input>
        </el-form-item>
        <el-form-item label="最新外部等级：" prop="level">
          <el-radio-group v-model="ruleForm.credit">
            <el-radio disabled :label="1" style="padding: 15px">重大风险</el-radio>
            <el-radio disabled :label="2" style="padding: 15px">较大风险</el-radio>
            <el-radio disabled :label="3" style="padding: 15px">一般风险</el-radio>
            <el-radio disabled :label="4" style="padding: 15px">低风险</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="认定违约原因：" prop="DefaultReason">
          <el-input v-model="ruleForm.reason" :disabled="disabled"></el-input>
        </el-form-item>
        <el-form-item label="违约严重性：" prop="serious">
          <el-radio-group v-model="ruleForm.defaultLevel">
            <el-radio disabled :label="1" style="padding: 15px">高</el-radio>
            <el-radio disabled :label="2" style="padding: 15px">中</el-radio>
            <el-radio disabled :label="3" style="padding: 15px">低</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="认定人：" prop="name">
          <el-input v-model="ruleForm.reviewerName" :disabled="disabled"></el-input>
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
            <el-option v-for="item in reasonList" v-if="item.isUsed" :value="item.id" :label="item.reason"></el-option>
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
import {applyDefault, applyRebirth} from "@/network/default_info";
import {getReason} from "../../../../network/reason";

export default {
  name: "RebirthDialog",
  data() {
    return {
      rules: {
        rebirthReason: [
          {required: true, message: '请选择重生原因', trigger: 'change'}
        ],
      },
      reasonList: []
    };
  },
  props: {
    dialogFormVisible: Boolean,
    ruleForm: {
      type: Object,
      default: {
        name: '',//客户名称
        level: '',//最新外部等级
        DefaultReason: '',//违约原因
        serious: '',//违约严重性
        reviewerNickname: '',//认定人
        applyTime: '',//认定申请时间
        rebirthReason: '',//重生原因
      }
    },
    disabled: Boolean
  },
  mounted() {
    getReason(1, 100, 1).then(res => {
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
          console.log(that.ruleForm.rebirthReason)
          applyRebirth(that.ruleForm.defaultId, that.ruleForm.rebirthReason).then(res => {
            this.$emit('submitForm');
            this.$notify({
              title: '成功',
              message: '提交成功！',
              type: 'success'
            });
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

/deep/ .el-dialog__body {
  padding: 0px 20px !important;
}
</style>