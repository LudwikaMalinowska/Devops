/* eslint-disable no-unused-vars */

const client = require('../connection.js');
const express = require("express")
const app = express.Router()

app.get("/", async (req, res) => {
	const query = {
		text: "SELECT * FROM author;",
	}
	client.query(query, (error, result) => {
		//console.log(error, result);
		if (error) throw error
		return res.send({
			allAuthors: [result.rows],
		})
	})
})

app.post("/", async (req, res) => {
	const message = {
		toInsert: req.body,
	}
	const query = {
		text: "INSERT INTO author (name, surname, dateOfBirth, writtenBooks) VALUES ($1, $2, $3, $4);",
		values: [req.body.name, req.body.surname, req.body.dateOfBirth, req.body.writtenBooks],
	}
	client.query(query, (error, result) => {
		if (error) throw error
		return res.send(message)
	})
})


app.get("/:authorSurname", async (req, res) => {
	let surname = req.params.surname
	const query = {
		name: "get-author",
		text: "SELECT * FROM author where surname = $1;",
		values: [surname],
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
		name: "delete-author",
		text: "DELETE FROM author WHERE id = $1 RETURNING *;",
		values: [id],
	}
	client.query(query, (error, result) => {
		if (error) throw error
		return res.send({
			deletedauthor: result.rows,
			// deletedauthorId: id
		})
	})
})


app.put("/:id", async (req, res) => {
	let id = req.params.id
	let data = req.body
	const query = {
		name: "update-author",
		text: `UPDATE author SET name=$2, surname=$3,
      dateOfBirth=$4
      WHERE id = $1`,
		values: [id, data.name, data.creationDate],
	}
	client.query(query, (error, response) => {
		return res.send({
			updatedauthorId: id,
			data,
		})
	})
})

module.exports = app
