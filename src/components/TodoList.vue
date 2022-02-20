<template>
  <!-- todo list   start -->
  <div class="todo">
    <div class="lists">
      <div class="todoNav" id="todoNav">
        <span class="title1">正在进行</span>
        <span class="todoCount" id="todoCount">{{todos.length}}</span>
      </div>
      <div class="todoList">
        <ul id="todoList">
          <!-- 动态添加li -->
          <Item
            v-for="todoObj in this.todos"
            :key="todoObj.id"
            :item="todoObj"
          ></Item>
        </ul>
      </div>
    </div>
  </div>
  <!-- todo list   end -->
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "TodoList",
  components: { Item },
  data() {
    return {};
  },
  props: ["todos"],
};
</script>

<style>
/*todo list*/
.todo {
  width: 100%;
  height: 100%;
}
.lists {
  width: 600px;
  height: 100%;
  padding: 20px 0 10px 0;
  margin: auto;
}
.todoNav {
  width: 600px;
  height: 30px;
}
.title1 {
  width: 300px;
  height: 18px;
  font-size: 18px;
  font-weight: bold;
  color: black;
  float: left;
  line-height: 18px;
  /*    margin-top: 20px;
    margin-bottom: 10px;*/
}
.todoCount {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  font-size: 13px;
  font-weight: bold;
  color: black;
  float: right;
  text-align: center;
  line-height: 18px;
  background: #82b5b2;
  /*margin-top: 20px;
    margin-bottom: 10px;*/
}
.todoList {
  width: 600px;
}
.todoList ul {
  width: 600px;
  margin: auto;
}
.delete-button{
  float:right;
  border-width: 3px;
  padding: 1px;
}
</style>