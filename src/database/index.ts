import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5532,
  username: "postgres",
  password: "@overpower",
  database: "rentalx",
});

dataSource.initialize();
