const express = require('express');
const fetch = require('node-fetch');
const ejs = require('ejs');
const path = require('path')
const app = express();
const PORT= 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.send('Home Page is Open');
});

app.get('/rnm/:id',  async (req, res) => {
    
    try{
        rickData = await fetch(`https://rickandmortyapi.com/api/character/${req.params.id}`);
        const json = await rickData.json();
        res.render('layouts/rick', {
            data: {
                name: json.name
            }            
        })
    } catch (error){
        console.log(error)
    }


});

app.listen(PORT)