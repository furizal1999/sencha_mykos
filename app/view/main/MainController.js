Ext.define('myKos.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onLogin: function (sender, record) {
        var viewLogin = this.getView();
        var email = viewLogin.getFields('email').getValue();
        var password = viewLogin.getFields('password').getValue();

        localStorage.setItem('email', email);
        localStorage.setItem('password', password);


        if (email && password) {
            let getdata = Ext.getStore('login').load();
            console.log(getdata);
            var email_konfirm = "";
            var password_konfirm = "";
            getdata.on("load", function () {
                id_user = getdata.getAt(0).get("id_user");
                nama_user = getdata.getAt(0).get("nama_user");
                nik = getdata.getAt(0).get("nik");
                tempat_lahir = getdata.getAt(0).get("tempat_lahir");
                tgl_lahir = getdata.getAt(0).get("tgl_lahir");
                jk = getdata.getAt(0).get("jk");
                no_hp = getdata.getAt(0).get("no_hp");
                email_konfirm = getdata.getAt(0).get("email");
                password_konfirm = getdata.getAt(0).get("password");

                // alert(email);
                // alert(password);
                // alert(email_konfirm);
                // alert(password_konfirm);

                if ((email == email_konfirm && password == password_konfirm)) {

                    // alert("selamat anda berhasil login");
                    localStorage.setItem('id_user', id_user);
                    localStorage.setItem('nama_user', nama_user);
                    localStorage.setItem('nik', nik);
                    localStorage.setItem('tempat_lahir', tempat_lahir);
                    localStorage.setItem('tgl_lahir', tgl_lahir);
                    localStorage.setItem('jk', jk);
                    localStorage.setItem('no_hp', no_hp);
                    localStorage.setItem('email', email);
                    localStorage.setItem('password', password);
                    localStorage.setItem('login', true);
                    viewLogin.destroy();
                    Ext.toast('Selamat datang ' + nama_user + '!');

                    Ext.getCmp('nama_user_profil').setValue(nama_user);
                    Ext.getCmp('nik_profil').setValue(nik);
                    Ext.getCmp('tempat_lahir_profil').setValue(tempat_lahir);
                    Ext.getCmp('tgl_lahir_profil').setValue(tgl_lahir);
                    Ext.getCmp('jk_profil').setValue(jk);
                    Ext.getCmp('no_hp_profil').setValue(no_hp);
                    Ext.getCmp('email_profil').setValue(email);

                    Ext.getStore('kos_beranda').load();
                    Ext.getStore('kontrakan_beranda').load();
                    Ext.getStore('kos_saya').load();
                    Ext.getStore('kontrakan_saya').load();
                }
                else {
                    // Ext.Msg.alert('Maaf', 'Email dan Password anda tidak sesuai!');
                }
            });
        }

        else {
            Ext.Msg.alert('Perhatian!', 'Password dan email tidak boleh kosong!');
        }
    },

    addKos: function () {
        document.getElementById("main-appmain").style.display = 'none';
        document.getElementById("main-form-daftar").style.display = 'none';
        document.getElementById("main-change-password").style.display = 'none';
        document.getElementById("main-addkosform").style.display = 'initial';
        document.getElementById("main-about-us").style.display = 'none';
        document.getElementById("main-change-profile").style.display = 'none';
    },

    onBack: function () {
        document.getElementById("main-appmain").style.display = 'initial';
        document.getElementById("main-form-daftar").style.display = 'none';
        document.getElementById("main-change-password").style.display = 'none';
        document.getElementById("main-addkosform").style.display = 'none';
        document.getElementById("main-about-us").style.display = 'none';
        document.getElementById("main-change-profile").style.display = 'none';
    },

    onAboutUs: function () {
        document.getElementById("main-appmain").style.display = 'none';
        document.getElementById("main-form-daftar").style.display = 'none';
        document.getElementById("main-change-password").style.display = 'none';
        document.getElementById("main-addkosform").style.display = 'none';
        document.getElementById("main-about-us").style.display = 'initial';
        document.getElementById("main-change-profile").style.display = 'none';
    },

    onChangePassword: function () {
        document.getElementById("main-appmain").style.display = 'none';
        document.getElementById("main-form-daftar").style.display = 'none';
        document.getElementById("main-change-password").style.display = 'initial';
        document.getElementById("main-addkosform").style.display = 'none';
        document.getElementById("main-about-us").style.display = 'none';
        document.getElementById("main-change-profile").style.display = 'none';
    },

    onChangeProfile: function () {
        document.getElementById("main-appmain").style.display = 'none';
        document.getElementById("main-form-daftar").style.display = 'none';
        document.getElementById("main-change-password").style.display = 'none';
        document.getElementById("main-addkosform").style.display = 'none';
        document.getElementById("main-about-us").style.display = 'none';
        document.getElementById("main-change-profile").style.display = 'initial';

        Ext.getCmp('edit_nama_user').setValue(localStorage.getItem('nama_user'));
        Ext.getCmp('edit_nik').setValue(localStorage.getItem('nik'));
        Ext.getCmp('edit_tempat_lahir').setValue(localStorage.getItem('tempat_lahir'));
        // concat(substr(localStorage.getItem('tgl_lahir'),8,9),"/",substr(localStorage.getItem('tgl_lahir'),5,6),"/",substr(localStorage.getItem('tgl_lahir'),0,3));
        Ext.getCmp('edit_tgl_lahir').setValue();
        // Ext.getCmp('edit_tgl_lahir').setValue('01/24/2019');
        Ext.getCmp('edit_jk').setValue(localStorage.getItem('jk'));
        Ext.getCmp('edit_no_hp').setValue(localStorage.getItem('no_hp'));
        Ext.getCmp('edit_email').setValue(localStorage.getItem('email'));
    },

    onExitMenu: function () {
        Ext.Viewport.hideMenu(side);
    },

    onMenuClick: function () {
        Ext.Viewport.setMenu(this.getMenuCfg('left'), {
            side: 'left'
        });
        Ext.Viewport.toggleMenu('left');
    },

    doDestroy: function () {
        Ext.Viewport.removeMenu('left');
        this.callParent();
    },

    getMenuCfg: function (side) {

        return {
            items: [{
                text: 'Tambah Lapak',
                iconCls: 'x-fa fa-pencil',
                scope: this,
                handler: function () {
                    Ext.Viewport.hideMenu(side);
                    document.getElementById("main-appmain").style.display = 'none';
                    document.getElementById("main-form-daftar").style.display = 'none';
                    document.getElementById("main-change-password").style.display = 'none';
                    document.getElementById("main-addkosform").style.display = 'initial';
                    document.getElementById("main-about-us").style.display = 'none';
                    document.getElementById("main-change-profile").style.display = 'none';
                }
            }, {
                xtype: 'button',
                text: 'Ganti Password',
                iconCls: 'x-fa fa-key',
                scope: this,
                handler: function () {
                    Ext.Viewport.hideMenu(side);
                    document.getElementById("main-appmain").style.display = 'none';
                    document.getElementById("main-form-daftar").style.display = 'none';
                    document.getElementById("main-change-password").style.display = 'initial';
                    document.getElementById("main-addkosform").style.display = 'none';
                    document.getElementById("main-about-us").style.display = 'none';
                    document.getElementById("main-change-profile").style.display = 'none';
                }
            }, {
                xtype: 'button',
                text: 'Tentang Kami',
                iconCls: 'x-fa fa-info',
                scope: this,
                handler: function () {
                    Ext.Viewport.hideMenu(side);
                    document.getElementById("main-appmain").style.display = 'none';
                    document.getElementById("main-form-daftar").style.display = 'none';
                    document.getElementById("main-change-password").style.display = 'none';
                    document.getElementById("main-addkosform").style.display = 'none';
                    document.getElementById("main-about-us").style.display = 'initial';
                    document.getElementById("main-change-profile").style.display = 'none';
                }
            },
            {
                xtype: 'button',
                text: 'Logout',
                iconCls: 'x-fa fa-sign-out',
                scope: this,
                handler: function () {
                    Ext.Msg.confirm('Logout', 'Apakah anda yakin logout?', 'onConfirmLogout', this);
                },
            }]
        };
    },

    onConfirmLogout: function (choice) {
        if (choice === 'yes') {
            localStorage.removeItem('login');
            localStorage.removeItem('id_user');
            localStorage.removeItem('nama_user');
            localStorage.removeItem('nik');
            localStorage.removeItem('tempat_lahir');
            localStorage.removeItem('tgl_lahir');
            localStorage.removeItem('jk');
            localStorage.removeItem('no_hp');
            localStorage.removeItem('password');
            localStorage.removeItem('email');
            this.getView().destroy();
            // Ext.getCmp('loginform').destroy();
            this.overlay = Ext.Viewport.add({
                xtype: 'loginform',
                floated: true,
                width: '100%',
                height: '100%',
                scrollable: true
            });
            this.overlay.show();
        }
    },

    onConfirmChangeProfile: function (choice) {
        if (choice === 'yes') {
            Ext.toast('Data berhasil di edit');
            var back = Ext.getCmp('change-profile');
            back.setHidden('change-profile');
        }
        else {
            Ext.toast('Perubahan tidak disimpan');
        }
    },

    onBersihKos: function () {
        fullPath = Ext.getCmp('picturekos').setValue('');
        filename = ""
        jenis = 'Kos';
        id_pemesan = 0;
        id_user = 1;
        nama_kos = Ext.getCmp('namakos').setValue('');
        biaya_perbulan = Ext.getCmp('harga').setValue('');
        sistem_bayar = ""
        jenis_kos = Ext.getCmp('jk').setValue('');
        ket_fasilitas = Ext.getCmp('ketfasilitas').setValue('');
        kecamatan = Ext.getCmp('kecamatan').setValue('');
        kelurahan = Ext.getCmp('kelurahan').setValue('');
        alamat_detail = Ext.getCmp('alamatdetail').setValue('');
        ket_lain = Ext.getCmp('keteranganlain').setValue('');
        status_postingan = 1;
    },

    onTambahKos: function () {
        let form = Ext.getCmp('picturekos').getEl().down('input[type=file]').dom.files[0];
        console.log(form);
        // fullPath = Ext.getCmp('picturekos').getValue();
        // if (fullPath) {
        //     var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        //     var filename = fullPath.substring(startIndex);
        //     if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        //         filename = filename.substring(1);
        //     }
        //     alert(filename);
        // }
        // jenis = 'Kos';
        // id_pemesan = 0;
        // id_user = 1;
        // nama_kos = Ext.getCmp('namakos').getValue();
        // biaya_perbulan = Ext.getCmp('harga').getValue();
        // sistem_bayar = ""
        // jenis_kos = Ext.getCmp('jk').getValue();
        // ket_fasilitas = Ext.getCmp('ketfasilitas').getValue();
        // kecamatan = Ext.getCmp('kecamatan').getValue();
        // kelurahan = Ext.getCmp('kelurahan').getValue();
        // alamat_detail = Ext.getCmp('alamatdetail').getValue();
        // ket_lain = Ext.getCmp('keteranganlain').getValue();
        // status_postingan = 1;


        // store = Ext.getStore('kos_saya');
        // store.beginUpdate();
        // store.insert(0, { 'jenis': jenis, 'id_user': id_user, 'id_pemesan': id_pemesan, 'nama_kos': nama_kos, 'sistem_bayar': sistem_bayar, 'biaya_perbulan': biaya_perbulan, 'jenis_kos': jenis_kos, 'ket_fasilitas': ket_fasilitas, 'kecamatan': kecamatan, 'kelurahan': kelurahan, 'alamat_detail': alamat_detail, 'ket_lain': ket_lain, 'foto': filename, 'status_postingan': status_postingan });
        // store.endUpdate();


        // fullPath = Ext.getCmp('picturekos').setValue('');
        // filename = ""
        // jenis = 'Kos';
        // id_pemesan = 0;
        // id_user = 1;
        // nama_kos = Ext.getCmp('namakos').setValue('');
        // biaya_perbulan = Ext.getCmp('harga').setValue('');
        // sistem_bayar = ""
        // jenis_kos = Ext.getCmp('jk').setValue('');
        // ket_fasilitas = Ext.getCmp('ketfasilitas').setValue('');
        // kecamatan = Ext.getCmp('kecamatan').setValue('');
        // kelurahan = Ext.getCmp('kelurahan').setValue('');
        // alamat_detail = Ext.getCmp('alamatdetail').setValue('');
        // ket_lain = Ext.getCmp('keteranganlain').setValue('');
        // status_postingan = 1;

        // alert('inserting...');
    }


});

