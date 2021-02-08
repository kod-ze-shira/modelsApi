const mongoose = require('mongoose')
const lessonSchema = mongoose.Schema({
    //_id: { type: mongoose.Schema.Types.ObjectId },
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    name: { type: String },
    subtitle: { type: String },
    lesson_URL: { type: String },
    time: { type: String },
    show: {
        stars: { type: Boolean },
        views: { type: Boolean },
        students: { type: Boolean },
        weeks: { type: Boolean },
        lessons: { type: Boolean },
        more_courses: { type: Boolean },
        belive: { type: Boolean },
        top_educators: { type: Boolean },
        footer: { type: Boolean },
        description: { type: Boolean }
    },
    settings: {
        autoplay: { type: Number },
        controls: { type: Number },
        loop: { type: Number }
      }
})

module.exports = mongoose.model('Lesson', lessonSchema);