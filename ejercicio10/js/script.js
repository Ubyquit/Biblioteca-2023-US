/* POO
 * Class = clase: es la Fabrica.
 * Constructor = La maquina de la fabrica.
 * Atributos = Parametros.
 * Objeto = this.
 * this necesta propiedades == atributos.
 * Instanciar = crear un nuevo objeto con nuevos parametros.
 * Polimorfismo = capacidad de la maquina de recibir diferentes
 * parametros.
 * Metodos = son verbos y es la capacidad del objeto de hacer algo.
 */

class Animal {
  constructor(especie, color, edad, patas) {
    this.especie = especie;
    this.color = color;
    this.edad = edad;
    this.patas = patas;

    this.codigoGenetico = `<br>Hola soy de la especie ${this.especie}, mi color es ${this.color}<br>
    tengo ${this.edad} años, y tengo ${this.patas} patas`;
  }
  imprimirCodigoGenetico() {
    document.write(this.codigoGenetico);
  }
}

const perro = new Animal("Canina", "Blanco/Cafe", 10, 4);
const perro2 = new Animal("Canina", "Negro", 5, 4);

perro.imprimirCodigoGenetico();
perro2.imprimirCodigoGenetico();
