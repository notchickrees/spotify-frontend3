require('dotenv').config();
const { Pool } = require("pg");

// const isProduction = process.env.NODE_ENV === "production";

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = new Pool({
    // connectionString: isProduction ? process.env.DATABASE_URL : connectionString
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false
    }
})

module.exports = { pool }