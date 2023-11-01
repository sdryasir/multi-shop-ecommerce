import 'dotenv/config';
import jwt from 'jsonwebtoken';
export const isAuthorizedUser = (req, res, next)=>{
    //const {token} = req.cookies('token');
    const token = req.cookies.token;

    if(!token){
        next(new Error('You are not authorized, Please login to access this resource'));
    }


    const {payload} = jwt.verify(token, process.env.JWT_SECRET);

    req.user = payload;
    next();    
}