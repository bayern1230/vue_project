<template>
  <li>
    <!--待办事项text-->
    <span class="todo" v-show="!item.isEdit">{{ item.text }}</span>
    <input
      type="text"
      ref="inputText"
      v-bind:value="item.text"
      v-show="item.isEdit"
      @blur="blur(item,$event)"
      @keyup.enter="blur(item,$event)"
    />
    <!--按钮-->
    <button class="delete-button" @click="deleteTodo(item.id)">删除</button>
    <button v-show="!item.done" class="edit-button" @click="editTodo(item)">
      编辑
    </button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: ["item"],
  methods: {
    deleteTodo(id) {
      this.$bus.$emit("deleteTodo", id);
    },
    // 编辑按钮调用方法
    editTodo(item) {
      if(Object.prototype.hasOwnProperty.call(item, 'isEdit')) //判断是否已经有了该属性
      {
        item.isEdit = true;
      }
      else
      {
        this.$set(item,'isEdit',true);// 增加一项记录是否编辑的状态，并设置为true
      }
      // 执行$nextTick:在下一次DOM更新后执行回调函数
      this.$nextTick(function(){
        this.$refs.inputText.focus()
      })
      // 或者用定时器
      // setTimeout(() => {
      //   this.$refs.inputText.focus()
      // }, 0);
    },
    // 失去焦点时执行事件
    blur(item,event){
      item.isEdit = false;
      
      if(!event.target.value.trim())
      {
        alert("输入不能为空！")
      }
      else
      {
        this.$bus.$emit("updateTodo",item.id,event.target.value);
      }
    },
  },
};
</script>

<style>
li {
  width: 587px;
  height: 30px;
  padding: 0 5px;
  margin: 5px 0;
  background: white;
  line-height: 30px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-left: 3px solid #0b423e;
}
li:hover {
  background-color: gray;
}
</style>