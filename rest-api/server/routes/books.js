const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()

const Book = require("../models/Book")

router.get("/", async (req, res) => {
	const query = Book.find({})
	query.exec(function (err, books) {
		if (err) console.log(err)
		return res.send({
			allBooks: books,
		})
	})
})

router.get("/:bookId", async (req, res) => {
	// return res.send({});
	const bookId = req.params.bookId
	const query = Book.findOne({ bookId: bookId })
	query.exec(function (err, book) {
		if (err) console.log(err)
		if (book !== null) return res.send(book)
		else {
			// console.log("Book not found");
			res.status(404).json({ error: "Book not found" })
		}
	})
})

router.post("/", async (req, res) => {
	const newBook = new Book({
		bookId: req.body.bookId,
		bookname: req.body.bookname,
		password: req.body.password,
	})
	const u = await Book.findOne({ bookId: req.body.bookId }).catch((err) => console.log(err))
	// console.log(u);
	if (u === null) {
		//console.log("ngame", newGame)
		newBook
			.save()
			.then((result) => {
				// console.log("added book: ", result);
				return res.send(result)
			})
			.catch((err) => {
				res.status(500).json(err)
			})
	}
})

router.delete("/:bookId", async (req, res) => {
	// console.log("delete")
	const bookId = req.params.bookId
	// console.log(bookId)
	const query = Book.deleteOne({ bookId: bookId })
	query.exec(function (err, book) {
		if (err) console.log(err)
		if (book !== null) {
			// console.log(`Book o id: ${bookId} usunięty.`)
			return res.send(book)
		} else {
			// console.log("Book not found");
			res.status(404).json({ error: "Book not found" })
		}
	})
})

router.put("/:bookId", async (req, res) => {
	// console.log("---put")
	const bookId = req.params.bookId
	const updatedBook = {
		bookname: req.body.bookname,
	}
	const query = Book.findOneAndUpdate(
		{ bookId: bookId },
		{
			$set: updatedBook,
		}
	)
	query.exec(function (err, book) {
		if (err) console.log(err)
		if (book !== null) {
			return res.send({
				...updatedBook,
				bookId: bookId,
			})
		} else {
			// console.log("Book not found");
			res.status(404).json({ error: "Book not found" })
		}
	})
})

module.exports = router
