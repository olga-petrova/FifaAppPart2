Ext.define('FifaApp.view.matches.MatchesView',{
	extend: 'Ext.grid.Grid',
	xtype: 'matchesview',
	cls: 'matchesview',
	requires: [],
	controller: {type: 'matchesviewcontroller'},
	bind: {
		store: '{matchesstore}'
	},
	selectable: { mode: 'single' },
	listeners: {
		select: 'onItemSelected'
	},
	itemConfig: {
		viewModel: true,
		bind: {
			cls: '{record.stage:lowercase}'
		}
	},
	rowNumbers: {
		text: 'Index'
	},
	columns: [
		{ 
			text: 'Year',
			dataIndex: 'year',
			width: 100,
			cell: {userCls: 'bold'}
		},
		{
			text: 'Stage',
			dataIndex: 'stage',
			width: 100
		},
		{
			text: 'Team A',
			width: 180,
			cell: {
				encodeHtml: false,
				bind: '<div><div class="flag"><img src="resources/shared/images/flags/{record.home_team_code}.png"></div> <span class="team_label">{record.home_team_name}</span></div>'
			}
		},
		{
			text: 'Score',
			width: 60,
			cell: {
				bind: '{record.home_team_goals} : {record.away_team_goals} {record.win_conditions}'
			}
		},
		{
			text: 'Team B',
			width: 230,
			cell: {
				encodeHtml: false,
				bind: '<div><div class="flag"><img src="resources/shared/images/flags/{record.away_team_code}.png"></div> <span class="team_label">{record.away_team_name}</span></div>'
			} 
		}
	]
});
