<template>
  <div>
    <li>
      <label>
        <input type="checkbox" v-model=" todo_this.done" @click="handleCheck(todo.id)"  />
        <span>{{ this.todo.todoname }}</span>
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo", "checkTodo", "deleteTodo"],
  data() {
    return {
      todo_this:this.todo
    };
  },

  mounted() {},

  methods: {
    //勾选或者取消勾选 todo.done，千万要记得传参数过来，在绑定事件的时候
    handleCheck(id) {
		console.log("对todo.done操作")
		// console.log(id)
      this.checkTodo(id);
    },
    //删除,
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        //通知App组件将对应的todo对象删除
		console.log(id)
        this.deleteTodo(id);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>