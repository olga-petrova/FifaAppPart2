Ext.define('FifaApp.store.AggregatedMatches', {
	extend: 'Ext.data.Store',
	alias: 'store.aggregated_matches',
	storeId: 'aggregated_matches',
    model: 'FifaApp.model.AggregatedMatch',
	proxy: {
		type: 'memory',
		reader: {
			type: 'json'
		}
    },

    loadFromFlat: function (data) {
        var aggregatedData = {},
            aggregatedArray;
        data.each(function (record) {
            var team_name = record.get('team_name'),
                aggregatedItem;

            aggregatedItem = aggregatedData[team_name] ? aggregatedData[team_name] : 
                aggregatedData[team_name] = {
                    'team_name': team_name,
                    'win': 0,
                    'loss': 0
                };
                aggregatedItem.win += record.get('win');
                aggregatedItem.loss += record.get('loss');
        }, this);
        
        aggregatedArray = Object.values(aggregatedData);
        aggregatedArray = aggregatedArray.sort(function (a, b) {
            return b.win - a.win;
        });
        
        aggregatedArray = aggregatedArray.slice(1, 20);
        this.add(aggregatedArray);
    }
});
