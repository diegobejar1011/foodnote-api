import { Router } from "express";
import { createRecipeController, deleteRecipeController, getCategoriesController, getRecipeByIdController, getRecipesByCategoryController, updateRecipeController } from "./recipeDependencies";
import { verifyTokenService } from "../../auth/infraestructure/authDependencies";

export const recipeRouter = Router();

recipeRouter.post("/", verifyTokenService.run.bind(verifyTokenService), createRecipeController.run.bind(createRecipeController));
recipeRouter.get("/categories", verifyTokenService.run.bind(verifyTokenService), getCategoriesController.run.bind(getCategoriesController));
recipeRouter.get("/users/:id", verifyTokenService.run.bind(verifyTokenService), getRecipesByCategoryController.run.bind(getRecipesByCategoryController));
recipeRouter.put("/:id", verifyTokenService.run.bind(verifyTokenService), updateRecipeController.run.bind(updateRecipeController));
recipeRouter.get("/:id", verifyTokenService.run.bind(verifyTokenService),  getRecipeByIdController.run.bind(getRecipeByIdController));
recipeRouter.delete("/:id", verifyTokenService.run.bind(verifyTokenService), deleteRecipeController.run.bind(deleteRecipeController));
