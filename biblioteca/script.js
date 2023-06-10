/*
 * Definir una clase "Libro" que contenga las propiedades básicas de un libro,
 * como el título, autor, género, y número de páginas.
 */

class Libro {
  constructor(titulo, autor, genero, numPaginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
    this.numPaginas = numPaginas;

    this.prestado = false;
  }
  prestar() {
    if (this.prestado) {
      console.log("El libro ya ha sido prestado.");
    } else {
      this.prestado = true;
      console.log("El libro se ha prestado correctamente.");
    }
  }
  devolver() {
    if (this.prestado) {
      this.prestado = false;
      console.log("El libro ha sido devuelto correctamente.");
    } else {
      console.log("El libro no ha sido prestado.");
    }
  }
}

class Biblioteca {
  constructor() {
    this.libros = [];
  }
  agregarLibro(libro) {
    this.libros.push(libro);
    console.log("Libro ha sido agregado correctamente.");
  }

  eliminarLibro(libro) {
    const index = this.libros.indexOf(libro);

    if (index !== -1) {
      this.libros.splice(index, 1);
      console.log("El libro ha sido eliminado correctamente.");
    } else {
      console.log("El libro no se encuentra en la biblioteca.");
    }
  }

  mostrarCatalogo() {
    this.libros.forEach((libro, index) => {
      console.log(`${index + 1}. Título: ${libro.titulo}, 
        Autor: ${libro.autor}, Género: ${libro.genero}, 
        Número de páginas: ${libro.numPaginas}.`);
    });
  }

  buscarLibro(criterio) {
    console.log(`Resultados de busque para el ${criterio}: `);
    const resultados = this.libros.filter((libro) => {
      return (
        libro.titulo.toLowerCase().includes(criterio.toLowerCase()) ||
        libro.autor.toLowerCase().includes(criterio.toLowerCase()) ||
        libro.genero.toLowerCase().includes(criterio.toLowerCase()) ||
        libro.numPaginas.toLowerCase().includes(criterio.toLowerCase())
      );
    });

    if (resultados.length > 0) {
      resultados.forEach((libro, index) => {
        console.log(`${index + 1}. Título: ${libro.titulo}, 
        Autor: ${libro.autor}, Género: ${libro.genero}, 
        Número de páginas: ${libro.numPaginas}.`);
      });
    } else {
      console.log("No se encontraron resultados");
    }
  }
}

const biblioteca = new Biblioteca();

const comic1 = new Libro("Spiderverse", "Edgar Delgado", "Comic", "120");
const comic2 = new Libro("Superman", "Jonathan Kent", "Comic", "120");
const comic3 = new Libro("Wolverine", "Chris Claremont", "Comic", "1300");

biblioteca.agregarLibro(comic1);
biblioteca.agregarLibro(comic2);
biblioteca.agregarLibro(comic3);

comic1.prestar();
comic3.prestar();
comic1.devolver();

biblioteca.buscarLibro("120")


