import cors from 'cors';
import * as bodyparser from 'body-parser';
import ejs from 'ejs';
import path from "path";
import { loggers } from "winston";
import express from 'express';

let configureMiddleware = (app, loggerApp) => {
    app.use(bodyparser.json());

    app.use(cors());

    app.use(loggerApp.appLoggerRequest);

    // here setpup template engine
    app.set("view engine", "ejs");
    app.set('views', path.join(__dirname, '/../views'));

    app.use(express.static(path.join(__dirname, '/../public')));
}

export default configureMiddleware;