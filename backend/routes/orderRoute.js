import {Router} from 'express'
import { createOrder, deleteOrder, getAllOrders, getMonthlyIncome, getOrder, updateOrder } from '../controllers/orderController.js'
import verifyAdmin from '../customMiddleware/verifyAdmin.js'
import verifyUserParam from '../customMiddleware/verifyUserParam.js'

let router = Router()


router.post('/', verifyUserParam, createOrder)
router.put('/:orderId', verifyUserParam, updateOrder)
router.delete('/:orderId', verifyUserParam, deleteOrder)
router.get('/find/:orderId', verifyUserParam, getOrder)
router.get('/', verifyAdmin, getAllOrders)
router.get('/income', verifyAdmin, getMonthlyIncome)

export default router