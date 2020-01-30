const express = require('express');
const Controller = require('./Controller/Controller');

const routes = express.Router();

routes.get('/authors', Controller.showAuthor);
routes.get('/books', Controller.showBook);

routes.delete('/deleteAuthors', Controller.deleteAuthors);
routes.delete('/deleteBooks', Controller.deleteBooks);

module.exports = routes;