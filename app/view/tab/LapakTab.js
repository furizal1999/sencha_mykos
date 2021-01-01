/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('myKos.view.tab.LapakTab', {
    extend: 'Ext.tab.Panel',
    xtype: 'lapaktab',
    id: 'lapaktab',

    requires: [
        'Ext.MessageBox',

        'myKos.view.main.MainController',
        'myKos.view.main.MainModel',
        'myKos.store.Kontrakan_saya',
        'myKos.view.dataview.Dataview_kos_saya', 
        'myKos.view.dataview.Dataview_kontrakan_saya',
        'Ext.dataview.plugin.ItemTip'

        // 'myKos.view.main.List'
    ],

    controller: 'main',
    viewModel: {
        stores: {
            kontrakan_saya: {
                type: 'kontrakan_saya'
            }
        }
    },

    tabBarPosition: 'top',

    items: [
        {
            title: 'Kos Saya',
            layout: 'fit',
            items: [
                {
                    xtype: 'dataview_kos_saya'
                },
                {
                    xtype: 'toolbar',
                    docked: 'bottom',
                    scrollable: {
                        y: false
                    },
                    items:[
                        {
                            xtype:'spacer'
                        },
                        {
                            xtype: 'button',
                            iconCls: 'x-fa fa-plus',
                            handler: 'addKos',
                        }
                    ]
                },
        ]
        },{
            title: 'Kontrakan Saya',
            layout: 'fit',                
            items: [{
                xtype: 'dataview_kontrakan_saya'
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                scrollable: {
                    y: false
                },
                items:[
                    {
                        xtype:'spacer'
                    },
                    {
                        xtype: 'button',
                        iconCls: 'x-fa fa-plus',
                        handler: 'addKos'
                    }
                ]
            }]
        },
        {
            title: 'Minta Konfirmasi',
            layout: 'fit',                
            items: [{
                // xtype: 'dataview_kontrakan_saya'
            }]
        }
    ]
});
