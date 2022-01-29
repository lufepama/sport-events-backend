// *******IMPORTS*********
const express = require('express');
const eventRoutes = require('./routes/events');
const userRoutes = require('./routes/users')
const messageRoutes = require('./routes/messages')
const db = require('./database/models/index');
// ******END IMPORTS********



// *****MY APP*******
const PORT = 3000

// Middlewares used in app instance
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Database connection
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => { console.log(err) })


// Custom Middlewares used in app instance. 
app.use('/events', eventRoutes);
app.use('/user', userRoutes);
app.use('/messages', messageRoutes);


app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`)
})