import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router ()

router.route("/register").post(registerUser)// /register to registerUser  //http://localhost:8000/users/register



export default router