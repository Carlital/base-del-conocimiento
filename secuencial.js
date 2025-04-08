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

    window.resolverEjercicio1 = function(event) {
        event.preventDefault();
    
        const altura = parseFloat(document.getElementById("altura").value);
        const sombra = parseFloat(document.getElementById("sombra").value);
    
        // Validación: Verificar si se ingresaron números válidos
        if (isNaN(altura) || isNaN(sombra)) {
            document.getElementById("resultado1").innerHTML = `<p style="color: red;">Por favor, llene ambos campos con valores numéricos.</p>`;
            document.getElementById("altura").value = "";
            document.getElementById("sombra").value = "";
            return;
        }
        const anguloRad = Math.atan(altura / sombra);
        const anguloDeg = anguloRad * (180 / Math.PI);
        const grados = Math.floor(anguloDeg);
        const minutosDecimal = (anguloDeg - grados) * 60;
        const minutos = Math.floor(minutosDecimal);
        const segundos = Math.round((minutosDecimal - minutos) * 60);
        document.getElementById("resultado1").innerHTML = `
            <p>El ángulo de incidencia del sol es:</p>
            <p>${grados} grados ${minutos} minutos ${segundos} segundos.</p>
        `;
        document.getElementById("altura").value = "";
        document.getElementById("sombra").value = "";
    };
    
    document.getElementById("formEjercicio1").addEventListener("submit", resolverEjercicio1);
    

    window.resolverEjercicio2 = function(event) {
        event.preventDefault();

        const lado1 = parseFloat(document.getElementById("lado1").value);
        const lado2 = parseFloat(document.getElementById("lado2").value);
        const lado3 = parseFloat(document.getElementById("lado3").value);
        if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
            document.getElementById("resultado2").innerHTML =`<p style="color: red;">Por favor, llene los campos.</p>`;
            document.getElementById("lado1").value="";
            document.getElementById("lado2").value="";
            document.getElementById("lado3").value="";
            return;
        }
        if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0 || lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
            document.getElementById("resultado2").innerHTML =`<p style="color: red;">Por favor, asegúrese de que sea un triangulo, esto no lo es.</p>`;
            document.getElementById("lado1").value="";
            document.getElementById("lado2").value="";
            document.getElementById("lado3").value="";
            return;
        }
        const s = (lado1 + lado2 + lado3) / 2;
        const area = Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3));
        document.getElementById("resultado2").innerHTML = `<p>El área del triángulo es: ${area.toFixed(2)} unidades cuadradas.</p>`;
        document.getElementById("lado1").value="";
        document.getElementById("lado2").value="";
        document.getElementById("lado3").value="";
    };
    document.getElementById("formEjercicio2").addEventListener("submit", resolverEjercicio2);

    window.resolverEjercicio3 = function(event) {
        event.preventDefault();
    
        const numero = parseInt(document.getElementById("numero").value);
        if (isNaN(numero)) {
            document.getElementById("resultado3").innerHTML =`<p style="color: red;">Por favor, ingrese un número válido en el campo.</p>`;
            document.getElementById("numero").value = "";
            return;
        }
        let raizCuadrada;
        if (numero < 0) {
            document.getElementById("resultado3").innerHTML = `
                <p>Antecesor: ${numero - 1}</p>
                <p>Sucesor: ${numero + 1}</p>
                <p>No existe raíz cuadrada real para números negativos.</p>
                <p>Cantidad de cifras: ${numero.toString().length}</p>
            `;
            document.getElementById("numero").value = "";
            return;
        } else {
            raizCuadrada = Math.floor(Math.sqrt(numero));
        }
        const antecesor = numero - 1;
        const sucesor = numero + 1;
        const cifras = numero.toString().length;
    
        document.getElementById("resultado3").innerHTML = `
            <p>Antecesor: ${antecesor}</p>
            <p>Sucesor: ${sucesor}</p>
            <p>Parte entera de la raíz cuadrada: ${raizCuadrada}</p>
            <p>Cantidad de cifras: ${cifras}</p>
        `;
        document.getElementById("numero").value = "";
    };
    
    document.getElementById("formEjercicio3").addEventListener("submit", resolverEjercicio3);    

    window.resolverEjercicio4 = function(event) {
        event.preventDefault();

        const horas = parseFloat(document.getElementById("horas").value);
        const tarifa = parseFloat(document.getElementById("tarifa").value);
        const tasa = parseFloat(document.getElementById("tasa").value);
        if (isNaN(horas) || isNaN(tarifa) || isNaN(tasa) || horas <= 0 || tarifa <= 0 || tasa < 0) {
            alert("Por favor, ingrese valores numéricos válidos mayores que cero para Horas, Tarifa y Tasa de Impuestos.");
            document.getElementById("horas").value="";
            document.getElementById("tarifa").value="";
            document.getElementById("tasa").value="";
            return;
        }
        const pagaBruta = horas * tarifa;
        const impuestos = pagaBruta * (tasa / 100);
        const pagaNeta = pagaBruta - impuestos;
        document.getElementById("resultado4").innerHTML = `
            <p>Paga Bruta: ${pagaBruta.toFixed(2)}</p>
            <p>Impuestos: ${impuestos.toFixed(2)}</p>
            <p>Paga Neta: ${pagaNeta.toFixed(2)}</p>
        `;
        document.getElementById("horas").value="";
        document.getElementById("tarifa").value="";
        document.getElementById("tasa").value="";
    };
    document.getElementById("formEjercicio4").addEventListener("submit", resolverEjercicio4);

    window.resolverEjercicio5 = function(event) {
        event.preventDefault();

        const capitalInicial = parseFloat(document.getElementById("capitalInicial").value);
        const tasaInteres = parseFloat(document.getElementById("tasaInteres").value);
        const tiempo = parseFloat(document.getElementById("tiempo").value);
        if (isNaN(capitalInicial) || isNaN(tasaInteres) || isNaN(tiempo) || capitalInicial <= 0 || tasaInteres < 0 || tiempo <= 0) {
            alert("Por favor, ingrese valores numéricos válidos mayores que cero para Capital Inicial, Tasa de Interés y Tiempo.");
            document.getElementById("capitalInicial").value="";
            document.getElementById("tasaInteres").value="";
            document.getElementById("tiempo").value="";
            return;
        }
        const capitalFinal = capitalInicial * (1 + (tasaInteres / 100) * tiempo);
        document.getElementById("resultado5").innerHTML = `<p>El capital final es: ${capitalFinal.toFixed(2)}</p>`;
        document.getElementById("capitalInicial").value="";
        document.getElementById("tasaInteres").value="";
        document.getElementById("tiempo").value="";
    };
    document.getElementById("formEjercicio5").addEventListener("submit", resolverEjercicio5);

});