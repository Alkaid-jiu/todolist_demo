<template>
  <div>
    <div class="todo-footer">
      <label>
        <input
          type="checkbox"
          v-model="checkeAll"
          @click="check_all(checkeAll)"
        />
      </label>
      <span> <span>已完成{{ done_num}} </span> / 全部{{ todo_num }} </span>
      <button class="btn btn-danger" @click="delect_all">清除已完成任务</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'MyFooter',
    props:['checkAllTodo' ,'clearAllTodo','todolist'],
    data() {
        return {
           checkeAll:null
        };
    },
    computed:{
       todo_num(){
        return this.todolist.length
       },
       done_num(){
        let flat=0
        this.todolist.forEach((todo )=> {
          if(todo.done===true) flat++
        })
           return flat}
       }
      ,

    mounted() {
        
    },

    methods: {
      //删除所有
    delect_all(){
      this.clearAllTodo()
    },
    //全选或取消全选
    check_all(checkeAll){
      this.checkAllTodo(checkeAll)
    }
        
    },
};
</script>

<style lang="scss" scoped>
/*main*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>