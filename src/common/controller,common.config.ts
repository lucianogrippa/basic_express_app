import express from 'express';
import ApplicationLogger from './logger.common.config';
export abstract class CommonController {
    app: express.Application;
    name: string;
    logger: ApplicationLogger;

    constructor(app: express.Application, name: string,logger: ApplicationLogger) {
        this.app = app;
        this.name = name;
        this.logger = logger;
       // this.configureRoutes();
    }
    getName() {
        return this.name;
    }
   // abstract configureRoutes(): express.Application;
}