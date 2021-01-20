import { TestMailController } from './../controllers/app.testmail.controller';
import { HomeController } from './../controllers/app.home.controller';
import RouteConfig from "./route.api.routers.interface";

export const AppRoutes: Array<RouteConfig> = [];

// / 
AppRoutes.push({
    action: 'index',
    controller: HomeController,
    method: 'get',
    route: '/'
});

// /home
AppRoutes.push({
    action: 'index',
    controller: HomeController,
    method: 'get',
    route: '/home'
});

// /home
AppRoutes.push({
    action: 'index',
    controller: HomeController,
    method: 'get',
    route: '/home'
});

// /testmail
AppRoutes.push({
    action: 'index',
    controller: TestMailController,
    method: 'get',
    route: '/testmail'
});