import { CreateUserReq, CreateUserRes } from "../dtos"
import { User } from "../entities/User"



export interface DataRepository {
    create(createUserReq: CreateUserReq): Promise<CreateUserRes>
    getUserByEmail(email: string): Promise<User>
}