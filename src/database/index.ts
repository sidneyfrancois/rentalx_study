import "reflect-metadata";
import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5532,
  username: "postgres",
  password: "@overpower",
  database: "rentalx",
  entities: ["./src/modules/**/entities/*.ts"],
  migrations: ["./src/database/migration/*.ts"],
});

export function createConnection(host = "localhost"): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export default dataSource;
