Ext.define('myKos.store.Kos_saya', {
    extend: 'Ext.data.Store',
    storeId: 'kos_saya',
    alias: 'store.kos_saya',

    autoLoad: true,
    autoSync: true,

    fields: [
         'id_kos','jenis', 'id_user','id_pemesan', 'nama_kos','sistem_bayar', 'biaya_perbulan', 'jenis_kos', 'ket_fasilitas', 'kecamatan', 'kelurahan','alamat_detail', 'ket_lain', 'foto', 'status_postingan'
    ],

    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/myKos/kos_saya.php",
            update: "http://localhost/myKos/order_kos.php",
            // destroy: "http://localhost/MyApp_php/hapuspersonnel.php",
            create: "http://localhost/myKos/insert_kos.php"
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
                id_user: localStorage.getItem('id_user'),
                jenis: 'Kos',
                status_postingan: 1
            })
        }
    }
});
