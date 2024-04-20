<template>
    <v-theme-provider>
        <div class="vue-component">
            <h1 class="main-title">Test deploy</h1>
            <div class="">env: {{ env }}</div>
            <hr>
            <br>
            <h4>Pair: {{ wsData.close }}</h4>
            <br>
            <ChartsGrid />
            <button @click="wsStop">stop</button>
        </div>
    </v-theme-provider>
</template>
<script>
import "./style.scss";
import {useCandleModel} from '@entities/binanceService/model'
import { ChartsGrid } from '../widgets/charts-grid/index'

export default {
    name: 'app',
    components: {
        ChartsGrid
    },
    data(){
        return {
            text: 'new Vue component in VPS ',
            env: process.env.NODE_ENV,
            ws: null,
            wsData: {close: 0}
        }
    },
    computed: {
        pairList() {
            return Object.keys(useCandleModel().candleList)
        },
        pairData() {
            return useCandleModel().candleList
        },
    },
    methods: {
        wsStop() {
            console.log('stop')
            this.ws()
        }
    },
    created() {

    },
    mounted() {
        window.addEventListener('custom-event', () => {
            console.log('custom-event0')
        })
    }
}
</script>
<style lang="scss">
    $body-color: green;
    .vue-component {
        
    }
</style>