const express = require("express")
const router = express.Router()

const Author = require("../models/Author")

router.get("/", async (req, res) => {
	const query = Author.find({})
	query.exec(function (err, authors) {
		if (err) console.log(err)
		return res.send({
			allAuthors: authors,
		})
	})
})

router.get("/:authorId", async (req, res) => {
	// return res.send({});
	const authorId = req.params.authorId
	const query = Author.findOne({ authorId: authorId })
	query.exec(function (err, author) {
		if (err) console.log(err)
		if (author !== null) return res.send(author)
		else {
			// console.log("Author not found");
			res.status(404).json({ error: "Author not found" })
		}
	})
})

router.post("/", async (req, res) => {
	const newAuthor = new Author({
		authorId: req.body.authorId,
		authorname: req.body.authorname,
		password: req.body.password,
	})
	const u = await Author.findOne({ authorId: req.body.authorId }).catch((err) => console.log(err))
	// console.log(u);
	if (u === null) {
		//console.log("ngame", newGame)
		newAuthor
			.save()
			.then((result) => {
				// console.log("added author: ", result);
				return res.send(result)
			})
			.catch((err) => {
				res.status(500).json(err)
			})
	}
})

router.delete("/:authorId", async (req, res) => {
	// console.log("delete")
	const authorId = req.params.authorId
	// console.log(authorId)
	const query = Author.deleteOne({ authorId: authorId })
	query.exec(function (err, author) {
		if (err) console.log(err)
		if (author !== null) {
			// console.log(`Author o id: ${authorId} usunięty.`)
			return res.send(author)
		} else {
			// console.log("Author not found");
			res.status(404).json({ error: "Author not found" })
		}
	})
})

router.put("/:authorId", async (req, res) => {
	// console.log("---put")
	const authorId = req.params.authorId
	const updatedAuthor = {
		authorname: req.body.authorname,
	}
	const query = Author.findOneAndUpdate(
		{ authorId: authorId },
		{
			$set: updatedAuthor,
		}
	)
	query.exec(function (err, author) {
		if (err) console.log(err)
		if (author !== null) {
			return res.send({
				...updatedAuthor,
				authorId: authorId,
			})
		} else {
			// console.log("Author not found");
			res.status(404).json({ error: "Author not found" })
		}
	})
})

module.exports = router
