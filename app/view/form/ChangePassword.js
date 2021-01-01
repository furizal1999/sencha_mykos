Ext.define('myKos.view.form.ChangePassword', {
    extend: 'Ext.form.Panel',
    xtype: 'change-password',
    id: 'change-password',

    requires: [
        // 'myKos.store.New_account',
        'myKos.view.main.MainController',
    ],
    controller: 'main',
    store: '{form_daftar}',
    shadow: true,
    cls: 'demo-solid-background',
    // id: 'basicform',
    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            scrollable: {
                y: false
            },
            items: [
                
                {
                    iconCls: 'x-fa fa-arrow-left',
                    handler: 'onBack'
                    
                },
                {
                    text:'GANTI PASSWORD'
                }
            ]
        },
        {
            xtype: 'fieldset',
            id: 'fieldset-ChangePassword',
            defaults: {
                labelWidth: '35%'
            },
            items: [
                {
                    xtype: 'passwordfield',
                    revealable: true,
                    id: 'pl',
                    name : 'passwordlama',
                    label: 'Password Lama',
                    clearIcon: true
                },
                {
                    xtype: 'passwordfield',
                    revealable: true,
                    id: 'pb',
                    name : 'passwordbaru',
                    label: 'Password Baru',
                    clearIcon: true
                },
                {
                    xtype: 'passwordfield',
                    revealable: true,
                    id: 'kpb',
                    name : 'passwordkonfirmasi',
                    label: 'Konfirmasi Password Baru',
                    clearIcon: true
                },
            ]
        },
        {
            xtype: 'container',
            defaults: {
                xtype: 'button',
                style: 'margin: 1em',
                flex: 1
            },
            layout: {
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'spacer'
                },
                {
                    text: 'Ganti',
                    ui: 'action',
                    handler: function(){
                        pl = Ext.getCmp('pl').getValue();
                        pb = Ext.getCmp('pb').getValue();
                        kpb = Ext.getCmp('kpb').getValue();
                        
                        if(pl && pb && kpb){
                            if(pb.length > 6){
                                if(pl == localStorage.getItem('password')){
                                    if(pb == kpb){
                                        // store = Ext.getStore('kos_beranda');
                                        // record = Ext.getCmp('dataview_kos_beranda').getSelection();
                                        // index = store.indexOf(record);
                                        // record = store.getAt(index);
                                        // store.beginUpdate();
                                        // record.set('id_pemesan', localStorage.getItem('id_user'));
                                        // record.set('status_postingan', "2");
                                        // store.endUpdate();
                                        Ext.Msg.alert('Sukses','Password berhasil diubah..');
                                    }
                                    else{
                                        Ext.Msg.alert('Perhatian','Maaf, Konfirmasi password anda tidak sesuai..');
                                    }
                                }
                                else{
                                    Ext.Msg.alert('Perhatian','Maaf, Password lama anda tidak sesuai..');
                                }
                            }
                            else{
                                Ext.Msg.alert('Perhatian','Password minimal 7 karakter..');
                            }
                        }
                        else{
                            Ext.Msg.alert('Perhatian','Pastikan semua inputan terisi..');
                        }
                    }
                }
            ]
        }
    ]
});