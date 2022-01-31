const routes = require('express').Router();
const controller = require('../../controller/usersController')
const mwAuth = require('../../middleware/validationAuth')


routes.post('/register', mwAuth.checkUserIsDuplicate, controller.signup)

routes.post('/signin',
    mwAuth.checkUserExist, mwAuth.passwordValidation,
    controller.signin)

routes.put('/reset-password',
    mwAuth.checkUserExist, mwAuth.tokenValidation,
    controller.resetPassword
)


routes.get('/logout', (req, res) => {
    res.status(200).json({ message: 'There you have the user' })
})

routes.get('/get-user', (req, res) => {
    res.status(200).json({ message: 'There you have the user' })
})

module.exports = routes