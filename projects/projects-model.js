const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    getActions,
    add,
}


function find() {
    return db('projects');
}

function findById(id) {
    return db('projects')
        .where({ id })
        .first();
}

async function getActions(id){
    // console.log('actions')
    const project = await db('projects')
        .where({id})
        .first();
    console.log(project)
    const actions = await db('projects_action as pa')
        .join('actions as a', 'a.id', '=', 'pa.actions_id')
        .join('projects as p', "p.id", "=", "pa.projects_id")
        .select('p.name', 'a.description')
        .where('pa.projects_id', id)
    console.log(actions)
    return {project, actions: [...actions]};
}

function add(project) {
    // passing 'id' as the second parameter is recommended to ensure the id is returned
    // when connecting to other database management systems like Postgres
    return db('projects')
      .insert(project, 'id')
      .then(([id]) => {
        return findById(id);
      });
  }
  