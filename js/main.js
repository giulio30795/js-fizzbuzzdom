
const mainBox = document.querySelector('.main-box')

    for (let i = 1; i <= 100; i++){
        let content = '';
        let className = '';
        
        if (i % 3 == 0 && i % 5 ==0) {
            content = "fizbuzz";
            className = "red";
        }

        else if (i % 3 == 0) {

            content = "fizz";
            className ="green";
        }

        else if (i % 5 ==0) {

            content = "fizbuzz";
            className = "yellow";
        }

        else{
            content = i;
            className = "box";
        }
        mainBox.innerHTML += `<div class="box ${className}">${content}</div>`;
    }