// function changeName(event) {
//     let nameForCv = document.getElementById('nameForCv');
//     let cvName = document.getElementById('cvName');

//     return nameForCv.innerHTML = cvName.value;
// }

let inputSubmit = document.getElementById('inputSubmit');
let nameForCv = document.getElementById('nameForCv');
let cvName = document.getElementById('cvName');

cvName.addEventListener('input', (evt) => {
    nameForCv.textContent = evt.currentTarget.value;
})