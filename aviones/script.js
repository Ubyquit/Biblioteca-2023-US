class Vuelo {
  constructor(
    numVuelo,
    origen,
    destino,
    fecha,
    hora,
    seccion,
    pasajeros,
    equipaje
  ) {
    this.numVuelo = numVuelo;
    this.origen = origen;
    this.destino = destino;
    this.fecha = fecha;
    this.hora = hora;
    this.seccion = seccion;
    this.pasajeros = pasajeros;
    this.equipaje = equipaje;

    this.disponible = true;
  }
  reservarVuelo() {
    if (this.disponible) {
      this.disponible = false;
      console.log(`El vuelo ${this.numVuelo} ha sido reservado`);
    } else {
      console.log(`El vuelo ${this.numVuelo} no está disponible`);
    }
  }
  cancelarVuelo() {
    if (!this.disponible) {
      this.disponible = true;
      console.log(`El vuelo ${this.numVuelo} ha sido cancelado`);
    } else {
      console.log(`El vuelo ${this.numVuelo} no ha sido reservado`);
    }
  }
}

const boleto1 = new Vuelo(
  2325,
  "Cancún",
  "Canada",
  "21-10-23",
  "07:00",
  "A",
  2,
  "Pesado"
);

boleto1.reservarVuelo();
boleto1.cancelarVuelo();
boleto1.cancelarVuelo();
boleto1.reservarVuelo();
boleto1.reservarVuelo();
