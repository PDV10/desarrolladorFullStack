import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo {
  private cilindrada: number;

  constructor(
    id: number,
    modelo: number,
    color: string,
    patente: string,
    cantEjes: number
  ) {
    super(id, modelo, color, patente);
    this.cilindrada = cantEjes;
  }

  public getcantEjes(): number {
    return this.cilindrada;
  }

  public setcantEjes(cantEjes: number) {
    this.cilindrada = cantEjes;
  }
}
