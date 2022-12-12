import jwt from 'jsonwebtoken'
import config  from '../config';
import User from '../models/User';
import Roles from '../models/Roles';

export const verifyToken = async(req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
    //console.log(token)
    if(!token) return res.status(403).json({messaje: "No hay token"});
   
    const decoded = jwt.verify(token, config.SECRET);
    req.userId = decoded.id;

    const user = await User.findById(req.userId, {password: 0} );
    console.log(user)
    if(!user) return res.status(404).json({message: "El ususario no existe"});
    next();
 
        
    } //SI EL USUARIO NO TIENE UN TOKEN VALIDO O AUTORIZADO
     catch (error) {
        return res.status(401).json({message: "Usuario No autorizado" })
        
    }
};
   
//METODO PARA COMPROBAR SI ES MODERADOR
export const isModerator = async(req, res, next) => {
 const user = await User.findById(req.userId)
 const roles = await Roles.find({_id: {$in: user.roles}})

 for (let i = 0; i < roles.length; i ++){
    if (roles[i].name === "moderator" ){
        next()
        return;
    }

 }

 return res.status(403).json({message: "Requiere de un Rol moderador"});

};

//METODO PARA COMPROBAR SI ES ADMIN
export const isAdmin = async(req, res, next) => {
    const user = await User.findById(req.userId)
 const roles = await Roles.find({_id: {$in: user.roles}})

 for (let i = 0; i < roles.length; i ++){
    if (roles[i].name === "admin" ){
        next()
        return;
    }

 }

 return res.status(403).json({message: "Requiere un rol Admin"} )
    
}