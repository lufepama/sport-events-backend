const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Home user' })
})

routes.get('/get-user', (req, res) => {
    res.status(200).json({ message: 'There you have the user' })
})


module.exports = routes