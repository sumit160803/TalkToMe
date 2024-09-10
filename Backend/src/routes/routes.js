import express from "express";
import { LoginController, LogoutController, SignupController } from "../controllers/auth.controllers.js";
import {verifyJWT} from "../middlewares/auth.middleware.js"
const router=express.Router();

// Authentication
router.route("/auth/signup").post(SignupController)
router.route("/auth/login").post(LoginController)
router.route("/auth/logout").get(verifyJWT,LogoutController)

// Message

export default router
