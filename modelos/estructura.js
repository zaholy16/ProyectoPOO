const objeto = require('./artista');

class Estructura {
    constructor() {
        this.miInfo = new Array;
    }

    //Metodos Clasicos
    agregar(nuevo) {
      this.miInfo.push(nuevo);
    }

    mostrar()
    {
      let salida=' ';
      for(var i=0; i<this.miInfo.length; i++)
      {
        salida += "<p>" + this.miInfo.showInfo() + "</p>";
      }
      return salida;
    }

}

module.exports = Estructura;