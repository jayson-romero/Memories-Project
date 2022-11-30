// 2.0
import express from 'express';

// 3.1
import { getPosts, createPost } from '../controllers/posts.js';


// 2.1
const router = express.Router();

//http://localhost:5000/posts

router.get('/', getPosts);
router.post('/', createPost);

export default router;

// 3.0 is in controllers/posts.js
