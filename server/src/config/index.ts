import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";

import Headers from "../models/Header";
import { ItemMaster } from "../models/ItemMaster";
import { DetailTable } from "../models/Detail";
console.log();
dotenv.config();

export const sequelize = new Sequelize({
      database: process.env.MYSQL_DATABASE,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      host: process.env.MYSQL_HOST,
      dialect: "mysql",
      pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
      },
      models: [Headers, ItemMaster, DetailTable],
});

export const connect = () => {
      sequelize
            .authenticate()
            .then(() => {
                  console.log("Connection has been established successfully.");
            })
            .catch((err) => {
                  console.error("Unable to connect to the Database:", err);
            });
};
