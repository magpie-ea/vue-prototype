<template>
    <Experiment id="app">
        <div>Mouse tracking experiment</div>
        <template #0="{ nextScreen }">
            <Screen :title="'Welcome'">
                <template #0>
                    Hello!
                    <button @click="nextScreen">Start</button>
                </template>
            </Screen>
        </template>
        <template #[trial.screen] v-for="trial in audioTrials">
            <AudioDiscriminationWithPriming
                    :priming-audio="trial.primingAudio"
                    :trial-audio="trial.trialAudio"
                    :option1="trial.option1"
                    :option2="trial.option2"
                    :key="trial.screen">
            </AudioDiscriminationWithPriming>
        </template>

        <template #3>
            <Screen :title="'Thanks!'">
                <template #0>
                Goodbye
                </template>
            </Screen>
        </template>
    </Experiment>
</template>

<script>
    import Experiment from "./components/Experiment";
    import Screen from "./components/Screen";
    import AudioDiscriminationWithPriming from "./components/AudioDiscriminationWithPriming";
    import Vue from 'vue'

    export default {
        name: 'App',
        components: {
            AudioDiscriminationWithPriming,
            Screen,
            Experiment,
        },
        data() {
            return {
                audioTrials: [
                    {
                        screen: 1,
                        primingAudio: "audio/seashore.ogg",
                        trialAudio: "audio/sealion.ogg",
                        option1: "Fish",
                        option2: "Mammal",
                    },
                    {
                        screen: 2,
                        primingAudio: "audio/seashore.ogg",
                        trialAudio: "audio/sealion.ogg",
                        option1: "Mammal",
                        option2: "Bird",
                    }
                ]
            }
        }
    }

    Vue.directive('wait', (el, binding) => {
        setTimeout(() => binding.value(), Number(binding.arg))
    })
</script>

<style>
</style>
