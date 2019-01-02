/* eslint-disable */

exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('posts', (table) => {
    table.increments();
    table.string('title');
    table.integer('status');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('posts');
};
