const db = require('../database/models/index')
const Room = db.chat

const getMessageByDatetime = async (roomId, datetime) => {

    const room = await Room.find({ chatRoomId: roomId })
    const conversation = room[0].conversation

    const message = conversation.filter((el) => { el.datetime == datetime })


    return message
}


// const saveMessage = (messageInfo, callback) => {

//     Room.findOneAndUpdate(
//         { chatRoomId: messageInfo.roomId },
//         {
//             $push: {
//                 conversation: messageInfo.message
//             }
//         }, (err, data) => {
//             console.log('data', data)
//             console.log('datetime', messageInfo.datetime)
//             const lastMessage = data.conversation.filter(el => el.datetime == messageInfo.datetime)
//             callback(lastMessage)
//         })
// }

module.exports = {
    getMessageByDatetime
}