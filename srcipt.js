
        for (let i = 0; i < 40; i++) {
            let snow = document.createElement('div');
            snow.className = 'snowflake';
            let size = Math.random() * 5 + 2 + 'px';
            snow.style.width = size;
            snow.style.height = size;
            snow.style.left = Math.random() * 100 + 'vw';
            snow.style.animationDuration = Math.random() * 3 + 3 + 's';
            snow.style.animationDelay = Math.random() * 5 + 's';
            document.body.appendChild(snow);
        }

      
        function open1(element) {
            document.getElementById("gift1").style.display = "block";
            document.getElementById("label1").style.display = "none";
            element.style.borderColor = "gold";
        }

        function open2(element) {
            document.getElementById("gift2").style.display = "block";
            document.getElementById("label2").style.display = "none";
            element.style.borderColor = "gold";
        }

        function open3(element) {
            document.getElementById("gift3").style.display = "block";
            document.getElementById("label3").style.display = "none";
            element.style.borderColor = "gold";
        }