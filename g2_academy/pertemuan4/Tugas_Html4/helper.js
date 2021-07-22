var outputGanjil = document.getElementById('outputGanjil');
var outputGenap = document.getElementById('outputGenap');
var outputPrima = document.getElementById('outputPrima');
var outputKabisat = document.getElementById('outputKabisat');
var outputDay = document.getElementById('outputDay');

(function() {
    for (let i = 1; i <= 30; i++) {
        if (i % 2 === 1) {
            var span = document.createElement('span');
            var teks = document.createTextNode(`${i}, `);
            span.appendChild(teks);
            outputGanjil.appendChild(span);
        } 
        if (i % 2 === 0) {
            var span = document.createElement('span');
            var teks = document.createTextNode(`${i}, `);
            span.appendChild(teks);
            outputGenap.appendChild(span);
        }
    }

    for (var i = 2; i <= 30; i++) {
        var notprime = false
        for (var num = 2; num <= i; num++) {
            if (i % num === 0 && num !== i) {
                notprime = true
            } 
        }
        if (notprime === false) {
            var span = document.createElement('span');
            var teks = document.createTextNode(`${i}, `);
            span.appendChild(teks);
            outputPrima.appendChild(span);
        }
    }

    var myInput = parseInt(prompt('Tuliskan tahun : '));
    if (myInput % 4 === 0) {
        var span = document.createElement('span');
        var teks = document.createTextNode(`${myInput} adalah tahun kabisat`);
        span.appendChild(teks);
        outputKabisat.appendChild(span);
    } else {
        var span = document.createElement('span');
        var teks = document.createTextNode(`${myInput} bukan tahun kabisat`);
        span.appendChild(teks);
        outputKabisat.appendChild(span);
    }

    for (let year = 1998; year <= 2024; year++) {
        var d = new Date(year, 2, 12);
        var span = document.createElement('span');
        var teks = document.createTextNode(`${year}, `);
        span.appendChild(teks);
        
        if (d.getDay() === 2) {
            outputDay.appendChild(span);
        }
    }
})();