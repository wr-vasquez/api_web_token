import { Router } from "express";
const router = Router()

import * as productCtrl from '../controllers/product.controller'

router.get('/mostrar', productCtrl.getProduct)
router.post('/enviar', productCtrl.createProduct)
router.get( '/:productId', productCtrl.getProductById)
router.put( '/:productId', productCtrl.updateProductById) 
router.delete('/:productId', productCtrl.deleteProduct)



// router.put( `/:id`, productCtrl.updateSingle)

export default router;