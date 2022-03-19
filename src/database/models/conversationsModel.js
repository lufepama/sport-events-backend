module.exports = (mongoose) => {

    let schema = mongoose.Schema({

        userCreatedConversationId: { type: String, require: true },

    },
        { timestamps: true } //It will create createdAt and updatedAt automatically
    )

    const Conversation = mongoose.model('conversations', schema);

    return Conversation
}