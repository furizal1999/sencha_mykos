Imports MySql.Data.MySqlClient
Public Class HistoriTugas
    'Deklarasi Variabel

    Dim koneksi As MySqlConnection ''buat variabel koneksi
    Dim perintah As MySqlCommand ''buat variable perintah

    Sub loadData()
        koneksi = New MySqlConnection ''membuat sebuah koneksi baru ke database
        koneksi.ConnectionString = "server=localhost;userid=root;password=;database=daftar_tugas" 'queri untuk koneksi ke database
        Dim adapter As New MySqlDataAdapter 'queri untuk koneksi ke database
        Dim dbDataSet As New DataTable
        Dim bSource As New BindingSource
        Try
            koneksi.Open() 'menjalankan koneksi yang telah di buat sebelumnya
            Dim Query As String
            If dashboard.semester_search.Text <> "" Then
                Query = "SELECT id_tugas, tb_tugas.id_matkul, tb_matkul.nama_matkul, judul_tugas, intruksi, dateline, deadline, jam, via, kelas, status FROM tb_matkul, tb_tugas where tb_matkul.id_matkul = tb_tugas.id_matkul and semester='" & dashboard.semester_search.Text & "' and timediff(now(),  concat(deadline,' ',jam))>0" 'queri intuk menampilkan data dari tabel 
            Else
                Query = "SELECT id_tugas, tb_tugas.id_matkul, tb_matkul.nama_matkul, judul_tugas, intruksi, dateline, deadline, jam, via, kelas, status FROM tb_matkul, tb_tugas where tb_matkul.id_matkul = tb_tugas.id_matkul and timediff(now(),  concat(deadline,' ',jam))>0" 'queri intuk menampilkan data dari tabel 
            End If


            perintah = New MySqlCommand(Query, koneksi) 'menjalankan query menampilkan data dari tabel
            adapter.SelectCommand = perintah 'perintah dijalankan
            adapter.Fill(dbDataSet) 'data yang ditampilkan dimasukkan kedlaam dbDataSet
            bSource.DataSource = dbDataSet 'dbDataSet dijadikan data source
            tabel_semuaTugas.DataSource = bSource 'data yang dijadikan datasource di tampilkan ke(table_data)
            tabel_semuaTugas.ColumnHeadersDefaultCellStyle.Alignment = DataGridViewContentAlignment.MiddleCenter 'membuat header ditengah
            With tabel_semuaTugas
                .RowHeadersVisible = False
                .Columns(0).HeaderText = "ID Tugas" 'columns
                .Columns(1).HeaderText = "ID Matakuliah" 'columns
                .Columns(2).HeaderText = "ID Matakuliah" 'columns
                .Columns(3).HeaderText = "Judul Tugas" 'columns
                .Columns(4).HeaderText = "Intruksi" 'columns
                .Columns(5).HeaderText = "Dateline" 'columns
                .Columns(6).HeaderText = "Deadline" 'columns
                .Columns(7).HeaderText = "Jam" 'columns
                .Columns(8).HeaderText = "Via" 'columns
                .Columns(9).HeaderText = "Kelas" 'columns
                .Columns(10).HeaderText = "Status Tugas" 'columns
                ' .Columns(1).AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill
                tabel_semuaTugas.ReadOnly = True 'data hanya bisa dibaca
                Dim jumlah_matkul As Integer
                jumlah_matkul = tabel_semuaTugas.RowCount - 1

                If (jumlah_matkul > 0) Then
                    dashboard.label_historiTugas.Text = jumlah_matkul & " Tugas"
                Else
                    dashboard.label_historiTugas.Text = "Tidak ada histori tugas"
                End If
            End With
            koneksi.Close() 'jika data sudah ditampilkan, tutp kembali koneksi kedatabase
        Catch ex As MySqlException
            MessageBox.Show(ex.Message) 'jika data error, maka tampilkan message box
        Finally
            koneksi.Dispose() 'query untuk menutup koneksi secara total
        End Try
    End Sub
    Private Sub MataKuliah_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        dateline.Format = DateTimePickerFormat.Custom
        dateline.CustomFormat = " "
        deadline.Format = DateTimePickerFormat.Custom
        deadline.CustomFormat = " "
        loadData()
        Call tampilDataComboBox()
    End Sub

    Private Sub tabel_matakuliah_CellMouseClick(ByVal sender As Object, ByVal e As System.Windows.Forms.DataGridViewCellMouseEventArgs) Handles tabel_semuaTugas.CellMouseClick
        id_tugas.Text = tabel_semuaTugas.Rows(e.RowIndex).Cells(0).Value
        id_matkul.Text = tabel_semuaTugas.Rows(e.RowIndex).Cells(1).Value
        judul_tugas.Text = tabel_semuaTugas.Rows(e.RowIndex).Cells(3).Value
        instruksi.Text = tabel_semuaTugas.Rows(e.RowIndex).Cells(4).Value
        dateline.Text = tabel_semuaTugas.Rows(e.RowIndex).Cells(5).Value
        deadline.Text = tabel_semuaTugas.Rows(e.RowIndex).Cells(6).Value
        txt_jam.Text = Microsoft.VisualBasic.Left(tabel_semuaTugas.Rows(e.RowIndex).Cells(7).Value.ToString, 2)
        txt_menit.Text = Microsoft.VisualBasic.Mid(tabel_semuaTugas.Rows(e.RowIndex).Cells(7).Value.ToString, 4, 2)
        via.Text = tabel_semuaTugas.Rows(e.RowIndex).Cells(8).Value
        kelas.Text = tabel_semuaTugas.Rows(e.RowIndex).Cells(9).Value
        status.Text = tabel_semuaTugas.Rows(e.RowIndex).Cells(10).Value
    End Sub

    Private Sub bersih_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles bersih.Click
        KosongForm()
        Enable()
    End Sub


    Sub KosongForm()
        id_tugas.Text = ""
        id_matkul.Text = ""
        judul_tugas.Text = ""
        instruksi.Text = ""
        dateline.Format = DateTimePickerFormat.Custom
        dateline.CustomFormat = " "
        deadline.Format = DateTimePickerFormat.Custom
        deadline.CustomFormat = " "
        txt_jam.Text = ""
        txt_menit.Text = ""
        via.Text = ""
        kelas.Text = ""
        status.Text = ""
    End Sub


    Private Sub keluar_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles keluar.Click
        Me.Close()
    End Sub

    Private Sub id_matkul_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles id_tugas.TextChanged
        Enable()
    End Sub

    Private Sub nama_matkul_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs)
        Enable()
    End Sub

    Private Sub sks_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles status.SelectedIndexChanged
        Enable()
    End Sub

    Private Sub semester_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles kelas.SelectedIndexChanged
        Enable()
    End Sub

    Private Sub nama_dosen_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles judul_tugas.TextChanged
        Enable()
    End Sub

    Sub Enable()
        If (id_tugas.Text <> "") Or id_matkul.Text <> "" Or judul_tugas.Text <> "" Or instruksi.Text <> "" Or (dateline.Format = DateTimePickerFormat.Custom AndAlso dateline.CustomFormat <> " ") Or (deadline.Format = DateTimePickerFormat.Custom AndAlso deadline.CustomFormat <> " ") Or txt_jam.Text <> "" Or txt_menit.Text <> "" Or via.Text <> "" Or kelas.Text <> "" Or status.Text <> "" Then
            If (id_tugas.Text <> "") Then
                bersih.Enabled = True
                edit.Enabled = True
                hapus.Enabled = True
            ElseIf id_matkul.Text <> "" Or judul_tugas.Text <> "" Or instruksi.Text <> "" Or (dateline.Format = DateTimePickerFormat.Custom AndAlso dateline.CustomFormat <> " ") Or (deadline.Format = DateTimePickerFormat.Custom AndAlso deadline.CustomFormat <> " ") Or txt_jam.Text <> "" Or txt_menit.Text <> "" Or via.Text <> "" Or kelas.Text <> "" Or status.Text <> "" Then
                bersih.Enabled = True
                edit.Enabled = False
                hapus.Enabled = False
            ElseIf id_matkul.Text <> "" And judul_tugas.Text <> "" And instruksi.Text <> "" And (dateline.Format = DateTimePickerFormat.Custom AndAlso dateline.CustomFormat <> " ") And (deadline.Format = DateTimePickerFormat.Custom AndAlso deadline.CustomFormat <> " ") And txt_jam.Text <> "" And txt_menit.Text <> "" And via.Text <> "" And kelas.Text <> "" And status.Text <> "" Then
                bersih.Enabled = True
                edit.Enabled = False
                hapus.Enabled = False
            ElseIf (id_tugas.Text <> "") And id_matkul.Text <> "" And judul_tugas.Text <> "" And instruksi.Text <> "" And (dateline.Format = DateTimePickerFormat.Custom AndAlso dateline.CustomFormat <> " ") And (deadline.Format = DateTimePickerFormat.Custom AndAlso deadline.CustomFormat <> " ") And txt_jam.Text <> "" And txt_menit.Text <> "" And via.Text <> "" And kelas.Text <> "" And status.Text <> "" Then
                bersih.Enabled = True
                edit.Enabled = True
                hapus.Enabled = True
            Else
                bersih.Enabled = True
                edit.Enabled = False
                hapus.Enabled = False
            End If
        Else
            bersih.Enabled = False
            edit.Enabled = False
            hapus.Enabled = False
        End If
    End Sub
    Private Sub semester_search_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs)
        loadData()
    End Sub

    Private Sub edit_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles edit.Click
        editData()
        MataKuliah.loadData()
        SemuaTugas.loadData()
        TugasBelumSelesai.loadData()
        TugasSelesai.loadData()
        loadData()
        Enable()
    End Sub

    Sub editData()
        Dim dateline_input As String = (Microsoft.VisualBasic.Right(dateline.Text.ToString, 4) & "-" & Microsoft.VisualBasic.Left(dateline.Text.ToString, 2) & "-" & Microsoft.VisualBasic.Mid(dateline.Text.ToString, 4, 2))
        Dim deadline_input As String = (Microsoft.VisualBasic.Right(deadline.Text.ToString, 4) & "-" & Microsoft.VisualBasic.Left(deadline.Text.ToString, 2) & "-" & Microsoft.VisualBasic.Mid(deadline.Text.ToString, 4, 2))

        koneksi = New MySqlConnection
        koneksi.ConnectionString = "server=localhost;userid=root;password=;database=daftar_tugas" 'queri untuk koneksi ke database
        Dim READER As MySqlDataReader

        Try
            koneksi.Open()
            Dim Query As String
            Query = "update tb_tugas set id_matkul = " & id_matkul.Text & ",judul_tugas='" & judul_tugas.Text & "',intruksi='" & instruksi.Text & "',dateline='" & dateline_input & "',deadline='" & deadline_input & "',jam='" & (txt_jam.Text & ":" & txt_menit.Text & ":00") & "',via='" & via.Text & "',kelas='" & kelas.Text & "',status='" & status.Text & "' where id_tugas=" & id_tugas.Text
            perintah = New MySqlCommand(Query, koneksi)
            READER = perintah.ExecuteReader

            MsgBox("Data berhasil diedit")
            READER.Close()
            koneksi.Close()

        Catch ex As Exception
            MessageBox.Show(ex.Message)
        Finally
            KosongForm()
            loadData()
            koneksi.Dispose()
        End Try
    End Sub

    Private Sub hapus_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles hapus.Click
        hapusData()
        MataKuliah.loadData()
        SemuaTugas.loadData()
        TugasBelumSelesai.loadData()
        TugasSelesai.loadData()
        loadData()
        Enable()
    End Sub

    Sub hapusData()
        koneksi = New MySqlConnection
        koneksi.ConnectionString = "server=localhost;userid=root;password=;database=daftar_tugas" 'queri untuk koneksi ke database
        Dim READER As MySqlDataReader

        Try
            koneksi.Open()
            Dim Query As String
            Query = "delete from tb_tugas where id_tugas = " & id_tugas.Text & ""
            perintah = New MySqlCommand(Query, koneksi)
            READER = perintah.ExecuteReader

            MsgBox("Data berhasil dihapus!")
            READER.Close()
            koneksi.Close()

        Catch ex As Exception
            MessageBox.Show(ex.Message)
        Finally
            KosongForm()
            loadData()
            koneksi.Dispose()
        End Try
    End Sub

    Private Sub dateline_ValueChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles dateline.ValueChanged
        If dateline.Format = DateTimePickerFormat.Custom AndAlso dateline.CustomFormat = " " Then
            dateline.Format = DateTimePickerFormat.Short
        End If
    End Sub

    Private Sub deadline_ValueChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles deadline.ValueChanged
        If deadline.Format = DateTimePickerFormat.Custom AndAlso deadline.CustomFormat = " " Then
            deadline.Format = DateTimePickerFormat.Short
        End If
    End Sub

    Sub tampilDataComboBox()
        koneksi = New MySqlConnection ''membuat sebuah koneksi baru ke database
        koneksi.ConnectionString = "server=localhost;userid=root;password=;database=daftar_tugas" 'queri untuk koneksi ke database
        Dim adapter As New MySqlDataAdapter 'queri untuk koneksi ke database
        Dim dbDataSet As New DataTable
        Dim bSource As New BindingSource
        Dim READER As MySqlDataReader
        Try
            koneksi.Open() 'menjalankan koneksi yang telah di buat sebelumnya
            Dim Query As String
            If dashboard.semester_search.Text <> "" Then
                Query = "select id_matkul, nama_matkul from tb_matkul where semester = '" & dashboard.semester_search.Text & "'"
            Else
                Query = "select id_matkul, nama_matkul from tb_matkul"
            End If
            perintah = New MySqlCommand(Query, koneksi) 'menjalankan query menampilkan data dari tabel
            adapter.SelectCommand = perintah 'perintah dijalankan
            adapter.Fill(dbDataSet) 'data yang ditampilkan dimasukkan kedlaam dbDataSet
            READER = perintah.ExecuteReader
            If READER.HasRows Then
                Do While READER.Read = True
                    id_matkul.Items.Add(READER.Item("id_matkul"))
                Loop
            Else

            End If
            koneksi.Close() 'jika data sudah ditampilkan, tutp kembali koneksi kedatabase
        Catch ex As MySqlException
            MessageBox.Show(ex.Message) 'jika data error, maka tampilkan message box
        Finally
            koneksi.Dispose() 'query untuk menutup koneksi secara total
        End Try
    End Sub
