const express = require('express');
const fetch = require('node-fetch');
const ejs = require('ejs');
const path = require('path')
const app = express();
const PORT= 8080;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {

    res.render('layouts/index',{
        test: "charmander"
    });
});


// Rick and Morty Pages
app.get('/rnm', async (req, res) => {
 	try {
        rnmCharacters = await fetch(`https://rickandmortyapi.com/api/character/`);
        // .then(res=>res.json());
        const json = await rnmCharacters.json();
        // console.log(json);
        const [...characters] = json.results;


        // console.log(characters);

        res.render('layouts/rick', {
            characters: characters           
        })

         
     } catch (error) {
         console.log(error);
     }
});

app.get('/rnm/:id', async (req, res) => {

    try{
        rickData = await fetch(`https://rickandmortyapi.com/api/character/${req.params.id}`);
        const json = await rickData.json();
        res.render('layouts/rnmChar', {
            data: {
                name: json.name,
                image: json.image,
                status: json.status,
                gender: json.gender,
                originalDimension: json.origin.name
            }            
        })
    } catch (error){
        console.log(error)
    }

});


// Breaking Bad Pages
app.get('/bb', async (req, res) => {
    try {
       bbChar = await fetch(`https://www.breakingbadapi.com/api/characters/`);
       // .then(res=>res.json());
       const json = await bbChar.json();
       const [...people] = json;

       res.render('layouts/bbChar', {
           people: people
       })


    
        
    } catch (error){
        console.log(error);
    }
});

app.listen(PORT);