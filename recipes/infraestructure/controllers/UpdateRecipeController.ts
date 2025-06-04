import { Request, Response } from "express";
import { UpdateRecipeService } from "../../application/UpdateRecipeService";

export class UpdateRecipeController {
    constructor(private readonly updateRecipeService: UpdateRecipeService) {}

    async run(req: Request, res: Response) {
        try {
            
            const {id} = req.params;
            const recipe = req.body;

            await this.updateRecipeService.run(recipe, parseInt(id));

            res.status(200).json({
                success: true,
                message: "la receta se ha actualizado!"
            });
        } catch (error: any) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}