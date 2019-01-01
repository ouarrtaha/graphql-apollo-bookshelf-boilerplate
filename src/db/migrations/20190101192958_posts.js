
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('posts', function (table){
        table.increments()
        table.string('title')
        table.integer('status')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('posts')
};
