import { CreateRecipeDto } from "../dtos/CreateRecipeDto";
import { UpdateRecipeDto } from "../dtos/UpdateRecipeDto";
import { Category } from "../entities/Category";
import { Recipe } from "../entities/Recipe";

export interface DataRepository {
    createRecipe(createRecipe: CreateRecipeDto): Promise<void>;
    updateRecipe(updateRecipe: UpdateRecipeDto, id: number): Promise<void>;
    getRecipes(userId: number): Promise<Recipe[]>;
    getRecipeById(id: number): Promise<Recipe>;
    deleteRecipe(id: number): Promise<void>;
    getCategories(): Promise<Category[]>;
}