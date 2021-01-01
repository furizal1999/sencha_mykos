Ext.define('myKos.view.dataview.Dataview_kontrakan_beranda', {
    extend: 'Ext.Container',
    xtype: 'dataview_kontrakan_beranda',
    id: 'dataview_kontrakan_beranda',
    
    requires: [
        'myKos.store.Kontrakan_beranda',
        'Ext.dataview.plugin.ItemTip',
        'Ext.plugin.Responsive'
    ],

    viewModel: {
        stores: {
            kontrakan_beranda: {
                type: 'kontrakan_beranda'
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
        cls: 'dataview-basic',
        itemTpl: '<div class="pt-3 text-center">'+
                    '<div class="card" style ="width:300px">'+
                        '<img class="card-img-top" style="width: 100%;" src="resources/img/{foto}">'+
                        '<div class="card-body text-left">'+
                            '<h1 class="card-title"><b>{nama_kos}</b></h1>'+
                            '<p class="text-success card-text">'+
                            'Rp. {biaya_perbulan} Perbulan</p><i class="text-muted">{alamat_detail} {kelurahan}, {kecamatan}</i>'+
                            '<div class="text-right"><button class="btn btn-primary" type="button" onclick="onOrderKos({id_kos})">Order</button> <button class="btn btn-info" type="button" onclick="onDetailKos({id_kos})">Detail</button> </div>'+
                        '</div>'+
                    '</div>'+
                 '</div>',
        bind: {
            store: '{kontrakan_beranda}'
        }
    }]
});