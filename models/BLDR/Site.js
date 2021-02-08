const mongoose = require('mongoose')

const siteSchema = mongoose.Schema({
    draft:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SiteContent'
    },
    beforePublish:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SiteContent'
    },
    publish:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SiteContent'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Site', siteSchema)