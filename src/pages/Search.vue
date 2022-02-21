<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/search' }">搜索</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 搜索框 -->
    <el-row>
      <el-col :span="8" class="search-input">
        <div>
          <el-input v-model="input" placeholder="请输入内容">
              <!-- 搜索按钮 -->
            <el-button 
            slot="append" 
            icon="el-icon-search"
            @click="search"></el-button>
          </el-input>
        </div>
      </el-col>
    </el-row>

    <!-- 文本框 -->
    <el-row>
      <el-col>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
          v-model="textarea"
        >
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      input: "",
      textarea: "",
    };
  },
  methods:{
      search(){
        this.textarea = '准备向后端发送信息：' + this.input;
      },
  }
};
</script>

<style>
/* 面包屑导航 */
.el-breadcrumb {
  margin-bottom: 10px;
}
/* 搜索框 */
.search-input {
  margin: 0 30%;
  margin-bottom: 10px;
}
</style>