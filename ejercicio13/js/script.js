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
      document.write(`<br>El libro ya ha sido prestado.`);
    } else {
      this.prestado = true;
      document.write(`<br>El libro ha sido prestado correctamente.`);
    }
  }
  devolver() {
    if (this.prestado) {
      this.prestado = false;
      document.write(`<br>El libro ha sido devuelto correctamente.`);
    } else {
      document.write(`<br>El libro no estaba prestado.`);
    }
  }
}

class Biblioteca {
  constructor() {
    this.libros = [];
  }
  agregarLibro(libro) {
    this.libros.push(libro);
    document.write(`<br>El libro ha sido agregado.`);
  }
  eliminarLibro(libro) {
    const index = this.libros.indexOf(libro);
    if (index !== -1) {
      this.libros.splice(index, 1);
      document.write(`<br> Libro eliminado`);
    }
  }

  mostrarCatalogo() {
    document.write(`<br>Catalogo de libros:<br>`);
    this.libros.forEach((libro, index) => {
      document.write(`${index + 1} - Titulo: ${libro.titulo},
    Autor: ${libro.autor}, Género: ${libro.genero},
    Número de páginas: ${libro.numPaginas}.<br>`);
    });
  }
  buscarLibro(criterio) {
    document.write(`<br>Resultado de la busqueda ${criterio}.<br>`);
    const resultados = this.libros.filter((libro) => {
      return (
        libro.titulo.toLowerCase().includes(criterio.toLowerCase()) ||
        libro.autor.toLowerCase().includes(criterio.toLowerCase()) ||
        libro.genero.toLowerCase().includes(criterio.toLowerCase())
      );
    });
    if (resultados.length > 0) {
      resultados.forEach((libro, index) => {
        document.write(`${index + 1} - Titulo: ${libro.titulo},
        Autor: ${libro.autor}, Género: ${libro.genero},
        Número de páginas: ${libro.numPaginas}.<br>`);
      });
    } else {
      document.write(`<br>No se encontraron resultados.<br>`);
    }
  }
}

const biblioteca = new Biblioteca();

const libro1 = new Libro("Spider-Verse", "Dipqui", "Cominc", 200);
const libro2 = new Libro("Old Logan", "Aguja dinamica", "Cominc", 2000);
const libro3 = new Libro("SuperMan", "DC", "Cominc", 500);

biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.agregarLibro(libro3);

biblioteca.mostrarCatalogo();

libro1.prestar();
libro2.devolver();
libro3.prestar();

libro1.devolver();
libro2.prestar();
libro3.devolver();

biblioteca.buscarLibro("SupeR");
biblioteca.buscarLibro("Batman");

biblioteca.eliminarLibro(libro3);
biblioteca.mostrarCatalogo();