let leftInput = document.getElementById('leftInput');
let rightInput = document.getElementById('rightInput');
let leftOption = document.getElementById('leftOption');
let rightOption = document.getElementById('rightOption');
let rumus = document.getElementById('rumus');

let tes =  document.getElementById('tes');
leftInput.addEventListener('input', (evt)=> {
    

    if (leftOption.value === 'Celcius' && rightOption.value === 'Fahrenheit') {
        rightInput.value = (evt.currentTarget.value * 9/5) + 32;
        rumus.innerHTML = ` 
        (${leftInput.value} °C × 9/5) + 32 = ${rightInput.value} °F
        `;
    } else if (leftOption.value === 'Celcius' && rightOption.value === 'Kelvin') {
        rightInput.value = evt.currentTarget.value + 273.15;
        rumus.innerHTML = ` 
        ${leftInput.value} K + 273,15 = ${rightInput.value} °C
        `;
    } else if (leftOption.value === 'Fahrenheit' && rightOption.value === 'Celcius') {
        rightInput.value = (evt.currentTarget.value - 32) * 5/9;
        rumus.innerHTML = ` 
        (${leftInput.value} °F − 32) × 5/9 = ${rightInput.value} °C
        `;
    } else if (leftOption.value === 'Kelvin' && rightOption.value === 'Celcius') {
        rightInput.value = evt.currentTarget.value - 273.15;
        rumus.innerHTML = ` 
        ${leftInput.value} K − 273,15 = ${rightInput.value} °C
        `;
    } else if (leftOption.value === 'Kelvin' && rightOption.value === 'Fahrenheit') {
        rightInput.value = (evt.currentTarget.value - 273.5) * 9/5 + 32;
        rumus.innerHTML = ` 
        (${leftInput.value} K − 273,15) × 9/5 + 32 = ${rightInput.value} °F
        `;
    } else if (leftOption.value === 'Fahrenheit' && rightOption.value === 'Kelvin') {
        rightInput.value = (evt.currentTarget.value - 32) * 5/9 + 273.15;
        rumus.innerHTML = ` 
        (${leftInput.value} °F − 32) × 5/9 + 273,15 = ${rightInput.value} K
        `;
    } 
})

