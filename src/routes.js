const { addBookHandler } = require('./handler');

const router = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  // {
  //   method: 'GET',
  //   path: '/notes',
  //   handler:
  // },
  // {
  //   method: 'GET',
  //   path: '/notes/{id}',
  //   handler:
  // },
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
