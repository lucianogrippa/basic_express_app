import { Global } from "../config/global.config";
import { UserController } from "../controllers/api/api.user.controller";
import RouteConfig from "./route.api.routers.interface";

const apiBasePath = Global.apiPrefix + "/user-controller";

export const UserRoutes: Array<RouteConfig> = [];

UserRoutes.push(new RouteConfig('get', apiBasePath + '/user', UserController, "all"));
UserRoutes.push(new RouteConfig('get', apiBasePath + '/users/:id', UserController, "one"));
UserRoutes.push(new RouteConfig('post', apiBasePath + '/user', UserController, "save"));
UserRoutes.push(new RouteConfig('delete', apiBasePath + '/users/:id', UserController, "remove"));