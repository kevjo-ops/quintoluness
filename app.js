/*function busquedalineal(arr,elemento){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===elemento){
            return i;
        }
    }
    return -1;
}

const arreglo=[10,2,3,8,4,9,7];
const elementobuscado=7;
const indice= busquedalineal(arreglo,elementobuscado);
console.log(`El elemento ${elementobuscado} se encuentra en el indice ${indice}`)*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(pregunta) {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
        });
    });
}

function mostrarDespacio(texto, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(texto);
            resolve();
        }, delay);
    });
}

/* EJERCICIO 1: Sumar elementos de un array */
async function sumarElementos() {
    await mostrarDespacio("Ejercicio 1: Sumar elementos de un array", 1000);
    const resultado = [1, 2, 3, 4].reduce((acc, num) => acc + num, 0);
    await mostrarDespacio("Suma de los elementos: " + resultado, 1000);
    console.log("--------------");
}

/* EJERCICIO 2: Número mayor y menor */
async function mayorMenor() {
    await mostrarDespacio("Ejercicio 2: Número mayor y menor", 1000);
    const mayor = Math.max(...[1, 2, 3, 4, 5]);
    const menor = Math.min(...[1, 2, 3, 4, 5]);
    await mostrarDespacio("Mayor: " + mayor + ", Menor: " + menor, 1000);
    console.log("--------------");
}

/* EJERCICIO 3: Contar elementos pares */
async function contarPares() {
    await mostrarDespacio("Ejercicio 3: Contar elementos pares", 1000);
    let contador = 0;
    [1, 2, 3, 4, 5, 6].forEach(num => {
        if (num % 2 === 0) {
            contador++;
        }
    });
    await mostrarDespacio("Número de elementos pares: " + contador, 1000);
    console.log("--------------");
}

/* EJERCICIO 4: Ordenar un array (sin usar .sort()) */
async function ordenarArray() {
    await mostrarDespacio("Ejercicio 4: Ordenar un array", 1000);
    let arr = [5, 3, 8, 1, 2];
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Intercambio
            }
        }
    }
    await mostrarDespacio("Array ordenado: " + arr.join(", "), 1000);
    console.log("--------------");
}

/* EJERCICIO 5: Buscar un elemento */
async function buscarElemento() {
    await mostrarDespacio("Ejercicio 5: Buscar un elemento", 1000);
    const index = ["Ana", "Pedro", "Juan"].indexOf("Pedro");
    if (index !== -1) {
        await mostrarDespacio("El nombre se encuentra en la posición: " + index, 1000);
    } else {
        await mostrarDespacio("No encontrado", 1000);
    }
    console.log("--------------");
}

/* EJERCICIO 6: Revertir un array */
async function revertirArray() {
    await mostrarDespacio("Ejercicio 6: Revertir un array", 1000);
    let arr = [1, 2, 3, 4, 5];
    let arrRevertido = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arrRevertido.push(arr[i]);
    }
    await mostrarDespacio("Array revertido: " + arrRevertido.join(", "), 1000);
    console.log("--------------");
}

/* EJERCICIO 7: Convertir nombres a mayúsculas */
async function convertirAMayusculas() {
    await mostrarDespacio("Ejercicio 7: Convertir nombres a mayúsculas", 1000);
    const nombres = ["hubert", "yojhan", "cyndel"];
    const nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());
    await mostrarDespacio("Nombres en mayúsculas: " + nombresMayusculas.join(", "), 1000);
    console.log("--------------");
}

/* EJERCICIO 8: Sumar solo los números positivos */
async function sumarPositivos() {
    await mostrarDespacio("Ejercicio 8: Sumar solo los números positivos", 1000);
    const sumaPositivos = [1, -2, 3, -4, 5].filter(num => num > 0).reduce((acc, num) => acc + num, 0);
    await mostrarDespacio("Suma de los números positivos: " + sumaPositivos, 1000);
    console.log("--------------");
}

/* EJERCICIO 9: Obtener el primer múltiplo de 5 */
async function primerMultiploCinco() {
    await mostrarDespacio("Ejercicio 9: Obtener el primer múltiplo de 5", 1000);
    const multiploCinco = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].find(num => num % 5 === 0);
    await mostrarDespacio("Primer múltiplo de 5: " + multiploCinco, 1000);
    console.log("--------------");
}

/* EJERCICIO 10: Tabla de multiplicar (con interacción) */
async function tablaMultiplicar() {
    await mostrarDespacio("Ejercicio 10: Tabla de multiplicar", 1000);
    const numero = await preguntar("Ingresa un número para ver su tabla de multiplicar: ");
    const num = parseInt(numero);

    if (!isNaN(num)) {
        let i = 1;
        while (i <= 10) {
            console.log(`${num} x ${i} = ${num * i}`);
            i++;
            await new Promise(resolve => setTimeout(resolve, 1000));  // Espera 1 segundo
        }
    } else {
        console.log("Por favor, ingresa un número válido.");
    }
    console.log("--------------");
}

