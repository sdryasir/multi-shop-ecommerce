import Product from '../models/productSchema.js'
import * as cloudinary from 'cloudinary'

export const getAllProducts = async function(req, res, next){

    const products = await Product.find({})

    res.json(products);
}

export const getProductById = async function(req, res, next){
    const {id} = req.params;
    try {
        const product = await Product.findById(id)
        if(product){
            res.json(product);
        }else{
            next(new Error("Product not found"))
        }
    } catch (error) {
        next(error);
    }
}


export const createNewProduct = async function(req, res, next){
    const newProduct = req.body;
    console.log(newProduct);

    cloudinary.v2.uploader.upload(newProduct.image, {folder:'multishop ecommerce'})
    .then(result=>{
        let secure_url = result.secure_url;
        let public_id = result.public_id;
        let img = {
            secure_url,
            public_id
        }
        newProduct.image = [img]
        console.log(newProduct);
    }).catch(error=>next(error));

    // const result = await cloudinary.v2.uploader.upload(newProduct.image, {folder:'multishop ecommerce'})
        // let secure_url = result.secure_url;
        // let public_id = result.public_id;
        //     let img = {
        //         secure_url,
        //         public_id
        //     }
        //     newProduct.image = [img]
        //     console.log(newProduct);

    try {

        const r = await Product.create(newProduct)
        res.json({
            product:r
        });
    } catch (error) {
        next(error)
    }
    
}

export const updateProduct = async function(req, res, next){
    const {id} = req.params;
    const updatedProduct = req.body;

    await Product.findByIdAndUpdate(id, updatedProduct)
    res.json({
        message: 'Updated'
    });
}

export const deleteProduct = async function(req, res, next){
    const {id} = req.params;

    await Product.findByIdAndDelete(id);
    
    res.json({
        message: 'Deleted'
    });
}