let numeros: number[] = new Array(4,7,9,3,1,45,67,23,29,99,11,16);
// mayor comienza siendo el primero elemento del arreglo, de esta forma se puede usar valores negativos si se desea
let mayor : number = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] > mayor){
        mayor = numeros[i];
    }
}
console.log(`el numero mas grande del arreglo es ${mayor} `);

parOimpar(mayor);

function parOimpar(numero: number){
    if(numero%2 == 0){
        console.log(`el numero ${numero} es par`);
    }else{
        console.log(`el numero ${numero} es impar`);
    }
}


/** 
crear un arreglo de numeros con los numeros con estos numeros 4,7,9,3,1,45,67,23,29,99,11,16
crear una variable de tipo numero donde se va a guardar el valor del mayor elemento del arreglo
recorrer el arreglo de numeros y en cada iteracion preguntar si el numero actual del arreglo es mas grande que el numero mas grande guardado
si es mas grande actualizas el valor del numero mayor sino no haces nada 
cuando termina el for mostras por pantalla el numero mas grande
y desp tenes que fijarte con una funcion si ese numero es par o impar igual que lo hiciste en el ejercicio anterior
 * 
*/