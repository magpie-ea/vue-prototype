<template>
    <div>
        <h2 v-if="title">{{title}}</h2>
        <slot :name="currentSlide" :nextScreen="nextScreen" :nextSlide="nextSlide">
            Slide #{{currentSlide}} could not be found
        </slot>
    </div>
</template>

<script>
    export default {
        name: "Screen",
        inject: ['nextScreen'],
        props: {
            title: {
                type: String,
                required: false,
                default: ''
            }
        },
        data() {
            return {
                currentSlide: 0
            }
        },
        methods: {
            nextSlide(index) {
                if (typeof index === 'number') {
                    this.currentSlide = index
                    return
                }
                this.currentSlide++
            }
        }
    }
</script>

<style scoped>

</style>
