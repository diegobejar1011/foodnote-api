import { UpdateRecipeDto } from "../domain/dtos/UpdateRecipeDto";
import { DataRepository } from "../domain/repositories/DataRepository";

export class UpdateRecipeService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run(updateRecipe: UpdateRecipeDto, id: number){
        try {
            
            const recipe = await this.dataRepository.getRecipeById(id);

            if(!recipe) {
                throw new Error("La receta no existe!");
            }

           const updatedRecipe = {
            name: updateRecipe.name || recipe.name,
            category_id: updateRecipe.category_id || recipe.category_id,
            ingredients: updateRecipe.ingredients || recipe.ingredients,
            instructions: updateRecipe.instructions || recipe.instructions,
            rating: updateRecipe.rating || recipe.rating
           }

           await this.dataRepository.updateRecipe(updatedRecipe, id);

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}