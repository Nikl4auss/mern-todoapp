import { Router } from "express";

const todoRouter = Router()

todoRouter.get('/', (req, res) => {
    res.send('Here are all todos')
})

todoRouter.get('/:id', (req, res) => {
    res.send(`Here is the todo with id: ${req.params.id} `)
})

todoRouter.post('/', (req, res) => {
    res.send('The todo was created')
})

todoRouter.put('/:id', (req, res) => {
    res.send(`The todo with id: ${req.params.id} was updated`)
})

todoRouter.delete('/:id', (req, res) => {
    res.send(`The todo with id: ${req.params.id} `)
})

export default todoRouter