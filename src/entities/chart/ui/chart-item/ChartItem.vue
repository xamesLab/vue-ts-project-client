<template>
    <div id="chartcontrols"></div>
    <div class="hello" ref="chartdiv"></div>
</template>
<script>
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5stock from "@amcharts/amcharts5/stock";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

import { testData } from '../../../../shared/config/testChartData'

export default {
    name: 'ChartItem',
    data(){
        return {
        }
    },
    computed: {
    },
    methods: {
    },
    created() {

    },
    mounted() {
        let root = am5.Root.new(this.$refs.chartdiv);

        const myTheme = am5.Theme.new(root);

        myTheme.rule("Grid", ["scrollbar", "minor"]).setAll({
            visible:false
        });

        root.setThemes([
            am5themes_Animated.new(root),
            myTheme
        ]);

        // Create a stock chart
        // -------------------------------------------------------------------------------
        let stockChart = root.container.children.push(am5stock.StockChart.new(root, {
            paddingRight: 0
        }));


        // Set global number format
        // -------------------------------------------------------------------------------
        root.numberFormatter.set("numberFormat", "#,###.00");

        // Create a main stock panel (chart)
        // -------------------------------------------------------------------------------
        let mainPanel = stockChart.panels.push(am5stock.StockPanel.new(root, {
            wheelY: "zoomX",
            panX: true,
            panY: true
        }));

        // Create value axis
        // -------------------------------------------------------------------------------
        let valueAxis = mainPanel.yAxes.push(am5xy.ValueAxis.new(root, {
            renderer: am5xy.AxisRendererY.new(root, {
                pan: "zoom"
            }),
            extraMin: 0.1, // adds some space for for main series
            tooltip: am5.Tooltip.new(root, {}),
            numberFormat: "#,###.00",
            extraTooltipPrecision: 2
        }));

        let dateAxis = mainPanel.xAxes.push(am5xy.GaplessDateAxis.new(root, {
            baseInterval: {
                timeUnit: "day",
                count: 1
            },
            renderer: am5xy.AxisRendererX.new(root, {
                minorGridEnabled: true
            }),
            tooltip: am5.Tooltip.new(root, {})
        }));

        // Add series
        // -------------------------------------------------------------------------------
        let valueSeries = mainPanel.series.push(am5xy.CandlestickSeries.new(root, {
            name: "MSFT",
            clustered: false,
            valueXField: "Date",
            valueYField: "Close",
            highValueYField: "High",
            lowValueYField: "Low",
            openValueYField: "Open",
            calculateAggregates: true,
            xAxis: dateAxis,
            yAxis: valueAxis,
            legendValueText: "open: [bold]{openValueY}[/] high: [bold]{highValueY}[/] low: [bold]{lowValueY}[/] close: [bold]{valueY}[/]",
            legendRangeValueText: ""
        }));

        // Set main value series
        // -------------------------------------------------------------------------------
        stockChart.set("stockSeries", valueSeries);


        // Add a stock legend
        // -------------------------------------------------------------------------------
        let valueLegend = mainPanel.plotContainer.children.push(am5stock.StockLegend.new(root, {
            stockChart: stockChart
        }));

        // Create volume axis
        // -------------------------------------------------------------------------------
        let volumeAxisRenderer = am5xy.AxisRendererY.new(root, {
            inside: true
        });

        volumeAxisRenderer.labels.template.set("forceHidden", true);
        volumeAxisRenderer.grid.template.set("forceHidden", true);

        let volumeValueAxis = mainPanel.yAxes.push(am5xy.ValueAxis.new(root, {
            numberFormat: "#.#a",
            height: am5.percent(20),
            y: am5.percent(100),
            centerY: am5.percent(100),
            renderer: volumeAxisRenderer
        }));

        // Add series
        let volumeSeries = mainPanel.series.push(am5xy.ColumnSeries.new(root, {
            name: "Volume",
            clustered: false,
            valueXField: "Date",
            valueYField: "Volume",
            xAxis: dateAxis,
            yAxis: volumeValueAxis,
            legendValueText: "[bold]{valueY.formatNumber('#,###.0a')}[/]"
        }));

        volumeSeries.columns.template.setAll({
            strokeOpacity: 0,
            fillOpacity: 0.5
        });

        // color columns by stock rules
        volumeSeries.columns.template.adapters.add("fill", function (fill, target) {
            let dataItem = target.dataItem;
            if (dataItem) {
                return stockChart.getVolumeColor(dataItem);
            }
            return fill;
        })

        // Set main series
        // -------------------------------------------------------------------------------
        stockChart.set("volumeSeries", volumeSeries);
        valueLegend.data.setAll([valueSeries, volumeSeries]);


        // Add cursor(s)
        // -------------------------------------------------------------------------------
        mainPanel.set("cursor", am5xy.XYCursor.new(root, {
            yAxis: valueAxis,
            xAxis: dateAxis,
            snapToSeries: [valueSeries],
            snapToSeriesBy: "y!"
        }));


        // Add scrollbar
        // -------------------------------------------------------------------------------
        let scrollbar = mainPanel.set("scrollbarX", am5xy.XYChartScrollbar.new(root, {
            orientation: "horizontal",
            height: 50
        }));
        stockChart.toolsContainer.children.push(scrollbar);

        let sbDateAxis = scrollbar.chart.xAxes.push(am5xy.GaplessDateAxis.new(root, {
            baseInterval: {
                timeUnit: "day",
                count: 1
            },
            renderer: am5xy.AxisRendererX.new(root, {
                minorGridEnabled: true
            })
        }));

        let sbValueAxis = scrollbar.chart.yAxes.push(am5xy.ValueAxis.new(root, {
            renderer: am5xy.AxisRendererY.new(root, {})
        }));

        let sbSeries = scrollbar.chart.series.push(am5xy.LineSeries.new(root, {
            valueYField: "Close",
            valueXField: "Date",
            xAxis: sbDateAxis,
            yAxis: sbValueAxis
        }));

        sbSeries.fills.template.setAll({
            visible: true,
            fillOpacity: 0.3
        });

        // Add Volume Profile indicator
        let volumeProfile = stockChart.indicators.push(am5stock.VolumeProfile.new(root, {
            stockChart: stockChart,
            stockSeries: valueSeries,
            volumeSeries: volumeSeries,
            legend: valueLegend
        }));

        // Stock toolbar
        // -------------------------------------------------------------------------------
        let toolbar = am5stock.StockToolbar.new(root, {
            container: document.getElementById("chartcontrols"),
            stockChart: stockChart,
            controls: [
                am5stock.IndicatorControl.new(root, {
                stockChart: stockChart,
                legend: valueLegend
                }),
                am5stock.DateRangeSelector.new(root, {
                stockChart: stockChart
                }),
                am5stock.PeriodSelector.new(root, {
                stockChart: stockChart
                }),

                am5stock.DrawingControl.new(root, {
                stockChart: stockChart
                }),
                am5stock.ResetControl.new(root, {
                stockChart: stockChart
                }),
                am5stock.SettingsControl.new(root, {
                stockChart: stockChart
                })
            ]
        })

        let data2 = testData.CHART_DATA

        // set data to all series
        valueSeries.data.setAll(data2);
        volumeSeries.data.setAll(data2);
        sbSeries.data.setAll(data2);
    }
}
</script>
<style>
    .hello {
        width: 100%;
        height: 500px;
    }
</style>