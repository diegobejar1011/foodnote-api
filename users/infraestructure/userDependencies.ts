import { createTokenService } from "../../auth/infraestructure/authDependencies";
import { CreateUserService } from "../application/CreateUserService";
import { LoginService } from "../application/LoginService";
import { BcryptRepository } from "./adapters/BcryptRepository";
import { MySQLRepository } from "./adapters/MysqlRepository";
import { CreateUserController } from "./controllers/CreateUserController";
import { LoginController } from "./controllers/LoginController";

const mysqlRepository = new MySQLRepository();
const bcryptRepository = new BcryptRepository();

const createUserService = new CreateUserService(mysqlRepository, bcryptRepository);
const loginService = new LoginService(mysqlRepository, bcryptRepository, createTokenService);

export const createUserController = new CreateUserController(createUserService);
export const loginController = new LoginController(loginService);
