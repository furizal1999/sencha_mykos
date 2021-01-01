Ext.define('myKos.view.dataview.Dataview_kos_saya', {
    extend: 'Ext.Container',
    xtype: 'dataview_kos_saya',
    // id: 'ViewHome',
    requires: [
        'myKos.store.Kos_saya',
        'Ext.dataview.plugin.ItemTip',
        'Ext.plugin.Responsive'
    ],

    viewModel: {
        stores: {
            kos_saya: {
                type: 'kos_saya'
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
                            'Rp. {biaya_perbulan} Perbulan</p><i class="text-muted">{kelurahan},{kecamatan}</i>'+
                            '<div class="text-right"><button class="btn btn-primary">Rincian</button></div>'+
                        '</div>'+
                    '</div>'+
                 '</div>',
        bind: {
            store: '{kos_saya}'
        }
    }]
});