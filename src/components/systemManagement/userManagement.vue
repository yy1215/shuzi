<template>
    <div>
        <el-form :inline="true" ref="formInline" :model="formInline" class="demo-form-inline">
            <el-col style="width:80%">
                <el-form-item label="工号:" prop="searcOrder">
                    <el-input v-model="formInline.searcOrder"></el-input>
                </el-form-item>
                <el-form-item label="中文姓名:" prop="searchName">
                    <el-input v-model="formInline.searchName"></el-input>
                </el-form-item>
                <el-form-item label="所属机构:" prop="jgStatus">
                    <el-select v-model="formInline.jgStatus">
                        <el-option label="所有" value="all"></el-option>
                        <el-option label="比地" value="bidi"></el-option>
                        <el-option label="曦达" value="xida"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用户状态:" prop="userStatus">
                    <el-select v-model="formInline.userStatus">
                        <el-option label="所有" value="all"></el-option>
                        <el-option label="正常" value="normal"></el-option>
                        <el-option label="停用" value="disable"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col  style="width:20%">
                <el-form-item>
                    <el-button type="primary" @click="doFilter(formInline)">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="reset(formInline)">重置</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleAdd">新增</el-button>
                </el-form-item>
            </el-col>
        </el-form>
        <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            label="日期"
            >
            <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
            prop="loginName"
            label="工号"
            >
            </el-table-column>
            <el-table-column
            prop="userName"
            label="中文姓名"
            >
            </el-table-column>
            <el-table-column
            prop="affiliation"
            label="所属机构"
            >
            </el-table-column>
            <el-table-column
            prop="userRole"
            label="用户角色"
            >
            </el-table-column>
            <el-table-column
            prop="phone"
            label="手机"
            >
            </el-table-column>
            <el-table-column property="status" align="center" label="状态">
                <template slot-scope="scope">
                  <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model="scope.row.status"  @change=change(scope.$index,scope.row)>
                  </el-switch>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)" >编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 编辑 -->
        <el-dialog class="editFrom" title="编辑" :visible.sync="dialogVisible"  width="50%">
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
                <el-button size="medium" @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" size="medium" @click="dialogVisible = false">确 定</el-button>
            </span>
            
        </el-dialog>
    </div>

</template>
<script>
export default {
     data() {
      return {
        dialogVisible: false,
        formLabelWidth: '100px',
        formInline: {
            searcOrder:'',
            searchName: '',
            jgStatus: '',
            userStatus: '',
        },
        tableData: [
            {
                id:'1',
                loginName:'admin',
                userName: '0王小虎',
                affiliation:'研发部',
                userRole:'管理员',
                phone:'13800138000',
                date: '2016-05-03',
                status:true
            },
            {
                id:'2',
                loginName:'ry',
                userName: '若仪',
                affiliation:'测试部',
                userRole:'测试1',
                phone:'13800138000',
                date: '2017-05-03',
                status:false
            },
        ],
        multipleSelection: [],
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
    },
    methods: {
      
        /* 查询 */
         search(keywords){ //根据关键字，进行数据搜索
            /**
             * 第一种方法
             */
            console.log(keywords);
           /*   var newList =[];
            this.tableData.forEach(item => {
                if(item.name.indexOf(keywords) != -1){
                    console.log(item);
                    newList.push(item)
                }
            })
            return newList; */
            
         
        },

        doFilter(keywords) {
           this.$refs.formInline.validate((valid) => {
                if (valid) {
                    console.log(valid);
                    //alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
         
          /*   this.tableDataEnd = []
            //每次手动将数据置空,因为会出现多次点击搜索情况
            this.filterTableDataEnd=[]
            this.tableDataBegin.forEach((value, index) => {
                if(value.name){
                    if(value.name.indexOf(this.tableDataName)>=0){
                    this.filterTableDataEnd.push(value)
                    }
                }
            }); */
        },
        /* 重置  */
        reset(){
            this.$refs.formInline.resetFields();
        },
        toggleSelection(rows) {
            if (rows) {
            rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
            });
            } else {
            this.$refs.multipleTable.clearSelection();
            }
        },
        change:function(index,row){
            console.log(index,row);
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleAdd(index, row) {
            this.$router.push({
                path:"/addUser",
            });
            console.log(index, row);
        },
        /* 编辑 */
        handleEdit(index, row) {
            console.log(index, row);
            this.dialogVisible = true //显示弹框
            this.editForm = Object.assign({}, row);
        },
        handleDelete(index, row) {
            this.tableData.splice(index,1)
            console.log(index, row);
        }
    }
}
</script>
<style  lang="less">
   .el-table{
        box-shadow: 0 0 10px #cac6c6;
        }  
   
    .el-form-item{
        float: left;
    }
    .el-form-item__label{
        width:120px;
    }
    .el-dialog__footer{
        text-align: center !important;
    }
    .editFrom{
        .el-form{
            overflow: hidden;
        }
    }
   
</style>
