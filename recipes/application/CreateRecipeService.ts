import { CreateRecipeDto } from "../domain/dtos/CreateRecipeDto";
import { DataRepository } from "../domain/repositories/DataRepository";

export class CreateRecipeService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run(createRecipe: CreateRecipeDto) {
        try {
            
            await this.dataRepository.createRecipe(createRecipe);

            return;

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}