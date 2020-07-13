exports.up = function (knex) {
  return knex.schema.createTable("tasks", function (table) {
    table.increments("id").primary();
    table.boolean("state").defaultTo(false);
    table.string("description").notNullable();
    table.timestamp("created_at");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tasks");
};
