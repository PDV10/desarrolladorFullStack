export class Vehiculo {
  protected id: number;
  protected modelo: number;
  protected color: string;
  protected patente: string;

  constructor(id: number, modelo: number, color: string, patente: string) {
    this.id = id;
    this.modelo = modelo;
    this.color = color;
    this.patente = patente;
  }

  public getId() {
    return this.id;
  }
}
