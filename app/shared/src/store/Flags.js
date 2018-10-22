Ext.define('FifaApp.store.Flags', {
	extend: 'Ext.data.Store',
    alias: 'store.flags',
    storeId: 'flags',
	model: 'FifaApp.model.Flag',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'resources/shared/data/country_codes.json',
		reader: {
			type: 'json'
		}
    },
    
    getCountryCode: function (name) {
        var record = this.findRecord('name', name);
        return (record) ? record.get('code2') : '';
    }
});
