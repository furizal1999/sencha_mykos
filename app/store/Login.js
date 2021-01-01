Ext.define('myKos.store.Login', {
    extend: 'Ext.data.Store',
    storeId: 'login',
    alias: 'store.login',

    autoLoad: true,
    autoSync: true,

    fields: [
        'id_user', 'nama_user', 'nik', 'tempat_lahir','tgl_lahir', 'jk', 'no_hp', 'email', 'password', 'verifikasi','status'
    ],

    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/myKos/login.php"
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
                email : localStorage.getItem("email"),
                password : localStorage.getItem("password"),

            })
        }
    }
});
