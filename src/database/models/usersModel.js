module.exports = (mongoose) => {

    let schema = mongoose.Schema({
        username: { type: String, require: true, unique: true },
        password: { type: String },
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String },
        gender: { type: String },
        contactList: [{
            contactId: String,
            username: String,
            roomId: String,
        }]
    },
        { timestamps: true } //It will create createdAt and updatedAt automatically
    )

    const Users = mongoose.model('users', schema);

    return Users
}
