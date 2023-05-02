//require
const express = require('express');
const req = require('express/lib/request');
const  app = express();

app.get('/',(req,res)=>{
    res.send('Clase Backend')
})

app.get('/Nosotros', (req, res)=>{
    res.json({
        nombre:'Jonnier Grajales Alzate',
        grado:'11',
        MT:'Desarrollo'
    })
})

app.get('/Usuario', (req, res)=>{
    res.json({
        nombre:'Carlos',
        apellido:'Díaz',
        documento:'12334345',
        telfono: '1111111'
    })
})

app.get('/Usuario/:id', function (req, res){
    res.send('Id del usuario enviado con exito')
    console.log(req.params)
})

app.listen(3000,()=>{
    console.log('Server Started')
})