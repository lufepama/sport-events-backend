module.exports = (mongoose) => {
    let schema = mongoose.Schema({
        firstName: String,
        lastName: String,
        isAdmin: Boolean,
        email: String,
    },
        { timestamps: true }
    )

    const Events = mongoose.model('events', schema);

    return Events

}