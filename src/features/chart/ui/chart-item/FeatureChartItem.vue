<template>
    <div class="chart-item">
        <ChartItem :wsData="wsData" :chartKey="chartKey"  />
    </div>
</template>
<script>
import { ChartItem } from '@entities/chart/index'

export default {
    name: 'FeatureChartItem',
    props: {
        chartKey: Number,
        wsData: Object
    },
    components: {
        ChartItem
    },
    data(){
        return {
        }
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
    .chart-item {
        position: relative;
    }
</style>