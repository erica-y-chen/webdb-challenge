
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, 
        name: 'Grow your own herbs', 
        description: 'how to grow your own herb garden at home!', 
        is_completed: false},
        {id: 2, name: 'DIY woodshed',
        description: 'make your own woodshed for all your garden tools!', 
        is_completed: false},

        {id: 3, name: 'Gingerbread House',
        description: 'the best gingerbread house you will ever make!', 
        is_completed: true}
      ]);
    });
};



// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('actions').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('actions').insert([
//         {id: 1, description: 'step 1', notes: 'note 1', project_id: 1},
//         {id: 2, description: 'step 1', notes: 'note 1', project_id: 2},
//         {id: 3, description: 'step 2', notes: 'note 1', project_id: 1}
//       ]);
//     });
// };
