module.exports = (mongoose) => {

    let schema = mongoose.Schema({
        conversationId: { type: String, require: true },
        userSenderId: { type: String, require: true },
        userReciverId: { type: String, require: true },
        content: { type: String, require: true },
    },
        { timestamps: true } //It will create createdAt and updatedAt automatically
    )

    const Messages = mongoose.model('messages', schema);

    return Messages
}