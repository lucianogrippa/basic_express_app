import { getRepository } from 'typeorm';
import express, { NextFunction } from "express";
import { CommonController } from "../../common/controller,common.config";
import ApplicationLogger from "../../common/logger.common.config";
import { Global } from "../../config/global.config";
import { User } from '../../entities/user.entity';

export class AuthController extends CommonController {
    private userRepository = getRepository(User);

    constructor(app: express.Application, logger: ApplicationLogger) {
        super(app, 'AuthController', logger);
    }

  

    async signIn(req: express.Request, resp: express.Response,next: NextFunction) {
        this.logger.logger.debug("::onSignIn");

        resp.status(200).json('ok u are calling signin api');
    }
}