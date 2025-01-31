import express from 'express';
import { loginUser,registerUser,adminLogin, userDetails, updateUserDetails } from '../controllers/userController.js';
import authUser from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)
userRouter.post('/details',authUser,userDetails)
userRouter.post('/update',authUser,updateUserDetails)

export default userRouter;
