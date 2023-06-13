/* POO
 * Class = clase: es la Fabrica.
 * Constructor = La maquina de la fabrica.
 * Atributos = Parametros.
 * Objeto = this.
 * this necesta propiedades == atributos.
 * Instanciar = crear un nuevo objeto con nuevos parametros.
 * Polimorfismo = capacidad de la maquina de recibir diferentes parametros.
 * Metodos = son verbos y es la capacidad del objeto de hacer algo.
 */

class Animal {
  constructor(clase, raza, color, cantPatas) {
    this.clase = clase;
    this.raza = raza;
    this.color = color;
    this.cantPatas = cantPatas;

    this.adn = `<br> Soy de la clase ${this.clase}, 
    tambien soy de la raza ${this.raza}, 
    mi color es ${this.color} y tengo ${this.cantPatas} patas.`;
  }

  mostrarInfo() {
    document.write(this.adn);
  }

  ladrar() {
    document.write("Waw waw waw");
  }
}
const animal1 = new Animal("Canina", "Pitbull", "Blanco/cafe", 4);
const animal2 = new Animal("Ave", "Cotorro", "Verde/rojo", 2);

animal1.mostrarInfo();
animal1.ladrar();
animal2.mostrarInfo();
