import { db } from "../../../core/data/application/conn";
import { CreateUserReq, CreateUserRes } from "../../domain/dtos";
import { User } from "../../domain/entities/User";
import { DataRepository } from "../../domain/repositories";

export class MySQLRepository implements DataRepository {


    async create(createUserReq: CreateUserReq): Promise<CreateUserRes> {
        try {

            const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
            
            const result : any = await db.execute(query, [createUserReq.username, createUserReq.email, createUserReq.password]);

            return { id: result[0].insertId, name: createUserReq.username, email: createUserReq.email };

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async getUserByEmail(email: string): Promise<User> {
        try {
            
            const query = "SELECT id, username, email, password FROM users WHERE email = ?";

            const [rows]: any = await db.execute(query,[email]);

            return rows[0];

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

}