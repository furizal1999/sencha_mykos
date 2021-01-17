/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('myKos.Application', {
    extend: 'Ext.app.Application',

    name: 'myKos',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {
        // var login = localStorage.getItem('login');
        // if (!login) {
        //     this.overlay = Ext.Viewport.add({
        //         xtype: 'loginform',
        //         floated: true,
        //         width: '100%',
        //         height: '100%',
        //         scrollable: true
        //     });
        // }
        // this.overlay.show();

         document.getElementById('recordCordova').addEventListener('click', globalUtils.startRecordCordova);
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }

    
});
