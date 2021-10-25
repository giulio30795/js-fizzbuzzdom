
const mainBox = document.querySelector('.main-box')

    for (let i = 1; i <= 100; i++){
        
        if (i % 3 == 0 && i % 5 ==0) {
            mainBox.innerHTML += `<div class="box red" >fizzbuzz</div>`;
        }

        else if (i % 3 == 0) {
            mainBox.innerHTML += `<div class="box green" >fizz</div>`;
        }

        else if (i % 5 ==0) {
            mainBox.innerHTML += `<div class="box yellow" >buzz</div>`;
        }

        else{
            mainBox.innerHTML += `<div class="box" >${i}</div>`;
        }
    }