Ext.define('myKos.store.DaftarAkun', {
    extend: 'Ext.data.Store',
    storeId: 'daftar-akun',
    alias: 'store.daftar-akun',

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
            create: "http://localhost/myKos/daftar_akun.php"
        },
        reader: {
            type: 'json',
            rootProperty: 'items',
            messageProperty: 'error'
        }
    },
    listeners:{
        beforeload: function(store, operation, eOpts){
            this.getProxy().setExtraParams({
                user_id: -1
            })
        }
    }
});
