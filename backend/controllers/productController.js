import {v2 as cloudinary} from "cloudinary"
import productModel from "../models/productModel.js"

//ADD PRODUCT
const addProduct = async (req,res) => {
    try {
        const {name,description,price,category,sizes,bestseller,stock}=req.body
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.imagw4 && req.files.image4[0]
        const images = [image1,image2,image3,image4].filter((item)=>item != undefined)

        let imagesUrl = await Promise.all(
            images.map(async(item) =>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return result.secure_url
            })
        )

        const productData = {
            name,description,category,stock,price:Number(price),bestseller:bestseller === "true" ? true : false,
            sizes:JSON.parse(sizes), image: imagesUrl, date: Date.now()
        }
        console.log(productData);

        const product = new productModel(productData);
        await product.save()
        
        res.json({success:true,message:"Product Added"})
    } catch (error) {
        res.json({success:false, message:error.message})
        console.log(error)
    }
}

const modifyStock = async(req,res) => {
    try {
        console.log(req)
        await productModel.findByIdAndUpdate(req.body._id,{stock:req.body.stock})
        res.json({success:true,message:"Stock Updated"})
        
    } catch (error) {
        res.json({success:false, message:error.message})
        console.log(error)
    }
}

//LIST PRODUCT
const listProducts = async (req,res) => {
    try {
        const products = await productModel.find({})
        res.json({success:true, products})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

//REMOVE PRODUCT
const removeProduct = async (req,res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message:"Product removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

//SINGLE PRODUCT INFO
const singleProduct = async (req,res) => {
    try {
        const product = await productModel.findById(req.body.id)
        res.json({success:true, product})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export {addProduct,listProducts,removeProduct,singleProduct,modifyStock}
