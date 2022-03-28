const db = require('../../database/models/index')
const Event = db.events


exports.checkJoiningParticipants = async (req, res, next) => {

    const joiningData = req.body


    Event.findOne({ _id: joiningData.eventId })
        .exec((err, event) => {
            if (err) {
                res.status(404).send({ message: 'Ha habido un error' })
                return;
            }

            if (event.participants === event.participantsList - 1) {
                res.status(303).send({ message: 'Has llegado al limite!' })
                return;
            }
            next()
        })
}