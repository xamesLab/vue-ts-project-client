<template>
    <section class="charts-grid">
        <FeatureChartItem :wsData="wsData" :chartKey="1" />
        <FeatureChartItem :chartKey="2" />
        <FeatureChartItem :chartKey="3" />
        <FeatureChartItem :chartKey="4" />
    </section>
</template>
<script>
import { FeatureChartItem } from '@features/chart/index'
import { binanceWs } from '@entities/binanceService/api'

export default {
    name: 'ChartsGrid',
    components: {
        FeatureChartItem
    },
    data(){
        return {
            ws: null,
            wsData: {close: 0}
        }
    },
    mounted() {
        //useCandleModel().fetchCandles({symbol: 'WAVESUSDT', interval: '15m', limit: 10})
        this.ws = binanceWs.futuresCandles('BNBUSDT', '15m', candle => {
            //this.wsData.close = candle.close
        })
    }
}
</script>
<style lang="scss" scoped>
    .charts-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>