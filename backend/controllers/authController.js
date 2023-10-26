import User from "../models/userSchema.js";
import bcrypt from 'bcryptjs';

export const registerNewUser = async (req, res, next)=>{

    try {
        let newUser = req.body
        newUser.password = await bcrypt.hash(newUser.password, 10);
        // bcrypt.genSalt(10, function(err, salt) {
        //     bcrypt.hash(newUser.password, salt, async function(err, hash) {
        //         const user = await User.create(newUser);
        //     });
        // });
        const user = await User.create(newUser);
        res.json({
            user,
            message:"User has been registered"
        })
    } catch (error) {
        next(error);
    }
}
export const loginUser = async (req, res, next)=>{
    try {
        let {email, password} = req.body;

        if(!email){
            return next(new Error("Please provide valid email or username"));
        }
        if(!password){
            return next(new Error("Please provide password"));
        }

        const user = await User.findOne({email:email});

        if(!user){
            return next(new Error(`${email} is not found, please create account and try again`))
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if(!isPasswordMatched){
            return next(new Error('Your password is incorrect, Please try again'));
        }

        //JWT

        res.json({
            user
        })


    } catch (error) {
        next(error)
    }
}
export const logoutUser = (req, res, next)=>{
    console.log("from inside logoutUser");
}