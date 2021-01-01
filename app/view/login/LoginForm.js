Ext.define('myKos.view.login.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype : 'loginform',
    id: 'loginform',
    controller: 'main',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Password',
        'Ext.field.Hidden',
        'myKos.view.form.FormDaftar',
        'myKos.store.Login',
    ],

    viewModel: {
        stores: {
            kontrakan_beranda: {
                type: 'login'
            }
        }
    },

    shadow: true,
    cls: 'demo-solid-background',
    items: [
        {
            xtype: 'fieldset',
            id: 'fieldsetlogin',
            defaults: {
                labelWidth: '35%'
            },
            items: [
                {
                    layout: 'hbox',
                    margin: 10,
                    items: [
                        {
                            xtype: 'spacer'
                        },
                        {
                            html:'<br><br><div class="judul">MY KOS</div>',
                        },
                        {
                            xtype: 'spacer'
                        },
        
                    ]
                },
                {
                    layout: 'hbox',
                    margin: 10,
                    items: [
                        {
                            xtype: 'spacer'
                        },
                        {
                            html:'<div><img class="login-gambar" src="resources/img/rahmadi.jpg"></div>',
                        },
                        {
                            xtype: 'spacer'
                        },
        
                    ]
                },
                {
                    xtype: 'emailfield',
                    name: 'email',
                    id: 'email_login',
                    label: 'Email',
                    placeHolder: 'Masukkan email anda',
                    clearIcon: true
                },
                {
                    xtype: 'passwordfield',
                    revealable: true,
                    name : 'password',
                    id: 'password_login',
                    label: 'Password',
                    placeHolder: 'Masukkan password anda',
                    clearIcon: true
                }
            ]
        },
        {
            xtype: 'container',
            defaults: {
                xtype: 'button',
                style: 'margin-top: 1em',
                flex: 1
            },
            layout: {
                type: 'hbox'
            },
            items: [
                {
                    text: 'LOGIN',
                    ui: 'action',
                    hasDisabled: false,
                    handler: 'onLogin'
                }
            ]
        },
        {
            xtype: 'container',
            defaults: {
                xtype: 'button',
                style: 'margin-top: 1em',
                flex: 1
            },
            layout: {
                type: 'hbox'
            },
            items: [
                {
                    flex: 10,
                    text: 'DAFTAR AKUN',
                    ui: 'action',
                    scope: this,
                    hasDisabled: false,
                    handler: function(){
                        if (!this.overlay) {
                            this.overlay = Ext.Viewport.add({
                                xtype:'form-daftar',
                                id: 'form-daftar',
                                floated: true,
                                width: '100%',
                                height: '100%',
                                scrollable: true
                            });
                        }
                        this.overlay.show();
                        document.getElementById("main-appmain").style.display = 'none';
                        document.getElementById("main-form-daftar").style.display = 'none';
                        document.getElementById("main-change-password").style.display = 'none';
                        document.getElementById("main-addkosform").style.display = 'initial';
                        document.getElementById("main-about-us").style.display = 'none';
                        document.getElementById("main-change-profile").style.display = 'none';
                        document.getElementById("form-daftar").style.display = 'initial';
                    }
                },
                {
                    flex: 1,
                    xtype:'spacer'
                },
                {
                    flex: 10,
                    text: 'LUPA SANDI',
                    ui: 'action',
                    scope: this,
                    hasDisabled: false,
                }
            ]
            
        }
    ]
});