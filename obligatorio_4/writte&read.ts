import * as fs from 'node:fs'

const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];

llenarProductos(productos);
llenarPrecios(precios);

const preciosObtenidos :string = fs.readFileSync('./precios.txt', 'utf8'); //'525, 3500, 400, 1999'
let preciosSinEspacios : string = preciosObtenidos.trim();
let preciosObtenidosFinal : string[]= preciosSinEspacios.split(" ");

const productosObtenidos :string = fs.readFileSync('./productos.txt', 'utf8');
let productosSinEspacios : string = productosObtenidos.trim();
let productosObtenidosFinal : string[]= productosSinEspacios.split(" ");

console.log(preciosObtenidosFinal);
console.log(productosObtenidosFinal);

function llenarPrecios(precios: number[]) {
    let texto : string = "";
    for (let i = 0; i < precios.length; i++) {
        texto += `${precios[i].toString()} `;
    }

    fs.writeFileSync('./precios.txt',texto)   
}

function llenarProductos(productos: string[]) {
    let texto : string = "";
    for (let i = 0; i < productos.length; i++) {
        texto += `${productos[i]} `;
    }

    fs.writeFileSync('./productos.txt',texto)   
}