End Class





Imports System.Data.Odbc.OdbcException
Imports System.Data.Odbc
Public Class dashboard
    
    Dim jumlah_matkul As Integer
    Dim jumlah_tugas As Integer
    Dim jumlah_tugas_selesai As Integer
    Dim jumlah_tugas_belum_selesai As Integer
    Dim jumlah_history_tugas As Integer

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        MataKuliah.Show()
    End Sub

    Private Sub dashboard_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        live_timer.Enabled = True
        MataKuliah.loadData()
        SemuaTugas.loadData()
        TugasBelumSelesai.loadData()
        TugasSelesai.loadData()
        HistoriTugas.loadData()
    End Sub

    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click
        SemuaTugas.Show()
    End Sub

    Private Sub semester_search_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles semester_search.SelectedIndexChanged
        MataKuliah.loadData()
        SemuaTugas.loadData()
        TugasBelumSelesai.loadData()
        TugasSelesai.loadData()
        HistoriTugas.loadData()
    End Sub

    Private Sub Button3_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button3.Click
        TugasBelumSelesai.Show()
    End Sub

    Private Sub Button4_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button4.Click
        TugasSelesai.Show()
    End Sub

    Private Sub Button6_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button6.Click
        HistoriTugas.Show()
    End Sub

    Private Sub Button7_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button7.Click
        End
    End Sub

    Private Sub Button5_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button5.Click
        TambahTugas.Show()
    End Sub

    Private Sub NotifyIcon1_MouseDoubleClick(ByVal sender As System.Object, ByVal e As System.Windows.Forms.MouseEventArgs)

    End Sub

    Private Sub live_timer_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles live_timer.Tick
        label_date.Text = Date.Now.ToString("dd MMMM yyyy")
        label_time.Text = Date.Now.ToString("hh:mm:ss")
    End Sub
