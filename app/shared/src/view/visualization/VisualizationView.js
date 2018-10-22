Ext.define('FifaApp.view.visualization.VisualizationView',{
	extend: 'Ext.chart.CartesianChart',
    xtype: 'visualizationview',
    controller: {type: 'visualizationviewcontroller'},
	
	bind: {
		store: '{aggregatedmatchesstore}'
    },

    axes: [{
        type: 'numeric3d',
        position: 'left',
        title: {
            text: 'Count',
            fontSize: 15
        },
        fields: 'win'
    }, {
        type: 'category3d',
        position: 'bottom',
        title: {
            text: 'Country',
            fontSize: 15
        },
        fields: 'team_name'
    }],

    series: [
        {
            type: 'bar3d',
            subStyle: {
                fill: ['#1DE9B6', '#FF1744']
            },
            xField: 'team_name',
            yField: ['win', 'loss'],
            label: {
                field: ['win', 'loss'],
                display: 'inside',
                orientation: 'horizontal'
            },
            highlight: true,
            tooltip: {
                renderer: 'onTooltipRender'
            }
        }
    ]
	
});