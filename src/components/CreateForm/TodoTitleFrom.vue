<template>
    <div class="d-flex flex-column justify-content-center">
        <b-form-input 
            v-model="todoTitle"
            type="text"
            required
            placeholder="item title"
            v-on:change="$emit('save-title', todoTitle)"
        >
        </b-form-input>
    </div>
</template>

<script>
export default {
    props: ['title'],
    data(){
        return {
            todoTitle: this.$props.title
        }
    }
}
</script>

<style>

</style>