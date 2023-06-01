const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://anuragkumarthakur:anurag29@cluster0.oo3kmna.mongodb.net/Library")

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('Mongo DB Connection Successfull');
})

connection.on('error', (err) => {
    console.log('Mongo DB Connection Failed');
})

module.exports = connection;