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
          <el-select v-model="ruleForm.reason" placeholder="请选择违约原因" style="width: 520px">
            <el-option :value="1" label="6个月内，交易对手技术性或资金等原因，给当天结算带来头寸缺口 2 次以上"></el-option>
            <el-option :value="2" label="6 个月内因各种原因导致成交后撤单 2 次以上"></el-option>
            <el-option :value="3" label="未能按照合约规定支付或延期支付利息，本金或其他交付义务（不包括在宽限期内延
期支付）"></el-option>
            <el-option :value="4" label="关联违约：如果集团（内部联系较紧密的集团）或集团内任一公司（较重要的子公司，
一旦发生违约会对整个集团造成较大影响的）发生违约，可视情况作为集团内所有成
员违约的触发条件"></el-option>
            <el-option :value="5" label="发生消极债务置换：债务人提供给债权人新的或重组的债务，或新的证券组合、现金
或资产低于原有金融义务；或为了债务人未来避免发生破产或拖欠还款而进行的展期
或重组"></el-option>
            <el-option :value="6" label="申请破产保护，发生法律接管，或者处于类似的破产保护状态
"></el-option>
            <el-option :value="7" label="在其他金融机构违约（包括不限于：人行征信记录中显示贷款分类状态不良类情况，
逾期超过 90 天等），或外部评级显示为违约级别"></el-option>
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
                  placeholder="选择日期时间"
                  style="width: 520px">
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
          serious: '',//违约严重性
          remarks: '',//备注
          time: ''
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
          time: [
            {required: true, trigger: 'change'}
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