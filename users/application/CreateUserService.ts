import { CreateUserReq } from "../domain/dtos";
import { DataRepository, EncryptRepository } from "../domain/repositories";



export class CreateUserService {
    constructor(private readonly dataRepository: DataRepository, private readonly encryptRepository: EncryptRepository) {}

    async execute(createUserReq: CreateUserReq) {
        try {

            createUserReq.password = await this.encryptRepository.encodePassword(createUserReq.password);

            const data = await this.dataRepository.create(createUserReq);

            return data;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}