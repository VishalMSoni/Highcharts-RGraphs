Highcharts.chart('donutChart', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 60
        }
    },
    title: {
        text: 'Contents of marks of Student Vishal'
    },
    subtitle: {
        text: 'Marks out of 50'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            innerSize: 100,
            depth: 45
        }
    },
    series: [{
        name: 'Marks of Studets',
        data: [
            ['Science', 48],
            ['Maths', 49],
            ['Social Science', 45],
            ['English', 40],
            ['Hindi', 38]
        ]
    }]
});