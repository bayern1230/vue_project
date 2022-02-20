<template>
  <div class="root">
    <el-container class="root-container">
      <!-- 头部 -->
      <el-header>
        <div>
          <img src="../assets/logo.png" alt="图标" />
          <span>爬虫前端页面</span>
        </div>
      </el-header>
      <!-- 中部 -->
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="180px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
            style="border-right:none;" 
          >
            <!-- 一级菜单 -->
            <el-submenu index="1">
              <!-- 模板 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <span>一级菜单</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="/welcome">
              <i class="el-icon-menu"></i>
              <span slot="title">搜索文章</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <!-- 主体部分 -->
          <el-main>
            <!-- 路由占位符 -->
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "ElementUi",
};
</script>

<style>
.el-header {
  background-color: rgb(5, 240, 240);
  height: 10px;
  color: white;
}

.el-header img {
  height: 40px;
  padding: 10px;
}

.el-header span {
  position: absolute;
  top: 19px;
  font-size: 25px;
}

.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 550px;
}

.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>