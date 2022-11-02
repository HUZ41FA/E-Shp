import {Router} from 'express'
import { chargeCutomer } from '../controllers/stripeController.js'

const router = Router()

router.post('/pay', chargeCutomer)

export default router