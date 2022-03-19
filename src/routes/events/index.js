const routes = require('express').Router();
const events = require('../../controller/eventsController')
const mwAuth = require('../../middleware/validationAuth')

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Home' })
})

routes.get('/get-all-events', events.getAll)

routes.get('/get-single-event/:id', mwAuth.tokenValidation, events.getDetailEvent)

routes.put('/update-event-expiration/:id',
    mwAuth.tokenValidation,
    events.updateExpiration
)

routes.post('/create-new-event',
    mwAuth.tokenValidation,
    events.createOne
)

routes.put('/join-event',
    mwAuth.tokenValidation,
    events.joinEvent
)

module.exports = routes