import { Request, Response } from "express";
import { CreateUserService } from "../../application/CreateUserService";
import { CreateUserReq } from "../../domain/dtos";

export class CreateUserController {
    constructor(private readonly createUserService: CreateUserService) {}

    async run(req: Request, res: Response) {
        try {
            const user : CreateUserReq = req.body;

            const result = await this.createUserService.execute(user);

            res.status(200).json({
                success: true,
                message: "el usuario se ha creado!",
                data: result
            });
        } catch (error: any) {
            console.log("Error al crear un usuario: " + error);
            
            res.status(500).json({
                success: false,
                error: "Error al crear el usuario",
                message: error.message
            });
        }
    }
}