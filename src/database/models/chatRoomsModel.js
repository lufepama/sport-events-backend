module.exports = (mongoose) => {

    let schema = mongoose.Schema({

        roomId: String,
        conversation: [
            {
                userSender: String,
                userReceiver: String,
                message: String,
                datetime: String
            }
        ]

    },
        { timestamps: true } //It will create createdAt and updatedAt automatically
    )

    const ChatRooms = mongoose.model('chatRoom', schema);

    return ChatRooms
}