Ext.define('myKos.store.Kontrakan_saya', {
    extend: 'Ext.data.Store',
    storeId: 'kontrakan_saya',
    alias: 'store.kontrakan_saya',

    autoLoad: true,
    autoSync: true,

    fields: [
         'id_kos','jenis', 'id_user','id_pemesan', 'nama_kos','sistem_bayar', 'biaya_perbulan', 'jenis_kos', 'ket_fasilitas', 'kecamatan', 'kelurahan','alamat_detail', 'ket_lain', 'foto', 'status_postingan'
    ],

    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/myKos/kos_saya.php"
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
                jenis: 'Kontrakan',
                status_postingan: 1
            })
        }
    }
});
