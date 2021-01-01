Ext.define('myKos.store.Change_password', {
    extend: 'Ext.data.Store',
    storeId: 'change_password',
    alias: 'store.change_password',

    autoLoad: true,
    autoSync: true,

    fields: [
        'id_user', 'nama_user', 'nik', 'tempat_lahir','tgl_lahir', 'jk', 'no_hp', 'email', 'password', 'verifikasi','status'
    ],

    proxy: {
        type: 'jsonp',
        api: {
            // read: "http://localhost/myKos/kos_saya.php",
            // update: "http://localhost/myKos/kos_saya.php",
            // destroy: "http://localhost/myKos/kos_saya.php",
            update: "http://localhost/myKos/change_password.php"
        },
        reader: {
            type: 'json',
            rootProperty: 'items',
            messageProperty: 'error'
        }
    },
    // listeners:{
    //     beforeload: function(store, operation, eOpts){
    //         this.getProxy().setExtraParams({
    //             // user_id: -1,
    //             id_kos : 1,
    //             id_pemesan: localStorage.getItem('id_user')

    //         })
    //     }
    // }
});
