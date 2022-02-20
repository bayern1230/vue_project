<template>
  <div>
    <!-- site foot -->
    <div class="siteFoot">
      <div class="foot">
        <p>
          Copyright © 2014 todolist.cn
          <a style="color: #8c9796" href="javascript:clear()">clear</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
};
</script>

<style>


/*site foot*/
.siteFoot {
  width: 100%;
  height: 100%;
}
.foot {
  width: 600px;
  height: 30px;
  margin: auto;
  text-align: center;
  line-height: 30px;
}

.content {
  width: 500px;
  height: 27px;
  color: black;
  font-size: 15px;
  background: white;
  line-height: 27px;
  border: none;
}
.content:hover {
  border: 1px solid skyblue;
}
.listSpan {
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
  margin-top: 6px;
}
.listSpan:hover {
  cursor: pointer;
}
.checkBox {
  width: 18px;
  height: 18px;
  margin-top: 8px;
}
</style>