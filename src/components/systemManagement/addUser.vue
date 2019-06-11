<template>
    <div>
          <el-form>
                <el-form-item label="日期：" :label-width="formLabelWidth">
                    <el-input  v-model="editForm.date" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户名：" :label-width="formLabelWidth">
                    <el-input v-model="editForm.loginName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="中文名：" :label-width="formLabelWidth">
                    <el-input v-model="editForm.userName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="所属机构：" :label-width="formLabelWidth" prop="affiliation" > 
                    <el-select v-model="editForm.affiliation" value-key="id">
                        <el-option label="研发部" value="all"></el-option>
                        <el-option label="测试部" value="bidi"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用户角色：" :label-width="formLabelWidth" prop="userRole" autocomplete="off">
                    <el-select v-model="editForm.userRole">
                        <el-option label="管理员" value="all"></el-option>
                        <el-option label="普通1" value="bidi"></el-option>
                        <el-option label="普通2" value="xida"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="手机号：" :label-width="formLabelWidth">
                    <el-input v-model="editForm.phone" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer" style="text-align:center;">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
    </div>
</template>
<script>
export default {
    data(){
        return{
            formLabelWidth: '100px',
            editForm: {
                date:'',
                loginName: '',
                userName: '',
                affiliation:[
                    {value:1,lable:'研发部'},
                    {value:2,lable:'测试部'},
                    {value:3,lable:'销售部'},
                ],
                userRole: '',
                status: false,
                phone: '',
            },
        }
    }
}
</script>
<style  scoped>
.el-form-item{
        float: left;
    }
    .el-form-item__label{
        width:120px;
    }
</style>
