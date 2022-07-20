var mongoose = require('mongoose')
var attempterSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quizid: {
        type: Number,
        required: true
    },
    answers:{
        type  :Array,
        default:[]
    },
    score: {
        type: Number,
        default:0
    }
})
module.exports = mongoose.model('attempter',attempterSchema)