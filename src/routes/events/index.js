const routes = require('express').Router();
const events = require('../../controller/eventsController')




routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Home' })
})

routes.get('/get-all-events', events.getAll)

routes.get('/get-single-event', (req, res) => {
    res.status(200).json({ message: 'There you have the event' })
})

routes.put('/update-event-expiration/:id', events.updateExpiration)

routes.post('/create-new-event', events.createOne)



module.exports = routes