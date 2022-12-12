import { Router } from "express";
const router = Router()
//ojo para Post Update y delete necesitamos verificar que exista un token o usuario valido

import * as productCtrl from '../controllers/product.controller'
import {authJwt} from '../midlewares'
import { verifyToken } from "../midlewares/authJwt";

router.get('/mostrar', productCtrl.getProduct)
router.post('/enviar', [authJwt.verifyToken, authJwt.isModerator], productCtrl.createProduct)
router.get( '/:productId', productCtrl.getProductById)
router.put( '/:productId', [authJwt.verifyToken, authJwt.isAdmin], productCtrl.updateProductById) 
router.delete('/:productId', [authJwt.verifyToken, authJwt.isModerator], productCtrl.deleteProduct)



// router.put( `/:id`, productCtrl.updateSingle)

export default router;