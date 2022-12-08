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
	host: "127.0.0.1",
	port: 27017,
	database: "sem5_automatyzacja",
}
const mongoose = require("mongoose")

mongoose
	.connect(`mongodb://${dbConnData.host}:${dbConnData.port}/${dbConnData.database}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then((response) => {
		console.log(`Connected to MongoDB. Database name: "${response.connections[0].name}"`)
		const port = 5000

		app.listen(port, () => {
			console.log(`API server listening at http://localhost:${port}`)
		})
	})
	.catch((error) => console.error("Error connecting to MongoDB", error))
