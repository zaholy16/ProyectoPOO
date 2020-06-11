const btnAgregar = document.getElementById("btnAgregar");

btnAgregar.addEventListener("click", c => {

  let numero = parseInt(document.getElementById("numero").value);
  var requestt = new XMLHttpRequest();
  requestt.open("POST", "http://localhost:3000/cantantes/", true);
  requestt.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

  requestt.onreadystatechange = function() 
  {
    if(this.readyState === XMLHttpRequest.DONE && this.status === 200)
    {
      let detalles = document.getElementById("details");
      detalles.innerHTML += `
        <div>
          <p><strong>ID: ${this.response} </p>
        </div>`;
    }
  }
  requestt.send("cantante=numero" + numero);

});

  /*let id = parseInt(document.getElementById("txtID").value);
  let nombre = document.getElementById("txtNombre").value;
  let banda = document.getElementById("txtBanda").value;
  let edad = parseInt(document.getElementById("txtEdad").value);
  let genero = document.getElementById("txtGenero").value; 

  let artista = new Producto(id,nombre, banda, edad, genero);

  let details = document.getElementById("details");
  details.innerHTML += `
    <div class="card text-white bg-dark m-3" style="max-width: 18rem;">
      <div class="card-header"><strong>ID: ${artista.id}</strong></div>
      <div class="card-body">
        <p class="card-title">Nombre: ${artista.nombre}</p>
        <p class="card-title">Banda: ${artista.banda}</p>
        <p class="card-text">Edad: ${artista.edad}</p>
        <p class="card-text">Genero: ${artista.genero}</p>
        <p class="card-text">${product.showTextInfo()}</p>
    </div>
    `;
  
  MiInfo.agregar(cantante);
  console.log(MiInfo.listar());
  console.log(cantante.showInfo());
}); */

const btnRecuperar = document.getElementById("btnRecuperar");
btnRecuperar.addEventListener("click", e => 
{
  var request = new XMLHttpRequest();
  request.open("GET", "http://localhost:3000/cantantes/", true);

  request.onload = function() 
  {
    let dato = JSON.parse(this.response);
    let detalles = document.getElementById("details");
    if (request.status >= 200 && request.status <= 400) 
    {
      detalles.innerHTML += "<div><p>" + this.response + "</p></div>"
    } 
    else 
    {
      console.log("ERROR");
      detalles.innerHTML += "Error en la llamada a API"
    }
  }

  request.send();

});