let counter1 = 1;
let btns1 = document.querySelectorAll('.btn1');

let alpProd = document.querySelector('.alpine');



btns1.forEach(function (btn1) {
    btn1.addEventListener('click', function (e) {
        console.log(e.currentTarget.classList);
        const style1 = e.currentTarget.classList;

        if (style1.contains('decrease')) {
            counter1 --
        } else if (style1.contains('increase')) {
            counter1 ++
        }
        alpProd.textContent = counter1
    })
})

let counter2 = 1
let btns2 = document.querySelectorAll('.btn2');

let milkProd = document.querySelector('.milka');

btns2.forEach(function (btn2) {
    btn2.addEventListener('click', function (e) {
        const style2 = e.currentTarget.classList;

        if (style2.contains('decrease') ) {
            counter2 --
        } else if (style2.contains ('increase')) {
            counter2 ++
        }
        milkProd.textContent = counter2;
    })
})

/*let alpCheck = document.querySelector('.alpine_finalCheck_product');

let alpFinCh = +counter1 * 3.15;
console.log(alpCheck)
console.log(counter1)
alpCheck.innerHTML = alpFinCh + ' $';*/
