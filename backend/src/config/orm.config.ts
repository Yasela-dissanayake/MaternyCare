import { DataSource } from "typeorm";
import { Notice } from "../entities/notice.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: 3306,
  username: "root",
  password: "letmein",
  database: "maternycaredb",
  synchronize: true,
  logging: false,
  entities: [Notice],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
});
