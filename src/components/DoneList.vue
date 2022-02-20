<template>
<!-- done list start -->
    <div class="done">
      <div class="lists1">
        <div class="doneNav">
          <span class="title2">已经完成</span>
          <span class="doneCount" id="doneCount">0</span>
        </div>
        <div class="doneList">
          <ul id="doneList">
            <!-- 动态添加li -->
            <Item
            v-for="doneObj in this.dones"
            :key="doneObj.id"
            :item="doneObj"
            :deleteTodo="deleteTodo"
          ></Item>
          </ul>
        </div>
      </div>
    </div>
    <!-- done list end -->
</template>

<script>
import Item from "./Item.vue"

export default {
  name: "DoneList",
  components: {Item},
  data() {
    return {};
  },
  props:['dones','deleteTodo'],
};
</script>

<style>
/*done list*/
.done {
  width: 100%;
  height: 100%;
}
.lists1 {
  width: 600px;
  height: 100%;
  padding: 20px 0 10px 0;
  margin: auto;
}
.doneNav {
  width: 600px;
  height: 30px;
}
.title2 {
  width: 300px;
  height: 18px;
  font-size: 18px;
  font-weight: bold;
  color: black;
  float: left;
  line-height: 18px;
  /*margin-top: 20px;
    margin-bottom: 10px;*/
}
.doneCount {
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
.doneList {
  width: 600px;
}
.doneList ul {
  width: 600px;
  margin: auto;
}
.doneList li {
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
#doneList .delete-button{
  display: none;
  float:right;
  border-width: 20px;
  padding: 1px;
}
</style>