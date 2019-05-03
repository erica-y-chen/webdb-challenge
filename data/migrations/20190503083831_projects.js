
exports.up = function(knex, Promise) {
  
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();

            tbl
                .string('name', 200)
                .notNullable()
                .unique();
            
            tbl.string('description', 2000)
            
            tbl.boolean('is_completed')
                .notNullable()
                .defaultTo(false)

        })
        .createTable('actions', tbl => {
            tbl.increments();
            
            tbl
                .string('description', 1000)
                .notNullable()
            
            tbl.string('notes', 1500)
                .notNullable()
            
            tbl.boolean('is_completed')
                .notNullable()
                .defaultTo(false)

            tbl
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        })

        .createTable('projects_action', tbl => {
            tbl.increments();
            tbl.integer("projects_id")
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            
            tbl.integer("actions_id")
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('actions')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('actions')
        .dropTableIfExists('projects')
        .dropTableIfExists('projects_actions');
};
