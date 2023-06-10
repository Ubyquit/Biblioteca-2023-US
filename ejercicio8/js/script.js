/*
 * Funciones por variables
 */

const mostrarNombres = function (argNombre, argApellidoP, argApellidoM) {
  let nombre = argNombre;
  let apellidoP = argApellidoP;
  let apellidoM = argApellidoM;

  document.write(`<br> Mi nombre completo es ${nombre} ${apellidoP} ${apellidoM}`);
};

mostrarNombres("Luis Fernando", "Villafaña", "Rejón");
