const mongoose = require('mongoose')
const courseSchema = mongoose.Schema({
    //_id: { type: mongoose.Schema.Types.ObjectId },
    school_id: { type: mongoose.Schema.Types.ObjectId, ref: 'School' },
    name: { type: String },
    subtitle: { type: String },
    discription: { type: String },
    image: { type: String },
    price: { type: String },
    prev_price: { type: String },
    language: { type: String, /*enum: ['Hebrew', 'English'],*/ default: 'English'  },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher'},//auther?
    preview: { type: String },
    stars: { type: Number },//מתעדכן בכל פעם שתלמיד מצטרף או מעדכן
    views: { type: Number },//מתעדכן בכל 
    weeks: { type: Number },
    students_num: { type: Number },//מתעדכן בכל פעם שתלמיד מצטרף
    lessons: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }
    ],
    top_educators: [
      {
        bg: { type: String },
        image: { type: String },
        header: { type: String },
        content: { type: String },
        color: { type: String },
        discount: { type: String }
      }
    ],
    use: { type: String }, //??????????
    access: { type: String }, //??????????
    certificate:{ type: String },
    share:{
        instegram:{ type: String },
        facebook:{ type: String },
        whatsapp:{ type: String },
        twitter:{ type: String },
        linkedin:{ type: String },
        youtube:{ type: String },
        reddit:{ type: String },
    },
    belive:{
      text:{ type: String },
      auther:{ type: String },
      image:{ type: String },
    },
    description: {
      description: { type: String },
      certification: { type: String },
      forWhom: { type: String }
    },
    show:{
      stars:{ type: Boolean },
      views:{ type: Boolean },
      prev_price:{ type: Boolean },
      language:{ type: Boolean },
      use:{ type: Boolean },
      access:{ type: Boolean },
      certificate:{ type: Boolean },
      students:{ type: Boolean },
      weeks:{ type: Boolean },
      lessons:{ type: Boolean },
      more:{
        more_courses:{ type: Boolean },
        belive:{ type: Boolean },
        top_educators:{ type: Boolean },
        footer:{ type: Boolean },
      },
      share:{
        instegram:{ type: Boolean },
        facebook:{ type: Boolean },
        whatsapp:{ type: Boolean },
        twitter:{ type: Boolean },
        linkedin:{ type: Boolean },
        youtube:{ type: Boolean },
        reddit:{ type: Boolean },
      },
      description: { type: Boolean },
      course_description: { type: Boolean },
      certification: { type: Boolean },
      forWhom: { type: Boolean },
    },
    colors:{
      header: { type: String },
      name:{ type: String },
      subtitle:{ type: String },
      buy_course:{ type: String },
      more_courses:{ type: String },
      belive:{ type: String },
      top_educators:{ type: String }
    }
})

    

module.exports = mongoose.model('Course', courseSchema);