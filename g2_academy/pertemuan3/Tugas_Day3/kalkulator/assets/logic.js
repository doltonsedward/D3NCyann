let autoFill = (target)=> document.calc.output.value += target,
    equal = ()=> {
        let valEqual = document.getElementById('valueEqual');
        valEqual.innerHTML = eval(calc.output.value);
    }

function del() {
    document.calc.output.value = document.calc.output.value.slice(0, -1);
}