/* EJERCICIO 11: Generar una secuencia de Fibonacci */
async function fibonacci() {
    await mostrarDespacio("Ejercicio 11: Generar una secuencia de Fibonacci", 1000);
    let fib = [0, 1];
    for (let i = 2; i < 10; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    await mostrarDespacio("Secuencia Fibonacci: " + fib.join(", "), 1000);
    console.log("--------------");
}

/* EJERCICIO 12: Adivinar un número */
async function adivinarNumero() {
    await mostrarDespacio("Ejercicio 12: Adivinar un número", 1000);
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    let adivinado = false;

    while (!adivinado) {
        const intento = parseInt(await preguntar("Adivina un número entre 1 y 10: "));
        if (intento === numeroAleatorio) {
            await mostrarDespacio("¡Correcto! El número era " + numeroAleatorio, 1000);
            adivinado = true;
        } else {
            await mostrarDespacio("Intenta de nuevo.", 1000);
        }
    }
    console.log("--------------");
}

/* EJERCICIO 13: Contar regresivamente desde un número */
async function cuentaRegresiva() {
    await mostrarDespacio("Ejercicio 13: Contar regresivamente desde un número", 1000);
    let numero = parseInt(await preguntar("Ingresa un número para contar hacia atrás: ")); // Cambié 'const' por 'let'
    
    while (numero >= 0) {
        await mostrarDespacio(numero, 1000);
        numero--;  // Ahora puedes decrementar el valor de la variable
    }
    console.log("--------------");
}

/* EJERCICIO 14: Validar entrada de usuario */
async function validarEntrada() {
    await mostrarDespacio("Ejercicio 14: Validar entrada de usuario", 1000);
    let numero;
    do {
        numero = parseInt(await preguntar("Ingresa un número mayor que 0: "));
    } while (numero <= 0 || isNaN(numero));
    
    await mostrarDespacio("Número válido: " + numero, 1000);
    console.log("--------------");
}

/* EJERCICIO 15: Mostrar menú hasta que el usuario salga */
async function mostrarMenu() {
    await mostrarDespacio("Ejercicio 15: Mostrar menú hasta que el usuario salga", 1000);
    let opcion;
    do {
        opcion = parseInt(await preguntar("Elige una opción:\n1. Opción 1\n2. Opción 2\n3. Salir: "));
        switch (opcion) {
            case 1:
                await mostrarDespacio("Elegiste opción 1", 1000);
                break;
            case 2:
                await mostrarDespacio("Elegiste opción 2", 1000);
                break;
            case 3:
                await mostrarDespacio("Saliendo...", 1000);
                break;
            default:
                await mostrarDespacio("Opción no válida", 1000);
        }
    } while (opcion !== 3);
    console.log("--------------");
}

/* EJERCICIO 16: Sumar solo los números impares entre 1 y 50 */
async function sumarImpares() {
    await mostrarDespacio("Ejercicio 16: Sumar solo los números impares entre 1 y 50", 1000);
    let suma = 0;
    let i = 1;

    while (i <= 50) {
        if (i % 2 !== 0) {
            suma += i;
        }
        if (suma > 500) break;
        i++;
    }
    await mostrarDespacio("Suma de impares: " + suma, 1000);
    console.log("--------------");
}

/* EJERCICIO 17: Contador de intentos */
async function contadorIntentos() {
    await mostrarDespacio("Ejercicio 17: Contador de intentos", 1000);
    let intentos = 3;

    while (intentos > 0) {
        const contraseña = await preguntar("Introduce la contraseña (3 intentos): ");
        if (contraseña === "1234") {
            await mostrarDespacio("Contraseña correcta", 1000);
            break;
        } else {
            intentos--;
            await mostrarDespacio(`Contraseña incorrecta. Te quedan ${intentos} intentos`, 1000);
        }
    }
    console.log("--------------");
}

/* EJERCICIO 18: Sumar hasta que el usuario ingrese 0 */
async function sumarHastaCero() {
    await mostrarDespacio("Ejercicio 18: Sumar hasta que el usuario ingrese 0", 1000);
    let suma = 0;
    let numero;
    do {
        numero = parseInt(await preguntar("Ingresa un número (0 para terminar): "));
        suma += numero;
    } while (numero !== 0);
    await mostrarDespacio("La suma es: " + suma, 1000);
    console.log("--------------");
}

/* EJERCICIO 19: Imprimir la serie de Fibonacci hasta que un número supere 100 */
async function mostrarFibonacciHasta100() {
    await mostrarDespacio("Ejercicio 19: Imprimir la serie de Fibonacci hasta que un número supere 100", 1000);
    let fib = [0, 1];
    let i = 2;
    while (true) {
        let siguiente = fib[i - 1] + fib[i - 2];
        if (siguiente > 100) break;
        fib.push(siguiente);
        i++;
    }
    await mostrarDespacio("Serie de Fibonacci: " + fib.join(", "), 1000);
    console.log("--------------");
}

/* EJERCICIO 20: Imprimir los múltiplos de 3 hasta 50 */
async function imprimirMultiplosDeTres() {
    await mostrarDespacio("Ejercicio 20: Imprimir los múltiplos de 3 hasta 50", 1000);
    let i = 3;
    let multiplos = [];
    while (i < 50) {
        multiplos.push(i);
        i += 3;
    }
    await mostrarDespacio("Múltiplos de 3 menores a 50: " + multiplos.join(", "), 1000);
    console.log("--------------");
}

async function ejecutarEjercicios() {
    await sumarElementos();
    await mayorMenor();
    await contarPares();
    await ordenarArray();
    await buscarElemento();
    await revertirArray();
    await convertirAMayusculas();
    await sumarPositivos();
    await primerMultiploCinco();
    await tablaMultiplicar();
    await fibonacci();
    await adivinarNumero();
    await cuentaRegresiva();
    await validarEntrada();
    await mostrarMenu();
    await sumarImpares();
    await contadorIntentos();
    await sumarHastaCero();
    await mostrarFibonacciHasta100();
    await imprimirMultiplosDeTres();
    console.log("Ejercicios completados.");
    rl.close();  // Cierra la interfaz al finalizar todos los ejercicios
}

ejecutarEjercicios();
