import mongoose from 'mongoose'



const postSchema = mongoose.Schema({
    title: String,
    message: String,
    hostedBy: String,
    tags: [String],
    likeCounter:{
        type: String,
        default: 0
    },
    createdAt:{
        type: String,
        default: new Date()
    }
})

const postMessage = mongoose.model('post',postSchema)

export default postMessage;