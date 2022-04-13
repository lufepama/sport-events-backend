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
            console.log(user)
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

exports.putMessageChatRoom = async (req, res) => {

    try {
        const data = req.body
        console.log('data', data)
        const mssg = {
            userSender: data.userSender,
            userReceiver: data.userReceiver,
            message: data.message
        }

        const res = await Room.findOneAndUpdate(
            { chatRoomId: data.roomId },
            {
                $push: {
                    conversation: mssg
                }
            }, (err, succ) => {
                console.log(succ)
            }
        )


        res.status(200).json({ message: 'Todo ha ido bien...' })

    } catch (error) {
        res.status(400).json({ message: 'Ha habido un problema...' })

    }

}