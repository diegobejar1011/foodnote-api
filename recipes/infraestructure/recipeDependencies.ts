import { CreateRecipeService } from "../application/CreateRecipeService";
import { DeleteRecipeService } from "../application/DeleteRecipeService";
import { GetCategoriesService } from "../application/GetCategoriesServices";
import { GetRecipeByIdService } from "../application/GetRecipeById";
import { GetRecipesByCategoryService } from "../application/GetRecipesService";
import { UpdateRecipeService } from "../application/UpdateRecipeService";
import { MysqlRepository } from "./adapters/MysqlRepository";
import { CreateRecipeController } from "./controllers/CreateRecipeController";
import { DeleteRecipeController } from "./controllers/DeleteRecipeController";
import { GetCategoriesController } from "./controllers/GetCategoriesController";
import { GetRecipeByIdController } from "./controllers/GetRecipeByIdController";
import { GetRecipesByCategoryController } from "./controllers/GetRecipesController";
import { UpdateRecipeController } from "./controllers/UpdateRecipeController";

const mysqlRepository = new MysqlRepository();

const createRecipeService = new CreateRecipeService(mysqlRepository);
const updateRecipeService = new UpdateRecipeService(mysqlRepository);
const deleteRecipeService = new DeleteRecipeService(mysqlRepository);
const getRecipesByCategoryService = new GetRecipesByCategoryService(mysqlRepository);
const getRecipeByIdService = new GetRecipeByIdService(mysqlRepository);
const getCategoriesService = new GetCategoriesService(mysqlRepository);

export const createRecipeController = new CreateRecipeController(createRecipeService);
export const updateRecipeController = new UpdateRecipeController(updateRecipeService);
export const deleteRecipeController = new DeleteRecipeController(deleteRecipeService);
export const getRecipesByCategoryController = new GetRecipesByCategoryController(getRecipesByCategoryService);
export const getRecipeByIdController = new GetRecipeByIdController(getRecipeByIdService);
export const getCategoriesController = new GetCategoriesController(getCategoriesService);