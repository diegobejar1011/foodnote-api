import { DataRepository } from "../domain/repositories/DataRepository";

export class DeleteRecipeService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run(id: number) {
        try {
            
            await this.dataRepository.deleteRecipe(id);

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}