Ext.define('FifaApp.view.main.MainViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.mainviewmodel',

	stores: {
		matchesstore: {
			"type": "matches",
			listeners: {
				load: 'onMatchesLoad'
			}
		},
		flagsstore: {
			"type": "flags",
			listeners: {
				load: 'onFlagsLoad'
			}
		},
		flatmatchesstore: {
			"type": "flat_matches"
		},
		aggregatedmatchesstore: {
			"type": "aggregated_matches"
		}
	}
});

