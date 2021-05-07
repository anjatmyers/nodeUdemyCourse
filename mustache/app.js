const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const path = require('path');
const userRoutes = require('./routes/users')

const VIEWS_PATH = path.join(__dirname, '/views');

app.use(bodyParser.urlencoded({extended: false}))
app.use('/users', userRoutes)

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'));
app.set('views', VIEWS_PATH);
app.set('view engine', 'mustache');


app.use('/css',express.static("css"))

app.get('/', (req, res) => {

    let user = {
        fname: "Andrea", 
        lname: "Myers",
        address: {
            street: "123 Maple St.",
            city: "Atlanta",
            state: "Georgia"
        }
    }
    res.render('index', user)
})

app.listen(3000, () => {
    console.log("Listening on port 3000...")
})