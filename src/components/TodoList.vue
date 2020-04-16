<template>
  <div>
      <div class="row mt-2">
        <TodoItem 
          v-for="(todo, index) of todos"
          :key="index" 
          v-bind:todo="todo"
          v-bind:index="index" />
      </div>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'

export default {
    props: ['todos'],
    components: {
        TodoItem
    }
}
</script>

<style>

</style>