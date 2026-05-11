import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const registerUser = async(req,res) => {
    try{
        const {name,email,password} = req.body ;

        const existingUser = await User.findOne({email});
     

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:'user already exists',
            });
        }
        const hashedPassword = await bcrypt.hash(password,10);


        const user = await User.create({
            name,
            email,
            password:hashedPassword,

        });
        // generate token 
        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {
                expiresIn : '7d',
            }
        );
        res.status(201).json({
            success:true,
            token,
            user,
        });

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message,
        });
    }
};