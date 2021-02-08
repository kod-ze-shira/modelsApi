const mongoose = require('mongoose');

const lmsUserSchema = mongoose.Schema({
    //_id: { type: mongoose.Schema.Types.ObjectId },
    email: { type: String, require: true, unique: true, match: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ },
    uid: { type: String, require: true },
    username: { type: String },
    photo_URL: { type: String },
    school: { type: mongoose.Schema.Types.ObjectId, ref: 'School' },
    // courses: [
    //     { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }
    // ]
})

module.exports = mongoose.model('LmsUser', lmsUserSchema);