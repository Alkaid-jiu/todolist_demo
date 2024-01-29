<template>
    <div>
        <ul class="todo-main">
        <MyItem v-for="todoobj in this.todolist " :key="todoobj.id"
        :todo="todoobj" 
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"></MyItem>
      </ul>
    </div>
</template>

<script>
import MyItem from './MyItem.vue';
export default {
    name: 'MyList',
   props:["todolist",'checkTodo','deleteTodo'],
    data() {
        return {
        
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    components:{MyItem}
};
</script>

<style lang="scss" scoped>

</style>