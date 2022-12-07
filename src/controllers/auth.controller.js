import User from '../models/User';
import jwt from 'jsonwebtoken'
import config from '../config';
import Roles from '../models/Roles';

//METODO PARA INICIAR SESION ROLES Url http://localhost:3000/api/auth/signup
export const signUp = async(req, res) =>{
    const {username, email, password, roles} = req.body;

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password) //aqui se guarda la contraseña sifrada
    })

    if(roles){
      const founRoles =  await Roles.find({name: {$in: roles} })
      newUser.roles = founRoles.map(role => role._id)
    } else{
        const role = await Roles.findOne({name: "user"})
        newUser.roles = [role._id];
    }

    //Guardamos  el nuevo usuario
   const savedUser = await newUser.save();
   console.log(savedUser);

   //Creamos el token
    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
    expiresIn: 86400, //24 Horas
 })
 return res.status(200).json({ token });
}


//METODO SIGNIN----
export const signIn = async(req, res) =>{
    
    //Validacion si el usuario existe devuelve el rol 
    const userFound = await User.findOne({email: req.body.email}).populate("roles");
    if (!userFound) return res.status(400).json({messaje: "User not found"})

    //Validacion de password si coincide o no 
    const matchPassword = await User.comparePassword(req.body.password, userFound.password)
    if(!matchPassword) return res.status(401).json({token: null, messaje: "Invalid Password"})
    console.log(userFound)
    res.json({token: ''})
}

