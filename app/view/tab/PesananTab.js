/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('myKos.view.tab.PesananTab', {
    extend: 'Ext.tab.Panel',
    xtype: 'pesanantab',
    id: 'pesanantab',

    requires: [
        'Ext.MessageBox',

        'myKos.view.main.MainController',
        'myKos.view.main.MainModel',
        'myKos.view.dataview.Dataview_kos_pesanan',
        'myKos.view.dataview.Dataview_kontrakan_pesanan',
        'Ext.dataview.plugin.ItemTip'
    ],

    controller: 'main',

    tabBarPosition: 'top',

    items: [
        {
            title: 'Kos Pesanan',
            layout: 'fit',
            items: [
                {
                width: Ext.os.is.Phone ? undefined : '40%',
                height: Ext.os.is.Phone ? undefined : '80%',
                layout: 'fit',
                shadow: true,
                items: [{
                    xtype: 'dataview_kos_pesanan'
                }]
            },
        ]
        },{
            title: 'Kontrakan Pesanan',
            layout: 'fit',
            items: [{
                width: Ext.os.is.Phone ? undefined : '40%',
                height: Ext.os.is.Phone ? undefined : '80%',
                layout: 'fit',
                shadow: true,
                items: [{
                    xtype: 'dataview_kontrakan_pesanan'
                }]
            },]
        },
        {
            title: 'Terkonfirmasi',
            layout: 'fit',
            items: [{
                width: Ext.os.is.Phone ? undefined : '40%',
                height: Ext.os.is.Phone ? undefined : '80%',
                layout: 'fit',
                shadow: true,
                items: [{
                   
                }]
            },]
        }
    ]
});
