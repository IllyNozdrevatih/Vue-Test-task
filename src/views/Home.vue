<template>
    <div>
        <h1>Home page</h1>
        <router-link           
          :to="{
            name: 'todo-create',
            params:{todo}
          }"
        >
          Create Todo
        </router-link>
        <TodoList :todos="allTodos" />
    </div>    
</template>

<script>
import {mapGetters} from 'vuex'
import TodoList from '@/components/TodoList'

export default {
  name: 'App',
  computed: mapGetters(['allTodos']),
  data(){
    return {
      todo: {
        title:'',
        items: []
      }
    }
  },
  components: {
    TodoList
  }
}
</script>

<style>

</style>