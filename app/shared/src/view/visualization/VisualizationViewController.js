Ext.define('FifaApp.view.visualization.VisualizationViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.visualizationviewcontroller',

	onTooltipRender: function (tooltip, record, item) {
		tooltip.setTitle(record.get('team_name'));
        tooltip.setHtml('Win: ' + record.get('win') + ', Loss:' + record.get('loss'));
    },

});