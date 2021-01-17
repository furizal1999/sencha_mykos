Ext.define('myKos.util.Globals',{
  singleton: true,
  alternateClassName: 'globalUtils',
  version: '1.0',
  config: {
    phppath: 'http://localhost/myKos',
  },
  constructor : function(config){
      this.initConfig(config);
  },

  startRecordCordova: function(){
    let opts = {limit:1}
    navigator.device.capture.captureAudio(globalUtils.captureSuccess, globalUtils.captureError, opts);
  },

  captureSuccess: function(mediaFiles){
    var i, path, len;
    name = mediaFiles[0].name;
    fileURL = mediaFiles[0].fullPath;
    type = mediaFiles[0].type;
    size = mediaFiles[0].size;
    if(size>80000){
      document.getElementById('recordingInfo').textContent = "Rekaman anda terlalu panjang.. silahkan coba lagi!";
    }
    else{
      document.getElementById('recordingInfo').textContent = "Menyimpan rekaman suara...";
      
      //upload process
      var uri = encodeURI("https://mykosapp.000webhostapp.com/resources/php/upload.php");
      var options = new FileUploadOptions();
      options.fileKey = "file";
      var form = Ext.getCmp('tambahkata').getValues();
      var filename = "rekaman.m4a";
      localStorage.setItem('audiotype', 'm4a');
      options.fileName = filename;
      options.mimeType = "text/plain";
      var params = {};
      params.user = 'furizal';
      options.params = params;

      // var ft = new FileTransfer();
      // ft.upload(fileURL, uri, globalUtils.uploadSuccess, globalUtils.uploadError, options);

      var fd = new FormData();
      fd.append("file", mediaFiles);
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost/php/upload.php");
      xhr.send(fd);
    }
  },
  captureError: function(error){
    document.getElementById('recordingInfo').textContent = "error code : "+ error.code;
  },

  uploadSuccess: function(r){
    if(r.response =="failed"){
      document.getElementById('recordingInfo').textContent = "Rekaman gagal disimpan...";
    }
    else{
      document.getElementById('recordingInfo').textContent = "Rekaman berhasil disimpan...";
    }
  },

  uploadError: function(error){
    Ext.Msg.alert("An Error has occurred : Code = "+ error.code);
  }
})