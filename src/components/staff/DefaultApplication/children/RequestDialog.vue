<template>
  <div class="Req">
    <!--顶部logo-->
    <el-row>
      <el-col :span="24"><div class="Req-top"><img src="../../../../assets/ht_logo.png"/></div></el-col>
    </el-row>

    <!--表单title-->
    <el-row>
      <el-col :span="24"><div class="form-title">申请基本信息</div></el-col>
    </el-row>

    <!--表单主体-->
    <div class="form">
      <el-form :model="ruleForm" :rules="rules" label-position="left" ref="ruleForm" label-width="125px" class="demo-ruleForm">
        <el-form-item label="客户名称：" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="最新外部等级：" prop="level">
          <el-radio-group v-model="ruleForm.level">
            <el-radio :label="1" style="padding: 15px">重大风险</el-radio>
            <el-radio :label="2" style="padding: 15px">较大风险</el-radio>
            <el-radio :label="3" style="padding: 15px">一般风险</el-radio>
            <el-radio :label="4" style="padding: 15px">低风险</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="违约原因：" prop="reason">
          <el-select v-model="ruleForm.reason" placeholder="请选择违约原因">
            <el-option :value="1" label="111"></el-option>
            <el-option :value="2" label="222"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="违约严重性：" prop="serious">
          <el-radio-group v-model="ruleForm.serious">
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
        <el-form-item label="创建时间" prop="time">
          <el-date-picker
                  v-model="ruleForm.time"
                  type="datetime"
                  placeholder="选择日期时间">
          </el-date-picker>
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
  name: "RequestDialog",
  data() {
    return {
      ruleForm: {
        name: '',//客户名称
        level: '',//最新外部等级
        reason: '',//违约原因
        serious:'',//违约严重性
        remarks:'',//备注
        time: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入客户名称', trigger: 'blur' },
        ],
        level: [
          { required: true, message: '请选择最新外部等级', trigger: 'change' }
        ],
        reason: [
          { required: true, message: '请选择违约原因', trigger: 'change' }
        ],
        serious: [
          { required: true, message: '请选择违约严重性', trigger: 'change' }
        ],
        time: [
          { type: 'date', required: true, trigger: 'change' }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
  .Req {
    padding: 20px;
    background-color: white;
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
    width: 60%;
    margin-left: 25px;
  }

  .submit {
    margin-left: 900px;
    background-color: #11327F;
    border-color: #11327F;
  }
</style>