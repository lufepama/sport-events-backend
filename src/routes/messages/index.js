const routes = require('express').Router()
const mwAuth = require('./../../middleware/validationAuth')
const messagesController = require('./../../controller/messagesController')


routes.post('/send-message',
    mwAuth.tokenValidation,
    messagesController.sendMessage
)

routes.delete('/delete-message',
    mwAuth.tokenValidation,
    messagesController.deleteMessage
)

routes.get('/get-all-messages', (req, res) => {
    res.status(200).json({ message: 'Home user' })
})



module.exports = routes