import knex from "knex";
import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";

const app = express();
dotenv.config();


const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

let a = 3;
let b = 5;
const c = a*b + 5;

 a = a + 8 / 2;
 b = 5*b*5;

console.log(a);
console.log(b);
console.log(c);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;