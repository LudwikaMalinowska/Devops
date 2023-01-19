/* eslint-disable no-undef */
const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

app.use(express.json())

const authors = require("./routes/authors")
const books = require("./routes/books")

app.use("/authors", authors)
app.use("/books", books)

const client = require('./connection.js');

client
	.connect()
	.then(() => {
		console.log("Connected to PostgreSQL")
		const port = process.env.PORT || 5000
		app.listen(port, () => {
			console.log(`API server listening at http://localhost:${port}`)
		})
	})
	.catch((err) => console.error("Connection error", err.stack))
