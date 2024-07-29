
/**
 * Autor: Franco Agustin Maure
 * Curso: Desarrollo Web, Coder House
 * Descripción: Este documento contiene un algoritmo con un condicional,
 *              un algoritmo utilizando un ciclo y un simulador interactivo.
 */

// Algoritmo con un condicional
/**
 * Función que verifica si un número es mayor que 10.
 * @param {number} number - El número a verificar.
 * @returns {string} - Mensaje indicando si el número es mayor o menor/igual que 10.
 */
function checkNumber(number) {
    if (number > 10) {
        return "El número es mayor a 10";
    }
    return "El número es 10 o menor";
}

// Algoritmo utilizando un ciclo
/**
 * Función que imprime números desde 1 hasta un límite especificado.
 * @param {number} limit - El límite hasta donde se imprimirán los números.
 */
function printNumbers(limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(i);
    }
}

// Simulador interactivo
/**
 * Función que inicia el simulador interactivo.
 * Pide al usuario su nombre y un número, luego muestra resultados en una alerta y en la consola.
 */
function startSimulator() {
    const userName = prompt("¿Cuál es tu nombre?");
    const userNumber = parseInt(prompt("Ingresa un número:"), 10);
    if (isNaN(userNumber)) {
        alert("Por favor ingresa un número válido.");
        return;
    }
    alert(`Hola ${userName}, ${checkNumber(userNumber)}`);
    console.log(`Números impresos hasta el ${userNumber}:`);
    printNumbers(userNumber);
}

// Ejecutar el simulador
startSimulator();
