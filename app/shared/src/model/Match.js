Ext.define('FifaApp.model.Match', {
	extend: 'FifaApp.model.Base',
	fields: [
		{
			name: "home_team_name"
		},
		{
			name: "away_team_name"
		},
		{
			name: "home_team_code",
			calculate: function (data) {
				return Ext.getStore('flags').getCountryCode(data.home_team_name);
			}
		},
		{
			name: "away_team_code",
			calculate: function (data) {
				return Ext.getStore('flags').getCountryCode(data.away_team_name);
			}
		}
	]
});
