// TAREA OBLIGATORIA 2 //
// METODOS - EJERCICIO: POTENCIAS //
// Realice un programa que devuelva la potencia de un número //
// La base y el exponente deben ser ingresados por teclado //
// Solo deben admitirse exponentes >= 0 //
// Separe la lógica de calcular la potencia utilizando métodos //

import * as readlineSync from 'readline-sync';
let base : number = readlineSync.questionInt("Ingrese la base: "); 
let exponente : number = readlineSync.questionInt("Ingrese el exponente: ");
let potencia : number;
if (exponente < 0) {
    console.log ("El exponente ingresado en inválido para esta programación. Debe ingresar uno positivo.")
}
else {
    if (exponente == 0) {
        console.log ("La potencia de cualquier número elevado a la cero es 1.")
    } 
    else {
        potencia = CALCULOPOTENCIAS (base,exponente)
        console.log ("La potencia de " + base + " elevado a " + exponente + " es " + potencia + ".")
    }
}

function CALCULOPOTENCIAS (base:number, _exponente: number): number {
    let resultado : number = 1
    let variableCreciente : number = 1
    while (variableCreciente <= exponente) {
        resultado = resultado * base
        variableCreciente = variableCreciente + 1
    }
    return resultado}
