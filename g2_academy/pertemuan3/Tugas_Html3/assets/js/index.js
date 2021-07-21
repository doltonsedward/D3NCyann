let inputSubmit = document.getElementById('inputSubmit');

let nameForCv = document.getElementById('nameForCv'),
    name2ForCv = document.getElementById('name2ForCv'),
    birthForCv = document.getElementById('birthForCv'),
    addressForCv = document.getElementById('addressForCv'),
    numberForCv = document.getElementById('numberForCv'),
    emailForCv = document.getElementById('emailForCv');

function nameChanger(target) {
    nameForCv.textContent = document.getElementById(target).value;
    name2ForCv.textContent = document.getElementById(target).value;
}

let dateChanger = 
    (target) => birthForCv.textContent = document.getElementById(target).value,
    addressChanger = 
    (target)=> addressForCv.textContent = document.getElementById(target).value,
    numberChanger = 
    (target)=> numberForCv.textContent = document.getElementById(target).value,
    emailChanger = 
    (target)=> emailForCv.textContent = document.getElementById(target).value;