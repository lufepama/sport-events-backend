const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Home' })
})

routes.get('/get-all-events', (req, res) => {
    res.status(200).json({ message: 'There you have all events' })
})

routes.get('/get-single-event', (req, res) => {
    res.status(200).json({ message: 'There you have the event' })
})

module.exports = routes