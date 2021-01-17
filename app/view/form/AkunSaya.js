Ext.define('myKos.view.form.AkunSaya', {
    extend: 'Ext.form.Panel',
    xtype: 'akunsaya',
    id: 'akunsaya',

    requires: [
        'myKos.view.main.MainController',
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
        
    ],

    controller:'main',

    viewModel: {
        stores: {
            countries: {
                type: 'countries'
            },
            states: {
                type: 'states',
                filters: [{
                    property: 'countryId',
                    value: '{countryField.selection.id}'
                }]
            }
        },
    },

    // title: 'Tambah Kos',
    shadow: true,
    cls: 'demo-solid-background',
    id: 'basicform',
    layout: 'vbox',
    items: [
        {
            layout: 'hbox',
            margin: 10,
            items: [
                {
                    xtype: 'spacer'
                },
                {
                    // text: 'ss',
                    html:'<h1 width="100px">PROFIL SAYA</h1><hr>',
                },
                {
                    xtype: 'spacer'
                },

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
                    
                    html:'<div><img class="profil" src="resources/img/Laki-laki.jpg"></div>',
                },
                {
                    xtype: 'spacer'
                },

            ]
        },
        {
            xtype: 'fieldset',
            id: 'fieldset2',
            defaults: {
                labelWidth: '35%'
            },
            items: [
                {
                    label: 'Unggah Audio',
                    html: 'Rekam Pengucapan'+
                    '<div id="controls">'+
                        '<button id="recordCordova">Mulai Merekam Pengucapan</button>'+
                    '</div><br>'+
                    '<div id="recordingInfo"></div><br>'
                },
                {
                    xtype: 'textfield',
                    name: 'namakos',
                    id: 'nama_user_profil',
                    value : localStorage.getItem("nama_user"),
                    label: 'Nama Lengkap',
                    readOnly: true,
                    autoCapitalize: true,
                    clearIcon: true,
                },
                {
                    xtype: 'textfield',
                    name: 'nik',
                    id: 'nik_profil',
                    value : localStorage.getItem("nik"),
                    label: 'NIK',
                    readOnly: true,
                    autoCapitalize: true,
                    clearIcon: true,
                },
                {
                    xtype: 'textfield',
                    name: 'tempat_lahir',
                    id: 'tempat_lahir_profil',
                    value : localStorage.getItem("tempat_lahir"),
                    label: 'Tempat Lahir',
                    readOnly: true,
                    autoCapitalize: true,
                    clearIcon: true,
                },
                {
                    xtype: 'textfield',
                    name: 'tgl_lahir',
                    id: 'tgl_lahir_profil',
                    value : localStorage.getItem("tgl_lahir"),
                    label: 'Tanggal Lahir',
                    readOnly: true,
                    autoCapitalize: true,
                    clearIcon: true,
                },
                {
                    xtype: 'textfield',
                    name: 'jk',
                    id: 'jk_profil',
                    value : localStorage.getItem("jk"),
                    label: 'Jenis Kelamin',
                    readOnly: true,
                    autoCapitalize: true,
                    clearIcon: true,
                },
                {
                    xtype: 'textfield',
                    name: 'no_hp',
                    id: 'no_hp_profil',
                    value : localStorage.getItem("no_hp"),
                    label: 'Nomor Telp',
                    readOnly: true,
                    autoCapitalize: true,
                    clearIcon: true,
                },                
                {
                    xtype: 'textfield',
                    name: 'email',
                    id: 'email_profil',
                    value : localStorage.getItem("email"),
                    label: 'Email',
                    readOnly: true,
                    autoCapitalize: true,
                    clearIcon: true,
                },
            ]
        },
        {
            layout: 'hbox',
            margin: 10,
            items: [
                {
                    xtype: 'button',
                    ui: 'action',
                    text:'GANTI SANDI',
                    handler: 'onChangePassword'
                },
                {
                    xtype: 'spacer'
                },
                {
                    xtype: 'button',
                    ui: 'action',
                    text:'EDIT PROFIL',
                    handler :'onChangeProfile'
                }

            ]
        },
        {
            xtype: 'button',
            ui: 'action',
            text:'HAPUS AKUN',
            handler: function() {
                Ext.Msg.prompt("HAPUS AKUN", "Masukkan kata sandi anda!", Ext.emptyFn);
            }
        },
        
    ]
});