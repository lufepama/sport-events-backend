const db = require('./../database/models/index')
const Room = db.chat
const User = db.users


exports.getContactList = async (req, res) => {

    try {

        const data = req.params
        User.find({ username: data.username }, (err, user) => {

            if (err) {
                return res.status(400).json({ message: 'Ha habido un problema...', error: err })
            }
            return res.status(200).json({ message: 'Todo ha ido bien...', contactList: user[0].contactList })
        })


    } catch (error) {
        res.status(400).json({ message: 'Todo ha ido bien...' })
    }
}

exports.getRoomConversation = async (req, res) => {

    try {
        const roomId = req.params.roomId
        Room.find({ chatRoomId: roomId }, (err, room) => {

            if (err) {
                return res.status(400).json({ message: 'Ha habido un problema...', error: err })
            }
            return res.status(200).json({ message: 'Todo ha ido bien...', conversation: room[0].conversation })
        })

    } catch (error) {
        res.status(400).json({ message: 'Ha habido un problema...' })

    }

}

exports.postMessageChatRoom = async (req, res) => {

    try {
        const data = req.body
        const mssg = {
            userSender: data.userSender,
            userReceiver: data.userReceiver,
            message: data.message,
            datetime: data.datetime
        }

        await Room.findOneAndUpdate(
            { chatRoomId: data.roomId },
            {
                $push: {
                    conversation: mssg
                }
            }).exec()

        return res.status(200).json({ message: 'Todo ha ido bien...' })

    } catch (error) {
        console.log('err', error)
        return res.status(400).json({ message: 'Ha habido un problema...' })

    }

}