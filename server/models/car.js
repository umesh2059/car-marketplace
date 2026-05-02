import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            trim:true
        },
        brand:{
            type:String,
            required:true,
            trim:true
        },
        model:{
            type:String,
            required:true,
            trim:true
        },
        year:{
            type:Number,
            required:true,
            trim:true
        },
        price:{
            type:Number,
            required:true,
            trim:true
        },
        mileage:{
            type:String,
            required:true,
            trim:true
        },
        fuelType:{
            type:String,
            enum:['petrol','diesel','electric','hybrid'],
            trim:true
        },
        transmission:{
            type:String,
            required:true,
            enum:['manual', 'Automatic'],
            trim:true
        },
        location:{
            type:String,
            required:true,
            trim:true
        },
        image:{
            type:String,
            required:true,
            trim:true
        },
        description:{
            type:String,
            required:true,
            trim:true
        },
        seller:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },

    },
    {
        timestamps:true,
    }
);

const car = mongoose.model("car",carSchema);
export default car;
