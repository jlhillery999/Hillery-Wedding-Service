import { Client } from "pg";

export const client = new Client({
    user:'postgres',
    password: process.env.DBPASSWORD,
    database:'wedding-db',
    port:5432,
    host:'34.75.99.115'
});
client.connect();