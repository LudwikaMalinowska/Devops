/* eslint-disable no-undef */
require("dotenv").config()
const dbConnData = {
	host: process.env.PG_HOST || "127.0.0.1",
	port: process.env.PG_PORT || 5432,
	database: process.env.PG_DATABASE || "postgres",
	user: process.env.PG_USER || "postgres",
	password: process.env.PG_PASSWORD,
}

const { Client } = require("pg")
const client = new Client(dbConnData)

console.log("Connection parameters: ")
console.log(dbConnData)

module.exports = client;