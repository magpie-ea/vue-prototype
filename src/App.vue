<template>
    <Experiment id="app">
        <div>Mouse tracking experiment</div>
        <template #0="{ nextScreen }">
            <Screen :title="'Welcome'">
                Hello!
                <button @click="nextScreen">Start</button>
            </Screen>
        </template>
        <template #1>
            <AudioDiscriminationWithPriming
                    priming-audio="audio/seashore.ogg"
                    trial-audio="audio/sealion.ogg"
                    option1="Fish"
                    option2="Mammal">
            </AudioDiscriminationWithPriming>
        </template>
        <template #2>
            <Screen :title="'Thanks!'">
                Goodbye
            </Screen>
        </template>
    </Experiment>
</template>

<script>
    import Experiment from "./components/Experiment";
    import Screen from "./components/Screen";
    import AudioDiscriminationWithPriming from "./components/AudioDiscriminationWithPriming";

    export default {
        name: 'App',
        components: {
            AudioDiscriminationWithPriming,
            Screen,
            Experiment,
        }
    }
</script>

<style>
</style>
