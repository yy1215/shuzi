<template>
    <div>
        <el-form ref="form" :model="infoForm" label-width="150px" >
            <el-form-item label="地区">
                <el-select v-model="infoForm.province" placeholder="请选择">
                    <el-option label="北京" value="shanghai"></el-option>
                    <el-option label="天津" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="发布时间">
                <el-select v-model="infoForm.releaseTime" placeholder="请选择">
                    <el-option label="近一天" value="beijing"></el-option>
                    <el-option label="近三天" value="beijing"></el-option>
                    <el-option label="近一周" value="shanghai"></el-option>
                    <el-option label="近一月" value="shanghai"></el-option>
                    <el-option label="近三月" value="shanghai"></el-option>
                    <el-option label="近半年" value="shanghai"></el-option>
                    <el-option label="近一年" value="shanghai"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="开始时间">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="infoForm.startingTime" style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="结束时间">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="infoForm.endTime" style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="信息类别">
                <el-select v-model="infoForm.category" placeholder="请选择">
                    <el-option label="招标预告" value="shanghai"></el-option>
                    <el-option label="招标公告" value="beijing"></el-option>
                    <el-option label="中标信息" value="beijing"></el-option>
                    <el-option label="公告变更" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="信息来源">
                <el-select v-model="infoForm.source" placeholder="请选择">
                    <el-option label="工程建设" value="shanghai"></el-option>
                    <el-option label="政府采购" value="beijing"></el-option>
                    <el-option label="企业采购" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="关键字">
                <el-input v-model="infoForm.keyword"></el-input>
            </el-form-item>
            <el-form-item  size="large">
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>

         <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
            prop="order"
            label="序号"
            width="100">
            </el-table-column>
            <el-table-column
            prop="category"
            label="类别"
            width="180">
            </el-table-column>
            <el-table-column
            prop="date"
            label="发布日期"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="标题" >
            </el-table-column>
            <el-table-column
            prop="province"
            label="地区"
            width="180">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                    <el-button type="text" @click="handleClick(scope.row)"  size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
        </el-pagination>
    </div>
</template>
<script>
export default {
    data() {
      return {
        infoForm: {
            province:'',
            name: '',
            releaseTime:'',
            startingTime:'',
            endTime:'',
            category:'',
            source:'',
            keyword:'',
        },
        tableData: [{
          order:'1',
          category:'招标预告',
          date: '2016-05-02',
          name: '秦安县职业中等专业学校实训楼项目资格预审结果公示',
          province: '上海',
        }, {
          order:'2',
          category:'招标公告',
          date: '2016-05-04',
          name: '临海市双林南路交通安全设施工程开标结果公告',
          province: '上海',
        }, {
          order:'3',
          category:'中标信息',
          date: '2016-05-01',
          name: '陕西省文化和旅游厅机关2019年清明公祭黄帝陵典礼音乐创作项目合同',
          province: '上海',
        }, {
          order:'4',
          category:'公告变更',
          date: '2016-05-03',
          name: '广饶经济开发区宏润居二期（和王村棚改回迁安置区）工程消防工程施工项目',
          province: '上海',
        }]
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleClick(row) {
        console.log(row);
      }
    }
  };
</script>
<style lang="less" scoped>
    .el-form-item{
        width: 50%;
        float: left;
        margin-bottom: 10px;
        &:last-of-type{
            width: 100%;
        }
    }
    .el-pagination{
        text-align: center;
        margin-top: 15px;
    }
</style>

