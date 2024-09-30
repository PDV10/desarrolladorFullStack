import { Auto } from "./Auto";
import { Camion } from "./Camion";
import { Moto } from "./Moto";
import { RegistroAutomotor } from "./RegistroAutomotor";

let autos = new Array<Auto>();
let motos = new Array<Moto>();
let camiones = new Array<Camion>();

const auto1 = new Auto("rojo", "reno", 2013);
const auto1_copia = new Auto("rojo", "reno", 2013);
const auto2 = new Auto("azul", "ford", 2015);
const auto3 = new Auto("negro", "bmw", 2020);

const moto1 = new Moto("negra", "kawasaki", 2024);
const moto2 = new Moto("blanca", "yamaha", 2018);
const moto3 = new Moto("roja", "ducati", 2021);

const camion1 = new Camion("gris", "scania", 2000);
const camion2 = new Camion("azul", "volvo", 2010);
const camion3 = new Camion("verde", "mercedes", 2005);

autos.push(auto1);
autos.push(auto2);
autos.push(auto3);

motos.push(moto1);
motos.push(moto2);
motos.push(moto2);

camiones.push(camion1);
camiones.push(camion2);
camiones.push(camion3);

const registro = new RegistroAutomotor(autos, motos, camiones);

console.log(registro.getAutos());

console.log(registro.getMotos());

console.log(registro.getCamiones());

registro.addAuto(auto1_copia);
const auto4 = new Auto("violeta", "audi r8", 2011);
registro.addAuto(auto4);

console.log(registro.getAutos());
