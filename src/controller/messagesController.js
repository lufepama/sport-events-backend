const db = require('./../database/models/index')
const Messages = db.messages

exports.sendMessage = async (req, res) => {

    try {

        const messageData = req.body
        console.log(messageData)
        if (!messageData.conversationId) {
            return res.status(400).json({ message: 'Este campos son obligatorios' })
        }

        Messages.create({
            conversationId: messageData.conversationId,
            userSenderId: req.userId,
            userReciverId: messageData.userReciverId,
            content: messageData.message,
        }, (err, newMessage) => {
            if (err) { return res.status(400).json({ message: `Problemon... ${err}` }) }

            console.log('saved', newMessage)

        })

        res.status(200).json({ message: 'Mensaje enviado correctamente' })


    } catch (error) {
        return res.status(400).json({ message: error })
    }

}

exports.deleteMessage = async (req, res) => {

    try {

        const messageDate = req.body

        if (!messageDate.messageId) { return res.status(400).json({ message: 'Hay un problema con el mensaje...!' }) }

        await Messages.deleteOne({ _id: messageDate.messageId })

        return res.status(200).json({ message: 'Mensaje borrado correctamente' })

    } catch (error) {
        return res.status(200).json({ message: error })
    }

}