Ext.define('myKos.view.form.FormDaftar', {
    extend: 'Ext.form.Panel',
    xtype: 'form-daftar',
    id: 'form-daftar',

    requires: [
        'myKos.store.New_account',
        'myKos.view.main.MainController',
    ],
    controller: 'main',
    store: '{form_daftar}',
    shadow: true,
    cls: 'demo-solid-background',
    // id: 'basicform',
    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            scrollable: {
                y: false
            },
            items: [
                
                {
                    iconCls: 'x-fa fa-arrow-left',
                    handler: function () {
                        document.getElementById("form-daftar").style.display = 'none';
                        // viewLogin.destroy();
                    },
                },
                {
                    text:'DAFTAR AKUN'
                }
            ]
        },
        {
            xtype: 'fieldset',
            // id: 'fieldset-daftar',
            defaults: {
                labelWidth: '35%'
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'nama',
                    label: 'Nama',
                    id:'mynama',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'textfield',
                    name: 'nik',
                    label: 'NIK',
                    id: 'mynik',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'textfield',
                    name: 'tempat_lahir',
                    id: 'mytempat_lahir',
                    label: 'Tempat Lahir',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'datepickerfield',
                    destroyPickerOnHide: true,
                    name: 'tgl_lahir',
                    id:'mytgl_lahir',
                    label: 'Tanggal Lahir',
                    picker: {
                        yearFrom: 1950
                    },
                    required: true,
                },
                {
                    xtype: 'selectfield',
                    name: 'jk',
                    id: 'myjk',
                    label: 'Jenis Kelamin',
                    options: [
                        {
                            text: '--Pilih--',
                            value: ''
                        },
                        {
                            text: 'Laki-laki',
                            value: 'Laki-laki'
                        },
                        {
                            text: 'Perempuan',
                            value: 'Perempuan'
                        },
                    ],
                    required: true,
                },
                {
                    xtype: 'textfield',
                    name: 'no_hp',
                    id:'myno_hp',
                    label: 'Nomor Telepon',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'emailfield',
                    name: 'email',
                    id: 'myemail',
                    label: 'Email',
                    placeHolder: 'nama@gmail.com',
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'passwordfield',
                    revealable: true,
                    name : 'password',
                    id: 'mypassword',
                    label: 'Password',
                    required: true,
                    clearIcon: true
                },
                 {
                    xtype: 'passwordfield',
                    revealable: true,
                    name : 'konpassword',
                    id: 'mykonpassword',
                    label: 'Masukkan Kembali Password',
                    required: true,
                    clearIcon: true
                },
                
            ]
        },
        {
            xtype: 'container',
            defaults: {
                xtype: 'button',
                style: 'margin: 1em',
                flex: 1
            },
            layout: {
                type: 'hbox'
            },
            items: [
                {
                    text: 'Daftar',
                    ui: 'action',
                    // scope: this,
                    hasDisabled: false,
                    handler: function(){
                        
                        nama = Ext.getCmp('mynama').getValue();
                        nik = Ext.getCmp('mynik').getValue();
                        tempat_lahir = Ext.getCmp('mytempat_lahir').getValue();
                        tgl_lahir = Ext.getCmp('mytgl_lahir').getValue();
                        jk = Ext.getCmp('myjk').getValue();
                        no_hp = Ext.getCmp('myno_hp').getValue();
                        email = Ext.getCmp('myemail').getValue();
                        password = Ext.getCmp('mypassword').getValue();
                        konpassword = Ext.getCmp('mykonpassword').getValue();
                        // alert(tgl_lahir);
                        if (nama != "" && nik!="" && tempat_lahir!="" && tgl_lahir!=""
                        && jk!="" && no_hp!="" && email!="" && password!="" && konpassword!="") {
                            if(email.length>=11 && email.substr(-10)=="@gmail.com"){
                                if(password==konpassword){
                                    if(password.length>10){

                                        Email.send({
                                            Host : "smtp.gmail.com",
                                            Username : "mykosapp@gmail.com",
                                            Password : "0910909109",
                                            To : Ext.getCmp('myemail').getValue(),
                                            From : "myKos App",
                                            Subject : "Verifikasi Akun",
                                            Body : Math.ceil(Math.random()*1000000),
                                            UseDefaultCredentials : true,
                                        }).then(
                                        //   message => alert(message)
                                        );

                                        store = Ext.getStore('daftar-akun');
                                        store.beginUpdate();
                                        store.insert(0,{'nama_user':nama, 'nik': nik, 'tempat_lahir': tempat_lahir, 'tgl_lahir': tgl_lahir, 'jk': jk, 'no_hp': no_hp, 'email': email, 'password': password});
                                        store.endUpdate();
                                        
                                        Ext.Msg.prompt("Verifikasi Email", "Silahkan buka email anda dan masukkan kode verifikasinya di sini!", function (btn, text) {
                                            if (btn == 'ok') {
                                                if(text=="123"){
                                                    Ext.Msg.alert("Selamat","Selamat akun anda telah aktif");
                                                }else{
                                                    Ext.Msg.alert("Maaf","Kode yang anda masukkan salah. Silahkan ulangi dengan klik tombol Verifikasi Akun!");
                                                    handler: 'promptverifikasi';
                                                }
                                            }
                                         });

                                    }else{
                                        Ext.Msg.alert('Perhatian!', 'Maaf, password harus lebih dari 10 karakter!', Ext.emptyFn);
                                    }
                                }else{
                                    Ext.Msg.alert('Perhatian!', 'Maaf, konfirmasi password anda tidak sesuai!', Ext.emptyFn);
                                }
                            }else{
                                Ext.Msg.alert('Perhatian!', 'Maaf, email yang anda masukkan tidak memenuhi ketentuan. Gunakan gmail!', Ext.emptyFn);
                            }
                        }else{
                            Ext.Msg.alert('Perhatian!', 'Maaf, pastikan semua data terisi semua!', Ext.emptyFn);
                        }
              
                    }
                },
                {
                    text: 'Reset',
                    ui: 'action',
                    handler: function(){
                        Ext.getCmp('basicform').reset();
                    }
                }
            ]
        },
        {
            xtype: 'container',
            defaults: {
                xtype: 'button',
                flex: 1
            },
            layout: {
                type: 'hbox'
            },
            items: [
                {
                    text: 'Verifikasi Akun',
                    ui: 'action',
                    handler: function(){
                        Ext.Msg.alert("Verifikasi Akun","Silahkan masukkan code yang telah kami kirimkan ke email anda!")
                    }
                }
            ]
        },
    ]
});