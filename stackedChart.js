Highcharts.chart('stackedChart', {
    chart: {
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 5,
            beta: 15,
            viewDistance: 25,
            depth: 40
        }
    },
    title: {
        text: 'Marks of Students for Diffrent Subjects'
    },
    xAxis: {
        categories: ['Science', 'Maths', 'Social Science', 'English', 'Hindi']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Marks of students'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Vishal',
        data: [48, 49, 45, 40, 38]
    }, {
        name: 'Yash',
        data: [42, 45, 40, 35, 42]
    }, {
        name: 'Mitesh',
        data: [45, 40, 42, 42, 25]
    }, {
        name: 'Ravi',
        data: [50, 25, 43, 32, 41]
    }, {
        name: 'Prince',
        data: [40, 32, 44, 22, 15]
    }]
});