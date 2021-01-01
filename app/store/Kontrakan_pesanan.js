Ext.define('myKos.store.Kontrakan_pesanan', {
    extend: 'Ext.data.Store',
    storeId: 'kontrakan_pesanan',
    alias: 'store.kontrakan_pesanan',

    autoLoad: true,
    autoSync: true,

    fields: [
         'id_kos','jenis', 'id_user','id_pemesan', 'nama_kos','sistem_bayar', 'biaya_perbulan', 'jenis_kos', 'ket_fasilitas', 'kecamatan', 'kelurahan','alamat_detail', 'ket_lain', 'foto', 'status_postingan'
    ],

    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/myKos/kos_pesanan.php",
            // create: "http://localhost/myKos/daftar_akun.php"

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
                jenis: 'Kontrakan',
                id_pemesan: localStorage.getItem('id_user'),
                status_postingan: 1
            })
        }
    }
});
