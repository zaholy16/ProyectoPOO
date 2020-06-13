class Artista {
    constructor(nombre, banda, edad, genero, sexo) {
      this.nombre = nombre;
      this.banda = banda;
      this.edad = edad;
      this.genero = genero;
      this.sexo = sexo;
    }
    
    showTextInfo() {
      return (
        " Nombre: " +
        this.nombre +
        " Sexo: " +
        this.sexo +
        " Edad: " +
        this.edad +
        " Banda: " +
        this.banda +
        " Genero: " +
        this.genero
      );
    }

    showInfo() {
    //tenerlo como un json
    return {
      nombre: this.nombre,
      banda: this.banda,
      edad: this.edad,
      genero: this.genero,
      sexo:this.sexo
    };
  }
}

module.exports = Artista;