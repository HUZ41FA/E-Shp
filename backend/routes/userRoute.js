import {Router} from 'express'
import { deleteUser, getUser, updateUser, getAllUsers, userStats } from '../controllers/userController.js'
import verifyAdmin from '../customMiddleware/verifyAdmin.js'
import verifyUserParam from '../customMiddleware/verifyUserParam.js'

const router = Router()


router.put('/:userId', verifyUserParam, updateUser)
router.delete('/:usedId', verifyUserParam, deleteUser)
router.get('/find/:userId', verifyAdmin, getUser)
router.get('/', verifyAdmin, getAllUsers)
router.get('/stats', verifyAdmin, userStats)


export default router