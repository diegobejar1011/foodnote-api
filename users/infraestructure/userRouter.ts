import { Router } from "express";
import { createUserController, loginController } from "./userDependencies";

export const userRouter = Router();

userRouter.post("/", createUserController.run.bind(createUserController));
userRouter.post("/login", loginController.run.bind(loginController));
