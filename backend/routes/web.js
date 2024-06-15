import express from 'express'
const router =express.Router();
import quora from '../controllers/maincontroller.js';


router.get('/questions',quora.question)
router.post('/questions',quora.questionCreated)
router.post('/answers',quora.answer)

export default router