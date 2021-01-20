
import { configureAppRoutings } from './routes/app.routings.inits';
import express from 'express';
import * as http from 'http';
import { Global } from './config/global.config';
import ApplicationLogger from './common/logger.common.config';
import { configureApiRoutings } from "./routes/api.routings.inits";
import configureMiddleware from "./middlewares/startup.middleware";
import initDatabase from './repositories';

export const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port: number | string = process.env.PORT  || Global.serverPort;
const loggerApp = new ApplicationLogger(app);

configureMiddleware(app,loggerApp);

configureApiRoutings();

configureAppRoutings();

initDatabase(loggerApp);

server.listen(port, () => {
    loggerApp.logger.info(`Server running at http://localhost:${port}`);
});