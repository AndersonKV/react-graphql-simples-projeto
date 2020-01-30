//index, show, store, update, destroy
const Author = require('../models/Author')
const Book = require('../models/Book');

module.exports = {
	async showAuthor(req, res) {
		const author = await Author.find()
		return res.json(author)
	},
	async showBook(req, res) {
		const book = await Book.find()
		return res.json(book)
	},
	async deleteAuthors(req, res) {
		try {
			const author = await Author.find().remove()
			return res.send(author)
		} catch (err) {
			console.log(err)
			return res.status(400).send(err)
		}
	},
	async deleteBooks(req, res) {
		try {
			const book = await Book.find().remove()
			return res.send(book)
		} catch (err) {
			console.log(err)
			return res.status(400).send(err)
		}
	}	
};

 