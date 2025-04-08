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

    // Ejercicio 15: Interfaz de voz
    window.resolverEjercicio15 = function(event) {
        event.preventDefault();
    
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'es-ES';
    
        recognition.onstart = function() {
            document.getElementById("resultado15").innerHTML = "<p>Escuchando...</p>";
            document.getElementById("detenerBoton").style.display = 'inline-block';
        };
    
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            document.getElementById("resultado15").innerHTML = `<p>Usted dijo: ${transcript}</p>`;
            document.getElementById("detenerBoton").style.display = 'none';
        };
    
        recognition.start();
        document.getElementById("detenerBoton").addEventListener("click", function() {
            recognition.stop();
            document.getElementById("resultado15").innerHTML = "<p>Reconocimiento de voz detenido.</p>";
        });
    };
    
    document.getElementById("formEjercicio15").addEventListener("submit", resolverEjercicio15);
    
    

    // Ejercicio 16: Contar frecuencias de letras
    window.resolverEjercicio16 = function(event) {
        event.preventDefault();

        const oracion = document.getElementById("oracion").value.toUpperCase();
        if (oracion == '') {
            document.getElementById("resultado16").innerHTML = `<p style="color: red;">Has introducido una cadena vacía. Por favor, sigue introduciendo texto.</p>`;
            return;
        }
        const frecuencias = {};
        for (let letra of oracion) {
            if (letra.match(/[A-Z]/)) {
                frecuencias[letra] = (frecuencias[letra] || 0) + 1;
            }
        }
        let resultado = "<table><tr><th>Letra</th><th>Frecuencia</th></tr>";
        Object.keys(frecuencias).forEach(letra => {
            resultado += `<tr><td>${letra}</td><td>${frecuencias[letra]}</td></tr>`;
        });
        resultado += "</table>";
        document.getElementById("resultado16").innerHTML = resultado;
        document.getElementById("oracion").value="";
    };
    document.getElementById("formEjercicio16").addEventListener("submit", resolverEjercicio16);

    window.addEventListener('DOMContentLoaded', () => {
        const girarRuleta = document.getElementById('girarRuleta');
        const completarDesafio = document.getElementById('completarDesafio');
        const seccionRuleta = document.getElementById('seccionRuleta');
        const desafio = document.getElementById('desafio');
        const puntosDisplay = document.getElementById('puntos');
        const ruleta = document.getElementById('ruleta');
        
        // Array de desafíos
        const desafios = [
            "Pregunta de Trivia: ¿Cuál es la capital de Francia?",
            "Desafío Creativo: Dibuja un gato en 30 segundos.",
            "Pregunta de Cultura General: ¿Qué es el ADN?",
            "Desafío de Reto: Canta una canción de tu elección.",
            "Pregunta de Matemáticas: ¿Cuánto es 5 + 7?",
            "Desafío de Memoria: Recita un poema corto.",
            "Pregunta de Historia: ¿Quién fue el primer presidente de los EE. UU.?",
            "Desafío de Movimiento: Haz 10 flexiones.",
            "Pregunta de Ciencia: ¿Qué es la fotosíntesis?",
            "Desafío de Cocina: Describe tu plato favorito.",
            "Pregunta de Literatura: ¿Quién escribió 'Cien años de soledad'?",
            "Desafío de Agilidad Mental: Resuelve el rompecabezas de 5 piezas en menos de 1 minuto.",
            "Desafío de Reflexión: Escribe una breve reflexión sobre lo que significa la amistad.",
            "Pregunta de Geografía: ¿Cuál es el río más largo del mundo?",
            "Desafío de Imaginación: Crea una historia corta en 3 frases.",
            "Desafío de Relajación: Realiza una meditación de 2 minutos.",
            "Pregunta de Tecnología: ¿Qué es un 'algoritmo'?",
            "Desafío de Habilidad: Haz una torre de 10 bloques con los ojos cerrados.",
            "Desafío de Ritmo: Imita el ritmo de una canción popular usando solo las palmas de tus manos.",
            "Pregunta de Arte: ¿Cuál es el pintor famoso por 'La noche estrellada'?",
            "Desafío de Reacción: Toma una foto de algo que te inspire en menos de 2 minutos.",
            "Desafío de Expresión: Haz una mueca divertida y mantenla durante 10 segundos.",
            "Pregunta de Biología: ¿Cómo se llama el órgano que bombea sangre en el cuerpo humano?",
            "Desafío de Dibujo: Dibuja tu animal favorito con solo 5 líneas.",
            "Desafío de Historia: Enumera 3 inventos de Leonardo da Vinci.",
            "Pregunta de Matemáticas: ¿Cuál es el cuadrado de 12?",
            "Desafío de Movimiento: Baila durante 1 minuto con la música de tu elección.",
            "Desafío de Creatividad: Crea un pequeño poema sobre el mar.",
            "Pregunta de Física: ¿Qué es la gravedad?",
            "Desafío de Sorpresa: Envía un mensaje positivo a un amigo o familiar.",
            "Desafío de Palabras: Escribe una palabra que rime con 'sol' y úsala en una oración."
        ];
        
        let puntos = 0;
    
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    
        girarRuleta.addEventListener('click', () => {
            // Genera un número aleatorio entre 0 y 9
            const numeroAleatorio = Math.floor(Math.random() * desafios.length);
    
            // Establece el número en el centro de la ruleta
            seccionRuleta.textContent = numeroAleatorio;
    
            // Muestra el desafío correspondiente
            desafio.innerHTML = `<p>${desafios[numeroAleatorio]}</p>`;
    
            // Cambia el color de la ruleta
            ruleta.style.backgroundColor = getRandomColor();
    
            // Muestra el botón para confirmar el desafío
            completarDesafio.style.display = 'block';
        });
    
        completarDesafio.addEventListener('click', () => {
            // Incrementa los puntos
            puntos++;
            puntosDisplay.textContent = `Puntos: ${puntos}`;
    
            // Oculta el botón de confirmar y limpia el desafío
            completarDesafio.style.display = 'none';
            desafio.innerHTML = '<p>¡Desafío completado! Gira la ruleta nuevamente para un nuevo desafío.</p>';
        });
    });
    
    
    // Ejercicio 18: Transformar a Morse
    const morseCode = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
        'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
        'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
        '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.'
    };
    window.resolverEjercicio18 = function(event) {
        event.preventDefault();
        const maxLength = 20;

        const cadena = document.getElementById("cadenaMorse").value.toUpperCase();
        if (cadena == '') {
            document.getElementById("resultado16").innerHTML = `<p style="color: red;">Por favor, llena el campo.</p>`;
            return;
        }
        if (cadena.length > maxLength) {
            document.getElementById("resultado18").innerHTML = `<p style="color: red;">La cadena es demasiado larga. Máximo ${maxLength} caracteres.</p>`;
            return;
        }
        const resultado = cadena.split('').map(caracter => morseCode[caracter] || caracter).join(' ');
        document.getElementById("resultado18").innerHTML = `<p>${resultado}</p>`;
        document.getElementById("cadenaMorse").value="";
    };
    document.getElementById("formEjercicio18").addEventListener("submit", resolverEjercicio18);

    window.resolverEjercicio19 = function(event) {
        event.preventDefault();
    
        const productos = [];
        const numProductos = parseInt(document.getElementById("productosInput").value);
    
        if (isNaN(numProductos) || numProductos <= 0) {
            alert("Por favor, ingresa un número válido de productos.");
            return;
        }
        document.getElementById('resultados').classList.remove('oculto');
    
        for (let i = 0; i < numProductos; i++) {
            const ventas = Array.from({ length: 5 }, () => Math.floor(Math.random() * 7));
            const diaConCero = Math.floor(Math.random() * 5);
            ventas[diaConCero] = 0;
    
            const producto = {
                nombre: `Producto ${i + 1}`,
                ventas: ventas
            };
            productos.push(producto);
        }
    
        const tabla = document.getElementById('ventasTabla').getElementsByTagName('tbody')[0];
        tabla.innerHTML = '';
    
        let productosNoVendidosMiercoles = [];
    
        productos.forEach(p => {
            const fila = tabla.insertRow();
            fila.insertCell().textContent = p.nombre;
            fila.insertCell().textContent = p.ventas.reduce((a, b) => a + b, 0);
    
            if (p.ventas[2] === 0) {
                productosNoVendidosMiercoles.push(p);
            }
        });
    
        const noVendidosMiercoles = document.getElementById('noVendidosMiercoles');
        const graficosNoVendidosMiercoles = document.getElementById('graficosNoVendidosMiercoles');
        const noVendidosContainer = document.getElementById('noVendidosContainer');
    
        if (productosNoVendidosMiercoles.length > 0) {
            noVendidosMiercoles.textContent = productosNoVendidosMiercoles.map(p => p.nombre).join(', ');
            noVendidosContainer.classList.remove('oculto');
            noVendidosContainer.style.height = 'auto';
        } else {
            noVendidosMiercoles.textContent = 'Ningún producto tuvo ventas igual a cero el miércoles.';
            noVendidosContainer.style.height = '50px';
            noVendidosContainer.classList.remove('oculto');
        }
    
        const actualizarGraficoVentasDiarias = () => {
            const ventasDiarias = [0, 0, 0, 0, 0]; 
    
            productos.forEach(p => {
                p.ventas.forEach((venta, index) => {
                    ventasDiarias[index] += venta;
                });
            });
    
            const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
            dias.forEach((dia, index) => {
                const barra = document.getElementById(`bar-${dia}`);
                const altura = Math.min(ventasDiarias[index] * 15, 300);
                barra.style.height = `${altura}px`;
                barra.querySelector('.precio').textContent = `${ventasDiarias[index]}`;
                barra.querySelector('.precio').style.top = `-${Math.min(altura, 10) + 15}px`;
    
                barra.style.backgroundColor = ventasDiarias[index] == 0 ? 'gray' : `hsl(${(ventasDiarias[index] / 20) * 120}, 70%, 50%)`;
            });
        };
    
        const actualizarGraficosNoVendidosMiercoles = () => {
            graficosNoVendidosMiercoles.innerHTML = '';
    
            productosNoVendidosMiercoles.forEach(producto => {
                const grafico = document.createElement('div');
                grafico.classList.add('grafico-barra');
    
                const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
                dias.forEach((dia, index) => {
                    const barra = document.createElement('div');
                    barra.classList.add('barra');
                    const altura = Math.min(producto.ventas[index] * 15, 300);
                    barra.style.height = `${altura}px`;
                    barra.innerHTML = `<span class="precio">${producto.ventas[index]}</span><span class="dia">${dia.charAt(0).toUpperCase() + dia.slice(1)}</span>`;
                    barra.querySelector('.precio').style.top = `-${Math.min(altura, 10) + 15}px`;
                    barra.style.backgroundColor = producto.ventas[index] == 0 ? '#FF5722' : `hsl(${(producto.ventas[index] / 20) * 120}, 70%, 50%)`;
                    grafico.appendChild(barra);
                });
    
                graficosNoVendidosMiercoles.appendChild(grafico);
            });
        };
    
        const actualizarComboboxProductos = () => {
            const productoSelect = document.getElementById('productoSelect');
            productoSelect.innerHTML = '';
            productos.forEach((producto, index) => {
                const option = document.createElement('option');
                option.value = index;
                option.text = producto.nombre;
                productoSelect.appendChild(option);
            });
        };
    
        const mostrarGraficoProductoSeleccionado = () => {
            const productoSelect = document.getElementById('productoSelect');
            const productoSeleccionadoIndex = parseInt(productoSelect.value);
            const productoSeleccionado = productos[productoSeleccionadoIndex];
            const graficoProductoSeleccionado = document.getElementById('graficoProductoSeleccionado');
            graficoProductoSeleccionado.innerHTML = '';
    
            const grafico = document.createElement('div');
            grafico.classList.add('grafico-barra');
    
            const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
            dias.forEach((dia, index) => {
                const barra = document.createElement('div');
                barra.classList.add('barra');
                const altura = Math.min(productoSeleccionado.ventas[index] * 15, 300);
                barra.style.height = `${altura}px`;
                barra.innerHTML = `<span class="precio">${productoSeleccionado.ventas[index]}</span><span class="dia">${dia.charAt(0).toUpperCase() + dia.slice(1)}</span>`;
                barra.querySelector('.precio').style.top = `-${Math.min(altura, 10) + 15}px`;
                barra.style.backgroundColor = productoSeleccionado.ventas[index] == 0 ? '#FF5722' : `hsl(${(productoSeleccionado.ventas[index] / 20) * 120}, 70%, 50%)`;
                grafico.appendChild(barra);
            });
    
            graficoProductoSeleccionado.appendChild(grafico);
        };
    
        actualizarComboboxProductos();
        actualizarGraficoVentasDiarias();
        actualizarGraficosNoVendidosMiercoles();
        mostrarGraficoProductoSeleccionado();
        document.getElementById('productoSelect').addEventListener('change', mostrarGraficoProductoSeleccionado);
        document.getElementById("productosInput").value="";
    };
    
    document.getElementById('formProductos').addEventListener('submit', window.resolverEjercicio19);
    
    
    
});
