<template>
  <div>
    <!-- <MyHeader @jiujiu="addtodo"></MyHeader> -->
    <MyHeader ></MyHeader>
    <!-- <MyHeader :addtodo="addtodo"></MyHeader> -->
   <MyList :todolist="todolist" :checkTodo="checkTodo" :deleteTodo="deleteTodo" ></MyList>
   <MyFooter :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo" :todolist="todolist"></MyFooter>
  </div>
</template>
//MyHeader传递todo对象给app，app再传给myitem
<script>
import  pubsub from 'pubsub-js';
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';
import MyList from './components/MyList.vue';

export default {
  name: 'App',

  data() {
    return {
      todolist:[{id:'001',todoname:"打代码",done:false},
      {id:'002',todoname:"复习前端",done:false},
      {id:'003',todoname:"学习flex布局",done:true}
    
    ]
    }
  },

  mounted() {
    // this.$bus.$on('jiujiu',this.addtodo)
    // PubSub.subscribe('jiujiu',this.addtodo)
    pubsub.subscribe('jiujiu',(name,todoobj)=>{ this.todolist.push(todoobj);})
  },

  methods: {
  addtodo(todoobj){
    this.todolist.push(todoobj);
      }  ,

      //勾选or取消勾选一个todo
			checkTodo(id){
			this.todolist.forEach((todo)=>{
        if(todo.id===id) todo.done=!todo.done
      })
			},
			//删除一个todo
			// deleteTodo(id){
      //   let flat=0
			// 	this.todolist.forEach((todo)=>{ flat++;
      //      if(todo.id===id) {this.todolist.splice(flat,1)}})
			// },

      //删除某一个元素
      deleteTodo(id) {
  let flat = -1; // 将初始值设为 -1
  this.todolist.forEach((todo, index) => {
    if (todo.id === id) {
      flat = index; // 找到匹配的元素索引
    }
  });

  if (flat !== -1) {
    this.todolist.splice(flat, 1); // 删除匹配的元素
  }
},

			//全选or取消全选
			checkAllTodo(done){
				this.todolist.forEach((todo)=>{
					todo.done = done
          
				})
			},
			//清除所有已经完成的todo
			clearAllTodo(){
				this.todolist = this.todolist.filter((todo)=>{
					return !todo.done
				})
			}
		
  },
  components:{
    
    MyHeader,
    MyFooter,
    MyList
}}
;
</script>
