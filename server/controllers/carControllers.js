import Car from "../models/car.js";

export const createCar = async(req,res)=>{
    try{
        const car = await Car.create(req.body);

        res.status(201).json({
            sucess:true,
            message:'car listed succcesfully',
            data:car

        });
    }catch (error){
        res.status(500).json({
            success:false,
            message:error.message

        });
    }
};