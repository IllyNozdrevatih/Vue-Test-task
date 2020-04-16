<template>
    <div>
        <router-link to="/">Home page</router-link>
            
        <b-form class="d-flex flex-column justify-content-start" @submit.prevent="saveTodosList">
            <h2 class="mt-5 mb-5">Todo Title</h2>
            <TodoTitleFrom 
                v-bind:title="todoTitle"
                v-on:save-title="saveTodoTitle" 
            />
            <h2 class="mt-5 mb-2">Todo Items</h2>
            <div class="text-left">
                <b-button class="mt-2 mb-3" variant="primary" @click="addItem">Add todo item</b-button>
            </div>    
            <TodoItem           
                v-for="(item, index) of todoItems"
                v-bind:index="index"
                v-bind:title="item.title"
                v-bind:confirmed="item.confirmed"
                :key="index"
                v-on:update-title="saveTodoItemsTitle"  
                v-on:update-confirmed="saveTodoItemsConfirmed"
                v-on:delete-item="deleteItem"   
            />
            <div class="text-left">                
                <b-button v-if="isUpdate" type="submit" variant="primary">update todos</b-button>
                <b-button v-else type="submit" variant="primary">save todos</b-button>
                <b-button 
                    v-if="isUpdate"
                    @click="modalShow = !modalShow"
                    class="ml-2" variant="warning"
                >
                    cancel updates
                </b-button>
                <b-modal 
                    v-model="modalShow"                
                    @ok="cancelUpdates" 
                >
                    Are you sure ?
                </b-modal>
            </div>            
        </b-form>
    </div>
</template>

<script>
import TodoTitleFrom from '@/components/CreateForm/TodoTitleFrom';
import TodoItem from '@/components/CreateForm/TodoItem';
import {mapActions} from 'vuex'

export default {
    props: ['todo'],
    data(){
        return {
            isUpdate: this.$props.todo.title ? true : false,
            todoItems: this.$props.todo.items.filter(t => t.title.trim()),
            todoTitle: this.$props.todo.title,
            modalShow: false
        }
    },
    components: {
        TodoTitleFrom, TodoItem
    },
    methods: {
        ...mapActions(['createTodo']),
        addItem(){
            this.todoItems.push({
                title: '',
                confirmed: false
            })
        },
        saveTodosList(){
            const todo = {
                id: this.isUpdate ? this.$props.todo.id : Date.now(),
                title: this.todoTitle,
                items: this.todoItems.filter(t => t.title.trim())
            }
            
            const data = {
                isUpdate: this.isUpdate,
                todo
            }
            
            this.createTodo(data)
            this.$router.push('/')
        },
        saveTodoItemsTitle(title, index){
            this.todoItems[index].title = title
        },
        saveTodoItemsConfirmed(confirmed, index){
            this.todoItems[index].confirmed = confirmed
        },
        deleteItem(index){
            this.todoItems.splice(index,1)
        },
        saveTodoTitle(title){
            this.todoTitle = title
        },
        cancelUpdates(){   
            this.$router.push('/')         
        }
    }
}
</script>

<style>

</style>