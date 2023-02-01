import mongoose from 'mongoose'

const messagesSchema = mongoose.Schema({
        message: String,
        userName: String,
}) 

export default mongoose.model('Message', messagesSchema)