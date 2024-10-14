import { Camion } from "./Camion";
import { Moto } from "./Moto";
import { RegistroAutomotor } from "./RegistroAutomotor";

const moto = new Moto(1, 2019, "azul", "NFT951", 650);
// vehiculo con id repetido
const moto2 = new Moto(1, 2017, "negra", "ASD521", 250);
const moto3 = new Moto(3, 2012, "blanca", "KDS231", 1000);

const camion = new Camion(4, 2013, "rojo", "DAS254", 8);
const registro = new RegistroAutomotor();

const nuevaMoto = new Moto(100, 2024, "blanca", "KDS231", 2000);

// Agregar vehiculos
registro.addVehiculo(moto);
registro.addVehiculo(moto2);
registro.addVehiculo(moto3);
registro.addVehiculo(camion);

// Get motos y camiones
console.log("Motos: \n");
console.log(registro.getMotos());
console.log("Camiones: \n");
console.log(registro.getCamiones());

// Modificar un vehiculo
console.log(registro.getMotos());
registro.modifyVehiculo(nuevaMoto);
console.log("------------------------------\n");
console.log(registro.getMotos());

// Eliminar un vehiculo
console.log(registro.getMotos());

registro.deleteVehiculo(moto);
console.log("------------------------------\n");
console.log(registro.getMotos());
