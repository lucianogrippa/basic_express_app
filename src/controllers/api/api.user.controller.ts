import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../../entities/user.entity";
import { CommonController } from "../../common/controller,common.config";
import ApplicationLogger from "../../common/logger.common.config";
import * as express from "express";

export class UserController extends CommonController{
    
    

    private userRepository = getRepository(User);

    constructor(app: express.Application, logger: ApplicationLogger) {
        super(app, 'User', logger);
    }

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);

        await this.userRepository.remove(userToRemove as User);
    }

}