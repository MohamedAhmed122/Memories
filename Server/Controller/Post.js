import PostMessage from '../Models/PostMessage.js'

// to Get all Posts we use Find()
export const getPosts = async(req ,res )=>{
    try {
        const posts = await PostMessage.find();
        res.status(200).json(posts)

        console.log(posts)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

// ToDo create =>
//1- create new instance
//2- save it
export const createPost = async (req ,res )=>{
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save()
        res.status(200).json(newPost)
    } catch (error) {
        res.status(409).json({error: error.message})
    }
}