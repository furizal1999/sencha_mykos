Ext.define('myKos.view.form.DetailKosBeranda', {
    extend: 'Ext.form.Panel',
    xtype: 'detailkosberanda',
    id: 'detailkosberanda',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.Password',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Radio'
    ],
    
    controller: 'main',

    

    xtype: 'panel',
    floated: true,
    showAnimation: {
        type: 'popIn',
        duration: 250,
        easing: 'ease-out'
    },
    hideAnimation: {
        type: 'popOut',
        duration: 250,
        easing: 'ease-out'
    },
    // centered: true,
    width: "100%",
    height: "100%",                
    scrollable: true,

    shadow: true,
    cls: 'demo-solid-background',
    // id: 'basicform',
    id:'change-profile',
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
                    handler: function(){
                        var back = Ext.getCmp('change-profile');
                        back.setHidden('change-profile');
                    }
                    
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
                    html:'<img class="img-fluid" src="resources/img/kos1.jpg">',
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
                // {
                //     xtype: 'textfield',
                //     name: 'namakos',
                //     label: 'Nama Kos',
                //     autoCapitalize: true,
                //     clearIcon: true,
                // },
                // {
                //     xtype: 'textfield',
                //     name: 'nik',
                //     label: 'NIK',
                //     autoCapitalize: true,
                //     clearIcon: true,
                // },
                // {
                //     xtype: 'textfield',
                //     name: 'ttl',
                //     label: 'Tempat Tanggal Lahir',
                //     autoCapitalize: true,
                //     clearIcon: true,
                // },
                // {
                //     xtype: 'textfield',
                //     name: 'jk',
                //     label: 'Jenis Kelamin',
                //     autoCapitalize: true,
                //     clearIcon: true,
                // },
                // {
                //     xtype: 'textfield',
                //     name: 'no_hp',
                //     label: 'Nomor Telp',
                //     autoCapitalize: true,
                //     clearIcon: true,
                // },                
                // {
                //     xtype: 'textfield',
                //     name: 'email',
                //     label: 'Email',
                //     autoCapitalize: true,
                //     clearIcon: true,
                // },
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