/* eslint-disable no-unused-vars */
const client = require("../connection.js")
const express = require("express")
const app = express.Router()

app.get("/", async (req, res) => {
	console.log("Query books")
	const query = {
		text: "SELECT * FROM book;",
	}
	client.query(query, (error, result) => {
		//console.log(error, result);
		if (error) throw error
		return res.send({
			allBooks: result.rows,
		})
	})
})

app.post("/", async (req, res) => {
	const message = {
		toInsert: req.body,
	}
	const query = {
		text: "INSERT INTO book (title, authorId, publicationDate, book_cover) VALUES ($1,$2,$3,$4);",
		values: [req.body.title, req.body.authorId, req.body.publicationdate, req.body.book_cover],
	}
	client.query(query, (error, result) => {
		if (error) console.log(error)
		return res.send(message)
	})
})

app.get("/:id", async (req, res) => {
	let id = req.params.id
	const query = {
		name: "get-book",
		text: "SELECT * FROM book where id = $1;",
		values: [id],
	}

	client.query(query, (error, result) => {
		if (error) throw error
		return res.send(
			result.rows[0],
		)
	})
})

app.get("/:bookTitle", async (req, res) => {
	let title = req.params.bookTitle
	const query = {
		name: "get-book",
		text: "SELECT * FROM book where title = $1;",
		values: [title],
	}

	client.query(query, (error, result) => {
		if (error) throw error
		return res.send({
			queryFor: result.rows,
		})
	})
})

app.delete("/:id", async (req, res) => {
	let id = req.params.id
	const query = {
		name: "delete-book",
		text: "DELETE FROM book WHERE id = $1 RETURNING *;",
		values: [id],
	}
	client.query(query, (error, result) => {
		if (error) throw error
		return res.send({
			deletedBook: result.rows,
			// deletedbookId: id
		})
	})
})

app.put("/:id", async (req, res) => {
	let id = req.params.id
	let data = req.body
	const query = {
		name: "update-book",
		text: `UPDATE book SET title=$2, authorId=$3,
      publicationDate=$4, book_cover=$5
      WHERE id = $1`,
		values: [id, data.title, data.authorId, data.publicationdate, data.book_cover],
	}
	client.query(query, (error, response) => {
		return res.send({
			updatedbookId: id,
			data,
		})
	})
})

module.exports = app
