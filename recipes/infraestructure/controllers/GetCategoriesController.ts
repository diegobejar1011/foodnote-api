import { Request, Response } from "express";
import { GetCategoriesService } from "../../application/GetCategoriesServices";

export class GetCategoriesController {
    constructor(private readonly getCategoriesService: GetCategoriesService) {}

    async run(req: Request, res: Response){
        try {
            
            const categories = await this.getCategoriesService.run();

            res.status(200).json({
                success: true,
                message: "Se consiguieron las categorias!",
                data: categories
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error al conseguir las categorias"
            });
        }
    }
}