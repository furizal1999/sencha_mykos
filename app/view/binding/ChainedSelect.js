Ext.define('myKos.view.binding.ChainedSelect', {
    extend: 'Ext.form.Panel',
    xtype: 'chainedselect',

    requires: [
        'Ext.dataview.plugin.ItemTip',
        'Ext.plugin.Responsive',
        'myKos.store.Kontrakan_beranda',
        'myKos.store.Kos_beranda',
        'Ext.field.Search'
    ],
    referenceHolder: true,

    shadow: true,
    cls: 'demo-solid-background',
    viewModel: {
        stores: {
            countries: {
                type: 'countries'
            },
            states: {
                type: 'states',
                filters: [{
                    property: 'countryId',
                    value: '{countryField.selection.id}'
                }]
            }
        },
    },
        

    items: {
        xtype: 'fieldset',
        items: [{
            xtype: 'selectfield',
            label: 'Kecamatan',
            name:'kecamatan',
            reference: 'countryField',
            valueField: 'name',
            displayField: 'name',
            queryMode: 'local',
            typeAhead: true,
            bind: {
                store: '{countries}'
            },
            listeners:{
                change: function(){
                    var kecamatan = this.getValue();
                    var mystore = Ext.getStore('kos_beranda');
                    mystore.filter('kecamatan',kecamatan);
                    var mystore2 = Ext.getStore('kontrakan_beranda');
                    mystore2.filter('kecamatan',kecamatan);
                }
            }
           
        },
         {
            xtype: 'selectfield',
            label: 'Kelurahan',
            placeHolder: 'pilih kelurahan..',
            valueField: 'name',
            displayField: 'name',
            bind: {
                store: '{states}'
            },
            listeners:{
                change: function(){
                    var kelurahan = this.getValue();
                    var mystore = Ext.getStore('kos_beranda');
                    mystore.filter('kelurahan',kelurahan);
                    var mystore2 = Ext.getStore('kontrakan_beranda');
                    mystore2.filter('kelurahan',kelurahan);
                }
            }
        }]
    }
});