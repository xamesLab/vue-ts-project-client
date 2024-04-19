<template>
    <div class="chart-item">
        <ChartItem :ws="{}" :chartKey="chartKey" />
    </div>
</template>
<script>
import { ChartItem } from '@entities/chart/index'

export default {
    name: 'FeatureChartItem',
    props: {
        chartKey: Number,
    },
    components: {
        ChartItem
    },
    data(){
        return {
        }
    },
}
</script>
<style lang="scss" scoped>
    .chart-item {
        position: relative;
    }
</style>