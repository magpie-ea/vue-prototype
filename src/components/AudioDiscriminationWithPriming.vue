<template>
    <Screen title="Please listen" @mousemove="onMouseMove">
        <template #0="{ nextSlide }">
            <p>&nbsp;</p>
            <audio :src="primingAudio" :autoplay="true" @ended="nextSlide"/>
        </template>

        <template #1="{ nextSlide }">
            <div v-wait:500="nextSlide"></div>
        </template>

        <template #2="{ nextSlide }">
            <div class="options" v-wait:500="nextSlide">
                <div class="option1">{{option1}}</div>
                <div class="space"></div>
                <div class="option2">{{option2}}</div>
            </div>
        </template>

        <template #3="{ nextSlide }">
            <div class="options">
                <div class="option1" @mouseover="onOption1(nextSlide)">{{option1}}</div>
                <div class="space"></div>
                <div class="option2" @mouseover="onOption2(nextSlide)">{{option2}}</div>
            </div>
            <button @click="playing = true" v-if="!playing">Go</button>
            <audio :src="trialAudio" :autoplay="playing" :loop="true"/>
        </template>

        <template #4="{ nextScreen }">
            <div v-wait:3000="nextScreen"></div>
        </template>
    </Screen>
</template>

<script>
    import Screen from "./Screen";

    export default {
        name: "AudioDiscriminationWithPriming",
        components: {Screen},
        inject: ['nextScreen', 'addResult'],
        props: {
            primingAudio: {
                type: String,
                required: true
            },
            trialAudio: {
                type: String,
                required: true
            },
            option1: {
                type: String,
                required: true
            },
            option2: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                playing: false,
                mouseMovements: []
            }
        },
        methods: {
            onMouseMove(coordinates) {
                if (!this.playing) return
                this.mouseMovements.push(coordinates)
            },
            onOption1(cb) {
                if (!this.playing) return
                this.addResult({endLabel: this.option1, mouseMovements: this.mouseMovements})
                cb()
            },
            onOption2(cb) {
                if (!this.playing) return
                this.addResult({endLabel: this.option2, mouseMovements: this.mouseMovements})
                cb()
            }
        }
    }
</script>

<style scoped>
    .options {
        display: flex;
        flex-direction: row;
    }

    .options .space {
        flex: 1;
    }

    .options .option1,
    .options .option2 {
        flex: 0;
        padding: 70px;
        width: 100px;
        background: lightyellow;
    }

    button {
        bottom: 20px;
    }

    audio {
        visibility: hidden;
    }
</style>
