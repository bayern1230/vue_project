<!--APP:一人之下万人之上-->
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <div>
      <input type="text" name="text" id="t"><button @click="getAxios">点击向服务器发送消息</button>
    </div> -->
    <!-- <MyHeader @addTodo="addTodo"/>
    <TodoList :todos="todos"/>
    <DoneList :todos="todos" :dones="dones" :deleteTodo="deleteTodo"/>
    <MyFooter /> -->
    <ElementUi/>
  </div>
</template>

<script>
// 引入头文件
//import HelloWorld from './components/HelloWorld.vue'
// import MyHeader from "./components/MyHeader.vue"
// import MyFooter from "./components/MyFooter.vue"
// import TodoList from "./components/TodoList.vue"
// import DoneList from './components/DoneList.vue'
import ElementUi from './components/ElementUi.vue'

import axios from 'axios'

// import { response } from 'express'

export default {
  name: "App",
  components: {
    // MyHeader,
    // MyFooter,
    // TodoList,
    // DoneList,
    ElementUi,
  },
  data() {
    return {
      // 正在进行
      todos:[
          {id:'001',text:'待办事项1',done:false,},
          {id:'002',text:'待办事项2',done:false,},
          {id:'003',text:'待办事项3',done:false,},
        ],
      // 已经完成
      dones:[],
    }
  },
  methods: {
    // 添加
    addTodo(todoObj){
      this.todos.unshift(todoObj);
    },
    // 删除 并添加到已经做完
    deleteTodo(id){
      for(let i=0;i<this.todos.length;i++)
      {
        if(this.todos[i].id === id)
        {
          var thing = this.todos[i];
          this.todos.splice(i,1);
          break;
        }
      }
      thing.done = true; // 修改状态为已经做完
      this.dones.push(thing);
    },
    // 修改todo里的值
    updateTodo(id,text){
      this.todos.forEach(element => {
        if(element.id === id)
        {
          element.text = text;
        }
      });
    },
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
