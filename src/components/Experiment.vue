<template>
    <div class="experiment">
        <div class="header">
            <div class="col">
                <slot name="default"></slot>
            </div>
            <div class="col">
                {{currentScreen+1}}/{{numScreens}}
            </div>
        </div>
        <slot :name="currentScreen" :nextScreen="nextScreen">
            Screen #{{ currentScreen }} not found
        </slot>
    </div>
</template>

<script>
    export default {
        name: "Experiment",
        data() {
            return {
                currentScreen: 0
            }
        },
        provide() {
            return {nextScreen: this.nextScreen}
        },
        computed: {
          numScreens() {
              return Object.keys(this.$slots).length
          }
        },
        methods: {
            nextScreen(index) {
                if (typeof index === 'number') {
                    this.currentScreen = index
                    return
                }
                this.currentScreen += 1
            }
        }
    }
</script>

<style scoped>
    .experiment {
        margin: 100px auto;
        width: 800px;
        border-radius: 10px;
        border: 1px solid #ababab;
        padding: 20px;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .header {
        text-align: left;
        display: flex;
        flex-direction: row;
    }

    .header .col {
        flex-shrink: 0;
        flex-grow: 1;
    }
    .header .col:last-child {
        text-align: right;
    }
</style>