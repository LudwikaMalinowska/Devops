const { Schema, model } = require("mongoose")

const bookSchema = new Schema({
	title: String,
	author: { type: Schema.ObjectId, ref: "Author" },
	pubicationDate: Date,
})

module.exports = model("Book", bookSchema)
