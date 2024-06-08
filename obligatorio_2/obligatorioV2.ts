/**
 * Realice un programa que devuelva la potencia de un numero
 * 
 */
import * as rls from 'readline-sync';

let base : number = rls.questionInt("Ingrese el numero base mayor o igual que 0: ");
let exponente: number  = -1;   

while(exponente <0){
    exponente = rls.questionInt("\n"+"Ingrese el numero del exponente mayor o igual que 0: ");
}
let resultado : number  = calcularPotencia(base,exponente)
console.log("el resultado es: "+ resultado);


function calcularPotencia(base: number, exponente: number): number {
    return base**exponente;
}