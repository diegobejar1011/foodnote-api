import { DataRepository } from "../domain/repositories/DataRepository";

export class GetRecipesByCategoryService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run(user_id: number) {
        try {
            
            const resultRecipes = await this.dataRepository.getRecipes(user_id);

            return resultRecipes;

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}