Ext.define('FifaApp.store.FlatMatches', {
	extend: 'Ext.data.Store',
	alias: 'store.flat_matches',
	storeId: 'flat_matches',
    model: 'FifaApp.model.FlatMatch',
	proxy: {
		type: 'memory',
		reader: {
			type: 'json'
		}
    },

    loadFromOriginal: function (data) {
        data.each(function (record) {
            var data = Ext.clone(record.data),
                result = (data.home_team_goals > data.away_team_goals) ? 1 : 
                    (data.home_team_goals < data.away_team_goals) ? -1 :
                    (data.win_conditions.substring(data.home_team_name) > -1) ? 1 : -1;
                    
            //add home team record
            this.add({
                "team_name": data.home_team_name,
                "team_initials": data.home_team_initials,
                 "competitor_name": data.away_team_name,
                "competitor_initials": data.away_team_initials,
                "win": (result == 1) ? 1 : 0,
                "loss": (result == -1) ? 1 : 0,
                "team_goals": data.home_team_goals,
                "competitor_goals": data.away_team_goals,
                "year": data.year,
                "datetime": data.datetime,
                "stage": data.stage,
                "stadium": data.stadium,
                "city": data.city,
                "attendance": data.attendance,
                "half_time_home_goals": data.half_time_home_goals,
                "half_time_away_goals": data.half_time_away_goals,
                "referee": data.referee,
                "assistant_1": data.assistant_1,
                "assistant_2": data.assistant_2
            });

            //add away team record
            this.add({
                "team_name": data.away_team_name,
                "team_initials": data.away_team_initials,
                "competitor_name": data.home_team_name,
                "competitor_initials": data.home_team_initials,
                "win": (result == -1) ? 1 : 0,
                "loss": (result == 1) ? 1 : 0,
                "team_goals": data.away_team_goals,
                "competitor_goals": data.home_team_goals,
                "year": data.year,
                "datetime": data.datetime,
                "stage": data.stage,
                "stadium": data.stadium,
                "city": data.city,
                "attendance": data.attendance,
                "half_time_home_goals": data.half_time_home_goals,
                "half_time_away_goals": data.half_time_away_goals,
                "referee": data.referee,
                "assistant_1": data.assistant_1,
                "assistant_2": data.assistant_2
            });
            
        }, this);
    }
});