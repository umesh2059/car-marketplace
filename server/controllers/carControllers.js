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

export const getCarById = async(req,res)=>{
    try{
        const car = await Car.findById(req.params.id);

        if(!car){
            return res.status(404).json({
                success:false,
                message:'car not found'
            });
        }
        res.status(200).json({
            success:true,
            data:car
        })
    }catch(error){
        res.status(500).json({
            success:false,
message:error.message
        });
    }

};

export const updateCar = async(req,res)=>{
    try{
        const car = await Car.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true,       //retured updated car
                runValidators:true
            }
        );
       if(!car){
        return res.status(404)({
            success:false,
            message:'car not found'
        })

       }
       res.status(200).json({
        success:true,
        data:car
       })
    }catch(error) {
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
    
};