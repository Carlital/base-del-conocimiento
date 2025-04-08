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

    window.resolverEjercicio6 = function(event) {
        event.preventDefault();
        const nota = parseFloat(document.getElementById("nota").value);
        let categoria;
        if (isNaN(nota)) {
            document.getElementById("resultado6").innerHTML = `<p style="color: red;">Por favor, completa todos los campos.</p>`;
            return;
        }
        if (nota >= 95 && nota <= 100) {
            categoria = "Excelente";
        } else if (nota >= 90 && nota < 95) {
            categoria = "Muy Bien";
        } else if (nota >= 80 && nota < 90) {
            categoria = "Bien";
        } else if (nota >= 60 && nota < 80) {
            categoria = "Regular";
        } else if (nota >= 0 && nota < 60) {
            categoria = "Insuficiente";
        } else {
            document.getElementById("resultado6").innerHTML = `<p style="color: red;">Nota inválida, fuera de rango entre 0 y 100</p>`;
            return;
        }
        document.getElementById("resultado6").innerHTML = `<p>La categoría es: ${categoria}</p>`;
        
        document.getElementById("formEjercicio6").reset();
    };
    document.getElementById("formEjercicio6").addEventListener("submit", resolverEjercicio6);

    window.resolverEjercicio7 = function(event) {
        event.preventDefault();
        const numero = parseInt(document.getElementById("numeroClasificar").value);
        if (isNaN(numero)) {
            document.getElementById("resultado7").innerHTML = `<p style="color: red;">Por favor, completa todos los campos.</p>`;
            return;
        }
        const positivoNegativo = numero >= 0 ? "positivo" : "negativo";
        const parImpar = numero % 2 == 0 ? "par" : "impar";
        const multiplo5 = numero % 5 == 0 ? "múltiplo de 5" : "no es múltiplo de 5";
        const multiplo10 = numero % 10 == 0 ? "múltiplo de 10" : "no es múltiplo de 10";
        const mayorMenor100 = numero > 100 ? "mayor que 100" : "menor que 100";
        document.getElementById("resultado7").innerHTML = `
            <p>${numero} es ${positivoNegativo}</p>
            <p>${numero} es ${parImpar}</p>
            <p>${numero} ${multiplo5}</p>
            <p>${numero} ${multiplo10}</p>
            <p>${numero} es ${mayorMenor100}</p>
        `;
        
        document.getElementById("formEjercicio7").reset();
    };
    document.getElementById("formEjercicio7").addEventListener("submit", resolverEjercicio7);

    window.resolverEjercicio8 = function(event) {
        event.preventDefault();
        const a = parseFloat(document.getElementById("coefA").value);
        const b = parseFloat(document.getElementById("coefB").value);
        const c = parseFloat(document.getElementById("coefC").value);
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            document.getElementById("resultado8").innerHTML = `<p style="color: red;">Por favor, completa todos los campos.</p>`;
            return;
        }else if((a==0 && b == 0 && c==0)){
            document.getElementById("resultado8").innerHTML = "<p style='color: red;'>No tiene una solución real</p>";
            return;
        }else if ((b == 0 && c==0)||(a == 0 && b==0)||(a == 0 && c==0)) {
            document.getElementById("resultado8").innerHTML = "<p style='color: red;'>Dos coeficientes no pueden ser 0 al mismo tiempo. No tiene una solución real</p>";
            return;
        }else if (a == 0) {
            document.getElementById("resultado8").innerHTML = "<p style='color: red;'>El coeficiente [a] deben ser distinto de 0. Esto es una ecuación lineal</p>";
            return;
        }
        const discriminante = b * b - 4 * a * c;
        let resultado;
        if (discriminante > 0) {
            const raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
            const raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
            resultado = `<p>Las raíces son: ${raiz1.toFixed(2)} y ${raiz2.toFixed(2)}</p>`;
        } else if (discriminante == 0) {
            const raiz = -b / (2 * a);
            resultado = `<p>La raíz doble es: ${raiz.toFixed(2)}</p>`;
        } else {
            resultado = "<p>No hay raíces reales.</p>";
        }
        document.getElementById("resultado8").innerHTML = resultado;
        
        document.getElementById("formEjercicio8").reset();
    };
    document.getElementById("formEjercicio8").addEventListener("submit", resolverEjercicio8);

    window.resolverEjercicio9 = function(event) {
        event.preventDefault();
        const km = parseFloat(document.getElementById("kmRecorridos").value);
        if (isNaN(km)) {
            document.getElementById("resultado9").innerHTML = `<p style="color: red;">Por favor, completa todos los campos.</p>`;
            return;
        }
        let costo;
        if (km < 300) {
            document.getElementById("resultado9").innerHTML = `<p style="color: red;">Ingrese un número válido entre 300 y 300.000`;
            return;
        }
        if (km == 300) {
            costo = 300000;
        } else if ((km>300)||(km <= 1000)) {
            costo = 300000 + (km - 300) * 15000;
        } else {
            costo = 300000 + (700 * 15000) + (km - 1000) * 10000;
        }
        const iva = costo * 0.2;
        const total = costo + iva;
        const costoFormateado = costo.toLocaleString('es', { minimumFractionDigits: 2 });
        const ivaFormateado = iva.toLocaleString('es', { minimumFractionDigits: 2 });
        const totalFormateado = total.toLocaleString('es', { minimumFractionDigits: 2 });

        document.getElementById("resultado9").innerHTML = `
            <p>Monto sin IVA: $${costoFormateado}</p>
            <p>IVA del 20%: $${ivaFormateado}</p>
            <p>Total a pagar: $${totalFormateado}</p>
        `;
        
        document.getElementById("formEjercicio9").reset();
    };
    document.getElementById("formEjercicio9").addEventListener("submit", resolverEjercicio9);

    window.resolverEjercicio10 = function(event) {
        event.preventDefault();
        const dia = parseInt(document.getElementById("diaNacimiento").value);
        const mes = parseInt(document.getElementById("mesNacimiento").value);
        const anio = parseInt(document.getElementById("anioNacimiento").value);
        if (isNaN(dia) || isNaN(mes) || isNaN(anio)){
            document.getElementById("resultado10").innerHTML =`<p style="color: red;">Por favor, completa todos los campos.</p>`;
            document.getElementById("diaNacimiento").value="";
            document.getElementById("mesNacimiento").value="";
            document.getElementById("anioNacimiento").value="";
            return;
        }
        const fechaNacimiento = new Date(anio, mes - 1, dia);
        if (fechaNacimiento.getDate() != dia || fechaNacimiento.getMonth() + 1 != mes || fechaNacimiento.getFullYear() != anio) {
            document.getElementById("resultado10").innerHTML = `<p style="color: red;">La fecha ingresada no es válida.</p>`;
            document.getElementById("diaNacimiento").value="";
            document.getElementById("mesNacimiento").value="";
            document.getElementById("anioNacimiento").value="";
            return;
        }
        const hoy = new Date();
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const mesDiferencia = hoy.getMonth() - fechaNacimiento.getMonth();
        if (mesDiferencia < 0 || (mesDiferencia == 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }
        if (fechaNacimiento > hoy) {
            document.getElementById("resultado10").innerHTML = `<p style="color: red;">La fecha de nacimiento no puede ser mayor que la fecha actual.</p>`;
            return;
        }
        document.getElementById("resultado10").innerHTML = `<p>La edad es: ${edad} años.</p>`;
        document.getElementById("diaNacimiento").value="";
        document.getElementById("mesNacimiento").value="";
        document.getElementById("anioNacimiento").value="";
    };
    document.getElementById("formEjercicio10").addEventListener("submit", resolverEjercicio10);
});