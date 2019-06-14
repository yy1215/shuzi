<template>
    <div>
    
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
            <el-form-item label="工号" prop="searcOrder">
                <el-input v-model="ruleForm.searcOrder"></el-input>
            </el-form-item>
            <el-form-item label="中文姓名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
                <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="所属部门" prop="affiliation">
                <el-select v-model="ruleForm.affiliation" placeholder="请选择">
                    <el-option label="所有" value="all"></el-option>
                    <el-option label="比地" value="bidi"></el-option>
                    <el-option label="曦达" value="xida"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="用户状态" prop="status">
                <el-select v-model="ruleForm.status" placeholder="请选择">
                    <el-option label="正常" value="normal"></el-option>
                    <el-option label="停用" value="disable"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="用户角色" prop="userRole">
                <el-select v-model="ruleForm.userRole" placeholder="请选择">
                    <el-option label="管理员" value="guanli"></el-option>
                    <el-option label="测试" value="ceshi"></el-option>
                    <el-option label="技术" value="jishu"></el-option>
                </el-select>
            </el-form-item>
         
            <el-form-item>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            </el-form-item>
            </el-form>
    
    
    </div>
</template>
<script>
export default {
   data() {
      return {
        ruleForm: {
          searcOrder:'',
          name: '',
          phone:'',
          affiliation:'',
          status:'',
          userRole:'',
          resource: ''
        },
        rules: {
            searcOrder: [
                { required: true, message: '请输入工号', trigger: 'blur' },
                { min:8, max: 9, message: '8~9位的数字', trigger: 'blur' }
            ],
            name: [
                { required: true, message: '请输入活动名称', trigger: 'blur' },
                { min: 1, max: 20, message: '长度在 1 到 20个字符', trigger: 'blur' }
            ],
            phone: [
                { required: true, message: '请输入手机号', trigger: 'blur' },
                { min: 11, max: 11, message: '请输入11位数字的手机号', trigger: 'blur' }
            ],
            affiliation: [
                { required: true, message: '请选择所属性部门', trigger: 'change' }
            ],
            status: [
                { required: true, message: '请选择用户状态', trigger: 'change' }
            ],
            userRole: [
                { required: true, message: '请选择用户角色', trigger: 'change' }
            ]
        
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
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style  lang="less" scoped>
    .el-form{
        overflow: hidden;
    }
    .el-form-item{
        width: 40%;
        float: left;
    }
    .dialog-footer{
        text-align: center;
    }
</style>
