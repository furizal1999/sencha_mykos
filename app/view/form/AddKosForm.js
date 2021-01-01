Ext.define('myKos.view.form.AddKosForm', {
    extend: 'Ext.form.Panel',
    xtype: 'addkosform',
    id: 'addkosform',

    requires: [
        'myKos.view.main.MainController',
        
    ],
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
    controller: 'main',
    store: '{form_daftar}',
    shadow: true,
    cls: 'demo-solid-background',
    // id: 'basicform-addkos',
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
                    text:'TAMBAH LAPAK KOS'
                }
            ]
        },
        {
            instructions: 'Pastikan data yang anda inputkan falid.',
            items: [
                {
                    xtype: 'filefield',
                    label: 'Tambahkan Foto',
                    id: 'picturekos',
                    name: 'pic'
                },
                {
                    xtype: 'textfield',
                    name: 'namakos',
                    id: 'namakos',
                    label: 'Nama Kos',
                    placeHolder: 'Masukkan nama kos..',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true
                },
                // {
                //     xtype: 'textfield',
                //     name: 'harga',
                //     id: 'harga',
                //     label: 'Biaya perbulan',
                //     type: 'number',
                //     placeHolder: 'Masukkan harga kos..',
                //     autoCapitalize: true,
                //     required: true,
                //     clearIcon: true
                // },
                // {
                //     xtype: 'selectfield',
                //     name: 'jk',
                //     id: 'jk',
                //     label: 'Jenis Kos',
                //     options: [
                //         {
                //             text: 'Laki-Laki',
                //             value: 'laki-laki'
                //         },
                //         {
                //             text: 'Perempuan',
                //             value: 'perempuan'
                //         }
                //     ]
                // },
                // {
                //     xtype: 'textareafield',
                //     name: 'ketfasilitas',
                //     id: 'ketfasilitas',
                //     label: 'Keterangan Fasilitas'
                // },
                // {
                //     xtype: 'selectfield',
                //     id: 'kecamatan',
                //     label: 'Kecamatan',
                //     name:'kecamatan',
                //     reference: 'countryField',
                //     valueField: 'name',
                //     displayField: 'name',
                //     queryMode: 'local',
                //     typeAhead: true,
                //     bind: {
                //         store: '{countries}'
                //     },
                 
                // },
                //  {
                //     xtype: 'selectfield',
                //     id: 'kelurahan',
                //     label: 'Kelurahan',
                //     placeHolder: 'pilih kelurahan..',
                //     valueField: 'name',
                //     displayField: 'name',
                //     bind: {
                //         store: '{states}'
                //     },
                 
                // },
                // {
                //     xtype: 'textareafield',
                //     name: 'alamatdetail',
                //     id: 'alamatdetail',
                //     label: 'Alamat Detail'
                // },
                // {
                //     xtype: 'textareafield',
                //     name: 'keteranganlain',
                //     id: 'keteranganlain',
                //     label: 'Keterangan Lain'
                // }           
                
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
                    text: 'Bersih',
                    ui: 'action',
                    handler: 'onBersihKos'
                },
                {
                    xtype: 'spacer'
                },
                {
                    text: 'Simpan',
                    ui: 'action',
                    handler: 'onTambahKos'
                }
            ]
        }
    ]
});