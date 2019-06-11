<template>
  <div class="login-wrap">
    <h2 class="title">登录</h2>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="account">
        <el-input  v-model.number="ruleForm2.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button style="width:100%;" type="primary" @click="submitForm('ruleForm2')">登录</el-button>
      </el-form-item>
    </el-form>
   
  </div>
</template>

<script>
import { requestLogin } from '../api/api';
 export default {
    data() {
      return {
        logining: false,
        ruleForm2: {
          account: 'admin',
          checkPass: '123456'
         
        },
        rules2: {
          account: [{
                  required: true,
                  message: '请输入用户名',
                  trigger: 'blur'
              },
          ],
          checkPass: [{
                  required: true,
                  message: '请输入密码',
                  trigger: 'blur'
              },
          ]
  
        },
        checked: true
      };
      
    },
    methods: {
     submitForm(ev){
      //  console.log(ev);
        var _this = this;
        _this.$refs.ruleForm2.validate((valid) =>{
            if(valid){
              _this.logining = true;
              var loginParams={
                username:this.ruleForm2.account,
                password:this.ruleForm2.checkPass
              }
              requestLogin(loginParams).then( data=>{
                  this.logining = false;
                  let { msg, code, user } = data;
                  if(code != 200){
                      this.$message({
                        message: msg,
                        type: 'error'
                      })
                  }else{
                    sessionStorage.setItem('user', JSON.stringify(user));
                    this.$router.push({ path: '/userManagement' });
                  }
              })
            }else{
              console.log('error submit!!');
              return false;
            }
        })
     }
    }
  }
</script>

<style scoped >
  .login-wrap{
    background-clip: padding-box;
    margin: 180px auto;
    width: 450px;
    padding: 35px 35px 15px 0px;
    background: #fff;
    border: 1px solid #eaeaea;
     box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
    box-shadow: 0 0 25px #cac6c6;
    .title{
      text-align: center;
      margin: 0 auto 40px; 
    }
    .el-checkbox{
      margin: 0 0 10px 100px;
    }
    .submit{
      widows: 100%;
      margin-left: 30px;
    }
  }
</style>
