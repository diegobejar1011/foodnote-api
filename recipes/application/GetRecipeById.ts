import { DataRepository } from "../domain/repositories/DataRepository";

export class GetRecipeByIdService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run(id: number) {
        try {

            const recipe = await this.dataRepository.getRecipeById(id);

            return recipe;
            
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}