import "reflect-metadata"
import { DataSource } from "typeorm"
import {User}  from "./entities/User"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "user",
    password: "root",
    database: "mydatabase",
    entities: [
        "src/entity/**/*.ts"
      ],
    synchronize: true,
    logging: false,
})

AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");

    })
    .catch((error) => console.log(error))