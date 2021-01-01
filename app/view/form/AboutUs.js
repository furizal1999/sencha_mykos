Ext.define('myKos.view.form.AboutUs', {
    extend: 'Ext.form.Panel',
    xtype: 'about-us',
    id: 'about-us',
    
    requires: [
        'myKos.store.New_account',
        'myKos.view.main.MainController',
    ],
    controller: 'main',
    // store: '{form_daftar}',
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
                    text:'TENTANG KAMI'
                }
            ]
        },
        {
           html:'<p>Aplikasi ini dibuat oleh kelompok 2 matakuliah Dasar Pemrograman Mobile yang di ampu oleh bapak Dr. Arbi Haza Nasution, B.IT (Hons), M.IT (Hons)</p>'+
           '<br><h2>Anggota Kelompok</h2><ol><li>1. Furizal (183510228)=>(Ketua Kelompok)</li><li>2. Zainul Iraqi=>(Anggota)</li><li>3. Anisa=>(Anggota)</li><li>4. Bernat Alamsyah=>(Anggota)</li></ol><br>'
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
                    text: 'Tutup',
                    ui: 'action',
                    handler: 'onBack'
                }
            ]
        }
    ]
});