/* eslint-disable no-unused-vars */

const client = require("../connection.js")
const express = require("express")
const app = express.Router()

app.get("/", async (req, res) => {
	const query = {
		text: "SELECT * FROM person;",
	}
	client.query(query, (error, result) => {
		//console.log(error, result);
		if (error) throw error
		return res.send({
			allPeople: result.rows,
		})
	})
})

app.post("/", async (req, res) => {
	const message = {
		toInsert: req.body,
	}
	const query = {
		text: "INSERT INTO person (name, surname, dateOfBirth) VALUES ($1, $2, $3);",
		values: [req.body.name, req.body.surname, req.body.dateOfBirth],
	}
	client.query(query, (error, result) => {
		if (error) console.log(error)
		return res.send(message)
	})
})

app.get("/:id", async (req, res) => {
	let id = req.params.id
	const query = {
		name: "get-person",
		text: "SELECT * FROM person where id = $1;",
		values: [id],
	}

	client.query(query, (error, result) => {
		if (error) console.log(error);
		return res.send(result.rows[0]);
	})
})

app.get("/:personSurname", async (req, res) => {
	let surname = req.params.surname
	const query = {
		name: "get-person",
		text: "SELECT * FROM person where surname = $1;",
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
		name: "delete-person",
		text: "DELETE FROM person WHERE id = $1 RETURNING *;",
		values: [id],
	}
	client.query(query, (error, result) => {
		if (error) throw error
		return res.send({
			deletedperson: result.rows,
			// deletedpersonId: id
		})
	})
})

app.put("/:id", async (req, res) => {
	let id = req.params.id
	let data = req.body
	const query = {
		name: "update-person",
		text: `UPDATE person SET name=$2, surname=$3,
      dateOfBirth=$4
      WHERE id = $1`,
		values: [id, data.name, data.surname, data.dateOfBirth],
	}
	client.query(query, (error, response) => {
		return res.send({
			updatedpersonId: id,
			data,
		})
	})
})

module.exports = app
