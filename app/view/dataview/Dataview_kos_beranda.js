Ext.define('myKos.view.dataview.Dataview_kos_beranda', {
    extend: 'Ext.Container',
    xtype: 'dataview_kos_beranda',
    
    requires: [
        'myKos.store.Kos_beranda',
        'Ext.dataview.plugin.ItemTip',
        'Ext.plugin.Responsive',
        // 'myKos.store.Order_kos',
    ],

    viewModel: {
        stores: {
            kos_beranda: {
                type: 'kos_beranda'
            }
        }
    },
    width: Ext.os.is.Phone ? undefined : '40%',
    height: Ext.os.is.Phone ? undefined : '80%',
    layout: 'fit',
    shadow: true,
    items: [{
        xtype: 'dataview',
        scrollable: 'y',
        id: 'dataview_kos_beranda',
        cls: 'dataview-basic',
        itemTpl: '<div class="pt-3 text-center">'+
                    '<div class="card" style ="width:300px">'+
                        '<img class="card-img-top" style="width: 100%;" src="resources/img/{foto}">'+
                        '<div class="card-body text-left">'+
                            '<h1 class="card-title"><b>{nama_kos}</b> <i>({jenis_kos})</i></h1>'+
                            '<p class="text-success card-text">'+
                            'Rp. {biaya_perbulan} Perbulan</p><i class="text-muted">{alamat_detail} {kelurahan}, {kecamatan}</i>'+
                            '<div class="text-right"><button class="btn btn-primary" type="button" onclick="onOrderKos({id_kos})">Order</button> <button class="btn btn-info" type="button" onclick="onDetailKos({id_kos},{jenis},{id_user},{id_pemesan},{nama_kos},{sistem_bayar},{biaya_perbulan},{jenis_kos},{ket_fasilitas},{kecamatan},{kelurahan},{alamat_detail},{ket_lain},{foto})">Detail</button> </div>'+
                        '</div>'+
                    '</div>'+
                 '</div>',
        bind: {
            store: '{kos_beranda}'
        }
    }]
});