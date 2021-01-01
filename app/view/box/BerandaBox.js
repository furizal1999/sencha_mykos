/**
 * Demonstrates how to use an Ext.Carousel in vertical and horizontal configurations
 */
Ext.define('myKos.view.box.BerandaBox', {
    extend: 'Ext.Container',
    xtype: 'beranda-box',
    id: 'beranda-box',

    requires: [
        // 'Ext.carousel.Carousel'
    ],

    // title:'ko',

    // cls: 'cards',
    // shadow: true,

    controller: 'main',
    viewModel: 'main',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaults: {
        cls: 'demo-solid-background',
        
    },
    items: [{
        flex: 1,
        title: 'Lapak',
        iconCls: 'x-fa fa-user',
        layout: 'fit',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'main-menu'
        }]
    },
    {
        flex: 4,
        title: 'Lapak',
            iconCls: 'x-fa fa-user',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'mainlist'
            }]
    }, 
    {
        flex: 4,
       html:'<style>background-color:#ff0000</style>ssss'
    }]
});