import express, { NextFunction, Request, Response } from "express";
import { CommonController } from "../common/controller,common.config";
import ApplicationLogger from "../common/logger.common.config";

export class HomeController extends CommonController {

    constructor(app: express.Application, logger: ApplicationLogger) {
        super(app, 'HomeController', logger);
    }

   async index(request: Request, response: Response, next: NextFunction) {
        
        response.status(200).render("index");
    }
}