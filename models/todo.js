const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        requirred: true
    },
    active_state: {
        type: String,
        requirred: true
    },
    end_date: {
        type: String,
        requirred: true
    }
})

module.exports = mongoose.model('Todo', todoSchema)