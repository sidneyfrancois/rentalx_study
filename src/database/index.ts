import "reflect-metadata";
import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5532,
  username: "postgres",
  password: "@overpower",
  database: "rentalx",
  entities: [],
  migrations: ["./src/database/migration/*.ts"],
});

export function createConnection(host = "database"): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export default dataSource;
