import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "../entities/user.entity";
import { DBConfig } from '../config/db.config';

let initDatabase = (loggerApp) => {

createConnection({
    type: "mysql",
    host: DBConfig.HOST as string,
    port: DBConfig.PORT as number,
    username: DBConfig.USER as string,
    password: DBConfig.PASSWORD as string,
    database: DBConfig.DB as string,
    synchronize: true,
    logging: false,
    entities: [User]
})
    .then(async connection => {
        // insert new users for test
        await connection.manager.create(User);

        const users = new User();

        users.firstName = 'Luciano';
        users.lastName = 'Grippa';
        users.age = 45;
        users.id = 1;

        await connection.manager.save(users);


    })
    .catch((err) => {
        loggerApp.logger.error(err);
    });
}

export default initDatabase;