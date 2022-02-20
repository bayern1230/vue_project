<template>
  <div>
    <!-- top nav    start-->
    <div class="nav">
      <div class="topNav">
        <h3>TodoList</h3>
        <form id="form" @submit.prevent="">
          <input
            type="text"
            name="todoList"
            id="inputTodo"
            placeholder="输入内容"
            @keyup.enter="add"
          />
        </form>
      </div>
    </div>
    <!-- top nav   end -->
  </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
  name: "MyHeader",
  methods: {
    add(event) {
      const todoObj = {id:nanoid(),text:event.target.value,done:false};
      //this.addTodo(todoObj);
      this.$emit('addTodo',todoObj)
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

body {
  background: #dfe1e1;
}
ul {
  list-style: none;
}

/*top nav*/
.nav {
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.7);
}
.topNav {
  width: 600px;
  height: 26px;
  color: white;
  margin: auto;
  /*line-height: 50px;*/
  padding-top: 12px;
  padding-bottom: 12px;
}
.topNav h3 {
  float: left;
}
.topNav input {
  float: right;
  width: 380px;
  height: 24px;
  box-shadow: 1px 1px 10px #dfe1e1 inset;
  border-radius: 10px;
}
</style>