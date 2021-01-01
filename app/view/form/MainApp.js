Ext.define('myKos.view.form.MainApp', 
{
    extend: 'Ext.Container',
    xtype: 'mainapp',
    layout: 'fit',
    requires: [
        'myKos.view.main.Main',
        'myKos.view.form.ChangePassword',
        'myKos.view.form.FormDaftar',
        'myKos.view.form.ChangeProfile',
            ],

    controller: 'main',
    viewModel: 'main',
    items: [
        {
            // style: 'display: flex',
            scrollable: true,
            id: 'main-appmain',
            xtype: 'app-main'
        },
        {
            style: 'display: none',
            id: 'main-form-daftar',
            xtype: 'form-daftar'
        },
        {
            style: 'display: none',
            id: 'main-change-password',
            xtype: 'change-password'
        },
        {
            style: 'display: none',
            id: 'main-addkosform',
            xtype: 'addkosform'
        },
        {
            style: 'display: none',
            id: 'main-about-us',
            xtype: 'about-us'
        },
        {
            style: 'display: none',
            id: 'main-change-profile',
            xtype: 'change-profile'
        },
        // {
        //     style: 'display: block',
        //     xtype: 'menus'
        // },
        // {
        //     style: 'display: block',
        //     id: 'dataview_makanan',
        //     xtype: 'form2'
        // },
        // {
        //     style: 'display: block',
        //     id: 'dataview_favorit',
        //     xtype: 'form1'
        // },
        // {
        //     style: 'display: none',
        //     id: 'tes',
        //     xtype: 'home'
        // },
        // {
        //     style: 'display: none',
        //     id: 'buatresep',
        //     xtype: 'label'
        // },
        // {
        //     style: 'display: none',
        //     id: 'formresep',
        //     xtype: 'placeholderlabel'
        // },
        // {
        //     style: 'display: none',
        //     id: 'useratur',
        //     xtype: 'useratur'
        // }
    ]
});

    