// function onDetailKos(id_kos) {
//     if (!this.overlay) {
//         this.overlay = Ext.Viewport.add({
//             xtype: 'detailkosberanda'
//         });
//     }

//     this.overlay.show();

// }

function onOrderKos(id_kos) {
    store = Ext.getStore('kos_beranda');
    record = Ext.getCmp('dataview_kos_beranda').getSelection();
    index = store.indexOf(record);
    record = store.getAt(index);
    store.beginUpdate();
    record.set('id_pemesan', localStorage.getItem('id_user'));
    record.set('status_postingan', "2");
    store.endUpdate();

    Ext.getStore('kos_beranda').load();
    Ext.getStore('kontrakan_beranda').load();
    Ext.getStore('kos_saya').load();
    Ext.getStore('kontarakan_saya').load();

    alert("updating..");
}

function randomNumber() {
    return Math.ceil(Math.random() * 10000);
}

function onDetailKos(id_kos,jenis,id_user,id_pemesan,nama_kos,sistem_bayar,biaya_perbulan,jenis_kos,ket_fasilitas,kecamatan,kelurahan,alamat_detail,ket_lain,foto){
    alert(kecamatan);
}

// function onSendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "mykosapp@gmail.com",
//         Password : "0910909109",
//         To : 'furizal1999@gmail.com',
//         From : "mykosapp@gmail.com",
//         Subject : "Verifikasi Akun",
//         Body : randomNumber(),
//         UseDefaultCredentials : true,
//     }).then(
//       message => alert(message)
//     );

// }

