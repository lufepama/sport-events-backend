const db = require('../database/models/index')
const Users = db.users
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config/auth')

exports.signup = async (req, res) => {

    const userData = req.body

    try {

        Users.create({
            username: userData.username,
            password: bcrypt.hashSync(userData.password, 8),
            firstName: userData.firstName,
            lastName: userData.lastName
        }, (err, newUser) => {
            if (err) { return res.status(400).json({ message: `Problemon... ${error}` }) }

            console.log('saved', newUser)

        })

        res.status(200).json({ message: 'Register user' })


    } catch (error) {
        res.status(400).json({ message: `Problemon... ${error}` })

    }

}

exports.signin = async (req, res) => {

    const userData = req.body

    try {

        const tokenJWT = jwt.sign({ id: req.user._id }, config.secret)

        return res.status(200).json({
            message: 'Sign in !!!!',
            userId: req.user._id,
            username: req.user.username,
            accessToken: tokenJWT
        })

    } catch (error) {
        return res.status(400).json({ message: `Problemon... ${error}` })

    }

    res.status(200).json({ message: 'Register user' })


}

exports.resetPassword = async (req, res) => {

    try {

        const userData = req.body

        const newPasswd = bcrypt.hashSync(req.user.password, 8)

        Users.findOneAndUpdate({ username: userData.username }, { password: newPasswd }, (err, success) => {
            if (err) {
                console.log(err)
                return res.status(400).json({ message: 'Ha habido un problema...' })
            }

            return res.status(200).json({ message: 'Todo ha ido bien!...' })

        })

    } catch (error) {
        return res.status(400).json({ message: `Problemon... ${error}` })

    }

}