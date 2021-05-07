// Node.js Setup
// 1. npm init
// 2. npm install express (to have this easy set-up below over the switch statement style used in hello folder)
// 3. if haven't already, npm install -g nodemon (node monitor so you dont have to start and stop your server bw changes)
// 4. npm install body parser if need to read json objects
const express = require('express');
const app = express();
// app is an internal function that can help use start/stop the server and perform other functions
const PORT = 3000;
const bodyParser = require('body-parser')

// setting up body parser to parse JSON
app.use(bodyParser.json())

// routes AKA 'endpoints'
app.get('/', (req, res) => {
    res.send("Home Page")
})
app.get('/hello', (req, res) => {
    res.send("Hello World")
})

// using route parameters : 
app.get('/movies/:genre/:year', (req, res) => {
    
    let genre = req.params.genre;
    let year = req.params.year;
    
    res.send(`${genre} Movies in ${year}`)
})

// using query string parameters ? they follow the ? and each additional one follows the &
// used most when you are sorting/searching/filtering/etc
app.get('/albums', (req, res) => {
    // http://localhost:3000/albums?sort=asc&page=2
    console.log(req.query.page) // 2
    console.log(req.query.sort) // asc
    let albums = [
        {title: "Fearless: Taylor's Version", year: 2021}, 
        {title: "Evermore", year: 2020}, 
        {title: "Folklore", year: 2020}, 
    ]
    // res.send(`Albums`)
    res.json(albums)
})

app.post('/albums', (req, res) => {
    // you need a body parser in order to read the json object you are trying to post
    let title = req.body.title;
    let year = req.body.year;
    console.log(title, year)

    res.send("OK")
})

console.log("hi :)")
app.listen(PORT, () => {
    console.log("Server is running on PORT " + PORT)
})


// server side pages:

//can use:
// ASP.NET: used by microsoft
// Ruby on Rails 
// django for python 
// swift made by apple
// PHP - old scripting language 

// server side frameworks for Node/express application
// (once you know one its easy to learn others because they are simiilar)
// EJS
// hulk-hogan - based on mustache
// handlebars - based on mustache
