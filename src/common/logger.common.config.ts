import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import express, { ErrorRequestHandler } from 'express';
import { Global } from '../config/global.config';
import DailyRotateFile from 'winston-daily-rotate-file';

export default class ApplicationLogger {

    private logFormat: winston.Logform.Format;
    private transport: DailyRotateFile;
    public appLoggerRequest: express.Handler;
    public errorLoggerRequest: ErrorRequestHandler;
    public logger: winston.Logger;
    public logLevel: string;

    constructor(app: express.Application) {

        this.logLevel = Global.loggerLevel;

        let requestformat = winston.format.combine(
            winston.format.colorize(),
            winston.format.json(),
            winston.format.align()
        );

        this.logFormat = winston.format.combine(
            //winston.format.colorize(),
            winston.format.timestamp({
                format:"DD-MM-YYYY HH:mm:ss.SSS"
            }),
            //winston.format.align(),
            winston.format.printf(
                info => `[${info.timestamp} ${info.level}] ${info.message}`,
                
            ),
            winston.format.printf(
                debug => `[${debug.timestamp} ${debug.level}] ${debug.message}`,
                
            ),
            winston.format.printf(
                error => `[${error.timestamp} ${error.level}] ${error.message}`,
                
            ),
            winston.format.printf(
                trace => `[${trace.timestamp} ${trace.level}] ${trace.message}`,
                
            ));

        let filename = Global.loggerFolder + "" + Global.loggerFile;

        this.transport = new DailyRotateFile({
            filename: filename,
            datePattern: Global.loggerDatePattern,
            zippedArchive: Global.loggerZippedArchive,
            maxSize: Global.loggerMaxSize,
            maxFiles: Global.loggerMaxFiles,
            frequency: '1d',
            utc: true
        });

        this.transport.on("rotate", function (_oldFilename: any, _newFilename: any) {
            // call function like upload to s3 or on cloud
        });

        // logga le richieste
        this.appLoggerRequest = expressWinston.logger({
            transports: [
                this.transport,
                //new winston.transports.Console()
            ],
            format: requestformat
        });
      
        const fName = Global.loggerFolder + "" + Global.loggerErrorFile;

        const errorTransport = new DailyRotateFile({
            filename: fName,
            datePattern: Global.loggerDatePattern,
            zippedArchive: Global.loggerZippedArchive,
            maxSize: Global.loggerMaxSize,
            maxFiles: Global.loggerMaxFiles,
            frequency: '1d',
            utc: true
        });

        // logga gli errori
        this.errorLoggerRequest = expressWinston.errorLogger({
            transports: [
                errorTransport,
               // new winston.transports.Console()
            ],
            format: requestformat
        });

        const ftFile = Global.loggerFolder + "" + Global.appLoggerFile;

        let transportApp = new winston.transports.DailyRotateFile({
            filename: ftFile,
            datePattern: Global.loggerDatePattern,
            zippedArchive: Global.loggerZippedArchive,
            maxSize: Global.loggerMaxSize,
            maxFiles: Global.loggerMaxFiles,
            level: this.logLevel,
            frequency: '1d',
            utc: true
        });

        this.logger = winston.createLogger({
            transports: [
                transportApp
            ],
            format: this.logFormat
        });
    }
}