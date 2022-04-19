import express from "express";
import { Router } from "express";
import { authController } from "./auth.controller.js";

export const authRouter = Router();

authRouter.post("/login", express.json(), authController.login);
authRouter.post("/register", express.json(), authController.register);