import { Router } from "express";
const router = Router()

import * as productCtrl from '../controllers/product.controller'

router.get('/mostrar', productCtrl.getProduct)
router.post('/enviar', productCtrl.createProduct)
router.put('/actualizar', productCtrl.updateProduct)
router.delete('/actualizar', productCtrl.deleteProduct)

export default router;