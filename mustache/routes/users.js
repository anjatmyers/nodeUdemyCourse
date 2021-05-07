const express = require('express');
const router = express.Router()


router.get('/', (req, res) => {
    
    let users = [
        {name: "Andrea Myers", age: 26},
        {name: "Ally Deeter", age: 29},
        {name: "Adam MacKinnon", age: 35},
    ]
    // users = []
    res.render('users', {users: users})
})

router.get('/adduser', (req, res) => {
    res.render("add-user")
})

router.post('/adduser', (req, res) => {
    let first = req.body.first
    let last = req.body.last
    
    console.log(first, last)
    res.status(200).send()
})


module.exports = router;