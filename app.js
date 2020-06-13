const btnRecupera = document.getElementById("btnRecuperar");
btnRecupera.addEventListener("click",(e)=>{

  var solicitud = new XMLHttpRequest();
  solicitud.open('GET', 'http://localhost:3000/artista/', true);
  solicitud.onload = function()
  {
    var resultado = document.getElementById("details");
    let datos = JSON.parse(this.response);
    if(solicitud.status >= 200 && solicitud.status < 400)
    {
        resultado.innerHTML += "<p>" +this.response + "</p>";
    }
    else
    {
        console.log("ERROR");
        resultado.innerHTML += "ERROR EN LA LLAMADA A LA API";
    }
  }
  solicitud.send();
});

const btnAgrega = document.getElementById("btnAgregar");
btnAgrega.addEventListener("click",(e) =>{

  var nombre = document.getElementById("nombre").value;
  var edad = parseInt(document.getElementById("edad").value);
  var sexo = document.getElementById("sexo").value;
  var banda = document.getElementById("banda").value;
  var genero = document.getElementById("genero").value;

  var xhttR = new XMLHttpRequest();
  xhttR.open('POST', 'http://localhost:3000/artista/', true);
  xhttR.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

  xhttR.onreadystatechange = function()
  {
    if(this.readyState === XMLHttpRequest.DONE && this.status === 200)
    {
      var resultadoA = document.getElementById("details");
      details.innerHTML +=  ` 
        <p>${this.response}</p>
      `;
    }
  }
  xhttR.send("Nombre = " + nombre , "Edad = " + edad , "Sexo = " + sexo , "Banda = " + banda , "Genero = " + genero);
});
