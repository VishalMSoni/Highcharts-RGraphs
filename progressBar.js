new RGraph.HBar({
    id: 'progressBar',
    data: ['51%', '49%'],
    options: {
        textSize: 14,
        xaxisLabelsSize: 8,
        yaxisLabels: ['Angular', 'Node'],
        marginTop: 50,
        marginInner: 25,
        xaxis: false,
        axesColor: '#ccc',
        xaxisLabelsCount: 18,
        textColor: '#666',
        backgroundGridBorder: false,
        backgroundGridHlines: false,
        backgroundGridVlinesCount: 18,
        labelsAbove: true,
        tooltips: [
            'Details: <br /><span style="color: #666">The "Angular" has many versions.</span>',
            'Details: <br /><span style="color: #666">The "Node" has good community.</span>'
        ],
        highlightFill: 'rgba(255,255,255,0.4)',
        colors:['grey'],
        title: 'Angular vs Node',
        titleBold: true,
        titleSize: 18,
        titleY: '-10',
        titleHalign: 'center',
        titleColor: 'gray'
    }
}).grow();

RGraph.tooltips.style.textAlign = 'center';