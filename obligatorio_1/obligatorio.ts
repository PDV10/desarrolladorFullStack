import * as readline from 'readline-sync';

let primervuelta: number = readline.questionInt("Ingrese la primer vuelta: ");
console.log("La primer vuelta fue: ", primervuelta);
let segundavuelta: number = readline.questionInt("Ingrese la segunda vuelta: ");
console.log("La segunda vuelta fue: ", segundavuelta);
let tercervuelta: number = readline.questionInt("Ingrese la tercer vuelta: ");
console.log("La tercer vuelta fue: ", tercervuelta);

console.log(primervuelta+segundavuelta+tercervuelta);
