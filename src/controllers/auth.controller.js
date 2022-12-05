import User from '../models/User';
import jwt from 'jsonwebtoken'
import config from '../config';

//METODO PARA INICIAR SESION ROLES Url http://localhost:3000/api/auth/signup
export const signUp = async(req, res) =>{
    const {username, email, password, roles} = req.body;

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password) //aqui se guarda la contraseña sifrada
    })

    //Guardamos  el nuevo usuario
   const savedUser = await newUser.save();

   //Creamos el token
    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
    expiresIn: 86400, //24 Horas
 })
 return res.status(200).json({ token });
}


//METODO SIGNIN----
export const signIn = async(req, res) =>{
    res.json('signIn')
}