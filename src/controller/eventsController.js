const db = require('../database/models/index')
const Event = db.events

// Module to get all events saved
exports.getAll = async (req, res) => {

    const query = await Event.find({})

    console.log('query', query)

    if (query) {
        res.status(200).json({ message: 'Successss', query: query })
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

        Event.create({
            sport: data.sport,
            userOrganizerId: data.userOrganizerId,
            dateAndTime: new Date(),
            duration: data.duration,
            participants: data.participants,
            isExpired: data.isExpired
        }, (err, small) => {
            console.log('savedddd', small)
        })

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