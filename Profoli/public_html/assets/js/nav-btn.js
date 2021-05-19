let btn = document.getElementById('btnNav');
let navi = document.getElementById('navi');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    navi.classList.toggle('active');
})