//4.1
import PostMessage from "../models/postMessage.js";

// 3.0
export const getPosts = async (req, res) => {
      // 4.2
     try {
           const postMessage = await PostMessage.find()

           console.log(postMessage);

           res.status(200).json(postMessage)
     } catch (error) {
            res.status(404).json({message: error.message});
     }
}
      //to learn more status code
      //https://www.restapitutorial.com/httpstatuscodes.html
export const createPost =  async (req, res) => {
      // 4.2.1
      const post = req.body;

      const newPost = new PostMessage(post)
      try {
           await newPost.save(); 

            res.status(201).json(newPost);
      } catch (error) {
            res.status(409).json({message: error.message});
      }
}

// 3.1 in routes/posts.js 
// 4.0 is in models/postMessage