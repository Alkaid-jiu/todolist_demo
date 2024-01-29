<template>
  <div>
    <div class="todo-header">
      <input
        type="text"
        id="username"
        placeholder="请输入你的任务名称，按回车键确认"
        v-model="todoname"
        @keyup.enter="add"
      />
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import  pubsub from 'pubsub-js';

export default {
  name: "MyHeader",
  // props: ["addtodo"],

  data() {
    return {
      todoOBJ: {},

      todoname: "",
    };
  },

  mounted() {},

  methods: {
    add() {
      //妈的，要发疯了，尼玛，条件搞错了，难怪直接不运行if后面的语句了，
      if (this.todoname.trim() == "") return alert("输入为空，请重新输入");
      const todoobj = { id: nanoid(), todoname: this.todoname, done: false };
      //    const todoobj={id:'0002',todoname:this.todoname,done:false}
      console.log(todoobj);
      this.todoOBJ = todoobj;

      //调用父组件，传递信息
      // this.addtodo(todoobj);

      // //用自定义事件传消息
      // this.$emit('jiujiu',todoobj)

      // //用全局事件总线
      // this.$bus.$emit('jiujiu',todoobj)

      //采用消息订阅与发布
      pubsub.publish('jiujiu',todoobj)
      //清空输入
      this.todoname = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>