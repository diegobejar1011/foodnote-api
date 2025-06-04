import { Request, Response } from "express";
import { LoginService } from "../../application/LoginService";


export class LoginController {
    constructor(private readonly loginService: LoginService) {}
    async run(req: Request, res: Response){
        try {
            
            const { email, password } = req.body
        
            const result = await this.loginService.run(email, password);

            res.status(200).json({
                success: true,
                message: "usuario autenticado!",
                user: {
                    id: result.id,
                    name: result.name,
                    email: result.email
                },
                token: result.token
            });

        } catch (error: any) {
            console.log("Error al validar el usuario: " + error);

            res.status(500).json({
                success: false,
                error: "Error al validar el usuario",
                message: error.message
            })
        }
    }
}