let time = document.querySelector('.block-calculator__int-top-time');
let item = document.querySelectorAll('.item');
let result = document.querySelector('.value-result');
let clear = document.querySelector('.clear');
let numeric = document.querySelectorAll('.numeric');
let operand = document.querySelectorAll('.operand');
let equal = document.querySelector('.equal');
let temp1 = 0; 
let temp2 = 0;
let operandSign = '';
let setNegativeValue = document.querySelector('.setNegative');
time.textContent = new Date().getHours()+':'+new Date().getMinutes();

let clearValue = () => {
    result.textContent = 0;
}
clear.addEventListener('click', clearValue());

item.forEach((e) => {
    e.addEventListener('click', (event) => {
        if(event.target.classList.contains('numeric')) {
            result.textContent += event.target.textContent.trim();
            
            console.log('numeric '+event.target.textContent.trim());
        }
        if(event.target.classList.contains('operand')) {
            console.log('operand '+event.target.textContent.trim());
            operandSign = event.target.textContent.trim();
            temp1 = result.textContent;
            
            clearValue();
        }
        if(event.target.classList.contains('equal')) {
            console.log('click sur '+event.target.textContent.trim());
            
            if(operandSign == '*') {
                temp2 = result.textContent;
                result.textContent = (temp1 * temp2);
            }
            if(operandSign == '/') {
                temp2 = result.textContent;
                result.textContent = temp1 / temp2;
            }
            if(operandSign == '-') {
                temp2 = result.textContent;
                result.textContent = temp1 - temp2;
            }
            if(operandSign == '+') {
                temp2 = result.textContent;
                result.textContent = temp1 + temp2;
            }
            if(operandSign == '%') {
                temp2 = result.textContent;
                result.textContent = temp1 % temp2;
            }
        }
    });
});

let setNegative = () => {
    result.textContent *= (-1); 
}
setNegativeValue.addEventListener('click', setNegative)