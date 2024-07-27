let a = ''; //Первое число 
let b = ''; //Второе число 
let sign = ''; //Знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

const clearAllBtn = document.querySelector('.ac');
const buttons = document.querySelector('.buttons');
//Экран
const display = document.querySelector('.display p');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    display.textContent = 0;
};

buttons.onclick = (event) => {
    // Проверка нажата ли кнопка
    if (!event.target.classList.contains('btn')) return;

    // Проверка нажата ли кнопка АС
    if (event.target.classList.contains('ac')) {
        clearAllBtn.onclick = clearAll();
    };

    // Получаю нажатую кнопку
    const key = event.target.textContent;

    // Нажато число или точка
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            display.textContent = a;
        } else if (a!== '' && b!== '' && finish){
            b = key;
            finish = false;
            display.textContent = b;
        } else {
            b += key;
            display.textContent = b;
        };

        return;
    };

    // Нажата кнопка + - / *
    if (action.includes(key)) {
        sign = key;
        display.textContent = sign;
        return;
    };

    // Нажат кнопка =
    if (key == '=') {
        if (b === '') b = a;
        switch(sign) {
            case '+':
                a = (+a) + (+b);
                break;

            case '-':
                a = (+a) - (+b);
                break;
                
            case '/':
                if (b === '0') {
                    display.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                } else {
                    a = (+a) / (+b);
                    break;
                };

            case 'X':
                a = (+a) * (+b);
                break;
        };

        finish = true;
        display.textContent = a;
    }
};

