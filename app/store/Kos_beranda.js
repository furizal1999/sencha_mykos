Ext.define('myKos.store.Kos_beranda', {
    extend: 'Ext.data.Store',
    storeId: 'kos_beranda',
    alias: 'store.kos_beranda',

    autoLoad: true,
    autoSync: true,

    fields: [
         'id_kos','jenis', 'id_user','id_pemesan', 'nama_kos','sistem_bayar', 'biaya_perbulan', 'jenis_kos', 'ket_fasilitas', 'kecamatan', 'kelurahan','alamat_detail', 'ket_lain', 'foto', 'status_postingan'
    ],

    proxy: {
        type: 'jsonp',
        api: {
            read: globalUtils.getPhppath()+'/kos_beranda.php',
            update: myKos.util.Globals.getPhppath() + '/order_kos.php'
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
