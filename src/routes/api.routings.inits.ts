import { AppRoutes } from './config.app.routers';
import { Routes } from './config.api.routers';
import { Request, Response } from "express";
import { logger } from "express-winston";
import { app } from "../startapp";

export const configureApiRoutings = () => {
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = new route.controller(app, logger) as any;
    
            result[route.action](req, res, next);
    
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
    
            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });
};
