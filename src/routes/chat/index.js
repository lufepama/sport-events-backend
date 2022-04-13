const routes = require('express').Router();
const mwAuth = require('../../middleware/validationAuth')
const routesChat = require('../../controller/chatController')


routes.get('/get-contacts/:username',
    mwAuth.tokenValidation,
    routesChat.getContactList
)

routes.get('/get-conversation/:roomId',
    mwAuth.tokenValidation,
    routesChat.getRoomConversation
)

routes.post('/send-message',
    mwAuth.tokenValidation,
    routesChat.putMessageChatRoom
)

module.exports = routes