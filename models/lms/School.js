const mongoose = require('mongoose');

const category = mongoose.Schema({
    name: { type: String },
    icon: { type: String },
    backcolor: { type: String }
})

const information = mongoose.Schema({
    id: { type: String },
    header: { type: String },
    text: { type: String }
})

const testimoinal = mongoose.Schema({
    name: { type: String },
    image: { type: String },
    description: { type: String }
})


const schoolSchema = mongoose.Schema({
    //_id: { type: mongoose.Schema.Types.ObjectId },
    lmsUser_id: { type: String },
    name: { type: String },
    title: { type: String },
    subtitle: { type: String },
    logo: { type: String },
    image: { type: String },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    categories: [
      { type: category },
    ],
    CTA: {
      title: { type: String },
      text: { type: String }
    },

    learning:
    {
      header: { type: String },
      image: { type: String },
      info: [
        { type: information },
      ],
    },
    testimoinals:
      [
        { type: testimoinal },
      ],
    partners: [
      { type: String }
    ],
    // footer: {
    //   "Company": ["About", "Careers", "Press", "Blog", "Affiliates",],
    //   "Community": [ "Go Premium", "Team Plans", "Refer a Friend", "Gift Cards", "Scholarships",],
    //   3: [],
    //   4: [],
    // },
    show: {
      categories: { type: Boolean },
      CTA: { type: Boolean },
      learning: { type: Boolean },
      students: { type: Boolean },
      partners: { type: Boolean },
      footer: { type: Boolean },
    },
    colors: {
      header: { type: String },
      title: { type: String },
      subtitle: { type: String },
      categories: { type: String },
      CTA: { type: String },
      learning: { type: String },
      students: { type: String },
      partners: { type: String },
      footer: { type: String },
    }
})

module.exports = mongoose.model('School', schoolSchema);