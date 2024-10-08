import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/user";

const AppDataSource = new DataSource({
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
