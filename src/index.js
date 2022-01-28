const express = require('express');
const eventRoutes = require('./routes/events');
const userRoutes = require('./routes/users')
const messageRoutes = require('./routes/messages')

const app = express()

const PORT = 3000


app.use('/events', eventRoutes);
app.use('/user', userRoutes);
app.use('/messages', messageRoutes);


app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`)
})