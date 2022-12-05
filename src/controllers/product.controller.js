import Product from "../models/Product";



//METODO PARA ENVIAR DATOS A MONGO DB // rul: http://localhost:3000/products/enviar
export const createProduct = async (req, res) =>{
    const {name, category, price, imgURL} = req.body;
    try{
        const newProduct = new Product({
            name, 
            category, 
            price, 
            imgURL,
        });
        const productSaved = await newProduct.save();
        res.status(201).json(productSaved)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
      }
    };
   

//METODO PARA MOSTRAR DATOS DE MONGO DB // url: http://localhost:3000/products/mostrar/
export const getProduct = async(req, res) => {
    const products = await Product.find();
    res.json(products);

};

// METODO PARA MOSTRAR UN ID// url http://localhost:3000/products/ --id que queremos ver
export const getProductById = async (req, res) =>{
    // const { productId } = req.params;

     const product = await  Product.findById(req.params.productId);
     res.status(200).json(product);

};

//METODO PARA ACTUALIZAR  // url http://localhost:3000/products/  --- id que queros actualizar

export const updateProductById = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body,{
    new: true
  })

  res.status(204).json(updatedProduct)

};

// METODO PARA ELIMINAR POR ID // url http://localhost:3000/products/ -- ID que vamos eliminar
export const deleteProduct =  async (req, res) => {

  const deletedProduct = await Product.findByIdAndDelete(req.params.productId)
  res.status(204).json()

}
