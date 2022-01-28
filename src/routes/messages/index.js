const routes = require('express').Router()

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Home messages' })
})

routes.get('/get-all-messages', (req, res) => {
    res.status(200).json({ message: 'Home user' })
})

routes.post('/send-message', (req, res) => {
    res.status(201).json({ message: 'Home user' })
})

routes.delete('/delete-message', (req, res) => {
    res.status(201).json()
})

module.exports = routes