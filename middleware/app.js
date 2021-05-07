const express = require('express')
const app = express()


app.use(log)
// this is what you do if you want to run your middleware for every route
// we do this for middleware like body-parser 


// this is an example of custom middleware
function log(req, res, next){
    console.log("I am middleware")

    next()
    // always have to tell the middlware to go to the next request or the browser will just keep loading
    
}

app.get('/', (req, res) => {
    res.send('ROOT')
})

app.get('/login', (req, res) => {
    res.send('LOGIN')
})

app.listen(3000, () => {
    console.log("Server is running...")
})