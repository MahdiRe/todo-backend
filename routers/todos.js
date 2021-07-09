const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')

// Get all todo's
router.get('/all', async (req, res) => {
    try {
        const todos = await Todo.find({})
        res.send(todos)
    } catch {
        res.send("Error finding all the todo's")
    }
})

// Insert a new todo
router.post('/insert', async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        active_state: req.body.active_state,
        end_date: req.body.end_date
    })
    try {
        const newTodo = await todo.save()
        res.send("Created successfully")
    } catch {
        res.send("Error creating the todo!")
    }
})

// Get a todo
router.get('/:id', async (req, res) => {

})

// Update a todo
router.put('/:id', async (req, res) => {
    let todo
    try {
        todo = await Todo.findById(req.params.id)
        todo.active_state = "Done"
        await todo.save()
        res.send("Updated successfully")
    } catch {
        if (todo == null) {
            res.send("No such todo found!")
        } else {
            res.send("Error updating the todo!")
        }
    }
})

// Delete a todo
router.delete('/:id', async (req, res) => {
    let todo
    try {
        todo = await Todo.findById(req.params.id)
        await todo.remove()
        res.send("Deleted successfully")
    } catch {
        if (todo == null) {
            res.send("No such todo found!")
        } else {
            res.send("Error deleting the todo!")
        }
    }
})

module.exports = router