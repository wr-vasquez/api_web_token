import Product from "../models/Product"

export const createProduct = async (req, res) =>{
    const {name, category, price, imgURL} = req.body
   
   const newProduct = new Product({name, category, price, imgURL});
    
   const productSaved = await newProduct.save()
    res.status(201).json(productSaved)

}

export const getProduct = (req, res) => {
    res.json("get Allow");

}

export const updateProduct = (req, res) => {

}

export const deleteProduct = (req, res) => {

}