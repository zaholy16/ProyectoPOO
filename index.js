const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();

const Estructura = require("./modelos/estructura");
const Artista = require("./modelos/artista");
var miInfo = new Estructura();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000,() =>{
    console.log("Puerto 3000 funcionando!!!")
});

app.get("/artista/", cors(), (req,res) => {
    respuesta = {
        Tipo: "Exito",
        Estatus: 200,
        Mensaje: "Bienvenido",
        miInfo
    }
    res.send(respuesta);
});

app.post("/artista/", cors(), (req,res) => {
    if(!req.body.nombre || !req.body.edad ||!req.body.sexo ||!req.body.banda || !req.body.generoM)
    {
        respuesta = {
            Tipo: "ERROR",
            Estatus: 404,
            Mensaje: "Faltan Datos :C",
        }
        res.send(respuesta);
    }
    else if(req.body.nombre)
    {
        let nombre = (req.body.nombre);
        let busca=-1;
        var i=0;

        while(i<miInfo.miInfo.length)
        {
            if(nombre===miInfo.miInfo[i].nombre)
            busca=i;
            i++;
        }
        
        if(busca!=-1)
        {
            respuesta = {
                Tipo: "Exito",
                Estatus: 200,
                Mensaje: "Ya existe un registro con ese nombre :C",
                miInfo
            }
            res.send(respuesta);
        }
        else
        {
            let artista = new Artista()
            artista = req.body;
            miInfo.agregar(artista);
            res.status(200).send({mensaje: "Artista agregado correctamente :D"});
            miInfo
        }
    }
});

app.delete("/artista/:nombre?", (req,res) => {
    if(req.body.nombre)
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
