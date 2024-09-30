export class Camion {
  private color: string;
  private marca: string;
  private modelo: number;

  constructor(color: string, marca: string, modelo: number) {
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
  }

  public getColor(): string {
    return this.color;
  }

  public setColor(color: string) {
    this.color = color;
  }

  public getMarca(): string {
    return this.marca;
  }

  public setMarca(marca: string) {
    this.marca = marca;
  }

  public getModelo(): number {
    return this.modelo;
  }

  public setModelo(modelo: number) {
    this.modelo = modelo;
  }
}
