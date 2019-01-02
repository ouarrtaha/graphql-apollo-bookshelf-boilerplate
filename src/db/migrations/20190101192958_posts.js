/* eslint-disable */

exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTableIfNotExists('posts', (table) => {
            table.increments();
            table.string('title');
            table.integer('status');
        }),

        knex.schema.createTableIfNotExists('comments', (table) => {
            table.increments();
            table.string('username');
            table.string('comment');
            table.integer('post_id');
        })
    ])

};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('posts'),
        knex.schema.dropTable('comments')
    ]);
};
