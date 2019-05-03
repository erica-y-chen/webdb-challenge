const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
}


function find() {
    return db('actions');
}

function findById(id) {
    return db('actions')
        .where({ id })
        .first();
}


function add(actions) {
    // passing 'id' as the second parameter is recommended to ensure the id is returned
    // when connecting to other database management systems like Postgres
    return db('actions')
      .insert(actions, 'id')
      .then(([id]) => {
        return findById(id);
      });
  }
  