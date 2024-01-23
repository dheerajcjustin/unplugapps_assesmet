import express, { Request, Response } from "express";
import cors from "cors";
// import connection from "./config";
import { Sequelize } from "sequelize";
import router from "./routes";
import { sequelize, connect } from "./config";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.BACKENDPORT || 8010;

app.use(express.json()); // <==== parse request body as JSON

app.use(cors());
// connection.authenticate();

app.use("/", router);

connect();
sequelize?.sync();

app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
});
