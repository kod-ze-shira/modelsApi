const mongoose = require('mongoose')

const siteContentSchema = mongoose.Schema({
    name: { type: String },
    url: {
        type: String, require: true
    },
    pages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Page'
    }],
    logo: { type: String },
    siteId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Site'
    }
})

module.exports = mongoose.model('SiteContent', siteContentSchema)