import { Global } from "../config/global.config";
import { UserController } from "../controllers/api/api.user.controller";
import RouteConfig from "./route.api.routers.interface";

export const AuthRoutes: Array<RouteConfig> = [];
const apiBasePath = Global.apiPrefix + "/auth-controller";

AuthRoutes.push(new RouteConfig('get',apiBasePath+'/signin',UserController,"signin"));