'use strict'
const store = require('./store')
const ui = require('./ui.js')

const createBook = function () {
  return $.ajax({
    method: 'POST',
    url: 'https://wdi-library.herokuapp.com/books'
  })
}

const getBooks = function () {
  return $.ajax({
    method: 'GET',
    url: 'https://wdi-library.herokuapp.com/books'
  })
}

const updateBook = function (id, title, author) {
  console.log('store game id is ' + store.book.id)
  return $.ajax({
    method: 'PATCH',
    url: 'https://wdi-library.herokuapp.com/books' + store.book.id,
    data: {
      'book': {
        'id': id,
        'title': title,
        'author': author
      }
    }
  })
}

module.exports = {
  updateBook,
  createBook,
  getBooks
}
