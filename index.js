
const colors = ['red', 'blue', 'green', 'pink', 'orange', 'black'];
let index = 0;

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
    };
    reader.readAsDataURL(file);
    });

function changeColorById(id) {
    let ele = document.getElementById(id);
    index += 1;
    index %= colors.length;
    ele.style.color = colors[index];
}
function changeColor() {
    let eles = document.getElementsByClassName("list_item");

    index += 1;
    index %= colors.length;

    for (let i = 0; i < eles.length; i++) {
        eles[i].style.color = colors[index];
    }
}

function calcInput() {
    let ele = document.getElementById("abc");
    let numbers = ele.value.split(',');
    let sum = calc(numbers);

    let dis = document.getElementById("display");
    dis.innerText = sum;

}

function calcMsg() {
    let str = prompt("Please input numbers:");
    let numbers = str.split(',');
    let sum = calc(numbers);

    let dis = document.getElementById("display");
    dis.innerText = sum;
}

const add = (a, b) => { return a + b; }

function calc(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum = add(sum, parseInt(numbers[i]));
    }

    return sum;
}

function changeImage(){
    changeColor();
    
    // var fileInput = document.getElementById("cameraInput");
    // var file = fileInput.files[0];
    // console.log("hello. for chnage in event..", file);

    // var reader = new FileReader();

    // reader.onload = function(e) {
    //     document.getElementById('previewImage').setAttribute('src', e.target.result);
    //   };
        
    // reader.readAsDataURL(file);




    console.log("end...")
}

function showTime() {
    var date = new Date();
    var time = date.toLocaleTimeString();
    document.getElementById("current-time").textContent = time;
    }

    setInterval(showTime, 1000); // Update the time every second

function getToken() {
    changeColor();
    const token = document.getElementById("token");
    const localToken = document.getElementById("localToken");
    const value = localStorage.getItem("token");
    console.log("get from local: ", value);
    const counter = localStorage.getItem("counter");
    localToken.innerText = localStorage.getItem("token") + "==> from localStorage "+counter +" times";
}
function setToken() {
    changeColor();
    const token = document.getElementById("token");
    const localToken = document.getElementById("localToken");
    localStorage.setItem("token", token.value);   
    const counter = localStorage.getItem("counter")? parseInt(localStorage.getItem("counter")):0         
    localStorage.setItem("counter", counter+1);            
    console.log("token.value = ", token.value)
    localToken.innerText = "set to localStorage ==>"+ localStorage.getItem("token",token.value);
}

function showAndroidToast(toast) {
  const info = Android.getPhoneNumber();
  const information = info? info:"null";

    Android.showToast(toast + information);
}


function getLocation(){
    // alert("location request...");
    const localToken = document.getElementById("localToken");
    Android.makeCall();    
    localToken.innerText = "make a call for general information";


    
    // if (navigator.geolocation) {
    //     // Geolocation is supported
    
    //     navigator.geolocation.getCurrentPosition(showPosition, showError);
    // } else {
    //     // Geolocation is not supported
    //     // Handle the lack of support gracefully
        
    // // Android.showToast("location request from tost, no...")
    // }
    }
  
  function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
  
    // Use the latitude and longitude values as needed
    // ...
  }
  
  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        // User denied the permission request
        // Handle the denial gracefully
        break;
      case error.POSITION_UNAVAILABLE:
        // Location information is unavailable
        // Handle the unavailability gracefully
        break;
      case error.TIMEOUT:
        // The request to get location timed out
        // Handle the timeout gracefully
        break;
      case error.UNKNOWN_ERROR:
        // An unknown error occurred
        // Handle the error gracefully
        break;
    }
  }
  
  function inputTest(text){
    Android.showToast(text);
  }