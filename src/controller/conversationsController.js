const db = require('./../database/models/index')
const Conversations = db.conversations
const Messages = db.messages

exports.createConversation = async (req, res) => {


    try {

        Conversations.create({
            userCreatedConversationId: req.userId
        }, (err, conver) => {
            if (err) { return res.status(400).json({ message: err }) }

            console.log('Conver created', conver)

        })

        return res.status(200).json({ message: 'Conversacion creada correctamente' })

    } catch (error) {

    }

    return res.status(200).json({ message: 'Create conversation' })

}


exports.getConversation = async (req, res) => {

    try {

        const conversationId = req.params.id
        Messages.find({ conversationId: conversationId }, (err, data) => {

            if (err) { return res.status(300).json({ message: 'Algo ha ido mal...' }) }

            if (data.length == 0) {
                return res.status(400).json({ message: 'Error' })
            }
            return res.status(200).json({ message: 'Success', data: data })

        })

    } catch (error) {
        return res.status(400).json({ message: 'Algo ha ido mal...' })

    }

}