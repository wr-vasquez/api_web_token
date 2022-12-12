import { Router } from "express";
const router = Router()

import * as userCtrl from '../controllers/user.controller';
import {authJwt, verifySingup} from '../midlewares';

router.post('/crear',
[authJwt.verifyToken, authJwt.isAdmin, verifySingup.checkRoles], userCtrl.createUser)


export default router;