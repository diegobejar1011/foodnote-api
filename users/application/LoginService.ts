import { CreateTokenService } from "../../auth/application";
import { DataRepository, EncryptRepository } from "../domain/repositories";

export class LoginService {
    constructor(private readonly dataRepository: DataRepository, private readonly encryptRepository: EncryptRepository, private readonly createTokenService: CreateTokenService) {}

    async run(email: string, password: string) {
        try {
            const user = await this.dataRepository.getUserByEmail(email);

            if(!user){
                throw new Error("Usuario no encontrado");
            }

            const validated = await this.encryptRepository.decodePasword(password, user.password)

            if(!validated) {
                throw new Error("Contraseña incorrectas")
            }

            const token = this.createTokenService.run({id: user.id})

            return { 
                id: user.id,
                name: user.username,
                email: user.email,
                token: token
            };

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}