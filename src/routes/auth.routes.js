import { Router } from "express";
const router = Router()

import * as autCtrl from '../controllers/auth.controller'

router.post('/signup', autCtrl.signUp)
router.post('/signin', autCtrl.signIn)

export default router;