<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
            <el-form-item label="工号">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="中文姓名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="所属部门">
                <el-select v-model="ruleForm.affiliation" placeholder="请选择">
                    <el-option label="所有" value="all"></el-option>
                    <el-option label="比地" value="bidi"></el-option>
                    <el-option label="曦达" value="xida"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="用户状态">
                <el-select v-model="ruleForm.status" placeholder="请选择">
                    <el-option label="正常" value="normal"></el-option>
                    <el-option label="停用" value="disable"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="用户角色">
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
          username:'',
          name: '',
          phone:'',
          affiliation:'',
          status:'',
          userRole:'',
          resource: ''
        },
        rules: {
            name: [
                { required: true, message: '请输入姓名', trigger: 'blur' },
                { min: 1, max: 20, message: '长度在 1 到 20个字符', trigger: 'blur' }
            ],
            phone: [
                { required: true, message: '请输入手机号', trigger: 'blur' },
                { min: 11, max: 11, message: '请输入11位数字的手机号', trigger: 'blur' }
            ]
        }
      };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    var params = new URLSearchParams();
                    var obj = this.ruleForm;
                    for(var o in obj){
                        console.log(o + "---" + obj[o]);
                        params.append(o,obj[o]);
                    }
                    console.log(this.ruleForm.name);
                    this.axios.post('/api/cashflow/user/addUser',
                        params
                    ).then((res)=>{
                        console.log(res.data)
                    }).catch((err)=>{
                        console.log(err);
                    })
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
        width: 100%;
    }
    .el-form-item{
        width: 40%;
        float: left;
    }
    .dialog-footer{
        text-align: center;
    }
</style>
