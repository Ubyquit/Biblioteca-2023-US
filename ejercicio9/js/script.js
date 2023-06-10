/*
 * Funciones por variables
 */

const mostrarNombres = (argNombre, argApellidoP, argApellidoM) => {
  let nombre = argNombre;
  let apellidoP = argApellidoP;
  let apellidoM = argApellidoM;

  document.write(`<br> Mi nombre completo es ${nombre} ${apellidoP} ${apellidoM}`);
};

mostrarNombres("Luis Fernando", "Villafaña", "Rejón");

const mostrarNombre = argNombre => document.write(`<br> Mi nombre completo es ${argNombre}`);

mostrarNombre("Luis Fernando");