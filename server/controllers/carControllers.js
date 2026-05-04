import Car from "../models/car.js";

//create a new car
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

//get all cars
export const getCars = async(req,res)=>{
    try{
        const cars = await Car.find().sort({createdAt: -1})

        res.status(200).json({
            sucess:true,
            count:cars.length,
            data:cars
        });
    }catch(error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}