<template>
    <div class="trial">

        <template v-if="slide === 0">
            <p>&nbsp;</p>
            <p>Please listen</p>
            <audio :src="primingAudio" autoplay="true" @ended="slide = 1"/>
        </template>

        <template v-if="slide === 1">

        </template>

        <template v-if="slide === 2">
            <div class="options">
                <div class="option1">{{option1}}</div>
                <div class="space"></div>
                <div class="option2">{{option2}}</div>
            </div>
        </template>

        <template v-if="slide === 3">
            <div class="options">
                <div class="option1" @mouseover="onOption1">{{option1}}</div>
                <div class="space"></div>
                <div class="option2" @mouseover="onOption2">{{option2}}</div>
            </div>
            <button @click="playing = true" v-if="!playing">Go</button>
            <audio :src="trialAudio" :autoplay="playing" loop="true"/>
        </template>

        <template v-if="slide === 4">

        </template>
    </div>
</template>

<script>
    function sleep(time) {
        return new Promise(resolve => setTimeout(resolve, time))
    }

    export default {
        name: "AudioDiscriminationWithPriming",
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
                slide: 0,
                playing: false
            }
        },
        watch: {
            async slide(slide) {
                if (slide === 1) {
                    await sleep(500)
                    this.slide++
                    return
                }
                if (slide === 2) {
                    await sleep(500)
                    this.slide++
                    return
                }
                if (slide === 4) {
                    await sleep(500)
                    this.nextScreen()
                }
            }
        },
        methods: {
            onOption1() {
                if (!this.playing) return
                this.addResult({endLabel: this.option1})
                this.slide++
            },
            onOption2() {
                if (!this.playing) return
                this.addResult({endLabel: this.option2})
                this.slide++
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

    audio {
        visibility: hidden;
    }
</style>
