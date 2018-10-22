Ext.define('FifaApp.view.matches.MatchesView',{
	extend: 'Ext.dataview.List',
	xtype: 'matchesview',
	cls: 'matchesview',
	controller: 'matchesviewcontroller',
	bind: {
		store: '{matchesstore}'
	},
	emptyText: 'No matches was found',
	striped: true,
	itemTpl: new Ext.XTemplate(`
	<div>
		<table>
			<tr>
				<td>
					<div class="time">
						<span class="bold">{year}</span>
						<span class="stage">{stage}</span>
					</div>
					<div>
						<span class="flag"><img src="resources/shared/images/flags/{home_team_code}.png"></span>
						<span class="team_label">{home_team_name}</span>
						<span class="results">{home_team_goals} : {away_team_goals}</span>
						<span class="flag"><img src="resources/shared/images/flags/{away_team_code}.png"></span>
						<span class="team_label">{away_team_name}</span>
					<div>
				</td>
			</tr>
		</table>
	</div>
	`)
});
