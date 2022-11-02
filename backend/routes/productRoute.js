import {Router} from 'express'
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../controllers/productController.js'
import verifyAdmin from '../customMiddleware/verifyAdmin.js'
import verifyUserParam from '../customMiddleware/verifyUserParam.js'


const router = Router()


router.post('/', verifyAdmin, createProduct)
router.delete('/:productId', verifyAdmin, deleteProduct)
router.get('/:productId', getProduct)
router.put('/:productId', verifyAdmin, updateProduct)
router.get('/find', getAllProducts)

export default router