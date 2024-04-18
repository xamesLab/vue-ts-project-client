<template>
    <section class="charts-grid">
        <FeatureChartItem :chartKey="1" />
        <FeatureChartItem :chartKey="2" />
        <FeatureChartItem :chartKey="3" />
        <FeatureChartItem :chartKey="4" />
    </section>
</template>
<script>
import { FeatureChartItem } from '../../../features/chart/index'

export default {
    name: 'ChartsGrid',
    components: {
        FeatureChartItem
    },
    data(){
        return {
        }
    },
}
</script>
<style lang="scss" scoped>
    .charts-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>