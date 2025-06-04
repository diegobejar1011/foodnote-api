import { Request, Response } from "express";
import { GetRecipeByIdService } from "../../application/GetRecipeById";


export class GetRecipeByIdController {
    constructor(private readonly getRecipeByIdService: GetRecipeByIdService) {}

    async run(req: Request, res: Response) {
        try {
            
            const { id } = req.params;

            const recipe = await this.getRecipeByIdService.run(parseInt(id));

            res.status(200).json({
                success: true,
                message: "Se ha obtenido la receta!",
                data: recipe
            });

        } catch (error: any) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}