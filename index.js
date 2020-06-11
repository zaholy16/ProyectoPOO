const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();

var artista = [2,5,7,3,2,6,4];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000,() =>{
    console.log("Puerto 3000 funcionando!!!")
});

app.get("/", cors(), (req, res) => {
    respuesta = {
        error: true,
        codigo: 200,
        mensaje: "Bienvenido, todo correcto"
    };
    res.send(respuesta);
});
app.get("/cantantes/:datos?", cors(), (req,res) => {
    var d = req.params.datos;
    if(d)
    {
        var encontrado=-1;
        var i=0;
        while(i<artista.length && encontrado==-1)
        {
            if(artista[i]==parseInt(id))
                encontrado=i;
            i++;
        }

        if(encontrado==-1)
        {
            respuesta = {
                Tipo: "Error",
                Estatus: 500,
                mensaje: "No existe"
            }
            res.send(respuesta);
        }
        else
        {
            respuesta = {
                Tipo: "Exito",
                Estatus: 200,
                mensaje: "Encontrado en la posicion: " +  encontrado,
                d:artista
            }
            res.send(respuesta);
        }
    }
    else
    {
        if(!artista)
        {
            respuesta = {
                Tipo: "Error",
                Estatus: 500,
                mensaje: "No existe"
            }
            res.send(respuesta);
        }
        else
        {
            respuesta = {
                Estatus: 200,
                d:artista
            }
            res.send(respuesta);
        }
    }
});

app.post("/cantantes/", cors(), (req,res) => {
    if(!req.body.numero)
    {
        respuesta = {
            Tipo: "Error",
            Estatus: 500,
            mensaje: "Datos incompletos",
        }
        res.send(respuesta);
    }
    else
    {
        var datos=parseInt(req.body.numero);
        var encontrado=-1;
        var i=0;
        while(i<artista.length && encontrado==-1)
        {
            if(artista[i]==parseInt(datos))
                encontrado=i;
            i++;
        }

        if(encontrado==-1)
        {
            artista.push(datos);
            respuesta = {
                Tipo: "Exito",
                Estatus: 200,
                mensaje: "Agregado exitosamente!!",
                datos:artista
            }
            res.send(respuesta);
        }
        else
        {
            respuesta = {
                Tipo: "Error",
                Estatus: 500,
                mensaje: "El dato ya existe"
            }
            res.send(respuesta);
        }
    }
});

app.delete("/cantantes/:datos?", (req,res) => {
    if(!req.body.cantante || !req.body.numero)
    {
        respuesta = {
            Tipo: "Error",
            Estatus: 500,
            mensaje: "El dato no existe"
        }
        res.send(respuesta);
    }
    else
    {
        var datos=parseInt(req.body.numero);
        var encontrado=-1;
        var i=0;
        while(i<artista.length && encontrado==-1)
        {
            if(artista[i]==parseInt(datos))
                encontrado=i;
            i++;
        }

        if(encontrado==-1)
        {
            artista.splice(1,1);
            respuesta = {
                Tipo: "Exito",
                Estatus: 200,
                mensaje: "Eliminado exitosamente!!"
            }
            res.send(respuesta);
        }
        else
        {
            respuesta = {
                Tipo: "Error",
                Estatus: 500,
                mensaje: "Ocurrio un fallo. No se elimino"
            }
            res.send(respuesta);
        }
    }
});