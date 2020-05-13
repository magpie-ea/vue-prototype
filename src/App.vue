<template>
    <Experiment id="app">
        <div>Mouse tracking experiment</div>
        <template #0="{ nextScreen }">
            <Screen :title="'Welcome'">
                <template>
                    Hello! <button @click="nextScreen">Start</button>
                </template>
            </Screen>
        </template>
        <template #1 >
            <Screen :title="'Thanks!'">
                <template>Goodbye</template>
            </Screen>
        </template>
    </Experiment>
</template>

<script>
    import Experiment from "./components/Experiment";
    import Screen from "./components/Screen";

    export default {
        name: 'App',
        components: {
            Screen,
            Experiment,
        }
    }
</script>

<style>
</style>
