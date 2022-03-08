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
              id="search-button"
              slot="append"
              type="primary"
              icon="el-icon-search "
              @click="search"
              >搜索</el-button
            >
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
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      input: "", // 搜索框中输入内容
      textarea: "", // 文本框中出现内容
    };
  },
  methods: {
    // 按下搜索按钮执行函数
    search() {
      // 改变按钮状态
      let button = document.getElementById("search-button");
      console.log(button);

      if (this.input != "") {
        // 显示内容
        this.textarea = `准备向后端发送信息：${this.input}`;
        this.textarea = this.textarea + "\n请稍等...";

        // 请求参数
        let base_url = "http://localhost:8081/api/crawl.json"; //基础网址
        let paras = {
          spider_name: "PMC",
          start_requests: "true",
          crawl_args: `{"mode":"1","term":"${this.input}"}`,
        };

        // 构造请求网址
        let para_url = ""; //网址后面的参数
        for (let key in paras) {
          para_url = para_url + key + "=" + paras[key] + "&";
        }
        let url = base_url + "?" + para_url;
        this.textarea += "\n" + url;

        // 发送请求
        axios.get(url).then(
          (response) => {
            console.log("请求成功！", response);
            this.textarea += "\n请求成功！";
          },
          (error) => {
            console.log("请求失败", error);
            this.textarea += "\n" + error.message;
          }
        );
      } else {
        this.textarea = "您并未输入任何内容！";
      }
    },
  },
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
/* 搜索按钮 */
#search-button{
  color: white;
  background-color: blue;
}
</style>