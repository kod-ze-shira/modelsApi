
const mongoose = require('mongoose')

const workspaceSchema = mongoose.Schema({
    wName: String,
    userId: String,
    teams: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'team'
    }],
    projects: [project = mongoose.Schema({
        pSub: String,
        pDesc: String,
        pProdDate: String,
        pEstimatedDate: String,
        pEndDate: String,
        pUpdateDates: [String],
        pAttachment: String,
        pId: String,

        pTasks: [task = mongoose.Schema({
            tSub: String,
            tDesc: String,
            tAssingTo: String,
            tStatusTag: [String],
            tProdDate: String,
            tEstimatedDate: String,
            tEndDate: String,
            tUpdateDates: [String],
            tParticipants: [String],
            tImage: String,
            tFile: [],
            tNotes: [],
            tDone: String,
            Number_of_participants: Number,
            tAttachment: [String],
        })
        ]
    })]


})

module.exports = mongoose.model('Workspace', workspaceSchema)

