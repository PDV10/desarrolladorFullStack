import { Vehiculo } from "./Vehiculo";

export class Camion extends Vehiculo {
  private cantEjes: number;

  constructor(
    id: number,
    modelo: number,
    color: string,
    patente: string,
    cantEjes: number
  ) {
    super(id, modelo, color, patente);
    this.cantEjes = cantEjes;
  }

  public getCantEjes(): number {
    return this.cantEjes;
  }

  public setCantEjes(cantEjes: number) {
    this.cantEjes = cantEjes;
  }
}
