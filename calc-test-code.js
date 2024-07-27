let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['+', '-', '/', 'X'];

const display = document.querySelector('.display p');
const clearAllBtn = document.querySelector('.ac');
const buttons = document.querySelector('.btn');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    display.textContent = 0;
};

buttons.onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;

    if (event.target.classList.contains('ac')) {
        clearAllBtn.onclick = clearAll();
    };
    
    let key = event.target.textContent;

    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            display.textContent = a;
        } else if (a!=='' && b!=='' && finish) {
            b = key;
            finish = false;
            display.textContent = b;
        } else {
            b += key;
            display.textContent = b;
        };

        return
    };

    if (action.includes(key)) {
        sign = action;
        display.textContent = sign;
        return;
    };

    if (key == '=') {
        if (b === '') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;

            case '-':
                a = (+a) - (+b);
                break;

            case 'X':
                a = (+a) * (+b);
                break;

            case '/':
                if (b == 0) {
                    display.textContent = 'Lol its zero!';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                } else {
                    a  = (+a) / (+b);
                };
        };

        finish = true;
        display.textContent = a;
    };
};