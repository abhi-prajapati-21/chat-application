import express from 'express'
import { signup, login } from '../controllers/auth.js'
import { messages} from '../controllers/message.js';
import { getAllUsers } from '../controllers/fetchUsers.js';
import { fetchAllMessages } from '../controllers/fetchAllMessages.js';

const router = express.Router()

router.post('/signup', signup);
router.post('/login', login);

router.patch('/message/:id', messages)
//  router.patch('/friendsMessage/:id', friendsMessage)
//  router.patch('/allMessages/:id', allMessages)

router.get('/getAllUsers', getAllUsers)
router.get('/fetchAllMessages', fetchAllMessages)


export default router;