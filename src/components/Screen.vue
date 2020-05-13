<template>
    <div>
        <h2 v-if="title">{{title}}</h2>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Screen",
        props: {
            title: {
                type: String,
                required: false,
                default: ''
            }
        }
    }
</script>

<style scoped>

</style>
