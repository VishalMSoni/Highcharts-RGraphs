Highcharts.chart('drilldown', {
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
    subtitle: {
        text: 'Click the columns to view versions.'
    },
    xAxis: {
        type: 'Subjects'
    },
    yAxis: {
        title: {
            text: 'Marks of students'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>Total of {point.y:.2f}</b><br/>'
    },

    series: [
        {
            name: "Subjects",
            colorByPoint: true,
            data: [
                {
                    name: "Science",
                    y: 50,
                    drilldown: "Science"
                },
                {
                    name: "Maths",
                    y: 50,
                    drilldown: "Maths"
                },
                {
                    name: "Social Science",
                    y: 50,
                    drilldown: "Social Science"
                },
                {
                    name: "English",
                    y: 50,
                    drilldown: "English"
                },
                {
                    name: "Hindi",
                    y: 50,
                    drilldown: "Hindi"
                }
            ]
        }
    ],
    drilldown: {
        series: [
            {
                name: "Science",
                id: "Science",
                data: [
                    [
                        "Vishal",
                        48
                    ],
                    [
                        "Yash",
                        42
                    ],
                    [
                        "Mitesh",
                        45
                    ],
                    [
                        "Ravi",
                        50
                    ],
                    [
                        "Prince",
                        40
                    ]
                ]
            },
            {
                name: "Maths",
                id: "Maths",
                data: [
                    [
                        "v65.0",
                        49
                    ],
                    [
                        "v64.0",
                        45
                    ],
                    [
                        "v63.0",
                        40
                    ],
                    [
                        "v62.0",
                        25
                    ],
                    [
                        "v61.0",
                        32
                    ]
                ]
            },
            {
                name: "Social Science",
                id: "Social Science",
                data: [
                    [
                        "v65.0",
                        45
                    ],
                    [
                        "v64.0",
                        40
                    ],
                    [
                        "v63.0",
                        42
                    ],
                    [
                        "v62.0",
                        43
                    ],
                    [
                        "v61.0",
                        44
                    ]
                ]
            },
            {
                name: "English",
                id: "English",
                data: [
                    [
                        "v65.0",
                        40
                    ],
                    [
                        "v64.0",
                        35
                    ],
                    [
                        "v63.0",
                        42
                    ],
                    [
                        "v62.0",
                        32
                    ],
                    [
                        "v61.0",
                        22
                    ]
                ]
            },
            {
                name: "Hindi",
                id: "Hindi",
                data: [
                    [
                        "v65.0",
                        38
                    ],
                    [
                        "v64.0",
                        42
                    ],
                    [
                        "v63.0",
                        25
                    ],
                    [
                        "v62.0",
                        41
                    ],
                    [
                        "v61.0",
                        15
                    ]
                ]
            }
        ]
    }
});