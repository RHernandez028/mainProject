const express = require('express');
const fetch = require('node-fetch');
const ejs = require('ejs');
const app = express();
const PORT= 8080;

app.set('view engine', 'ejs');

// app.get('/', async (req, res) => {
    

// })

app.listen(PORT, ()=> console.log(`page is open on ${PORT}`))