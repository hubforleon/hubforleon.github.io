
        const colors = ['red', 'blue', 'green', 'pink', 'orange', 'black'];
        let index = 0;

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

        function changeImg(){
            
            var fileInput = document.getElementById("cameraInput");
            var file = fileInput.files[0];
            console.log("hello. for chnage in event..", file);

            var reader = new FileReader();

            reader.onload = function(e) {
                document.getElementById('previewImage').setAttribute('src', e.target.result);
              };
                
            reader.readAsDataURL(file);
            console.log("end...")
        }

        function showTime() {
            var date = new Date();
            var time = date.toLocaleTimeString();
            document.getElementById("current-time").textContent = time;
          }

          setInterval(showTime, 1000); // Update the time every second

          function getToken() {
            const token = document.getElementById("token");
            const localToken = document.getElementById("localToken");
            localToken.innerText = "string from localStorage ==>", localStorage.getItem("token");
        }
        function setToken() {
            const token = document.getElementById("token");
            const localToken = document.getElementById("localToken");
            localToken.innerText = "string set to localStorage ==>", localStorage.setItem("token",token.value);
        }