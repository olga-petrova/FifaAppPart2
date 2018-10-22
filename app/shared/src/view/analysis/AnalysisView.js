Ext.define('FifaApp.view.matches.AnalysisView',{
	extend: 'Ext.pivot.Grid',
	xtype: 'analysisview',
	cls: 'analysisview',
	controller: {type: 'analysisviewcontroller'},

	bind: {
		store: '{flatmatchesstore}'
    },
    
    matrix: {
		type: 'local',

		leftAxis: [{
			dataIndex: 'team_name',
			direction: 'ASC',
			header: 'Countries',
			width: 150
		}],
		topAxis: [{
			dataIndex: 'year',
			direction: 'ASC'
		}],
		aggregate: [{
			dataIndex: 'win',
			header: 'Win',
			aggregator: 'sum',
			width: 60,
			formatter: 'number("0,000")'
		},
		{
			dataIndex: 'loss',
			header: 'Loss',
			aggregator: 'sum',
			width: 60,
			formatter: 'number("0,000")'
		}]
	}
	
});