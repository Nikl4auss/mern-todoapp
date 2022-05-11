import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A title must be provided'],
        trim: true
    },
    content: {
        type: String,
        required: [true, 'Content must be provided'],
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    creationDate: {
        type: Date
    },
    updateDate: {
        type: Date
    },
    completionDate: {
        type: Date
    }
})

todoSchema.set('toJSON', {
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

export default mongoose.model('Todo', todoSchema)