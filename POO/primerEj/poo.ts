class Persona {
  private nombre: string;
  private edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public getEdad(): number {
    return this.edad;
  }

  public setEdad(edad: number): void {
    this.edad = edad;
  }
}

const pe1 = new Persona("pato", 25);
console.log(pe1.getNombre());
