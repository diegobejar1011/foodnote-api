import { Request, Response } from "express";
import { GetRecipesByCategoryService } from "../../application/GetRecipesService";

export class GetRecipesByCategoryController {
    constructor(private readonly getRecipesByCategoryService: GetRecipesByCategoryService) {}

    async run(req: Request, res: Response) {
        try {
            
            const { id } = req.params;

            const recipes = await this.getRecipesByCategoryService.run(parseInt(id));

            res.status(200).json({
                success: true,
                message: "se ha obtenido las recetas",
                data: recipes
            });

        } catch (error: any) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}