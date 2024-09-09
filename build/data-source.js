"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "user",
    password: "root",
    database: "mydatabase",
    entities: ["src/entities/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    migrationsTableName: 'typeorm_migrations',
    synchronize: false,
    logging: false,
});
AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((error) => console.log(error));
//# sourceMappingURL=data-source.js.map