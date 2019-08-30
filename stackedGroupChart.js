Highcharts.chart('stackedGroupChart', {
    chart: {
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 25,
            depth: 40
        }
    },

    title: {
        text: 'Marks of Students for Diffrent Subjects, grouped by gender'
    },

    xAxis: {
        categories: ['Science', 'Maths', 'Social Science', 'English', 'Hindi'],
        labels: {
            skew3d: true,
            style: {
                fontSize: '16px'
            }
        }
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Marks of students',
            skew3d: true
        }
    },

    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
    },

    plotOptions: {
        column: {
            stacking: 'normal',
            depth: 40
        }
    },

    series: [{
        name: 'Vishal',
        data: [48, 49, 45, 40, 38],
        stack: 'male'
    }, {
        name: 'Yash',
        data: [42, 45, 40, 35, 42],
        stack: 'male'

    }, {
        name: 'Ravi',
        data: [45, 40, 42, 42, 25],
        stack: 'male'

    }, {
        name: 'Sakina',
        data: [50, 25, 43, 32, 41],
        stack: 'female'

    }, {
        name: 'Nikita',
        data: [40, 32, 44, 22, 15],
        stack: 'female'

    }]
});
