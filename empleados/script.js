class Empleado {
  constructor(nombre, edad, sueldo) {
    this.nombre = nombre;
    this.edad = edad;
    this.sueldo = sueldo;
  }
  imprimirDetalles() {
    console.log(`Nombre: ${this.nombre},
    Edad: ${this.edad}, Sueldo: ${this.sueldo}`);
  }
}

class GestionEmpleado {
  constructor() {
    this.empleados = [];
  }

  agregarEmpleado(empleado) {
    this.empleados.push(empleado);
    console.log(`Empleado agregado al sistema.`);
  }
  eliminarEmpleado(empleado) {
    const index = this.empleados.indexOf(empleado);
    if (index !== -1) {
      this.empleados.splice(index, 1);
      console.log(`El empleado ha sido despedido`);
    }
  }

  mostrarEmpleados() {
    console.log("Lista de empleados");
    this.empleados.forEach((empleado) => {
      empleado.imprimirDetalles();
    });
  }
}

const sistemaEmpleados = new GestionEmpleado();

const empleado1 = new Empleado("Luis Villafaña", 32, 100000);
const empleado2 = new Empleado("Bianca Lizama", 24, 100000);
const empleado3 = new Empleado("Barco", 30, 5000);

sistemaEmpleados.agregarEmpleado(empleado1);
sistemaEmpleados.agregarEmpleado(empleado2);
sistemaEmpleados.agregarEmpleado(empleado3);

sistemaEmpleados.mostrarEmpleados();

sistemaEmpleados.eliminarEmpleado(empleado3);

sistemaEmpleados.mostrarEmpleados();
