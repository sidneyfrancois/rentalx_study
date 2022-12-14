import "reflect-metadata";
import express from "express";
import { router } from "./routes";
import { createConnection } from "./database";
import "./shared/container";

createConnection();

const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () => console.log("Server is running"));
