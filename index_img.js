
const imageInput = document.getElementById("cameraInput");
imageInput.addEventListener('change', function(event) {
    var file = event.target.files[0];
    console.log("event triggerred");
    
    var reader = new FileReader();
    reader.onload = function(e) {
        var imageData = e.target.result;
        
        // Send imageData to the server
        // Implement your logic to upload the image data to the remote server
        document.getElementById('previewImage').setAttribute('src', e.target.result);
        <!-- 回调中不能再设置innerText。 原因：??? -->

    };
    reader.readAsDataURL(file);
    });

<!--        这个从安卓本机读取文件的Uri再打开的功能，不能用起来。Uri不认识。-->
  function getFileListFromWV(){
    const para = Android.showFile(document.getElementById('path').value);

    document.getElementById('localToken').innerText = para;
    const uri = Uri.parse(para);
    document.getElementById('previewImage').setAttribute('src', uri);
  
    // Android.showToast(para);
    // const list = Android.getFileList(text.value);
    // showFileList(list);
  }

  function showFileList(list){
    const length=(list&&list.length)? list.length:0;
    const ele = document.getElementById("fileList");
    for (let i=0;i<length;i++){
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(list[i]));
      ele.appendChild(li);
    }
  }

  function confirmTest(){
    let text = "Press a button!\nEither OK or Cancel.";
    if (confirm(text) == true) {
      text = "You pressed OK!";
    } else {
      text = "You canceled!";
    }
  document.getElementById("localToken").innerHTML = text;
  }

  function myFunction() {
    let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  document.getElementById("localToken").innerHTML =
  "Hello " + person + "! How are you today?";
}
  }

  function alertTest(){
    alert("abc");
  }

  function consoleTest(message){
    console.log("message to be dissplayed");
  }