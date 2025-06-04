import { db } from "../../../core/data/application/conn";
import { CreateRecipeDto } from "../../domain/dtos/CreateRecipeDto";
import { UpdateRecipeDto } from "../../domain/dtos/UpdateRecipeDto";
import { Category } from "../../domain/entities/Category";
import { Recipe } from "../../domain/entities/Recipe";
import { DataRepository } from "../../domain/repositories/DataRepository";


export class MysqlRepository implements DataRepository {

    async getCategories(): Promise<Category[]> {
        const query = "SELECT id, name FROM categories";
        const [rows]: any = await db.execute(query);
        return rows;
    }


    async createRecipe(createRecipe: CreateRecipeDto): Promise<void> {
        const { user_id, category_id, name, ingredients, instructions, rating } = createRecipe;
        const query = `
            INSERT INTO recipes (user_id, category_id, name, ingredients, instructions, rating)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        await db.execute(query, [user_id, category_id, name, ingredients, instructions, rating]);
    }

    async updateRecipe(updateRecipe: UpdateRecipeDto, id: number): Promise<void> {
        const query = `
            UPDATE recipes SET name = ?, category_id = ?, ingredients = ?, instructions = ?, rating = ? WHERE id = ?
        `;

        await db.execute(query, [updateRecipe.name, updateRecipe.category_id, updateRecipe.ingredients, updateRecipe.instructions, updateRecipe.rating, id]);

    }

    async getRecipes(user_id: number): Promise<Recipe[]> {
        const query = `SELECT recipes.id, recipes.name, c.name as category, ingredients, instructions, rating 
                FROM recipes
                INNER JOIN categories as c
                ON recipes.category_id = c.id
                WHERE user_id = ?`;
        
        const [rows]: any= await db.execute(query, [user_id]);

        return rows;
    
    }

    async getRecipeById(id: number): Promise<Recipe> {

        const query = `SELECT recipes.id, recipes.name, c.name as category, ingredients, instructions, rating 
                FROM recipes
                INNER JOIN categories as c
                ON recipes.category_id = c.id
                WHERE recipes.id = ?`;
        
        const result: any = await db.execute(query, [id]);

        return result[0][0];
    }

    async deleteRecipe(id: number): Promise<void> {
        const query = 'DELETE FROM recipes WHERE id = ?';

        await db.execute(query, [id]);
    }
}
