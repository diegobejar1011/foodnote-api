import { Request, Response } from "express";
import { DeleteRecipeService } from "../../application/DeleteRecipeService";

export class DeleteRecipeController {
    constructor(private readonly deleteRecipeService: DeleteRecipeService) {}

    async run(req: Request, res: Response) {
        try {
            
            const { id } = req.params;

            await this.deleteRecipeService.run(parseInt(id));

            res.status(200).json({
                success: true,
                message: "la receta se ha eliminado!"
            });

        } catch (error: any) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}