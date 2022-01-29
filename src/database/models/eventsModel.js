const { Timestamp, Int32 } = require("mongodb");

module.exports = (mongoose) => {
    let schema = mongoose.Schema({
        sport: String,
        userOrganizerId: String,
        dateAndTime: { type: Date },
        duration: String,
        participants: Number,
        isExpired: Boolean
    },
        { timestamps: true } //It will create createdAt and updatedAt automatically
    )

    const Events = mongoose.model('events', schema);

    return Events
}

//TODO: Check 'duration' data type within schema... Integer, String...?