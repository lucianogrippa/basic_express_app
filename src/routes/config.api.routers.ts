import { AuthRoutes } from './auth.api.routers';

import { UserRoutes } from './user.api.routers';
import RouteConfig from "./route.api.routers.interface";

export const Routes: Array<RouteConfig> = [];


Routes.push(... UserRoutes, 
            ... AuthRoutes);
