<template>
    <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">{{ todo.title }}</h3>
                <ul class="list-group list-group-flush">
                    <li 
                        v-bind:class="{confirmed: item.confirmed}"
                        class="list-group-item"
                        v-for="(item, index) of todoItems"
                        :key="index"
                        v-bind:index="index"                     
                    >   
                        {{ item.title }}
                    </li>
                </ul>
                <router-link
                    tag="a"
                    :to="{name: 'todo-update', params: {id: todo.id, todo}}"
                    class="btn mt-2 mb-2 btn-primary"
                >
                    Update page
                </router-link>                
                <b-button 
                    class="btn mt-2 mb-2 ml-2 btn-danger"
                    @click="modalShow = !modalShow"
                >   
                    Delete
                </b-button>
                <b-modal 
                    v-model="modalShow"                    
                    @ok="deleteTodo"
                >
                    Are you sure ?
                </b-modal>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex';

export default {
    props: ['todo'],
    data(){
        return {
            modalShow: false,
            todoItems: this.$props.todo.items.filter(t => t.title)
        }
    },
    methods: {
        ...mapActions(['removeTodo']),
        deleteTodo(){            
            this.removeTodo(this.todo.id)           
        }
    }
}
</script>

<style>
.confirmed {
    text-decoration: line-through;
}
</style>