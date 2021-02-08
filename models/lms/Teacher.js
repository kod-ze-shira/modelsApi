const mongoose = require('mongoose')
const teacherSchema = mongoose.Schema({
    //_id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String },
    img: { type: String }
})

module.exports = mongoose.model('Teacher', teacherSchema);