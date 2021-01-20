import { AppRoutes } from './config.app.routers';
import { Routes } from './config.api.routers';
import { Request, Response } from "express";
import { logger } from "express-winston";
import { app } from "../startapp";

export const configureAppRoutings = () => {
    AppRoutes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = new route.controller(app, logger) as any;

            result[route.action](req, res, next);
        });
    });
};
