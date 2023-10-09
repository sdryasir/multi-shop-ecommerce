import mongoose from 'mongoose';
const { Schema } = mongoose;


const productSchema = new Schema({
    title:{
        type:String,
        required:[true, 'Please provide the title'],
        minLength:[5, 'title sholud have atleast 5 chars'],
        maxLength:[30, 'title length should not exceed 30'],
        unique:true
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        required:[true, 'Please provide the price'],
        min:[100, 'minimum price should be 100'],
        max:[10000, 'maximum price should 10000']
    },
    discount:{
        type:Number,
        required:[true, 'Please provide the discount'],
        min:[0, 'minimum discount should be 0'],
        max:[80, 'maximum discount should 80']
    },
    image:[{url:String, size:{type:Number}}],
    rating:{
        count:{type:Number},
        rating:{
            type:Number, 
            min:[1, 'min 1 is allowed'],
            max:[5, 'Max 5 is allowed']
        }
    }
})


const Product = mongoose.model('product', productSchema);
export default Product;