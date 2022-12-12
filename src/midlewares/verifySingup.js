import { ROLES } from "../models/Roles"
import User from "../models/User"

//VERIFICAR SI EL USUARIO ES DUPLICADO 
export const checkDuplicateUser = async ( req, res, next) =>{
 const user = await User.findOne({username: req.body.username})

 if(user) return res.status(400).json({message: "El usuario ya existe"})

 const email = await User.findOne({email: req.body.email})
 if(email) return res.status(400).json({message: "El email ya existe"})

 next();
}

// VERIFICAR SI EL USUARIO EXISTE
export const checkRoles = (req, res, next) => {
    if(req.body.roles){
        for(let i= 0; i < req.body.roles.length; i++){
          if(!ROLES.includes(req.body.roles[i])){
           return res.status(400).json({
            message: `Roles ${req.body.roles[i]} No Existe`})
          }
        }
    }
    next();
}