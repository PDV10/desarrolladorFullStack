import { Auto } from "./Auto";
import { Camion } from "./Camion";
import { Moto } from "./Moto";

export class RegistroAutomotor {
  private autos: Auto[];
  private motos: Moto[];
  private camiones: Camion[];

  constructor(autos: Auto[], motos: Moto[], camiones: Camion[]) {
    this.autos = autos;
    this.motos = motos;
    this.camiones = camiones;
  }

  public getAutos(): Auto[] {
    return this.autos;
  }

  public getMotos(): Moto[] {
    return this.motos;
  }

  public getCamiones(): Camion[] {
    return this.camiones;
  }

  // Método para agregar un Auto
  public addAuto(auto: Auto): void {
    if (
      this.autos.some(
        (a) =>
          a.getColor() === auto.getColor() &&
          a.getMarca() === auto.getMarca() &&
          a.getModelo() === auto.getModelo()
      )
    ) {
      console.log("Este auto ya existe en el registro.");
    } else {
      this.autos.push(auto);
      console.log("Auto agregado con éxito.");
    }
  }

  // Método para agregar una Moto
  public addMoto(moto: Moto): void {
    if (
      this.motos.some(
        (m) =>
          m.getColor() === moto.getColor() &&
          m.getMarca() === moto.getMarca() &&
          m.getModelo() === moto.getModelo()
      )
    ) {
      console.log("Esta moto ya existe en el registro.");
    } else {
      this.motos.push(moto);
      console.log("Moto agregada con éxito.");
    }
  }

  // Método para agregar un Camion
  public addCamion(camion: Camion): void {
    if (
      this.camiones.some(
        (c) =>
          c.getColor() === camion.getColor() &&
          c.getMarca() === camion.getMarca() &&
          c.getModelo() === camion.getModelo()
      )
    ) {
      console.log("Este camión ya existe en el registro.");
    } else {
      this.camiones.push(camion);
      console.log("Camión agregado con éxito.");
    }
  }
}
