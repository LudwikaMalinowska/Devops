const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

app.use(express.json())

const authors = require("./routes/authors")
const books = require("./routes/books")

app.use("/authors", authors)
app.use("/books", books)

require("dotenv").config()
const dbConnData = {
	port: 5000,
	mongo_host: "127.0.0.1",
	mongo_port: 27017,
	mongo_database: "automatyzacja",
}
const mongoose = require("mongoose")

mongoose
	.connect(
		`mongodb://${dbConnData.mongo_host}:${dbConnData.mongo_port}/${dbConnData.mongo_database}`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		}
	)
	.then((response) => {
		console.log(`Connected to MongoDB. Database name: "${response.connections[0].name}"`)

		app.listen(dbConnData.port, () => {
			console.log(`API server listening at http://localhost:${dbConnData.port}`)
		})
	})
	.catch((error) => console.error("Error connecting to MongoDB", error))
