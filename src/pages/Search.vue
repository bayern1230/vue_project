<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/search' }">搜索</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 搜索框 -->
    <el-row>
      <el-col :span="10" class="search-input">
        <!-- 搜索框 -->
        <el-input v-model="input_content" placeholder="请输入关键词">
          <!--搜索框前置选择下拉单-->
          <el-select v-model="input_select" slot="prepend" placeholder="请选择">
            <el-option label="Django" value="Django"></el-option>
            <el-option label="PMC" value="PMC"></el-option>
          </el-select>
          <!-- 搜索框后置按钮 -->
          <el-button
            id="search-button"
            slot="append"
            type="primary"
            icon="el-icon-search "
            @click="search"
            :loading="isLoading"
            >搜索
          </el-button>
        </el-input>
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

    <!-- 数据列表 -->
    <el-table :data="TextList">
      <el-table-column prop="title" label="标题" width="530"> </el-table-column>
      <el-table-column prop="author" label="作者" width="120"></el-table-column>
      <el-table-column label="操作" width="200"
        ><el-button type="primary"
          >提取<i class="el-icon-upload el-icon--right"></i></el-button
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      input_content: "", // 搜索框中输入内容
      input_select: "Django", // 搜索框前置选择内容
      isLoading: false, // 搜索按钮是否加载
      textarea: "", // 文本框中出现内容
      // 计算属性
      textList: [], // 数据列表内容
    };
  },
  computed: {
    // textList数据过滤
    TextList: {
      get: function () {
        return this.textList;
      },
      set: function (value) {
        this.textList = value.filter(i => i['PMCID']);
      },
    },
  },
  methods: {
    // 按下搜索按钮执行函数
    search() {
      // 改变按钮状态
      this.isLoading = true;

      if (this.input_content != "") {
        // 显示内容
        this.textarea = `准备向后端发送信息：${this.input_content}`;
        this.textarea = this.textarea + "\n请稍等...";

        // 请求参数
        let base_url = "http://localhost:8081/api/crawl.json"; //基础网址
        let paras = {
          spider_name: "PMC",
          start_requests: "true",
          crawl_args: `{"mode":"1","term":"${this.input_content}"}`,
        };

        // 构造请求网址
        let para_url = ""; //网址后面的参数
        for (let key in paras) {
          para_url = para_url + key + "=" + paras[key] + "&";
        }
        let url = base_url + "?" + para_url;

        // 根据搜索框前置选择内容决定向指定网址发送请求
        if (this.input_select == "Django") {
          url = "http://localhost:8081/django/search/";
        } else if (this.input_select == "PMC") {
          url = base_url + "?" + para_url;
        }
        this.textarea += "\n" + url;

        // 发送请求
        axios.get(url).then(
          (response) => {
            console.log("请求成功！", response);
            this.textarea += "\n请求成功！";

            // 将数据显示到前端界面
            if (this.input_select == "Django") {
              this.TextList = response.data["data"]["items"];
            } else if (this.input_select == "PMC") {
              this.TextList = response.data.items;
            }
            // console.log(this.TextList);
          },
          (error) => {
            console.log("请求失败", error);
            this.textarea += "\n" + error.message;
          }
        );
      } else {
        this.textarea = "您并未输入任何内容！";
        this.TextList = [];
      }

      // 重置按钮状态
      setTimeout(() => {
        this.isLoading = false;
      }, 600);
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
/* 搜索框前置内容 */
.el-select {
  width: 130px;
}
/* 搜索按钮 */
#search-button {
  color: white;
  background-color: blue;
}
</style>