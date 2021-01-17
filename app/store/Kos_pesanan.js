Ext.define('myKos.store.Kos_pesanan', {
    extend: 'Ext.data.Store',
    storeId: 'kos_pesanan',
    alias: 'store.kos_pesanan',

    autoLoad: true,
    autoSync: true,

    fields: [
         'id_kos','jenis', 'id_user','id_pemesan', 'nama_kos','sistem_bayar', 'biaya_perbulan', 'jenis_kos', 'ket_fasilitas', 'kecamatan', 'kelurahan','alamat_detail', 'ket_lain', 'foto', 'status_postingan'
    ],

    proxy: {
        type: 'jsonp',
        api: {
            read: myKos.util.Globals.getPhppath() + '/kos_pesanan.php',
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
                jenis: 'Kos',
                id_pemesan: localStorage.getItem('id_user'),
                status_postingan: 1
            })
        }
    }
});
