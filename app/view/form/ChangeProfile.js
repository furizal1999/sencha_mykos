Ext.define('myKos.view.form.ChangeProfile', {
    extend: 'Ext.form.Panel',
    xtype: 'change-profile',
    id: 'change-profile',

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
                    text:'EDIT PROFIL'
                }
            ]
        },
        {
            layout: 'hbox',
            margin: 10,
            items: [
                {
                    xtype: 'spacer'
                },
                {
                    // text: 'ss',
                    html:'<div><img class="profil" src="resources/img/dini.jpg"></div>',
                },
                {
                    xtype: 'spacer'
                },

            ]
        },
        {
            xtype: 'fieldset',
            id: 'fieldset-ChangeProfile',
            defaults: {
                labelWidth: '35%'
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'namauser',
                    id: 'edit_nama_user',
                    label: 'Nama user',
                    autoCapitalize: true,
                    clearIcon: true,
                },
                {
                    xtype: 'textfield',
                    name: 'nik',
                    id: 'edit_nik',
                    label: 'NIK',
                    autoCapitalize: true,
                    clearIcon: true,
                },
                {
                    xtype: 'textfield',
                    name: 'tempat_lahir',
                    id: 'edit_tempat_lahir',
                    label: 'Tempat Lahir',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'datepickerfield',
                    destroyPickerOnHide: true,
                    name: 'tgl_lahir',
                    id:'edit_tgl_lahir',
                    label: 'Tanggal Lahir',
                    picker: {
                        yearFrom: 1950
                    },
                    required: true,
                },
                {
                    xtype: 'textfield',
                    name: 'jk',
                    id:'edit_jk',
                    label: 'Jenis Kelamin',
                    autoCapitalize: true,
                    clearIcon: true,
                },
                {
                    xtype: 'textfield',
                    name: 'no_hp',
                    id:'edit_no_hp',
                    label: 'Nomor Telp',
                    autoCapitalize: true,
                    clearIcon: true,
                },                
                {
                    xtype: 'textfield',
                    name: 'email',
                    id:'edit_email',
                    label: 'Email',
                    autoCapitalize: true,
                    clearIcon: true,
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
                    text: 'SIMPAN',
                    ui: 'action',
                    handler: function(sender, record){
                        Ext.Msg.confirm('Konformasi','Apakah anda yakin menyimpan perubahan?','onConfirmChangeProfile', this);
                    }
                }
            ]
        }
    ]
});