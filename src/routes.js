const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
} = require('./handler');

const router = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  // {
  //   method: 'PUT',
  //   path: '/notes/{id}',
  //   handler:
  // },
  // {
  //   method: 'DELETE',
  //   path: '/notes/{id}',
  //   handler:
  // },
];

module.exports = router;
