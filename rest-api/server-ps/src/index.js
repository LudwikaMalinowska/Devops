/* eslint-disable no-undef */
const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

app.use(express.json())

const authors = require("./routes/authors")
const books = require("./routes/books")
const people = require("./routes/people")

app.use("/api/authors", authors)
app.use("/api/books", books)
app.use("/api/people", people)

const client = require("./connection.js")

		
// CREATE TABLE IF NOT EXISTS author (
// 	id SERIAL PRIMARY KEY,
// 	name VARCHAR(60) NOT NULL,
// 	surname VARCHAR(60) NOT NULL,
// 	dateOfBirth DATE NOT NULL,
// 	writtenBooks VARCHAR(1000) NOT NULL
//   );

client
	.connect()
	.then(() => {
		console.log("Connected to PostgreSQL")

		client.query(`CREATE TABLE IF NOT EXISTS person (
			id SERIAL PRIMARY KEY,
			name VARCHAR(60) NOT NULL,
			surname VARCHAR(60) NOT NULL,
			dateOfBirth DATE NOT NULL
		  );

		  CREATE TABLE IF NOT EXISTS book (
			id SERIAL PRIMARY KEY,
			title VARCHAR UNIQUE NOT NULL,
			authorId INTEGER NULL, 
			FOREIGN KEY (authorId) REFERENCES person (id),
			publicationDate DATE NOT NULL,
			book_cover VARCHAR(1000) NOT NULL
		  );

		  CREATE TABLE IF NOT EXISTS author (
			id SERIAL PRIMARY KEY,
			person_id INTEGER NOT NULL,
			book_id INTEGER NOT NULL, 
			FOREIGN KEY (person_id) REFERENCES person (id),
			FOREIGN KEY (book_id) REFERENCES book (id)
		  );
		  `);


		const port = process.env.PORT || 5000
		app.listen(port, () => {
			console.log(`API server listening at http://localhost:${port}`)
		})
	})
	.catch((err) => console.error("Connection error", err.stack))