End Class





Imports MySql.Data.MySqlClient
Public Class TambahTugas
    'Deklarasi Variabel

    Dim koneksi As MySqlConnection ''buat variabel koneksi
    Dim perintah As MySqlCommand ''buat variable perintah

   
    Private Sub MataKuliah_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        dateline.Format = DateTimePickerFormat.Custom
        dateline.CustomFormat = " "
        deadline.Format = DateTimePickerFormat.Custom
        deadline.CustomFormat = " "
        Call tampilDataComboBox()
    End Sub

    Private Sub tambah_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles tambah.Click
        tambahData()
        SemuaTugas.loadData()
        MataKuliah.loadData()
        TugasBelumSelesai.loadData()
        TugasSelesai.loadData()
        HistoriTugas.loadData()
        Enable()
    End Sub

    Sub tambahData()
        Dim dateline_input As String = (Microsoft.VisualBasic.Right(dateline.Text.ToString, 4) & "-" & Microsoft.VisualBasic.Left(dateline.Text.ToString, 2) & "-" & Microsoft.VisualBasic.Mid(dateline.Text.ToString, 4, 2))
        Dim deadline_input As String = (Microsoft.VisualBasic.Right(deadline.Text.ToString, 4) & "-" & Microsoft.VisualBasic.Left(deadline.Text.ToString, 2) & "-" & Microsoft.VisualBasic.Mid(deadline.Text.ToString, 4, 2))

        If id_matkul.Text = "" Or judul_tugas.Text = "" Or instruksi.Text = "" Or deadline.Text = "" Or dateline.Text = "" Or txt_jam.Text = "" Or txt_menit.Text = "" Or via.Text = "" Or kelas.Text = "" Or status.Text = "" Then
            MsgBox("Perhatian... Pastikan semua inputan terisi!")
        Else

            koneksi = New MySqlConnection ''membuat sebuah koneksi baru ke database
            koneksi.ConnectionString = "server=localhost;userid=root;password=;database=daftar_tugas" 'queri untuk koneksi ke database
            Dim READER As MySqlDataReader

            Try
                koneksi.Open()
                Dim Query As String
                Query = "insert into tb_tugas values ('""'," & id_matkul.Text & ",'" & judul_tugas.Text & "','" & instruksi.Text & "','" & dateline_input & "','" & deadline_input & "','" & (txt_jam.Text & ":" & txt_menit.Text & ":00") & "','" & via.Text & "','" & kelas.Text & "','" & status.Text & "')"
                perintah = New MySqlCommand(Query, koneksi)
                READER = perintah.ExecuteReader

                MsgBox("Tugas berhasil ditambahkan!")
                READER.Close()
                koneksi.Close()

            Catch ex As Exception
                MessageBox.Show(ex.Message)
            Finally
                KosongForm()
                koneksi.Dispose()
            End Try

        End If
    End Sub

    Private Sub bersih_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles bersih.Click
        KosongForm()
        Enable()
    End Sub


    Sub KosongForm()
        id_matkul.Text = ""
        judul_tugas.Text = ""
        instruksi.Text = ""
        dateline.Format = DateTimePickerFormat.Custom
        dateline.CustomFormat = " "
        deadline.Format = DateTimePickerFormat.Custom
        deadline.CustomFormat = " "
        txt_jam.Text = ""
        txt_menit.Text = ""
        via.Text = ""
        kelas.Text = ""
        status.Text = ""
    End Sub


    Private Sub keluar_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles keluar.Click
        Me.Close()
    End Sub

    Private Sub id_matkul_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs)
        Enable()
    End Sub

    Private Sub nama_matkul_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs)
        Enable()
    End Sub

    Private Sub sks_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles status.SelectedIndexChanged
        Enable()
    End Sub

    Private Sub semester_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles kelas.SelectedIndexChanged
        Enable()
    End Sub

    Private Sub nama_dosen_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles judul_tugas.TextChanged
        Enable()
    End Sub

    Sub Enable()
        If id_matkul.Text <> "" Or judul_tugas.Text <> "" Or instruksi.Text <> "" Or (dateline.Format = DateTimePickerFormat.Custom AndAlso dateline.CustomFormat <> " ") Or (deadline.Format = DateTimePickerFormat.Custom AndAlso deadline.CustomFormat <> " ") Or txt_jam.Text <> "" Or txt_menit.Text <> "" Or via.Text <> "" Or kelas.Text <> "" Or status.Text <> "" Then
            If id_matkul.Text <> "" Or judul_tugas.Text <> "" Or instruksi.Text <> "" Or (dateline.Format = DateTimePickerFormat.Custom AndAlso dateline.CustomFormat <> " ") Or (deadline.Format = DateTimePickerFormat.Custom AndAlso deadline.CustomFormat <> " ") Or txt_jam.Text <> "" Or txt_menit.Text <> "" Or via.Text <> "" Or kelas.Text <> "" Or status.Text <> "" Then
                bersih.Enabled = True
                tambah.Enabled = True
            ElseIf id_matkul.Text <> "" And judul_tugas.Text <> "" And instruksi.Text <> "" And (dateline.Format = DateTimePickerFormat.Custom AndAlso dateline.CustomFormat <> " ") And (deadline.Format = DateTimePickerFormat.Custom AndAlso deadline.CustomFormat <> " ") And txt_jam.Text <> "" And txt_menit.Text <> "" And via.Text <> "" And kelas.Text <> "" And status.Text <> "" Then
                bersih.Enabled = True
                tambah.Enabled = True
            ElseIf id_matkul.Text <> "" And judul_tugas.Text <> "" And instruksi.Text <> "" And (dateline.Format = DateTimePickerFormat.Custom AndAlso dateline.CustomFormat <> " ") And (deadline.Format = DateTimePickerFormat.Custom AndAlso deadline.CustomFormat <> " ") And txt_jam.Text <> "" And txt_menit.Text <> "" And via.Text <> "" And kelas.Text <> "" And status.Text <> "" Then
                bersih.Enabled = True
                tambah.Enabled = False
            Else
                bersih.Enabled = True
                tambah.Enabled = True
            End If
        Else
            bersih.Enabled = False
            tambah.Enabled = False
        End If
    End Sub

    

    Private Sub dateline_ValueChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles dateline.ValueChanged
        If dateline.Format = DateTimePickerFormat.Custom AndAlso dateline.CustomFormat = " " Then
            dateline.Format = DateTimePickerFormat.Short
        End If
    End Sub

    Private Sub deadline_ValueChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles deadline.ValueChanged
        If deadline.Format = DateTimePickerFormat.Custom AndAlso deadline.CustomFormat = " " Then
            deadline.Format = DateTimePickerFormat.Short
        End If
    End Sub

    Sub tampilDataComboBox()
        koneksi = New MySqlConnection ''membuat sebuah koneksi baru ke database
        koneksi.ConnectionString = "server=localhost;userid=root;password=;database=daftar_tugas" 'queri untuk koneksi ke database
        Dim adapter As New MySqlDataAdapter 'queri untuk koneksi ke database
        Dim dbDataSet As New DataTable
        Dim bSource As New BindingSource
        Dim READER As MySqlDataReader
        Try
            koneksi.Open() 'menjalankan koneksi yang telah di buat sebelumnya
            Dim Query As String
            If dashboard.semester_search.Text <> "" Then
                Query = "select id_matkul, nama_matkul from tb_matkul where semester = '" & dashboard.semester_search.Text & "'"
            Else
                Query = "select id_matkul, nama_matkul from tb_matkul"
            End If
            perintah = New MySqlCommand(Query, koneksi) 'menjalankan query menampilkan data dari tabel
            adapter.SelectCommand = perintah 'perintah dijalankan
            adapter.Fill(dbDataSet) 'data yang ditampilkan dimasukkan kedlaam dbDataSet
            READER = perintah.ExecuteReader
            If READER.HasRows Then
                Do While READER.Read = True
                    id_matkul.Items.Add(READER.Item("id_matkul"))
                Loop
            Else

            End If
            koneksi.Close() 'jika data sudah ditampilkan, tutp kembali koneksi kedatabase
        Catch ex As MySqlException
            MessageBox.Show(ex.Message) 'jika data error, maka tampilkan message box
        Finally
            koneksi.Dispose() 'query untuk menutup koneksi secara total
        End Try
    End Sub
End Class