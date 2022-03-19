module.exports = (mongoose) => {
    let schema = mongoose.Schema({
        sport: String,
        userOrganizerId: String,
        usernameOrganizer: String,
        dateAndTime: { type: Date },
        duration: String,
        participants: Number,
        isExpired: Boolean,
        place: String,
        participantsList: [String],
    },
        { timestamps: true } //It will create createdAt and updatedAt automatically
    )

    const Events = mongoose.model('events', schema);

    return Events
}

//TODO: Check 'duration' data type within schema... Integer, String...?