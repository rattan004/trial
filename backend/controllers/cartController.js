
import productModel from "../models/productModel.js";
import userModel from "../models/userModel.js"

// add products to user cart
const addToCart = async (req,res) => {
    try {
        const {userId, itemId, size} = req.body;
        const userData = await userModel.findById(userId);
        const item = await productModel.findById(itemId)
        let cartData = await userData.cartData;
        if (cartData[itemId]) {
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1
                await productModel.findByIdAndUpdate(item._id,{stock:item.stock-1})
            }
            else{
                cartData[itemId][size]=1
                await productModel.findByIdAndUpdate(item._id,{stock:item.stock-1})
            }
        }
        else{
            cartData[itemId] = {}
            cartData[itemId][size] = 1
            await productModel.findByIdAndUpdate(item._id,{stock:item.stock-1})
        }
        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success:true , message: "Added to Cart"})
    } catch (error) {
        res.json({success:false, message:error.message})
        
    }
}

//update
const updateCart = async(req,res) =>{
    try {
        const {userId,itemId,size,quantity,change} = req.body
        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;
        const item = await productModel.findById(itemId)
        cartData[itemId][size] = quantity
        const newStock = item.stock - change;
        if (newStock >= 0) { // Stock can't go negative
            cartData[itemId] = cartData[itemId] || {}; // Ensure the itemId exists in the cartData object. Prevents errors
            cartData[itemId][size] = quantity;

            await productModel.findByIdAndUpdate(item._id, { stock: newStock });
            await userModel.findByIdAndUpdate(userId, { cartData });

            res.json({ success: true, message: "Cart Updated" });
        } else {
            res.json({ success: false, message: "Not enough stock" }); // More descriptive message
        }

    } catch (error) {
        res.json({success:false, message:error.message})
    }
}

//get
const getUserCart = async(req,res) =>{
    try {
        const {userId} = req.body
        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;
        res.json({success:true, cartData})

    } catch (error) {
        res.json({success:false, message:error.message})
    }
}

export {addToCart,updateCart,getUserCart}
