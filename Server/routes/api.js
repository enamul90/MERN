import express from 'express';
const router = express.Router();
import * as todoController from '../app/controllers/todoControllers.js';


router.post('/',todoController.home)

router.get('/about',todoController.about)
router.get('/home',todoController.about)






export default router;