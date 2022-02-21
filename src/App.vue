<!--APP:一人之下万人之上-->
<template>
  <div id="app">
    <ElementUi/>
  </div>
</template>

<script>
// 引入头文件
import ElementUi from './components/ElementUi.vue'

import axios from 'axios'

// import { response } from 'express'

export default {
  name: "App",
  components: {
    ElementUi,
  },
  data() {
    return {
     
    }
  },
  methods: {
    //服务器请求
    getAxios(){
      axios.get('http://localhost:8081/api/index/').then(
        response => {console.log("请求成功！",response);},
        error => {console.log("请求失败",error.message);},
      );
    },
  },
  mounted(){
    this.$bus.$on('deleteTodo',this.deleteTodo)
    this.$bus.$on('updateTodo',this.updateTodo)
  },
  beforeDestroy(){
    this.$bus.$off('deleteTodo')
    this.$bus.$off('updateTodo')
  },
};
</script>

<style>

</style>
