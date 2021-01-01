/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('myKos.view.tab.BerandaTab', {
    extend: 'Ext.tab.Panel',
    xtype: 'berandatab',
    id: 'berandatab',

    requires: [
        'Ext.MessageBox',

        'myKos.view.main.MainController',
        'myKos.view.main.MainModel',
        'myKos.view.dataview.Dataview_kos_beranda',
        'myKos.view.dataview.Dataview_kontrakan_beranda',
        'Ext.dataview.plugin.ItemTip'
    ],

    tabBarPosition: 'top',

    items: [
        {
            title: 'Kos',
            layout: 'fit',
            items: [{
               xtype: 'dataview_kos_beranda'
            }]
        },{
            title: 'Kontrakan',
            layout: 'fit',
            items: [{
                xtype: 'dataview_kontrakan_beranda'
            }]
        }
    ]
});
