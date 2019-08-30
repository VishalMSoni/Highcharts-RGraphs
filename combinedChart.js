window.onload = function () {

    bar = new RGraph.Bar({
        id: 'combinedChart',
        data: [
            [500000, 400000],
            [800000, 700000],
            [1200000, 1400000],
            [1500000, 1800000],
            [2500000, 2700000],
            [3500000, 3500000]
        ],
        options: {
            key: ['India', 'China'],
            yaxisScaleMax: 4000000,
            marginInnerGrouped: -15,
            keyInteractiveHighlightChartStroke: 'transparent',
            keyInteractiveHighlightChartFill: 'rgba(255,255,255,0.75)',
            keyTextSize: 14,
            keyPosition: 'margin',
            colors: ['blue', 'green'],
            xaxisLabels: ['1995', '2000', '2005', '2010', '2015', '2020'],
            colorsStroke: 'rgba(0,0,0,0)',
            marginInner: 10,
            marginInnerGrouped: 1,
            title: 'Population and Revenue chart, 1995-2020',
            titleSize: 14,
            titleX: 370,
            titleY: 0,
            titleHalign: 'center'
        }
    }).draw();

    line = new RGraph.Line({
        id: 'combinedChart',
        data: [
            [1500000, 1750000, 2800000, 3000000, 3300000, 3800000],
            [1650000, 2000000, 2700000, 3100000, 3500000, 3750000]
        ],
        options: {
            axes: false,
            yaxisScaleMax: 4000000,
            backgroundGrid: false,
            linewidth: 4,
            colors: ['blue', 'green'],
            yaxisPosition: 'right',
            axesColor: '#999',
            textColor: '#ccc',
            marginLeft: 100,
            tickmarksStyle: 'circle',
            spline: false,
            combinedEffect: 'trace',
            textSize: 18
        }
    });

    combo = new RGraph.CombinedChart([bar, line])
        .draw()
}