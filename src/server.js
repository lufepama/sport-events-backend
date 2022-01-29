// *******IMPORTS*********
const express = require('express');
const eventRoutes = require('./routes/events');
const userRoutes = require('./routes/users')
const messageRoutes = require('./routes/messages')
const db = require('./database/models/index');
// ******END IMPORTS********



// *****MY APP*******

const app = express()
app.use(express.urlencoded({ extended: true }))
const PORT = 3000

db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => { console.log(err) })

app.use('/events', eventRoutes);
app.use('/user', userRoutes);
app.use('/messages', messageRoutes);


app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`)
})