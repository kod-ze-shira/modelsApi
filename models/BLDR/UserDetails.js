const mongoose = require('mongoose')

const userDetailsSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    lastSite:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Site'
    }
})

module.exports = mongoose.model('UserDetails', userDetailsSchema)