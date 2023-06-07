/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('samples', function(table) {
    table.increments();
    table.float('y');
    table.integer('x1');
    table.integer('x2');
    table.integer('x3');
    table.integer('x4');
  });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('samples');
};
