import {Router} from 'express'
import { createCart, deleteCart, getAllCarts, getCart, updateCart } from '../controllers/cartController.js'
import verifyAdmin from '../customMiddleware/verifyAdmin.js'
import verifyUserParam from '../customMiddleware/verifyUserParam.js'

let router = Router()


router.post('/', verifyUserParam, createCart)
router.put('/:userId', verifyUserParam, updateCart)
router.delete('/:userId', verifyUserParam, deleteCart)
router.get('/find/:userId', verifyUserParam, getCart)
router.get('/', verifyAdmin, getAllCarts)

export default router