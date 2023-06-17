class Vuelo{
    constructor(numeroVuelo,origen,destino,fecha,hora,numeroAsiento,cantidadPersonas){
        this.numeroVuelo = numeroVuelo;
        this.origen = origen;
        this.destino = destino;
        this.fecha = fecha;
        this.hora = hora;
        this.numeroAsiento = numeroAsiento;
        this.cantidadPersonas = cantidadPersonas;

        this.disponible = true;
    }

    resevarVuelo(){
        if(this.disponible){
            this.disponible = false;
            console.log(`El vuelo ${this.numeroVuelo} ha sido reservado.`);
        }else{
            console.log(`El vuelo ${this.numeroVuelo} no está disponible.`);
        }
    }

    cancelarVuelo(){
        if(!this.disponible){
            this.disponible = true;
            console.log(`La reserva del vuelo ${this.numeroVuelo} a sido cancelada.`);
        }else{
            console.log(`El vielo ${this.numeroVuelo} no tiene reserva.`);
        }
    }
}

const boleto1 = new Vuelo(2325,"Cancún","Chiapas","18-06-23","07:00",2);
const boleto2 = new Vuelo(2322,"Cancún","Chiapas","18-06-23","07:00",2);

boleto1.resevarVuelo();
boleto1.resevarVuelo();
boleto1.cancelarVuelo();
boleto1.cancelarVuelo();
boleto1.resevarVuelo();
boleto2.resevarVuelo();