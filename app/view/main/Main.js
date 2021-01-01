Ext.define('myKos.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    id: 'app-main',

    requires: [
        'Ext.MessageBox',

        'myKos.view.main.MainController',
        'myKos.view.main.MainModel',
        // 'myKos.store.Personnel',
        'myKos.store.Countries',
        'myKos.store.States',
        'myKos.view.main.List',
        'myKos.view.tab.BerandaTab',
        'myKos.view.tab.LapakTab',
        'myKos.view.tab.PesananTab',
        // 'myKos.view.menu.MainMenu',
        'myKos.view.form.AkunSaya',
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.Password',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Radio',
        'myKos.view.form.FormDaftar',

    ],

    controller: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },
    
    tabBarPosition: 'bottom',
    
    items: [
        {
            xtype: 'toolbar',
            // id:'main-toolbar',
            docked: 'top',
            scrollable: {
                y: false
            },
            items: [
                
                {
                    iconCls: 'x-fa fa-bars',
                    ui:'navigation',
                    handler: 'onMenuClick',

                },
                {
                    text:'myKos'
                },
                {
                    xtype: 'spacer'
                },
                {
                    iconCls: 'x-fa fa-comments',
                    ui:'alert',
                    // id:'add-item',
                }
            ]
        },
        {
            title: 'Beranda',
            // id:'main-beranda',
            iconCls: 'x-fa fa-home',
            layout: 'vbox',
            items: [
                {
                    flex: 2,
                    id:'fieldset1',
                    xtype: 'chainedselect',
                    
                    handler : 'onBtnShow',
                    bind:{
                        hidden : '{show.checked}'
                    }

                },
                {
                    iconCls :'x-fa fa-angle-double-up',
                    ui: 'alert',
                    xtype: 'button',
                    scope: this,
                    hasHidden: false,
                    handler: function(btn){
                        var fieldset1 = Ext.getCmp('fieldset1');
                            // fieldset2 = Ext.getCmp('fieldset2');

                        if (btn.getHidden) {
                            // btn.setText('Tampilkan Form Wilayah');
                            btn.setIconCls('x-fa fa-angle-double-down');
                            fieldset1.setHidden('fieldset1');
                            // fieldset2.enable();
                            btn.getHidden = false;
                           
                        } else {
                            btn.setIconCls('x-fa fa-angle-double-up');
                            fieldset1.show();
                            // fieldset2.disable();
                            btn.getHidden = true;
                            
                        }
                    }
                },
                {
                    flex: 3,
                    xtype: 'berandatab',
                },
            ]
        }, {
            title: 'Lapak Saya',
            // id:'main-lapaksaya',
            iconCls: 'x-fa fa-tasks',
            layout: 'vbox',
            items: [
                {
                    flex: 5,
                    xtype: 'lapaktab',
                }]
        }, {
            title: 'Pesanan',
            // id: 'main-pesanan',
            iconCls: 'x-fa fa-shopping-cart',
            layout: 'vbox',
            items: [
                {
                    flex: 5,
                    xtype: 'pesanantab',
                }]
        }, {
            title: 'Akun Saya',
            // id: 'main-akunsaya',
            iconCls: 'x-fa fa-user',
            layout: 'fit',
            items: [
                {
                    flex: 5,
                    xtype: 'akunsaya',
                }
            ]
        },
        // {
        //     id: 'main-formdaftar',
        //     title: 'TEST',
        //     iconCls: 'x-fa fa-user',
        //     layout: 'fit',
        //     items: [
        //         {
        //             flex: 5,
        //             xtype: 'form-daftar',
        //         }
        //     ]
        // }
    ]
});
