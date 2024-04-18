<template>
    <v-theme-provider>
        <div class="vue-component">
            <h1 class="main-title">Test deploy</h1>
            <div class="">env: {{ env }}</div>
            <hr>
            <br>
            <h4>Pair: {{ wsData.close }}</h4>
            <br>
            <ChartItem :ws="wsData" />
            <button @click="wsStop">stop</button>
        </div>
    </v-theme-provider>
</template>
<script>
import "./style.scss";
import {useUserStore} from '../shared/stores/userStore'
import {useCandleModel} from '../entities/binanceService/model'
import {binanceWs} from '../entities/binanceService/api'
import { ChartItem } from '../entities/chart/index'

export default {
    name: 'app',
    components: {
        ChartItem
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
        //useCandleModel().fetchCandles({symbol: 'WAVESUSDT', interval: '15m', limit: 10})
        this.ws = binanceWs.futuresCandles('ADAUSDT', '15m', candle => {
            this.wsData.close = candle.close
        })
        
    }
}
</script>
<style lang="scss">
    $body-color: green;
    .vue-component {
        
    }
</style>