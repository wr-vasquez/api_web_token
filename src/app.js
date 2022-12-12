import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';

import productsRoutes from './routes/products.routes';
import authRoutes from './routes/auth.routes';
import { createRoles } from './libs/initialSetup'; 
import userRoutes from './routes/user.routes'

const app = express()
createRoles();

app.set('pkg', pkg);


 app.use(morgan('dev'));
 app.use(express.json());

app.get('/', (req,res) => {
    res.json({
        author: app.get('pkg').author,
         description: app.get('pkg').name,
         Version: app.get('pkg').version,
     });
 } )

 //IMPORTACION PARA PODER USAR LAS RUTAS DEL DEL CONTROLADOR
app.use('/products',  productsRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)

export default app;

//SEGUIR EN EL MINUTO 1:48:51


