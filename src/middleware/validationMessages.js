const db = require('./../database/models/index')
const Users = db.users
const Messages = db.messages

exports.isUserOwnerOfMessage = async (req, res) => {

    try {

        Messages.findOne({ userSenderId: req.userId }, (err, message) => {
            if (err) { return res.status(400).json({ message: 'Ha habido un problema...' }) }
        })

    } catch (error) {

    }

}