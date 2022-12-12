import { Router } from "express";
const router = Router()

import * as autCtrl from '../controllers/auth.controller'
import { verifySingup } from "../midlewares";

router.post('/signup', [verifySingup.checkDuplicateUser, verifySingup.checkRoles], autCtrl.signUp)
router.post('/signin', autCtrl.signIn)
router.get('/verRoles', autCtrl.getRoles)
router.delete('/:userId', autCtrl.deleteUser)

export default router;