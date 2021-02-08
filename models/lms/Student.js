const mongoose = require('mongoose')
const studentCourse = mongoose.Schema({
    courseId: { type: String },
    stars: { type: Number },
    finishedLessons: { type: Number }
})

const studentSchema = mongoose.Schema({
    //_id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String },
    email: { type: String, require: true, unique: true, match: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ },
//   courses: [
//        { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }
//    ],
//    stars: { type: Number }
    courses: [ 
        { type: studentCourse }
    ]
})

module.exports = mongoose.model('Student', studentSchema);