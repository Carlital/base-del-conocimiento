document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".product");
    const ejerciciosForms = document.querySelectorAll(".ejercicio-form");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const ejercicioId = button.getAttribute("data-ejercicio");
            ejerciciosForms.forEach(form => form.style.display = "none");
            document.getElementById(ejercicioId).style.display = "block";
        });
    });

    window.resolverEjercicio11 = function(event) {
        event.preventDefault();
        const casos = {};
        function obtenerDigitosCombinados(num1, num2) {
            return (num1.toString() + num2.toString()).split('').sort().join('');
        }
        for (let i = 10; i < 100; i++) {
            for (let j = i; j < 100; j++) {
                let multiplicacionNormal = i * j;
                let multiplicacionInversa = parseInt(i.toString().split('').reverse().join('')) * parseInt(j.toString().split('').reverse().join(''));
                if (multiplicacionNormal === multiplicacionInversa) {
                    let digitosCombinados = obtenerDigitosCombinados(i, j);
                    if (!casos[digitosCombinados]) {
                        casos[digitosCombinados] = {};
                    }
                    if (!casos[digitosCombinados][multiplicacionNormal]) {
                        casos[digitosCombinados][multiplicacionNormal] = [];
                    }
                    casos[digitosCombinados][multiplicacionNormal].push(`${i} x ${j} = ${multiplicacionNormal}`);
                }
            }
        }
        let html = '<div class="resultados-container">';
        let casoCount = 1;
        for (let digitos in casos) {
            for (let resultado in casos[digitos]) {
                if (casos[digitos][resultado].length > 1) {
                    html += `<div class="resultado">
                                <p>n${casoCount}: ${casos[digitos][resultado].join(' y ')}</p>
                            </div>`;
                    casoCount++;
                }
            }
        }
        html += '</div>';
        document.getElementById("resultado11").innerHTML = html;
    };
    document.getElementById("formEjercicio11").addEventListener("submit", resolverEjercicio11);
               

    window.resolverEjercicio12 = function(event) {
        event.preventDefault();
        let resultados = [];
        for (let num = 1200; num <= 2000; num++) {
            if (contarDivisores(num) == 4) {
                let divisores = obtenerDivisores(num);
                if (divisores.includes(1) && divisores.includes(5)) {
                    let tienePrimo = false;
                    for (let i = 2; i < num; i++) {
                        if (esPrimo(i) && num % i == 0) {
                            tienePrimo = true;
                            break;
                        }
                    }
                    if (tienePrimo) {
                        resultados.push({ numero: num, divisores: divisores });
                    }
                }
            }
        }
        if (resultados.length > 0) {
            let htmlResultados = '<div class="resultados-container">';
            resultados.forEach((resultado, index) => {
                if (index % 2 == 0) {
                    htmlResultados += '<div class="resultado">';
                }
                htmlResultados += `<p>${resultado.numero}: Divisores [${resultado.divisores.join(', ')}]</p>`;
                if (index % 2 != 0 || index == resultados.length - 1) {
                    htmlResultados += '</div>';
                }
            });
            htmlResultados += '</div>';
            document.getElementById("resultado12").innerHTML = htmlResultados;
        } else {
            document.getElementById("resultado12").innerHTML = '<p>No se encontraron números que cumplan con las condiciones especificadas.</p>';
        }
    };
    
    function esPrimo(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }
    function contarDivisores(num) {
        let count = 0;
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                if (num / i === i) {
                    count++;
                } else {
                    count += 2;
                }
            }
        }
        return count;
    }
    function obtenerDivisores(num) {
        let divisores = [];
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                divisores.push(i);
                if (i !== num / i) {
                    divisores.push(num / i);
                }
            }
        }
        divisores.sort((a, b) => a - b);
        return divisores;
    }
    document.getElementById("formEjercicio12").addEventListener("submit", resolverEjercicio12);
    
    
    window.resolverEjercicio13 = function(event) {
        event.preventDefault();
        const num = parseInt(document.getElementById("elementoFibonacci").value);
        if (isNaN(num)) {
            document.getElementById("resultado13").innerHTML = `<p style="color: red;">Por favor, completa el campo.</p>`;
            return;
        }
        function fibonacci(n) {
            if (n <= 1) return n;
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    
        const serie = [];
        for (let i = 0; i < num; i++) {
            serie.push(fibonacci(i));
        }
        document.getElementById("resultado13").innerHTML = `Serie Fibonacci (${num} elementos): ${serie.join(', ')}`;
        document.getElementById("elementoFibonacci").value = "";
    };
    
    document.getElementById("formEjercicio13").addEventListener("submit", resolverEjercicio13);
    


    window.resolverEjercicio14 = function(event) {
        event.preventDefault();
    
        let totalCaracteres = 0;
        let totalVocales = 0;
        let palabrasCortas = 0;
        let cadenaTotal = '';
    
        function contarVocales(cadena) {
            const vocales = 'aeiouAEIOU';
            return [...cadena].filter(letra => vocales.includes(letra)).length;
        }
    
        const cadena = document.getElementById("texto").value.trim(); 
        if (cadena == '') {
            document.getElementById("resultado14").innerHTML = `<p style="color: red;">Has introducido una cadena vacía. Por favor, sigue introduciendo texto.</p>`;
            return;
        } else {
            const cadenaSinEspacios = cadena.replace(/\s/g, '');
            if (cadena.length < 3) {
                palabrasCortas++;
            } else {
                totalCaracteres += cadenaSinEspacios.length;
                totalVocales += contarVocales(cadenaSinEspacios);
                cadenaTotal += cadena.split('').reverse().join('') + ' ';
    
                if (totalVocales > 50) {
                    document.getElementById("resultado14").innerHTML = `<p style="color: red;">Alcanzaste más de 50 vocales</p>`;
                    return;
                } else {
                    document.getElementById("resultado14").innerHTML = `
                        Número de caracteres: ${totalCaracteres}<br>
                        Número de vocales: ${totalVocales}<br>
                        Palabras de menos de tres caracteres: ${palabrasCortas}<br>
                        Cadena total leída al revés: ${cadenaTotal}
                    `;
                }
            }
        }
        document.getElementById("texto").value = "";
    };
    
    document.getElementById("formEjercicio14").addEventListener("submit", resolverEjercicio14);
    


});