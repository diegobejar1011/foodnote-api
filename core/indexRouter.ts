import { Router } from "express";
import { userRouter } from "../users/infraestructure/userRouter";
import { recipeRouter } from "../recipes/infraestructure/recipeRouter";

export const indexRouter = Router();

indexRouter.use("/users", userRouter);
indexRouter.use("/recipes", recipeRouter);

