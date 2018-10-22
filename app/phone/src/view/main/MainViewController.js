Ext.define('FifaApp.view.main.MainViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.mainviewcontroller',

	init: function (view) {
		this.redirectTo( 'matchesview', true );
	},

	onMenuClick: function(button) {
		Ext.Viewport.toggleMenu('left');
		Ext.getCmp('theToolbar').setTitle(button.getText()) 
		this.redirectTo( button.tag );
	},

	routes: { 
		':xtype': {action: 'mainRoute'}
	},

	mainRoute:function(xtype) {
		var exists = Ext.ClassManager.getByAlias('widget.' + xtype);
		if (exists === undefined) {
			console.log(xtype + ' does not exist');
			return;
		}
		var centerview = Ext.getCmp('mainview');
		if (!centerview.getComponent(xtype)) {
			centerview.add({ xtype: xtype });
		}
		centerview.setActiveItem(xtype);
	},

	onFlagsLoad: function () {
		this.getViewModel().getStore('matchesstore').load();
	},

	onMatchesLoad: function (store) {
		var flatMatchesStore = this.getViewModel().getStore('flatmatchesstore'),
			aggregatedMatchesStore = this.getViewModel().getStore('aggregatedmatchesstore');
		flatMatchesStore.loadFromOriginal(store.data);
		aggregatedMatchesStore.loadFromFlat(flatMatchesStore.data);
	}


});
