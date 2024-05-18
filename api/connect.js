// Get the client
import mysql from 'mysql2';


export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "temuulen1",
    database: "social"
});