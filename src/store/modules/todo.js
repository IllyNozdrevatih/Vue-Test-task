export default {
    actions: {
        createTodo(ctx, data){           
            if (data.isUpdate){
                ctx.commit('updateTodo', data.todo)
            } else {
                ctx.commit('pushTodo', data.todo)
            }
        },
        removeTodo(ctx, todoId){
            ctx.commit('removeTodo', todoId)
        }
    },
    mutations: {
        pushTodo(state, todos) {
            state.todos.push(todos)
        },
        updateTodo(state, todos){      
            state.todos.map(t => {                
                if (t.id === todos.id){
                    t.title = todos.title
                    t.items = todos.items
                } 
            })            
        },
        removeTodo(state, todoId){ 
            state.todos = state.todos.filter(t => t.id !== todoId)           
        }
    },
    state: {
        todos: []
    },
    getters: {
        allTodos(state){
            return state.todos
        },        
        emptyTodos(state){
            return state.todos ? true : false
        }
    }
}