import { Request, Response } from "express";
import { CreateRecipeService } from "../../application/CreateRecipeService";

export class CreateRecipeController {
    constructor(private readonly createRecipeService: CreateRecipeService) {}

    async run(req: Request, res: Response) {
        try {
            
            const recipe = req.body;

            console.log(recipe);

            await this.createRecipeService.run(recipe);

            res.status(201).json({
                success: true,
                message: "la receta ha sido creada!"
            });

        } catch (error: any) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}