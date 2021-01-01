Ext.define('myKos.store.New_account', {
    extend: 'Ext.data.Store',
    storeId: 'new_account',
    alias: 'store.new_account',

    autoLoad: true,
    autoSync: true,

    fields: [
        'id_user', 'nama_user', 'nik', 'tempat_lahir','tgl_lahir', 'jk', 'no_hp', 'email', 'password', 'verifikasi','status'
    ],

    proxy: {
        type: 'jsonp',
        api: {
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
                id_kos: -1,
                jenis: 'Kos',
                id_user: localStorage.getItem('id_user'),
                status_postingan: 1
            })
        }
    }
});
