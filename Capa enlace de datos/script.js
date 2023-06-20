// Clase para representar un paquete
class Paquete {
  constructor(datos) {
    this.datos = datos;
  }
}

// Función para imprimir en la pantalla con retardo
async function printWithDelay(text, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      print(text);
      resolve();
    }, delay);
  });
}

// Función para imprimir en la pantalla
function print(text) {
  const output = document.getElementById('output');
  const card = document.createElement('div');
  card.classList.add('card');
  card.textContent = text;
  output.appendChild(card);
}

// Función de encapsulación
async function encapsular(paquete) {
  await printWithDelay("Encapsulando paquete: " + paquete.datos, 1000);
  const trama = "[Encabezado][" + paquete.datos + "][Checksum]";
  paquete.datos = trama;
  await printWithDelay("Trama encapsulada: " + paquete.datos, 1000);
}

// Función de desencapsulación
async function desencapsular(trama) {
  await printWithDelay("Desencapsulando trama: " + trama, 1000);
  const datos = trama.substring(trama.indexOf("[") + 1, trama.lastIndexOf("]"));
  await printWithDelay("Datos desencapsulados: " + datos, 1000);
}

// Función de control de flujo
async function controlDeFlujo(paquete) {
  await printWithDelay("Realizando control de flujo...", 1000);
  const flujo = Math.random() < 0.5 ? "flujo controlado" : "flujo no controlado";
  await printWithDelay("Flujo: " + flujo, 1000);
}

// Función de detección y corrección de errores
async function deteccionYCorreccionDeErrores(paquete) {
  await printWithDelay("Detectando errores en la trama: " + paquete.datos, 1000);
  const tieneError = Math.random() < 0.3;
  if (tieneError) {
    paquete.datos = paquete.datos.replace("Datos", "ERROR");
    await printWithDelay("Error detectado. Corrigiendo...", 1000);
    paquete.datos = paquete.datos.replace("ERROR", "");
    await printWithDelay("Error corregido: " + paquete.datos, 1000);
  }
}

// Función de control de acceso al medio con retardo
async function controlDeAccesoAlMedio(paquete) {
  let canalOcupado = true;
  let intentos = 0;
  while (canalOcupado) {
    await printWithDelay("Canal ocupado. Esperando...", 1000);
    intentos++;
    if (intentos === 3) {
      canalOcupado = false;
    }
  }
  await encapsular(paquete);
  await printWithDelay("Trama enviada correctamente.", 1000);
}

// Función principal de simulación
async function startSimulation() {
  const paquete = new Paquete("Datos importantes");
  await printWithDelay("Paquete original: " + paquete.datos, 1000);

  await encapsular(paquete);
  await desencapsular("[Encabezado][Datos importantes][Checksum]");

  await controlDeFlujo(paquete);
  await deteccionYCorreccionDeErrores(paquete);
  await controlDeAccesoAlMedio(paquete);

  await printWithDelay("Proceso completado.", 1000);
}

// Iniciar simulación al cargar la página
window.addEventListener('load', startSimulation);
