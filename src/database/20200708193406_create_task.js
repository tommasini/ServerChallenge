
exports.up = function(knex) {
  return knex.schema.createTable('tasks', function(table) {
    table.increments('id').primary();
    table.enu('state', ['COMPLETE','INCOMPLETE']).notNullable();
    table.string('description').notNullable();
    table.timestamp('created_at').notNullable();
})
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks');
};
