import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import CreateTodo from '@/views/CreateTodo'
// import UpdateTodo from '@/views/UpdateTodo'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/dist/',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todo',
            component: CreateTodo,            
            name: 'todo-create',
            props: true
        },
        { 
            path: '/todo/update/:id', 
            component: CreateTodo,
            name: 'todo-update',
            props: true
        }
    ]
})