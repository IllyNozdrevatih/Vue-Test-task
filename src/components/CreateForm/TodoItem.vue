<template>
    <div>
        <b-form-group
            class="text-left"
        >
            <div class="d-flex align-items-center">
                <b-form-input
                    v-model="titleItem"
                    type="text"
                    required
                    placeholder="item title"
                    v-on:change="$emit('update-title', titleItem, index )"
                > 
                </b-form-input>
                <span class="ml-2 mb-0 h4">                    
                    Confirmed
                </span>
                <input type="checkbox"                 
                    class="ml-2"
                    v-on:change="$emit('update-confirmed', confirmedItem, index )"
                    v-model="confirmedItem"
                >                                
                <b-button 
                    class="btn ml-2 btn-danger"
                    @click="modalShow = !modalShow"
                >   
                    Delete
                </b-button>
                <b-modal 
                    v-model="modalShow"                    
                    @ok="$emit('delete-item', index )"
                >
                    Are you sure ?
                </b-modal>
            </div>
        </b-form-group>
    </div>
</template>

<script>
export default {
    props: ['index', 'title', 'confirmed'],
    data(){
        return {
            titleItem: this.$props.title,
            confirmedItem: this.$props.confirmed,
            modalShow: false
        }
    }
}
</script>

<style>

</style>