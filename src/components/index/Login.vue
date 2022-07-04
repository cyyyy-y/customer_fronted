<template>
  <div class="main">
<!--    logo-->
    <el-row>
      <el-col :span="24"><div class="logo"><img src="../../assets/ht_logo.png"/></div></el-col>
    </el-row>
<!--    主体部分-->
    <el-row>
      <div class="box">
        <!--          左边图片及系统题目-->

        <el-col :span="10">
          <div class="box1">
            <div class="title">违约客户管理系统</div>
            <div class="img"><img src="../../assets/img.png"/></div>
          </div>
        </el-col>
<!--        右边登录form-->
        <el-col :span="14">
          <div class="box2">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="员工登录" name="first" class="tab-first">
                <div class="tab-first-form">
                  <el-form :model="loginForm" status-icon ref="loginForm" label-width="1px">
                    <el-form-item label="" prop="name">
                      <el-input v-model="loginForm.name" autocomplete="off" placeholder="账号" style="width: 400px"></el-input>
                    </el-form-item>
                    <el-form-item label="" prop="pwd">
                      <el-input type="password" v-model="loginForm.pwd" autocomplete="off" placeholder="密码" style="width: 400px"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <div class="button">
                        <el-button type="primary"  @click="submitLoginForm('loginForm')">登录</el-button>
                      </div>
                    </el-form-item>
                  </el-form>
                </div>
              </el-tab-pane>
              <el-tab-pane label="管理员登录" name="second" class="tab-second">
                <div class="tab-first-form">
                  <el-form :model="loginForm" status-icon ref="loginForm" label-width="1px">
                    <el-form-item label="" prop="name">
                      <el-input v-model="loginForm.name" autocomplete="off" placeholder="账号" style="width: 400px"></el-input>
                    </el-form-item>
                    <el-form-item label="" prop="pwd">
                      <el-input type="password" v-model="loginForm.pwd" autocomplete="off" placeholder="密码" style="width: 400px"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <div class="button">
                        <el-button type="primary"  @click="submitLoginForm('loginForm')">登录</el-button>
                      </div>
                    </el-form-item>
                  </el-form>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </div>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      activeName: 'first',
      loginForm: {
        name: '',
        pwd: '',
      },
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //loginCheck：登录的network函数
    submitLoginForm(formName) {
      var that = this;
      that.$router.push('/index')

      // loginCheck(that.loginForm).then(res => {
      //   // localStorage.setItem('name', response.data.details.id);
      //   // localStorage.setItem('pwd',response.data.details.username);
      //   console.log(res);
      //   if (res.data !== "") {
      //     console.log(res.data)
      //     localStorage.setItem('name', res.data[0].name);
      //     console.log(localStorage.getItem('name'));
      //     alert('登录成功!');
      //     // 将登录成功之后的token，保存到客户端的sessionStorage中
      //     window.sessionStorage.setItem('token', res.data.token)
      //     // 通过编程式导航跳转到后台首页，路由地址是/index
      //     that.$router.push('/index')
      //   } else {
      //     alert('登录失败!');
      //   }
      //
      // })

    },
  }
}
</script>

<style scoped>
  .main {
    margin: 20px 20px 20px 50px;
  }
  .logo {
    height: 50px;
    width: 140px;
    display: flex;
  }
  .box {
    height: 400px;
    width: 1000px;
    margin-left: 200px;
    margin-top: 100px;
  }
  .box1 {
    background-color: #11327F;
    height: 400px;
  }
  .title {
    padding: 40px 50px 0px;
    font-weight: bold;
    font-size: 25px;
    color: white;
  }
  .img {
    margin-left: 30px;
    height: 330px;
    display: flex;
  }
  .box2 {
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tab-first, .tab-second {
    padding-top: 40px;
  }

  /deep/ .el-input__inner {
    border: 0px;
    border-bottom: 1px solid #DCDFE6;
  }

  .button {
    margin-top: 30px;
  }
  /deep/ .button .el-button--primary {
    background-color: #11327f;
    border-color: #11327f;
    width: 390px;
    height: 46px;
    border-radius: 40px;
  }
  /deep/.box2 .el-tabs__item.is-active {
    color: #11327f;
  }
  /deep/.box2 .el-tabs__active-bar {
    background-color: #11327f;
  }
  /deep/.box2 .el-tabs__item {
    font-weight: bolder;
  }
</style>