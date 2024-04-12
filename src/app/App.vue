<template>
    <v-theme-provider>
        <div class="vue-component">
            <h1 class="main-title">Test deploy</h1>
            <div class="">env: {{ env }}</div>
            <hr>
            <br>
            <h4>Pair: {{ pairList[0] }}</h4>
            <br>
            <div v-for="p in pairData[pairList[0]]" :key="p.close">{{ p.close }}</div>
        </div>
    </v-theme-provider>
</template>
<script>
import "./style.scss";
import {useUserStore} from '../shared/stores/userStore'
import {useCandleModel} from '../entities/binanceService/model'
export default {
    name: 'app',
    data(){
        return {
            text: 'new Vue component in VPS ',
            env: process.env.NODE_ENV,
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
    },
    created() {

    },
    mounted() {
        useCandleModel().fetchCandles({symbol: 'WAVESUSDT', interval: '15m', limit: 10})
        
    }
}
</script>
<style lang="scss">
    $body-color: green;
    .vue-component {
        
    }
</style>