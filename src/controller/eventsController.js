const db = require('../database/models/index')
const Event = db.events
const User = db.users

// Module to get all events saved
exports.getAll = async (req, res) => {

    const query = await Event.find({})

    if (query) {
        res.status(200).json({ success: 'Successss', query: query })

    }
}

exports.getDetailEvent = async (req, res) => {

    try {
        const eventId = req.params.id

        Event.findById(eventId, (err, event) => {
            if (err) {
                return res.status(404).json({ message: `Ha habido un error ${err}` })
            }

            return res.status(202).json({ message: 'Todo ha ido bien...!', event: event })
        })

    } catch (error) {

        res.status(400).json({ message: 'Ha habido un error...' })
    }




}

// Module to create one event
exports.createOne = async (req, res) => {

    try {
        const data = req.body

        //Check if data is empty
        if (Object.keys(data).length == 0) {
            return res.status(404).json({ error: 'Esto no puede ser vacio' })
        }

        if (data.userId) {
            const userOrganizer = await User.findById(data.userId).exec()
            Event.create({
                sport: data.sport,
                userOrganizerId: data.userId,
                usernameOrganizer: userOrganizer.username,
                dateAndTime: data.startDate,
                duration: data.duration.label,
                participants: data.participants,
                isExpired: false,
                place: data.place,
            }, (err, small) => {
                if (err) {
                    res.status(404).json({ error: 'Ha habido un problema...' })
                }
            })
        }


        res.status(201).json({ success: 'Evento creado!' })


    } catch (error) {

        res.status(500).json({ error: 'Ha habido un problema...' })

    }
}

// Module to update expiration => true, after event has taken placed.
exports.updateExpiration = async (req, res) => {

    try {

        const eventId = req.params.id

        const event = await Event.findById(eventId).exec()

        if (event) {
            event.isExpired = true
            await event.save()
        }

        res.status(202).json({ message: 'Actualizado correctamente' })

    } catch (error) {
        res.status(404).json({ error: 'Ha habido un problema...', message: error })

    }

}

exports.joinEvent = async (req, res) => {

    try {

        const data = req.body
        await Event.findOneAndUpdate({ _id: data.eventId }, { $push: { participantsList: data.userId } })

    } catch (error) {
        res.status(404).json({ error: 'Ha habido un problema...', message: error })

    }

}