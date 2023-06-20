
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

        
      document.getElementById('cameraInput').addEventListener('change', function(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
  
        reader.onload = function(e) {
          document.getElementById('previewImage').setAttribute('src', e.target.files[0]); //result);
        };
  
        reader.readAsDataURL(file);
      });