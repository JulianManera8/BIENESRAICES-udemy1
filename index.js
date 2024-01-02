//improtar express al archivo COMMON.JS
// const express = require('express');
//improtar express al archivo ES MODULE
import express from 'express';

//importar las routes desde el otro archivo
import router from './routes/usuarioRoutes.js';

//creamos la app / servidor
const app = express();

//le asignamos a app las routes
app.use('/', router);


//definir un puerto para desplegar el server y darle marcha
const port = 3000;

app.listen(port, () => {
    console.log('arranco el server en el puerto ' + port);
});