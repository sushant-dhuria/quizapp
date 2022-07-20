var mongoose = require('mongoose')
var quizstatsSchema = mongoose.Schema({

    quizname: {
        type: String,
        required: true
    },
    quizid: {
        type: Number,
        required: true
    },
    quizdescription: {
        type: String,
        required: true
    },
    correct: {
        type  :Array,
        default:[]
    },
    scores:{
        type  :Array,
        default:[]
    }
})
module.exports = mongoose.model('quizstats',quizstatsSchema)